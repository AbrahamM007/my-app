import React from 'react';
import '../styles/CallToAction.css';
import cleanerImage from '../assets/cleaner-woman.png'; // Import the image of the cleaning professional

function CallToAction() {
  return (
    <div className="cta-container">
      <div className="cta-content">
        <div className="cta-image">
          <img src={cleanerImage} alt="Professional Cleaner" />
        </div>
        
        <div className="cta-text">
          <h2 className="cta-title">
            Reach Out Today for <br />
            a Sparkling Clean!
          </h2>
          <p className="cta-description">
            Contact Sanitizai today for a spotless, refreshed workspace.
            <br />A sparkling clean is just a step away!
          </p>
          <a href="/contact" className="contact-button">
            Contact Us <span className="arrow">→</span>
          </a>
        </div>
        
        <div className="sparkle top-left"></div>
        <div className="sparkle top-right"></div>
        <div className="sparkle bottom-right"></div>
      </div>
    </div>
  );
}

export default CallToAction;