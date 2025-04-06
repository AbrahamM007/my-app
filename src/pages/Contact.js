import React from 'react';
import '../styles/Pages.css';

function Contact() {
  return (
    <div className="page-container">
      <div className="page-hero">
        <div className="hero-content">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">Get in touch with our team</p>
        </div>
        <div className="hero-background">
          <div className="hero-glow"></div>
          <div className="hero-particles">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      
      <section className="content-section">
        <div className="section-container">
          <div className="contact-grid">
            <div className="contact-info">
              <div className="section-header">
                <h2>Get In Touch</h2>
                <div className="section-divider"></div>
              </div>
              <p>We'd love to hear from you. Fill out the form and we'll get back to you as soon as possible.</p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div className="contact-text">
                    <h4>Address</h4>
                    <p>123 Business Avenue, Suite 100, San Francisco, CA 94107</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">📞</div>
                  <div className="contact-text">
                    <h4>Phone</h4>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">✉️</div>
                  <div className="contact-text">
                    <h4>Email</h4>
                    <p>info@yourcompany.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-form-container">
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" placeholder="Your name" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="Your email" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" placeholder="Subject" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="5" placeholder="Your message" required></textarea>
                </div>
                
                <button type="submit" className="submit-btn">
                  <span className="btn-text">Send Message</span>
                  <span className="btn-icon">→</span>
                  <div className="btn-particles">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;