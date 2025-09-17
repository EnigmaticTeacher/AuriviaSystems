import React from 'react';
import { Database, Settings, Send, BarChart3 } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: <Database className="h-8 w-8" />,
      title: 'Connect Data',
      description: 'Integrate your CRM and lead sources for unified data management.'
    },
    {
      number: '02',
      icon: <Settings className="h-8 w-8" />,
      title: 'Train & Score',
      description: 'AI learns from your successful deals to score new leads and opportunities.'
    },
    {
      number: '03',
      icon: <Send className="h-8 w-8" />,
      title: 'Automate Outreach',
      description: 'Personalized campaigns engage prospects with the right message at the right time.'
    },
    {
      number: '04',
      icon: <BarChart3 className="h-8 w-8" />,
      title: 'Monitor & Optimize',
      description: 'Track performance and continuously improve your investment strategy.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutralText mb-4">
            How It Works
          </h2>
          <p className="text-xl text-mutedText max-w-2xl mx-auto">
            Get up and running in minutes with our streamlined onboarding process
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-8">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">
                    {step.icon}
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{step.number}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-neutralText mb-4">
                {step.title}
              </h3>
              <p className="text-mutedText leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;