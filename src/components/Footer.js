import React from 'react';
import '../styles/Footer.css';
import sanitizaiLogo from '../logo.svg' // Import the logo

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={sanitizaiLogo} alt="Sanitizai Logo" />
            <h2>Sanitizai</h2>
          </div>
          <p className="footer-description">
            Sanitizai delivers reliable, professional cleaning services for spotless, healthy spaces.
          </p>
          <div className="social-links">
            <a href="https://facebook.com" className="social-link">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://instagram.com" className="social-link">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com" className="social-link">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" className="social-link">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        
        <div className="footer-nav">
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li><a href="/home"><span className="arrow">→</span> Home</a></li>
              <li><a href="/about"><span className="arrow">→</span> About Us</a></li>
              <li><a href="/services"><span className="arrow">→</span> Services</a></li>
              <li><a href="/projects"><span className="arrow">→</span> Projects</a></li>
              <li><a href="/blogs"><span className="arrow">→</span> Blogs</a></li>
              <li><a href="/contact"><span className="arrow">→</span> Contact Us</a></li>
              <li><a href="/pricing"><span className="arrow">→</span> Pricing</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Others</h3>
            <ul>
              <li><a href="/service-single"><span className="arrow">→</span> Service Single</a></li>
              <li><a href="/project-single"><span className="arrow">→</span> Project Single</a></li>
              <li><a href="/blog-single"><span className="arrow">→</span> Blog Single</a></li>
              <li><a href="/pricing-single"><span className="arrow">→</span> Pricing Single</a></li>
              <li><a href="/team-single"><span className="arrow">→</span> Team Single</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Contacts</h3>
            <ul>
              <li><a href="tel:+18802256987"><span className="arrow">→</span> (+880) 2256 98755</a></li>
              <li><a href="mailto:sanitizaihelp@gmail.com"><span className="arrow">→</span> sanitizaihelp@gmail.com</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-column utility">
          <h3>Utility Pages</h3>
          <ul>
            <li><a href="/style-guide"><span className="arrow">→</span> Style Guide</a></li>
            <li><a href="/protected-password"><span className="arrow">→</span> Protected Password</a></li>
            <li><a href="/404"><span className="arrow">→</span> 404 Not Found</a></li>
            <li><a href="/license"><span className="arrow">→</span> License</a></li>
            <li><a href="/changelog"><span className="arrow">→</span> Changelog</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-divider"></div>
      
      {/* <div className="footer-bottom">
        <p className="copyright">
          © Copyright - <a href="/">Sanitizai</a> Designed by <a href="https://flowzai.com">Flowzai</a> | <a href="/license">License</a> Powered by <a href="https://webflow.com">Webflow</a>
        </p>
      </div> */}
    </footer>
  );
}

export default Footer;