import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "This AI platform transformed how we evaluate leads. We're closing 32% more deals with half the manual work.",
      author: "Sarah Chen",
      role: "Investment Director",
      company: "Pacific Real Estate Group",
      rating: 5,
      metric: "32% more deals closed"
    },
    {
      quote: "The automated property analysis saves us 15 hours per week. The accuracy is incredible - better than our old manual process.",
      author: "Marcus Rodriguez",
      role: "Portfolio Manager",
      company: "Urban Investments LLC",
      rating: 5,
      metric: "15 hours saved weekly"
    },
    {
      quote: "ROI became measurable immediately. The lead scoring alone has increased our conversion rate by 45%.",
      author: "Jennifer Walsh",
      role: "Founder",
      company: "Walsh Properties",
      rating: 5,
      metric: "45% higher conversions"
    }
  ];

  const metrics = [
    { label: 'Avg faster lead qualification', value: '32%' },
    { label: 'Monthly hours saved', value: '60+' },
    { label: 'Investment accuracy improvement', value: '28%' },
    { label: 'Customer satisfaction score', value: '4.8/5' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Testimonial Carousel */}
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold text-neutralText mb-8">
              Trusted by Smart Investors
            </h2>
            
            <div className="relative bg-white rounded-2xl shadow-lg p-8 min-h-[300px]">
              <div className="flex mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-lg text-neutralText mb-6 leading-relaxed">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-neutralText">
                    {testimonials[currentIndex].author}
                  </div>
                  <div className="text-mutedText text-sm">
                    {testimonials[currentIndex].role}
                  </div>
                  <div className="text-mutedText text-sm">
                    {testimonials[currentIndex].company}
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">
                    {testimonials[currentIndex].metric}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-6">
              <button
                onClick={goToPrevious}
                className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
              >
                <ChevronLeft className="h-6 w-6 text-mutedText" />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={goToNext}
                className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
              >
                <ChevronRight className="h-6 w-6 text-mutedText" />
              </button>
            </div>
          </div>

          {/* Metrics Panel */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-neutralText mb-8">
              Real Results from Real Investors
            </h3>
            
            {metrics.map((metric, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-center">
                  <span className="text-mutedText font-medium">
                    {metric.label}
                  </span>
                  <span className="text-3xl font-bold text-primary">
                    {metric.value}
                  </span>
                </div>
              </div>
            ))}
            
            <div className="bg-primary/10 rounded-xl p-6">
              <p className="text-primary font-medium text-center">
                Join 500+ investors already using AI automation to scale their portfolios
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;