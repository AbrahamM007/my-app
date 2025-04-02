import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';
import sanitizaiLogo from '../logo.svg';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/" className="logo-wrapper">
            <div className="logo-inner">
              <img src={sanitizaiLogo} alt="Logo" />
            </div>
          </a>
        </div>

        <div className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a 
                href="/" 
                className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                onClick={() => setActiveSection('home')}
              >
                <span className="nav-text">Home</span>
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="/about" 
                className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                onClick={() => setActiveSection('about')}
              >
                <span className="nav-text">About</span>
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="/services" 
                className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}
                onClick={() => setActiveSection('services')}
              >
                <span className="nav-text">Services</span>
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="/blog" 
                className={`nav-link ${activeSection === 'blog' ? 'active' : ''}`}
                onClick={() => setActiveSection('blog')}
              >
                <span className="nav-text">Blog</span>
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="/contact" 
                className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                onClick={() => setActiveSection('contact')}
              >
                <span className="nav-text">Contact</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="navbar-actions">
          <a href="/contact" className="contact-btn">
            <span className="btn-text">Get a Quote</span>
            <span className="btn-icon">→</span>
          </a>
          <button 
            className={`mobile-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;