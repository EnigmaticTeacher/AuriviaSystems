import React, { useState } from 'react';
import { Check, Zap, Crown, Building2 } from 'lucide-react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Starter',
      icon: <Zap className="h-6 w-6" />,
      monthlyPrice: 99,
      annualPrice: 999,
      description: 'Perfect for individual investors getting started',
      features: [
        '500 lead scores per month',
        'Basic property analysis',
        'Email automation templates',
        'Standard integrations',
        'Email support',
        'Basic reporting'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Growth',
      icon: <Crown className="h-6 w-6" />,
      monthlyPrice: 249,
      annualPrice: 2490,
      description: 'For growing investors who need more power',
      features: [
        '2,500 lead scores per month',
        'Advanced property analysis',
        'Complete CRM automation',
        'Premium integrations',
        'Priority support',
        'Advanced dashboards',
        'Custom workflows',
        'API access'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      icon: <Building2 className="h-6 w-6" />,
      monthlyPrice: 499,
      annualPrice: 4990,
      description: 'For large teams and investment firms',
      features: [
        'Unlimited lead scoring',
        'White-label solutions',
        'Custom integrations',
        'Dedicated success manager',
        '24/7 phone support',
        'Advanced security',
        'Team collaboration tools',
        'Custom reporting'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const handleCheckout = (planName: string, price: number) => {
    // This would normally integrate with Stripe
    console.log(`Initiating checkout for ${planName} at $${price}`);
    alert(`Checkout initiated for ${planName} plan. This is a demo - no actual payment will be processed.`);
  };

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutralText mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-mutedText max-w-3xl mx-auto mb-8">
            Choose the plan that fits your investment volume. All plans include a 14-day free trial.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className={`text-sm ${!isAnnual ? 'text-neutralText font-medium' : 'text-mutedText'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-12 h-6 rounded-full transition-colors ${
                isAnnual ? 'bg-primary' : 'bg-gray-300'
              }`}
            >
              <div
                className={`absolute w-5 h-5 bg-white rounded-full top-0.5 transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-0.5'
                }`}
              />
            </button>
            <span className={`text-sm ${isAnnual ? 'text-neutralText font-medium' : 'text-mutedText'}`}>
              Annual
            </span>
            {isAnnual && (
              <span className="bg-accent text-white px-2 py-1 rounded-full text-xs font-medium">
                Save 17%
              </span>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl ${
                plan.popular ? 'ring-2 ring-primary scale-105' : 'hover:scale-102'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <div className={`inline-flex p-3 rounded-lg mb-4 ${
                  plan.popular ? 'bg-primary text-white' : 'bg-gray-100 text-mutedText'
                }`}>
                  {plan.icon}
                </div>
                <h3 className="text-xl font-bold text-neutralText mb-2">
                  {plan.name}
                </h3>
                <p className="text-mutedText text-sm mb-4">
                  {plan.description}
                </p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-neutralText">
                    ${isAnnual ? Math.floor(plan.annualPrice / 12) : plan.monthlyPrice}
                  </span>
                  <span className="text-mutedText">
                    /month
                  </span>
                  {isAnnual && (
                    <div className="text-sm text-mutedText">
                      Billed annually (${plan.annualPrice}/year)
                    </div>
                  )}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-mutedText text-sm">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleCheckout(plan.name, isAnnual ? plan.annualPrice : plan.monthlyPrice)}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                  plan.popular
                    ? 'bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl'
                    : 'bg-gray-100 hover:bg-gray-200 text-neutralText hover:shadow-md'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Enterprise Callout */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-neutralText mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-mutedText mb-6 max-w-2xl mx-auto">
            Enterprise plans include dedicated onboarding, custom integrations, and white-label options. 
            Perfect for large investment firms and franchises.
          </p>
          <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg">
            Contact Sales Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;