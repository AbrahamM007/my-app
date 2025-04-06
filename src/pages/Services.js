import React from 'react';
import '../styles/Pages.css';

function Services() {
  return (
    <div className="page-container">
      <div className="page-hero">
        <div className="hero-content">
          <h1 className="page-title">Our Services</h1>
          <p className="page-subtitle">Comprehensive solutions tailored to your needs</p>
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
            <h2>What We Offer</h2>
            <div className="section-divider"></div>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <div className="icon-glow"></div>
                <span>🚀</span>
              </div>
              <h3>Service One</h3>
              <p>A comprehensive solution designed to optimize your business operations and drive growth.</p>
              <a href="/services/service-one" className="service-link">
                <span>Learn More</span>
                <span className="link-arrow">→</span>
              </a>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <div className="icon-glow"></div>
                <span>⚡</span>
              </div>
              <h3>Service Two</h3>
              <p>Cutting-edge technology implementation to keep your business ahead of the competition.</p>
              <a href="/services/service-two" className="service-link">
                <span>Learn More</span>
                <span className="link-arrow">→</span>
              </a>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <div className="icon-glow"></div>
                <span>🛡️</span>
              </div>
              <h3>Service Three</h3>
              <p>Robust security solutions to protect your valuable data and ensure business continuity.</p>
              <a href="/services/service-three" className="service-link">
                <span>Learn More</span>
                <span className="link-arrow">→</span>
              </a>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <div className="icon-glow"></div>
                <span>📊</span>
              </div>
              <h3>Service Four</h3>
              <p>Data-driven insights and analytics to help you make informed business decisions.</p>
              <a href="/services/service-four" className="service-link">
                <span>Learn More</span>
                <span className="link-arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;