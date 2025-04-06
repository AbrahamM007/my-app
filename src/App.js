import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutQuote from './components/AboutQuote';
import WhyChooseUs from './components/WhyChooseUs';
import RecentProjects from './components/RecentProjects';
import PricingPlan from './components/PricingPlan';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

// Home page component with all sections in the specified order
function HomePage() {
  return (
    <>
      <Hero />
      <AboutQuote />
      <WhyChooseUs />
      <RecentProjects />
      <PricingPlan />
      <CallToAction />
    </>
  );
}

export default App;
