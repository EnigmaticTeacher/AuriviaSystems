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
                Welcome to{' '}
                <span className="text-primary">Aurivia</span>
              </h1>
              <p className="text-xl text-mutedText leading-relaxed max-w-2xl">
                The core of adaptive AI infrastructure suited to tailor your autonomous decisions. 
                Spend less time on data and more time closing deals.
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
                View Pricing
              </button>

            </div>

          </div>

          {/* Right Column - Lead Capture Form */}
          <div className="lg:pl-8">
            <LeadCaptureForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;