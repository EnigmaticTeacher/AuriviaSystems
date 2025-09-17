import React from 'react';
import { Award, Users, Zap, Target } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'Alex Thompson',
      role: 'CEO & Co-founder',
      bio: 'Former business owner with 15 years experience. Built his first automated customer support system in 2023.'
    },
    {
      name: 'Dr. Maria Santos',
      role: 'CTO & Co-founder', 
      bio: 'AI/ML expert from Stanford. Previously led data science teams at major tech companies.'
    },
    {
      name: 'David Kim',
      role: 'VP of Product',
      bio: 'Product leader with deep business automation expertise. Former VP at leading CRM and automation platforms.'
    }
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Business-First',
      description: 'Every feature is designed by business owners, for business owners. We understand your challenges because we\'ve lived them.'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Cutting-Edge AI',
      description: 'We leverage the latest advances in machine learning to give you superhuman insights into market trends.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Community Driven',
      description: 'Our roadmap is shaped by our community of successful business owners who know what really moves the needle.'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Proven Results',
      description: 'Our platform has helped businesses generate over $23M in revenue in the last 12 months alone.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Section */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-neutralText mb-6">
            Empowering Businesses with AI
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-mutedText leading-relaxed mb-8">
              We started as business owners frustrated by the time wasted on manual processes. 
              After automating our own operations and seeing 8x growth, we knew we had to share this technology.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">$23M+</div>
                <div className="text-mutedText">Revenue Generated</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">87+</div>
                <div className="text-mutedText">Active Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">2025</div>
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

      </div>
    </section>
  );
};

export default About;