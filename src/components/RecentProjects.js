import React from 'react';
import '../styles/RecentProjects.css';

function RecentProjects() {
  // Using placeholder images with consistent sizes
  const officeCleanup = "https://placehold.co/600x400/e0e8ff/1e293b?text=Downtown+Office+Cleanup";
  const carpetCare = "https://placehold.co/600x400/e0e8ff/1e293b?text=Corporate+Carpet+Care";
  const officeShine = "https://placehold.co/600x400/e0e8ff/1e293b?text=GreenTech+Office+Shine";
  const studioCleanup = "https://placehold.co/600x400/e0e8ff/1e293b?text=Starline+Studio+Cleanup";

  return (
    <div className="projects-container">
      <div className="projects-content">
        <div className="projects-header">
          <span className="projects-dot">• Services</span>
          <h2 className="projects-title">
            Explore Our
            <br /><span className="highlight">Recent Projects</span>
          </h2>
        </div>
        
        <div className="projects-grid">
          <div className="project-card large">
            <img src={officeCleanup} alt="Downtown Office Cleanup" />
            <div className="project-overlay"></div>
            <div className="project-info">
              <h3 className="project-title">Downtown Office Cleanup</h3>
              <div className="project-services">
                <span className="service-tag">Deep Floor Cleaning</span>
                <span className="service-tag">Surface Sanitization</span>
                <span className="service-tag">Trash Removal</span>
              </div>
            </div>
            <div className="view-project">
              <div className="view-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
          
          <div className="project-card">
            <img src={carpetCare} alt="Corporate Carpet Care" />
            <div className="project-overlay"></div>
            <div className="project-info">
              <h3 className="project-title">Corporate Carpet Care</h3>
              <div className="project-services">
                <span className="service-tag">Carpet Shampooing</span>
                <span className="service-tag">Stain Removal</span>
                <span className="service-tag">Allergen Treatment</span>
              </div>
            </div>
          </div>
          
          <div className="project-card">
            <img src={officeShine} alt="GreenTech Office Shine" />
            <div className="project-overlay"></div>
            <div className="project-info">
              <h3 className="project-title">GreenTech Office Shine</h3>
              <div className="project-services">
                <span className="service-tag">Floor Polishing</span>
                <span className="service-tag">Air Freshening</span>
                <span className="service-tag">Window Cleaning</span>
              </div>
            </div>
          </div>
          
          <div className="project-card">
            <img src={studioCleanup} alt="Starline Studio Cleanup" />
            <div className="project-overlay"></div>
            <div className="project-info">
              <h3 className="project-title">Starline Studio Cleanup</h3>
              <div className="project-services">
                <span className="service-tag">Floor Mopping</span>
                <span className="service-tag">Trash Disposal</span>
                <span className="service-tag">Dusting & Wiping</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentProjects;