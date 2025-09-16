import React from 'react';
import { TrendingUp, Brain, Zap, ArrowRight } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Faster Deals',
      description: 'AI-powered lead scoring identifies high-potential opportunities, cutting qualification time by 60%.',
      cta: 'Learn how'
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: 'Smarter Valuations',
      description: 'Automated property analysis with accurate comps and NOI calculations for better investment decisions.',
      cta: 'See features'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Repeatable Outreach',
      description: 'Campaign automation ensures consistent follow-up with personalized messaging at scale.',
      cta: 'View templates'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutralText mb-4">
            Why Smart Investors Choose AI Automation
          </h2>
          <p className="text-xl text-mutedText max-w-3xl mx-auto">
            Transform your investment workflow with intelligent automation that scales with your portfolio
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-neutralText mb-4">
                {benefit.title}
              </h3>
              <p className="text-mutedText mb-6 leading-relaxed">
                {benefit.description}
              </p>
              <button className="text-primary font-medium flex items-center group-hover:translate-x-2 transition-transform duration-300">
                {benefit.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;