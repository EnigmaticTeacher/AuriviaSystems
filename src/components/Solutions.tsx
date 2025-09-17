import React, { useState } from 'react';
import { Users, Home, Brain, BarChart3, Bell } from 'lucide-react';

const Solutions = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: <Users className="h-6 w-6" />,
      title: 'AI Customer Support',
      description: 'AI-powered customer support with predictive responses based on your historical success patterns.',
      details: {
        points: [
          'Automatic customer inquiry handling from multiple sources',
          'Predictive responses with 92%+ accuracy',
          'Real-time customer prioritization',
          'Custom support models for your business'
        ],
        mockData: {
          title: 'Customer Support Dashboard',
          metrics: [
            { label: 'High Priority Tickets', value: '23', color: 'text-green-600' },
            { label: 'Total Inquiries Today', value: '147', color: 'text-primary' },
            { label: 'Resolution Rate', value: '18.5%', color: 'text-accent' }
          ]
        }
      }
    },
    {
      icon: <Home className="h-6 w-6" />,
      title: 'Code Reviews & Auto Patches',
      description: 'Automated code analysis, reviews, and patches for faster development decisions.',
      details: {
        points: [
          'Instant code quality analysis',
          'Automated patch generation',
          'Development trend insights',
          'Code risk assessment'
        ],
        mockData: {
          title: 'Code Analysis',
          metrics: [
            { label: 'Code Quality', value: '92%', color: 'text-primary' },
            { label: 'Patches Applied', value: '47', color: 'text-green-600' },
            { label: 'Efficiency Gain', value: '18.5%', color: 'text-accent' }
          ]
        }
      }
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: 'Website Design',
      description: 'Smart design workflows that create and maintain websites automatically.',
      details: {
        points: [
          'Automated design sequences',
          'Personalized website templates',
          'Project pipeline management',
          'Client relationship mapping'
        ],
        mockData: {
          title: 'Design Status',
          metrics: [
            { label: 'Active Projects', value: '12', color: 'text-primary' },
            { label: 'Designs Created', value: '1,247', color: 'text-accent' },
            { label: 'Client Satisfaction', value: '94%', color: 'text-green-600' }
          ]
        }
      }
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: 'AI Ad Creatives',
      description: 'Comprehensive ad creation and optimization for your entire marketing portfolio.',
      details: {
        points: [
          'Ad performance tracking',
          'Market trend analysis',
          'Revenue forecasting',
          'Creative opportunity alerts'
        ],
        mockData: {
          title: 'Ad Creative Overview',
          metrics: [
            { label: 'Active Campaigns', value: '47', color: 'text-primary' },
            { label: 'Monthly Revenue', value: '$24.3K', color: 'text-green-600' },
            { label: 'Campaign Growth', value: '+12.8%', color: 'text-accent' }
          ]
        }
      }
    },
    {
      icon: <Bell className="h-6 w-6" />,
      title: 'Automated Outreach',
      description: 'Never miss an opportunity with intelligent outreach and communication management.',
      details: {
        points: [
          'Real-time outreach alerts',
          'Communication stage automation',
          'Follow-up reminders',
          'Engagement opportunity notifications'
        ],
        mockData: {
          title: 'Active Outreach',
          metrics: [
            { label: 'Hot Prospects', value: '8', color: 'text-red-500' },
            { label: 'Under Review', value: '23', color: 'text-accent' },
            { label: 'Converting Soon', value: '5', color: 'text-green-600' }
          ]
        }
      }
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutralText mb-4">
            Complete AI Solution for Business Automation
          </h2>
          <p className="text-xl text-mutedText max-w-3xl mx-auto">
            Every tool you need to automate your business workflow and scale your operations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Feature List */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                  activeFeature === index
                    ? 'border-primary bg-primary/5 shadow-lg'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg ${
                    activeFeature === index ? 'bg-primary text-white' : 'bg-gray-100 text-mutedText'
                  }`}>
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-neutralText mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-mutedText mb-4">
                      {feature.description}
                    </p>
                    {activeFeature === index && (
                      <ul className="space-y-2">
                        {feature.details.points.map((point, pointIndex) => (
                          <li key={pointIndex} className="flex items-center text-sm text-mutedText">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Demo */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-8">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-neutralText mb-2">
                  {features[activeFeature].details.mockData.title}
                </h3>
                <div className="w-16 h-1 bg-primary rounded-full"></div>
              </div>

              <div className="space-y-6">
                {features[activeFeature].details.mockData.metrics.map((metric, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="text-mutedText font-medium">{metric.label}</span>
                    <span className={`text-2xl font-bold ${metric.color}`}>
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-primary/5 rounded-lg">
                <p className="text-sm text-primary font-medium">
                  ✨ Live Demo: This data updates in real-time as your business grows
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;