import React from 'react';
import type { SkillCategory } from '../types/portfolio';
import * as Icons from './Icons';

interface SkillsProps {
  skills: SkillCategory[];
}

// Function to map technology tags to their official brands and custom vector icons
const getSkillDetails = (name: string) => {
  const normalized = name.toLowerCase().trim();
  
  if (normalized.includes('react')) {
    return {
      brandColor: '#61dafb',
      glowColor: 'rgba(97, 218, 251, 0.25)',
      bgColor: 'rgba(97, 218, 251, 0.08)',
      icon: (
        <svg viewBox="0 0 100 100" width="18" height="18" fill="none" stroke="#61dafb" strokeWidth="4">
          <ellipse cx="50" cy="50" rx="8" ry="20" transform="rotate(0 50 50)"/>
          <ellipse cx="50" cy="50" rx="8" ry="20" transform="rotate(60 50 50)"/>
          <ellipse cx="50" cy="50" rx="8" ry="20" transform="rotate(120 50 50)"/>
          <circle cx="50" cy="50" r="5" fill="#61dafb"/>
        </svg>
      )
    };
  }
  
  if (normalized.includes('typescript')) {
    return {
      brandColor: '#3178c6',
      glowColor: 'rgba(49, 120, 198, 0.25)',
      bgColor: 'rgba(49, 120, 198, 0.08)',
      icon: (
        <svg viewBox="0 0 100 100" width="16" height="16" fill="#3178c6">
          <rect width="100" height="100" rx="12"/>
          <text x="35" y="80" fill="white" fontSize="48" fontWeight="bold" fontFamily="sans-serif">TS</text>
        </svg>
      )
    };
  }
  
  if (normalized.includes('html5') || normalized.includes('css3') || normalized.includes('html')) {
    return {
      brandColor: '#e34f26',
      glowColor: 'rgba(227, 79, 38, 0.25)',
      bgColor: 'rgba(227, 79, 38, 0.08)',
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#e34f26" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"/>
          <polyline points="8 6 2 12 8 18"/>
        </svg>
      )
    };
  }
  
  if (normalized.includes('vite')) {
    return {
      brandColor: '#646cff',
      glowColor: 'rgba(100, 108, 255, 0.25)',
      bgColor: 'rgba(100, 108, 255, 0.08)',
      icon: (
        <svg viewBox="0 0 100 100" width="18" height="18">
          <polygon points="50,5 95,20 80,85 50,98 20,85 5,20" fill="none" stroke="#646cff" strokeWidth="6"/>
          <polygon points="50,15 80,75 50,90 20,75" fill="#646cff"/>
          <polygon points="50,25 70,70 50,82 30,70" fill="#ffc517"/>
        </svg>
      )
    };
  }
  
  if (normalized.includes('tailwind')) {
    return {
      brandColor: '#06b6d4',
      glowColor: 'rgba(6, 182, 212, 0.25)',
      bgColor: 'rgba(6, 182, 212, 0.08)',
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="#06b6d4">
          <path d="M12 6.096c2.4-2.4 5.4-2.4 9 0-3.6 3.6-3.6 6.6 0 9-3.6 3.6-6.6 3.6-9 0-2.4 2.4-5.4 2.4-9 0 3.6-3.6 3.6-6.6 0-9 3.6-3.6 6.6-3.6 9 0z"/>
        </svg>
      )
    };
  }
  
  if (normalized.includes('node')) {
    return {
      brandColor: '#339933',
      glowColor: 'rgba(51, 153, 51, 0.25)',
      bgColor: 'rgba(51, 153, 51, 0.08)',
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#339933" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5"/>
          <path d="M2 12l10 5 10-5"/>
        </svg>
      )
    };
  }
  
  if (normalized.includes('express')) {
    return {
      brandColor: '#808080',
      glowColor: 'rgba(128, 128, 128, 0.25)',
      bgColor: 'rgba(128, 128, 128, 0.08)',
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#808080" strokeWidth="2.5">
          <rect width="20" height="12" x="2" y="9" rx="2" ry="2"/>
          <path d="M12 2v7"/>
          <path d="m9 5 3-3 3 3"/>
        </svg>
      )
    };
  }
  
  if (normalized.includes('api') || normalized.includes('rest')) {
    return {
      brandColor: '#009688',
      glowColor: 'rgba(0, 150, 136, 0.25)',
      bgColor: 'rgba(0, 150, 136, 0.08)',
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#009688" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
        </svg>
      )
    };
  }
  
  if (normalized.includes('graphql')) {
    return {
      brandColor: '#e10098',
      glowColor: 'rgba(225, 0, 152, 0.25)',
      bgColor: 'rgba(225, 0, 152, 0.08)',
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#e10098" strokeWidth="2">
          <polygon points="12 2 22 8 22 16 12 22 2 16 2 8"/>
          <circle cx="12" cy="12" r="3" fill="#e10098"/>
          <line x1="12" y1="2" x2="12" y2="22"/>
          <line x1="2" y1="8" x2="22" y2="16"/>
          <line x1="2" y1="16" x2="22" y2="8"/>
        </svg>
      )
    };
  }
  
  if (normalized.includes('postgres')) {
    return {
      brandColor: '#4169e1',
      glowColor: 'rgba(65, 105, 225, 0.25)',
      bgColor: 'rgba(65, 105, 225, 0.08)',
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#4169e1" strokeWidth="2.5">
          <ellipse cx="12" cy="5" rx="9" ry="3"/>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/>
        </svg>
      )
    };
  }
  
  if (normalized.includes('mongo')) {
    return {
      brandColor: '#47a248',
      glowColor: 'rgba(71, 162, 72, 0.25)',
      bgColor: 'rgba(71, 162, 72, 0.08)',
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#47a248" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
          <path d="M12 6v12"/>
          <path d="M8 10h8"/>
        </svg>
      )
    };
  }
  
  if (normalized.includes('redis')) {
    return {
      brandColor: '#dc382d',
      glowColor: 'rgba(220, 56, 45, 0.25)',
      bgColor: 'rgba(220, 56, 45, 0.08)',
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#dc382d" strokeWidth="2.5">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <line x1="3" y1="9" x2="21" y2="9"/>
          <line x1="3" y1="15" x2="21" y2="15"/>
        </svg>
      )
    };
  }
  
  if (normalized.includes('git')) {
    return {
      brandColor: '#f05032',
      glowColor: 'rgba(240, 80, 50, 0.25)',
      bgColor: 'rgba(240, 80, 50, 0.08)',
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#f05032" strokeWidth="2.5">
          <circle cx="18" cy="18" r="3"/>
          <circle cx="6" cy="6" r="3"/>
          <circle cx="6" cy="18" r="3"/>
          <path d="M18 15V9a4 4 0 0 0-4-4H9"/>
          <line x1="6" y1="9" x2="6" y2="15"/>
        </svg>
      )
    };
  }
  
  if (normalized.includes('docker')) {
    return {
      brandColor: '#2496ed',
      glowColor: 'rgba(36, 150, 237, 0.25)',
      bgColor: 'rgba(36, 150, 237, 0.08)',
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#2496ed" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="2" y1="10" x2="22" y2="10"/>
          <line x1="6" y1="10" x2="6" y2="17"/>
          <line x1="12" y1="10" x2="12" y2="17"/>
          <line x1="18" y1="10" x2="18" y2="17"/>
        </svg>
      )
    };
  }
  
  if (normalized.includes('vercel') || normalized.includes('netlify')) {
    return {
      brandColor: '#00ad9f',
      glowColor: 'rgba(0, 173, 159, 0.25)',
      bgColor: 'rgba(0, 173, 159, 0.08)',
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#00ad9f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="22" y1="2" x2="11" y2="13"/>
          <polygon points="22 2 15 22 11 13 2 9 22 2"/>
        </svg>
      )
    };
  }
  
  if (normalized.includes('figma')) {
    return {
      brandColor: '#f24e1e',
      glowColor: 'rgba(242, 78, 30, 0.25)',
      bgColor: 'rgba(242, 78, 30, 0.08)',
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#f24e1e" strokeWidth="2">
          <path d="M12 2a3 3 0 0 0-3 3v2h6V5a3 3 0 0 0-3-3z"/>
          <path d="M9 7a3 3 0 0 0-3 3v2h6v-2a3 3 0 0 0-3-3z"/>
          <path d="M9 13a3 3 0 0 0-3 3v3a3 3 0 0 0 3 3h3v-6H9z"/>
          <path d="M15 13a3 3 0 0 0-3 3v3a3 3 0 0 0 3 3h3v-9h-3z"/>
        </svg>
      )
    };
  }

  // Fallback defaults
  return {
    brandColor: 'var(--accent-border)',
    glowColor: 'rgba(192, 132, 252, 0.15)',
    bgColor: 'var(--accent-light)',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="16" x2="12" y2="12"/>
        <line x1="12" y1="8" x2="12.01" y2="8"/>
      </svg>
    )
  };
};

const SkillTag: React.FC<{ name: string }> = ({ name }) => {
  const { brandColor, glowColor, bgColor, icon } = getSkillDetails(name);

  return (
    <span 
      className="skill-tag"
      style={{
        '--skill-brand-color': brandColor,
        '--skill-glow-color': glowColor,
        '--skill-bg-color': bgColor
      } as React.CSSProperties}
    >
      <span className="skill-icon-wrap" style={{ color: brandColor }}>
        {icon}
      </span>
      {name}
    </span>
  );
};

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
                <span className="skill-icon-wrap" style={{ color: 'var(--primary)' }}>
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
                  <SkillTag key={sIdx} name={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
