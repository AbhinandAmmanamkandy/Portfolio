import React from 'react';
import type { PersonalDetails } from '../types/portfolio';

interface AboutProps {
  personal: PersonalDetails;
}

export const About: React.FC<AboutProps> = ({ personal }) => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-desc">Get to know more about my background, philosophy, and stats.</p>

        <div className="about-grid">
          <div className="about-text glass-card">
            <h3>My Story</h3>
            <p>
              I am a passionate software engineer focused on building elegant digital systems. I believe in engineering products that not only function correctly but also offer a delightful experience for the users.
            </p>
            <p>
              My workspace centers around the modern JavaScript/TypeScript ecosystem, with a keen focus on modular components, clean code architectures, and smooth page performance.
            </p>

            <ul className="about-info-list" style={{ marginTop: '24px' }}>
              <li className="about-info-item">
                <span className="info-label">Location:</span>
                <span className="info-value">{personal.location}</span>
              </li>
              <li className="about-info-item">
                <span className="info-label">Email:</span>
                <span className="info-value">{personal.email}</span>
              </li>
            </ul>
          </div>

          <div className="about-stats">
            <div className="stat-card glass-card">
              <div className="stat-number">2+</div>
              <div className="stat-label">Years of Experience</div>
            </div>
            <div className="stat-card glass-card">
              <div className="stat-number">15+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-card glass-card">
              <div className="stat-number">5+</div>
              <div className="stat-label">Open Source Contributions</div>
            </div>
            <div className="stat-card glass-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
