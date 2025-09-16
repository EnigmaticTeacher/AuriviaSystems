# AI Real Estate Automation Platform

A modern, responsive website for AI-powered real estate investment tools. Built with React, TypeScript, Tailwind CSS, and Supabase.

## 🚀 Features

- **Complete Multi-Page Website**: Home, Solutions, Use Cases, Pricing, About, Blog, Contact
- **Lead Capture & Management**: Supabase-powered lead storage and newsletter subscriptions
- **Responsive Design**: Mobile-first approach with modern UI/UX
- **SEO Optimized**: Meta tags, JSON-LD schema, and semantic HTML
- **Accessible**: ARIA attributes and keyboard navigation
- **Performance Optimized**: Fast loading with modern web standards

## 🛠️ Technology Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Build Tool**: Vite
- **Database**: Supabase (PostgreSQL)
- **Icons**: Lucide React
- **Styling**: Custom design system with light theme
- **Deployment**: Ready for Vercel, Netlify, or similar platforms

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd ai-realestate-platform
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   
   Update the `.env` file with your actual values:
   - `VITE_SUPABASE_URL`: Your Supabase project URL
   - `VITE_SUPABASE_ANON_KEY`: Your Supabase anonymous key
   - `VITE_STRIPE_PUBLISHABLE_KEY`: Your Stripe publishable key (test)
   - `VITE_CALENDLY_URL`: Your Calendly booking URL

4. Set up the database:
   - Run the SQL schema in `supabase/schema.sql` in your Supabase project
   - This creates the leads and newsletter_subscribers tables with proper RLS policies

5. Start the development server:
   ```bash
   npm run dev
   ```

## 🗄️ Database Setup

The platform uses Supabase for data storage. Run the provided SQL schema to create:

- **leads table**: Stores contact form submissions and demo requests
- **newsletter_subscribers table**: Manages email subscriptions
- **RLS policies**: Secure data access with proper permissions
- **Sample data**: Demo leads for development

## 🎨 Design Customization

### Color Palette
The design uses a light theme with the following colors:

```css
--primary: #0E948B (teal)
--accent: #D9A94B (warm gold)
--neutral-text: #263238 (dark slate)
--muted-text: #6B7280 (cool gray)
--background: #FAFBFB (very light gray)
--surface: #FFFFFF (white)
```

### Changing Colors
To change the primary accent color:

1. Update `tailwind.config.js`:
   ```js
   colors: {
     primary: '#YOUR_NEW_COLOR',
   }
   ```

2. Update any hard-coded colors in components if needed

### Replacing Hero Image
To replace the hero background image:

1. Add your image to `/public/images/`
2. Update the `backgroundImage` in `Hero.tsx`
3. Ensure the image is optimized for web (WebP format recommended)

## 🔧 Configuration

### Integrations

**Supabase**: Database and authentication
- Set up your project at [supabase.com](https://supabase.com)
- Run the schema from `supabase/schema.sql`
- Add your project URL and keys to `.env`

**Stripe**: Payment processing (test mode)
- Create account at [stripe.com](https://stripe.com)
- Use test keys for development
- Implement webhook handling for production

**Calendly**: Meeting scheduling
- Set up booking page at [calendly.com](https://calendly.com)
- Add your booking URL to `.env`
- Replace the placeholder widget in Contact.tsx

### Analytics
Add your analytics tracking ID to `.env` and implement tracking code in `index.html`.

## 📱 Mobile Responsiveness

The design is mobile-first with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px  
- Desktop: > 1024px

All components are fully responsive with touch-friendly interactions.

## ⚡ Performance

- Lighthouse score target: 90+ across all metrics
- Optimized images with lazy loading
- Minimal bundle size with tree shaking
- Fast font loading with preconnect

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in the Vercel dashboard
3. Deploy automatically on push to main branch

### Netlify
1. Connect repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add environment variables in site settings

### Manual Build
```bash
npm run build
```
This creates a `dist` folder with static files ready for any hosting provider.

## 🧪 Development

### Available Scripts
- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run lint`: Run ESLint

### Project Structure
```
src/
├── components/          # React components
├── lib/                # Utilities and configuration
├── App.tsx             # Main app component
└── main.tsx           # Entry point

public/
├── images/            # Static images
└── index.html         # HTML template

supabase/
└── schema.sql         # Database schema

serverless/
└── checkout.js        # Stripe integration stub
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For questions or support:
- Email: support@airealestate.com
- Documentation: Check the inline comments in components
- Issues: Create a GitHub issue for bugs or feature requests

---

Built with ❤️ for the real estate investor community.