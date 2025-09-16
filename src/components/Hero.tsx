import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import LeadCaptureForm from './LeadCaptureForm';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const trustLogos = ['Supabase', 'Stripe', 'Calendly', 'Zillow', 'MLS'];

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-background to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"></div>
      <div 
        className="absolute right-0 top-0 w-1/2 h-full bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url('/images/hero-inspiration.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-neutralText leading-tight">
                AI Automation for{' '}
                <span className="text-primary">Real Estate</span>{' '}
                Investors
              </h1>
              <p className="text-xl text-mutedText leading-relaxed max-w-2xl">
                Automate lead scoring, property analysis, outreach, and portfolio insights — 
                spend less time on data, more time closing deals.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('#contact')}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center group"
              >
                Get a Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('#pricing')}
                className="border border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:shadow-lg flex items-center justify-center group"
              >
                <Play className="mr-2 h-5 w-5" />
                View Pricing
              </button>
            </div>

            {/* Trust Bar */}
            <div className="pt-8">
              <p className="text-sm text-mutedText mb-4">Trusted integrations with:</p>
              <div className="flex flex-wrap gap-6 items-center opacity-70">
                {trustLogos.map((logo) => (
                  <div key={logo} className="text-mutedText font-medium text-sm bg-white px-3 py-2 rounded-md shadow-sm">
                    {logo}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Lead Capture Form */}
          <div className="lg:pl-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-neutralText mb-2">
                  Get Started Today
                </h3>
                <p className="text-mutedText">
                  See how AI automation can transform your real estate business
                </p>
              </div>
              <LeadCaptureForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;