import React from 'react';
import '../styles/Services.css';
import cleaningProfessionals from '../assets/cleaning-professionalss.jpg'; // Import the image from assets folder

function Services() {
  return (
    <div className="services-container">
      <div className="services-image">
        <img src={cleaningProfessionals} alt="Professional Cleaning Services" />
      </div>
      
      <div className="services-content">
        <div className="services-header">
          <span className="services-dot">• Services</span>
          <h2 className="services-title">
            Our <span className="highlight">Services</span> We
            <br />Provide For Our Customer
          </h2>
        </div>
        
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon blue">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11 9H17M11 13H17M11 17H17M7 9H7.01M7 13H7.01M7 17H7.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="service-title">Office Cleaning</h3>
            <p className="service-description">
              Keep workspace spotless, organized, and hygienic for a productive environment.
            </p>
            <a href="/services/office" className="service-link">
              Learn More <span className="arrow">→</span>
            </a>
          </div>
          
          <div className="service-card">
            <div className="service-icon green">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 21L12 12L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 10L12 3L21 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="service-title">Carpet Cleaning</h3>
            <p className="service-description">
              Removes stains, dirt, and allergens, leaving your carpets fresh and spotless.
            </p>
            <a href="/services/carpet" className="service-link">
              Learn More <span className="arrow">→</span>
            </a>
          </div>
          
          <div className="service-card">
            <div className="service-icon pink">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4H20V20H4V4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 12H20M12 4V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="service-title">Window Cleaning</h3>
            <p className="service-description">
              Ensures streak-free, crystal-clear windows for improved light and visibility.
            </p>
            <a href="/services/window" className="service-link">
              Learn More <span className="arrow">→</span>
            </a>
          </div>
          
          <div className="service-card">
            <div className="service-icon blue">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="service-title">Restroom Sanitization</h3>
            <p className="service-description">
              Provides a thorough cleaning and disinfecting, ensuring fresh environment.
            </p>
            <a href="/services/restroom" className="service-link">
              Learn More <span className="arrow">→</span>
            </a>
          </div>
          
          <div className="service-card">
            <div className="service-icon purple">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 6H5H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="service-title">Trash Removal</h3>
            <p className="service-description">
              Efficiently clears waste, keeping your workspace clean and clutter-free.
            </p>
            <a href="/services/trash" className="service-link">
              Learn More <span className="arrow">→</span>
            </a>
          </div>
          
          <div className="service-card">
            <div className="service-icon green">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 16L16 12L12 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="service-title">Disinfection Services</h3>
            <p className="service-description">
              Eliminate germs, bacteria, and viruses, ensuring a safe and hygienic environment.
            </p>
            <a href="/services/disinfection" className="service-link">
              Learn More <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;