import React from 'react';
import '../styles/Pages.css';

function About() {
  return (
    <div className="page-container">
      <div className="page-hero">
        <div className="hero-content">
          <h1 className="page-title">About Us</h1>
          <p className="page-subtitle">Learn more about our company and our mission</p>
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
          <div className="section-header">
            <h2>Our Story</h2>
            <div className="section-divider"></div>
          </div>
          <div className="section-content">
            <p>Founded with a vision to revolutionize the industry, our company has been at the forefront of innovation since our inception. We believe in creating solutions that not only meet but exceed our clients' expectations.</p>
            <p>Our team of experts brings years of experience and a passion for excellence to every project we undertake.</p>
          </div>
        </div>
      </section>
      
      <section className="content-section alt-section">
        <div className="section-container">
          <div className="section-header">
            <h2>Our Values</h2>
            <div className="section-divider"></div>
          </div>
          <div className="section-content values-grid">
            <div className="value-card">
              <div className="value-icon">✨</div>
              <h3>Excellence</h3>
              <p>We strive for excellence in everything we do, from customer service to product delivery.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Integrity</h3>
              <p>We conduct our business with the highest standards of integrity and transparency.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h3>Innovation</h3>
              <p>We constantly innovate to stay ahead of the curve and provide cutting-edge solutions.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌱</div>
              <h3>Sustainability</h3>
              <p>We are committed to sustainable practices that benefit our planet and future generations.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;