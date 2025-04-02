import React, { useState } from 'react';
import '../styles/PricingPlan.css';

function PricingPlan() {
  const [isMonthly, setIsMonthly] = useState(true);
  
  return (
    <div className="pricing-container">
      <div className="pricing-content">
        <div className="pricing-header">
          <span className="pricing-dot">• Pricing Plan</span>
          <h2 className="pricing-title">
            Get Customized
            <br /><span className="highlight">Pricing Plan</span>
          </h2>
        </div>
        
        <div className="billing-toggle">
          <span className={`toggle-option ${isMonthly ? 'active' : ''}`}>Monthly</span>
          <label className="switch">
            <input 
              type="checkbox" 
              checked={!isMonthly} 
              onChange={() => setIsMonthly(!isMonthly)}
            />
            <span className="slider round"></span>
          </label>
          <span className={`toggle-option ${!isMonthly ? 'active' : ''}`}>Yearly</span>
        </div>
        
        <div className="pricing-table">
          <div className="pricing-features">
            <div className="empty-cell"></div>
            <div className="feature-row">
              <div className="feature-name">Office Deep Cleaning</div>
            </div>
            <div className="feature-row">
              <div className="feature-name">Carpet Maintenance</div>
            </div>
            <div className="feature-row">
              <div className="feature-name">Trash Disposal</div>
            </div>
            <div className="feature-row">
              <div className="feature-name">Restroom Sanitization</div>
            </div>
            <div className="feature-row">
              <div className="feature-name">Window Cleaning</div>
            </div>
            <div className="empty-cell"></div>
          </div>
          
          <div className="pricing-plans">
            <div className="plan basic">
              <div className="plan-header">
                <h3 className="plan-name">Basic Plan</h3>
                <div className="plan-price">
                  <span className="currency">$</span>
                  <span className="amount">99</span>
                  <span className="period">/ Month</span>
                </div>
              </div>
              
              <div className="plan-features">
                <div className="feature-check">✓</div>
                <div className="feature-cross">✕</div>
                <div className="feature-cross">✕</div>
                <div className="feature-check">✓</div>
                <div className="feature-cross">✕</div>
              </div>
              
              <div className="plan-action">
                <button className="get-started-btn">
                  Get Started <span className="arrow">→</span>
                </button>
              </div>
            </div>
            
            <div className="plan starter">
              <div className="popular-tag">Most Popular</div>
              <div className="plan-header">
                <h3 className="plan-name">Starter Plan</h3>
                <div className="plan-price">
                  <span className="currency">$</span>
                  <span className="amount">299</span>
                  <span className="period">/ Month</span>
                </div>
              </div>
              
              <div className="plan-features">
                <div className="feature-check">✓</div>
                <div className="feature-cross">✕</div>
                <div className="feature-check">✓</div>
                <div className="feature-check">✓</div>
                <div className="feature-cross">✕</div>
              </div>
              
              <div className="plan-action">
                <button className="get-started-btn primary">
                  Get Started <span className="arrow">→</span>
                </button>
              </div>
            </div>
            
            <div className="plan premium">
              <div className="plan-header">
                <h3 className="plan-name">Premium Plan</h3>
                <div className="plan-price">
                  <span className="currency">$</span>
                  <span className="amount">480</span>
                  <span className="period">/ Month</span>
                </div>
              </div>
              
              <div className="plan-features">
                <div className="feature-check">✓</div>
                <div className="feature-check">✓</div>
                <div className="feature-check">✓</div>
                <div className="feature-check">✓</div>
                <div className="feature-check">✓</div>
              </div>
              
              <div className="plan-action">
                <button className="get-started-btn">
                  Get Started <span className="arrow">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingPlan;