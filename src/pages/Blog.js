import React from 'react';
import '../styles/Pages.css';

function Blog() {
  return (
    <div className="page-container">
      <div className="page-hero">
        <div className="hero-content">
          <h1 className="page-title">Our Blog</h1>
          <p className="page-subtitle">Insights, news, and updates from our team</p>
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
            <h2>Latest Articles</h2>
            <div className="section-divider"></div>
          </div>
          <div className="blog-grid">
            <div className="blog-card">
              <div className="blog-image">
                <div className="image-overlay"></div>
                <div className="blog-category">Technology</div>
              </div>
              <div className="blog-content">
                <h3>The Future of Technology in 2023</h3>
                <p className="blog-excerpt">Exploring the cutting-edge technologies that will shape our future in the coming year.</p>
                <div className="blog-meta">
                  <span className="blog-date">June 15, 2023</span>
                  <a href="/blog/future-technology" className="blog-read-more">
                    Read More <span className="read-more-arrow">→</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="blog-card">
              <div className="blog-image">
                <div className="image-overlay"></div>
                <div className="blog-category">Business</div>
              </div>
              <div className="blog-content">
                <h3>Strategies for Business Growth</h3>
                <p className="blog-excerpt">Key strategies that successful businesses implement to achieve sustainable growth.</p>
                <div className="blog-meta">
                  <span className="blog-date">May 28, 2023</span>
                  <a href="/blog/business-growth" className="blog-read-more">
                    Read More <span className="read-more-arrow">→</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="blog-card">
              <div className="blog-image">
                <div className="image-overlay"></div>
                <div className="blog-category">Innovation</div>
              </div>
              <div className="blog-content">
                <h3>Innovative Solutions for Modern Problems</h3>
                <p className="blog-excerpt">How innovative thinking can help solve complex challenges in today's world.</p>
                <div className="blog-meta">
                  <span className="blog-date">April 10, 2023</span>
                  <a href="/blog/innovative-solutions" className="blog-read-more">
                    Read More <span className="read-more-arrow">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;