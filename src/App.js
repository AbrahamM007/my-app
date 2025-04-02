import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutQuote from './components/AboutQuote';
import Services from './components/Services';
import RecentProjects from './components/RecentProjects';
import WhyChooseUs from './components/WhyChooseUs';
import PricingPlan from './components/PricingPlan';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutQuote />
      <Services />
      <RecentProjects />
      <WhyChooseUs />
      <PricingPlan />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
