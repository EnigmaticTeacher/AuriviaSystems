import React, { useState } from 'react';
import { Clock, User, ArrowRight, Tag } from 'lucide-react';

const Blog = () => {
  const [selectedTag, setSelectedTag] = useState('All');

  const tags = ['All', 'AI', 'Property Valuation', 'Automation', 'Case Studies', 'Market Trends'];

  const posts = [
    {
      title: 'How AI Lead Scoring Increased Our Deal Flow by 300%',
      excerpt: 'Learn how top investors are using predictive analytics to identify high-potential leads before their competitors.',
      readTime: '5 min read',
      date: 'August 15, 2025',
      tags: ['AI', 'Case Studies'],
      image: '/images/hero-inspiration.png',
      featured: true
    },
    {
      title: 'The Future of Property Valuation: Beyond Traditional Comps',
      excerpt: 'Discover how machine learning models are revolutionizing property analysis with unprecedented accuracy.',
      readTime: '7 min read',
      date: 'July 12, 2025',
      tags: ['Property Valuation', 'AI'],
      image: '/images/texture.png',
      featured: false
    },
    {
      title: 'Automating Your Real Estate Outreach: A Complete Guide',
      excerpt: 'Step-by-step guide to setting up automated campaigns that convert 40% better than manual outreach.',
      readTime: '6 min read',
      date: 'June 10, 2025',
      tags: ['Automation', 'Case Studies'],
      image: '/images/hero-inspiration.png',
      featured: false
    },
    {
      title: '2024 Real Estate Market Predictions Using AI Analytics',
      excerpt: 'Our AI models predict market trends for the coming year. What should investors watch for?',
      readTime: '8 min read',
      date: 'May 8, 2025',
      tags: ['Market Trends', 'AI'],
      image: '/images/texture.png',
      featured: false
    },
    {
      title: 'Case Study: How One Investor Scaled to 100 Properties',
      excerpt: 'From 5 to 100 properties in 18 months using AI automation. Here\'s exactly how they did it.',
      readTime: '10 min read',
      date: 'April 5, 2025',
      tags: ['Case Studies'],
      image: '/images/hero-inspiration.png',
      featured: false
    },
    {
      title: 'Building Your First Automated Property Analysis System',
      excerpt: 'Technical deep-dive into setting up automated property evaluation workflows that save 20+ hours per week.',
      readTime: '12 min read',
      date: 'March 3, 2025',
      tags: ['Automation', 'Property Valuation'],
      image: '/images/texture.png',
      featured: false
    }
  ];

  const filteredPosts = selectedTag === 'All' 
    ? posts 
    : posts.filter(post => post.tags.includes(selectedTag));

  const featuredPost = posts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutralText mb-4">
            Real Estate AI Insights
          </h2>
          <p className="text-xl text-mutedText max-w-3xl mx-auto">
            Learn from successful investors and stay ahead of market trends with our expert analysis
          </p>
        </div>

        {/* Tag Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedTag === tag
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-mutedText hover:bg-gray-100 shadow-sm'
              }`}
            >
              <Tag className="inline w-4 h-4 mr-2" />
              {tag}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        {featuredPost && selectedTag === 'All' && (
          <div className="mb-16">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div 
                    className="h-64 md:h-full bg-cover bg-center"
                    style={{ backgroundImage: `url('${featuredPost.image}')` }}
                  ></div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                      Featured
                    </span>
                    {featuredPost.tags.map((tag) => (
                      <span key={tag} className="bg-gray-100 text-mutedText px-3 py-1 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold text-neutralText mb-4 hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h3>
                  <p className="text-mutedText mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-mutedText">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {featuredPost.readTime}
                      </div>
                      <span>{featuredPost.date}</span>
                    </div>
                    <button className="text-primary font-medium flex items-center hover:translate-x-1 transition-transform">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div 
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url('${post.image}')` }}
              ></div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.map((tag) => (
                    <span key={tag} className="bg-gray-100 text-mutedText px-2 py-1 rounded-md text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg font-bold text-neutralText mb-3 hover:text-primary transition-colors cursor-pointer">
                  {post.title}
                </h3>
                <p className="text-mutedText mb-4 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-mutedText">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <span>{post.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-neutralText mb-4">
            Stay Ahead of the Market
          </h3>
          <p className="text-mutedText mb-6 max-w-2xl mx-auto">
            Get weekly insights on AI automation, market trends, and real estate investment strategies delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
