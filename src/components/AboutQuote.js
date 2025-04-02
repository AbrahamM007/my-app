import React from 'react';
import '../styles/AboutQuote.css';
import cleaningTools from '../assets/cleaning-tools.png'; // Import the image from assets folder

function AboutQuote() {
  return (
    <div className="about-quote-container">
      <div className="about-quote-content">
        <div className="cleaning-tools">
          <img src={cleaningTools} alt="Cleaning Tools" className="cleaning-tool" />
        </div>
        
        <div className="quote-text">
          <h2 className="quote">
            "Sanitizai delivers professional office cleaning services designed to <span className="highlight">keep your workspace spotless, healthy, and productive.</span>"
          </h2>
          
          <a href="/about" className="about-button">
            More About Us <span className="arrow"></span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutQuote;