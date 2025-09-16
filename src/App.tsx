import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import Solutions from './components/Solutions';
import UseCases from './components/UseCases';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <Benefits />
        <HowItWorks />
        <Solutions />
        <UseCases />
        <Testimonials />
        <Pricing />
        <About />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;