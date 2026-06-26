import React from 'react';
import type { SkillCategory } from '../types/portfolio';
import * as Icons from './Icons';

interface SkillsProps {
  skills: SkillCategory[];
}

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Technical Expertise</h2>
        <p className="section-desc">A breakdown of my programming languages, frameworks, and workflow tools.</p>

        <div className="skills-grid">
          {skills.map((category, idx) => (
            <div key={idx} className="skills-category glass-card">
              <h3 className="skills-category-title">
                <span className="skill-icon-wrap">
                  {idx === 0 ? (
                    <Icons.Code />
                  ) : idx === 1 ? (
                    <Icons.Briefcase />
                  ) : (
                    <Icons.GraduationCap />
                  )}
                </span>
                {category.category}
              </h3>
              <div className="skills-list">
                {category.items.map((skill, sIdx) => (
                  <span key={sIdx} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
