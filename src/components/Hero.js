import React from 'react';
import '../styles/Hero.css';
// IMPORTANT: Update the path below to point to your actual image file location
import heroImage from '../assets/cleaning-professionals.jpg';
import { FaPhone, FaEnvelope, FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="cleaning-hero">
      {/* Background elements */}
      <div className="hero-background">
        <div className="bg-gradient"></div>
        <div className="bg-dots"></div>
        <div className="bg-shapes"></div>
      </div>

      <div className="hero-container">
        <div className="hero-title-section">
          <h1 className="hero-title">
            Professional <span className="highlight">Cleaning</span>
            <br />You Can Rely On.
          </h1>
          <p className="hero-description">
            Keep your workplace spotless and welcoming with our trusted,
            top-notch office cleaning services.
          </p>
        </div>

        <div className="hero-contact-row">
          <div className="contact-item service-label">
            <span className="contact-text">Get Our Service</span>
          </div>
          
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <span className="contact-text">(+880) 2256 98755</span>
          </div>
          
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <span className="contact-text">sanitizaihelp@gmail.com</span>
          </div>
          
          <div className="contact-item button-container">
            <a href="#services" className="our-services-button">
              Our Services <FaArrowRight className="arrow-icon" />
            </a>
          </div>
        </div>

        <div className="hero-image-container">
          <div className="image-overlay"></div>
          <img src={heroImage} alt="Professional cleaning team working in an office" />
        </div>
      </div>
    </div>
  );
};

export default Hero;