import React from 'react';
import type { ExperienceItem } from '../types/portfolio';

interface ExperienceProps {
  experience: ExperienceItem[];
}

export const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">My Journey</h2>
        <p className="section-desc">Timeline of my professional work experience and academic milestones.</p>

        <div className="timeline">
          {experience.map((item) => (
            <div key={item.id} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content glass-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">{item.role}</h3>
                    <span className="timeline-company">{item.company}</span>
                  </div>
                  <span className="timeline-duration">{item.duration}</span>
                </div>
                <p className="timeline-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
