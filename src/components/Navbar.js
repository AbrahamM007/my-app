import React, { useState, useEffect, useRef } from 'react';
import '../styles/Navbar.css';
import sanitizaiLogo from '../logo.svg';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navbarRef = useRef(null);

  // Track mouse position for magnetic effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (navbarRef.current) {
        const rect = navbarRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

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

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMobileMenuOpen && !e.target.closest('.navbar-menu') && !e.target.closest('.mobile-toggle')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Magnetic effect for nav items
  const handleNavItemMouseMove = (e, index) => {
    const navItem = e.currentTarget;
    const rect = navItem.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const deltaX = (x - centerX) / centerX;
    const deltaY = (y - centerY) / centerY;
    
    navItem.style.transform = `translate3d(${deltaX * 10}px, ${deltaY * 10}px, 0) scale(1.05)`;
  };
  
  const handleNavItemMouseLeave = (e) => {
    e.currentTarget.style.transform = 'translate3d(0, 0, 0) scale(1)';
  };
  const location = useLocation();
  
  // Update activeSection based on current path
  useEffect(() => {
    const path = location.pathname;
    if (path === '/') setActiveSection('home');
    else if (path === '/about') setActiveSection('about');
    else if (path === '/services') setActiveSection('services');
    else if (path === '/blog') setActiveSection('blog');
    else if (path === '/contact') setActiveSection('contact');
  }, [location]);

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} ref={navbarRef}>
        <div className="navbar-container">
          <div className="navbar-logo">
            <Link to="/" className="logo-wrapper">
              <div className="logo-inner">
                <img src={sanitizaiLogo} alt="Logo" />
              </div>
              <div className="logo-glow"></div>
            </Link>
          </div>

          <div className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <div className="menu-backdrop"></div>
            <ul className="navbar-nav">
              <li 
                className="nav-item"
                onMouseMove={(e) => handleNavItemMouseMove(e, 0)}
                onMouseLeave={handleNavItemMouseLeave}
              >
                <Link 
                  to="/" 
                  className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                  onClick={() => {
                    setActiveSection('home');
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <span className="nav-text">Home</span>
                  <span className="nav-indicator"></span>
                </Link>
              </li>
              
              {/* Replace other <a> tags with <Link> components similarly */}
              <li 
                className="nav-item"
                onMouseMove={(e) => handleNavItemMouseMove(e, 1)}
                onMouseLeave={handleNavItemMouseLeave}
              >
                <Link 
                  to="/about" 
                  className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                  onClick={() => {
                    setActiveSection('about');
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <span className="nav-text">About</span>
                  <span className="nav-indicator"></span>
                </Link>
              </li>
              
              <li 
                className="nav-item"
                onMouseMove={(e) => handleNavItemMouseMove(e, 2)}
                onMouseLeave={handleNavItemMouseLeave}
              >
                <Link 
                  to="/services" 
                  className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}
                  onClick={() => {
                    setActiveSection('services');
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <span className="nav-text">Services</span>
                  <span className="nav-indicator"></span>
                </Link>
              </li>
              
              <li 
                className="nav-item"
                onMouseMove={(e) => handleNavItemMouseMove(e, 3)}
                onMouseLeave={handleNavItemMouseLeave}
              >
                <Link 
                  to="/blog" 
                  className={`nav-link ${activeSection === 'blog' ? 'active' : ''}`}
                  onClick={() => {
                    setActiveSection('blog');
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <span className="nav-text">Blog</span>
                  <span className="nav-indicator"></span>
                </Link>
              </li>
              
              <li 
                className="nav-item"
                onMouseMove={(e) => handleNavItemMouseMove(e, 4)}
                onMouseLeave={handleNavItemMouseLeave}
              >
                <Link 
                  to="/contact" 
                  className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                  onClick={() => {
                    setActiveSection('contact');
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <span className="nav-text">Contact</span>
                  <span className="nav-indicator"></span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="navbar-actions">
            <Link to="/contact" className="contact-btn">
              <span className="btn-text">Get a Quote</span>
              <span className="btn-icon">→</span>
              <div className="btn-particles">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="btn-glow"></div>
            </Link>
            
            {/* Mobile toggle button remains unchanged */}
          </div>
        </div>
        <div className="navbar-highlight" style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`
        }}></div>
      </nav>
      
      <div 
        className={`navbar-overlay ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>
    </>
  );
}

export default Navbar;


// Add this function to your Navbar component
const toggleMobileMenu = () => {
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navbarMenu = document.querySelector('.navbar-menu');
  const navbarOverlay = document.querySelector('.navbar-overlay');
  
  mobileToggle.classList.toggle('active');
  navbarMenu.classList.toggle('active');
  navbarOverlay.classList.toggle('active');
}

// Then in your JSX, make sure your mobile toggle has an onClick handler:
// <button className="mobile-toggle" onClick={toggleMobileMenu}>
//   <div className="hamburger">
//     <span></span>
//     <span></span>
//     <span></span>
//   </div>
// </button>