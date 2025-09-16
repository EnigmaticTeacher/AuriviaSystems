/**
 * Stripe Checkout Integration
 * 
 * This is a stub implementation for handling Stripe checkout sessions.
 * In a production environment, this would be deployed as a serverless function
 * (Vercel Functions, Netlify Functions, or similar) to handle payment processing securely.
 */

// Example implementation for a serverless function
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// Product configuration mapping
const PRODUCTS = {
  starter: {
    monthly: 'price_starter_monthly', // Replace with actual Stripe price IDs
    annual: 'price_starter_annual'
  },
  growth: {
    monthly: 'price_growth_monthly',
    annual: 'price_growth_annual'
  },
  enterprise: {
    monthly: 'price_enterprise_monthly', 
    annual: 'price_enterprise_annual'
  }
};

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { plan, billing, email, leadId } = req.body;

    // Validate input
    if (!PRODUCTS[plan] || !PRODUCTS[plan][billing]) {
      return res.status(400).json({ error: 'Invalid plan or billing cycle' });
    }

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price: PRODUCTS[plan][billing],
        quantity: 1,
      }],
      mode: 'subscription',
      success_url: `${process.env.FRONTEND_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.FRONTEND_URL}/pricing`,
      customer_email: email,
      metadata: {
        plan,
        billing,
        leadId: leadId || null
      }
    });

    // Store checkout session info in database
    if (email) {
      await supabase
        .from('leads')
        .upsert({
          email,
          checkout_session_id: session.id,
          plan,
          billing_cycle: billing,
          checkout_created_at: new Date().toISOString()
        }, { onConflict: 'email' });
    }

    res.status(200).json({ 
      checkoutUrl: session.url,
      sessionId: session.id
    });
  } catch (error) {
    console.error('Checkout error:', error);
    res.status(500).json({ 
      error: 'Failed to create checkout session',
      details: error.message 
    });
  }
};

// Webhook handler for successful payments
const handleWebhook = async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the checkout.session.completed event
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    
    // Update lead with successful purchase
    await supabase
      .from('leads')
      .update({
        subscription_status: 'active',
        stripe_customer_id: session.customer,
        subscription_id: session.subscription,
        purchased_at: new Date().toISOString()
      })
      .eq('checkout_session_id', session.id);
    
    // Send welcome email (implement email service integration)
    // await sendWelcomeEmail(session.customer_email);
  }

  res.json({ received: true });
};

module.exports.webhook = handleWebhook;