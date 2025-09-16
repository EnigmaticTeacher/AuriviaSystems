import React from 'react';
import { Award, Users, Zap, Target } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'Alex Thompson',
      role: 'CEO & Co-founder',
      bio: 'Former real estate investor with 15 years experience. Built his first automated lead scoring system in 2018.'
    },
    {
      name: 'Dr. Maria Santos',
      role: 'CTO & Co-founder', 
      bio: 'AI/ML expert from Stanford. Previously led data science teams at major prop-tech companies.'
    },
    {
      name: 'David Kim',
      role: 'VP of Product',
      bio: 'Product leader with deep real estate expertise. Former VP at leading CRM and investment platforms.'
    }
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Investor-First',
      description: 'Every feature is designed by investors, for investors. We understand your challenges because we\'ve lived them.'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Cutting-Edge AI',
      description: 'We leverage the latest advances in machine learning to give you superhuman insights into market trends.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Community Driven',
      description: 'Our roadmap is shaped by our community of successful investors who know what really moves the needle.'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Proven Results',
      description: 'Our platform has helped investors close over $2.3B in real estate deals in the last 12 months alone.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Section */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-neutralText mb-6">
            Empowering Real Estate Investors with AI
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-mutedText leading-relaxed mb-8">
              We started as real estate investors frustrated by the time wasted on manual processes. 
              After automating our own operations and seeing 10x growth, we knew we had to share this technology.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">$2.3B+</div>
                <div className="text-mutedText">Deals Closed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-mutedText">Active Investors</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">2019</div>
                <div className="text-mutedText">Founded</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-neutralText text-center mb-12">
            What Drives Us
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex p-4 bg-primary/10 rounded-xl text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h4 className="font-semibold text-neutralText mb-3">
                  {value.title}
                </h4>
                <p className="text-mutedText text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div 
          className="relative rounded-2xl p-12 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(14, 148, 139, 0.1), rgba(217, 169, 75, 0.1)), url('/images/texture.png')`
          }}
        >
          <div className="relative">
            <h3 className="text-2xl font-bold text-neutralText text-center mb-12">
              Meet the Team
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-white/90 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h4 className="font-bold text-neutralText mb-1">
                    {member.name}
                  </h4>
                  <p className="text-primary font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-mutedText text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-neutralText text-center mb-12">
            Our Journey
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                { year: '2019', title: 'Founded', description: 'Started by frustrated real estate investors looking for better tools' },
                { year: '2020', title: 'First AI Models', description: 'Launched predictive lead scoring with 90%+ accuracy' },
                { year: '2022', title: 'Series A', description: 'Raised $15M to accelerate product development and market expansion' },
                { year: '2023', title: 'Major Milestone', description: '$1B+ in deals closed using our platform' },
                { year: '2024', title: 'Advanced AI', description: 'Introduced GPT-powered property analysis and market insights' }
              ].map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    {milestone.year}
                  </div>
                  <div className="flex-1 pb-8">
                    <h4 className="font-bold text-neutralText mb-2">
                      {milestone.title}
                    </h4>
                    <p className="text-mutedText">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;