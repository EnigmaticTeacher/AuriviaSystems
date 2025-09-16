import React from 'react';
import { Building, Home, Hammer, Users } from 'lucide-react';

const UseCases = () => {
  const investorTypes = [
    {
      icon: <Building className="h-8 w-8" />,
      type: 'Wholesalers',
      scenario: 'Finding and flipping contracts quickly',
      painPoints: [
        'Manual lead qualification takes too long',
        'Missing hot opportunities due to slow response',
        'Difficulty scaling outreach efforts'
      ],
      features: [
        'Lightning-fast lead scoring',
        'Automated initial outreach',
        'Real-time market alerts'
      ],
      benefit: '3x faster deal identification'
    },
    {
      icon: <Home className="h-8 w-8" />,
      type: 'Buy & Hold',
      scenario: 'Building a profitable rental portfolio',
      painPoints: [
        'Complex cash flow calculations',
        'Market analysis takes hours',
        'Portfolio tracking becomes overwhelming'
      ],
      features: [
        'Automated NOI calculations',
        'Market trend analysis',
        'Portfolio performance dashboards'
      ],
      benefit: '60% better investment decisions'
    },
    {
      icon: <Hammer className="h-8 w-8" />,
      type: 'Fix & Flip',
      scenario: 'Maximizing profits on renovation projects',
      painPoints: [
        'ARV estimation inconsistencies',
        'Renovation cost overruns',
        'Market timing challenges'
      ],
      features: [
        'AI-powered ARV predictions',
        'Cost estimation tools',
        'Market timing insights'
      ],
      benefit: '25% higher profit margins'
    },
    {
      icon: <Users className="h-8 w-8" />,
      type: 'Syndicators',
      scenario: 'Managing large investor groups and deals',
      painPoints: [
        'Investor communication at scale',
        'Deal flow management complexity',
        'Performance reporting overhead'
      ],
      features: [
        'Automated investor updates',
        'Deal pipeline automation',
        'Custom reporting dashboards'
      ],
      benefit: '10x scalable operations'
    }
  ];

  return (
    <section id="use-cases" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutralText mb-4">
            Built for Every Type of Real Estate Investor
          </h2>
          <p className="text-xl text-mutedText max-w-3xl mx-auto">
            Whether you're just starting or managing a large portfolio, our AI adapts to your investment strategy
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {investorTypes.map((investor, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start mb-6">
                <div className="p-3 bg-primary/10 rounded-lg text-primary mr-4">
                  {investor.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutralText mb-2">
                    {investor.type}
                  </h3>
                  <p className="text-mutedText italic">
                    {investor.scenario}
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {/* Pain Points */}
                <div>
                  <h4 className="font-semibold text-neutralText mb-3">Common Challenges:</h4>
                  <ul className="space-y-2">
                    {investor.painPoints.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start text-sm text-mutedText">
                        <div className="w-1.5 h-1.5 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solution Features */}
                <div>
                  <h4 className="font-semibold text-neutralText mb-3">AI Solutions:</h4>
                  <ul className="space-y-2">
                    {investor.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-mutedText">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefit */}
                <div className="bg-accent/10 p-4 rounded-lg">
                  <p className="text-accent font-semibold text-sm">
                    💡 Result: {investor.benefit}
                  </p>
                </div>

                {/* CTA */}
                <button className="w-full bg-primary hover:bg-primary/90 text-white py-3 px-6 rounded-lg font-medium transition-all duration-200 hover:shadow-md">
                  Book a 15-minute walkthrough
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;