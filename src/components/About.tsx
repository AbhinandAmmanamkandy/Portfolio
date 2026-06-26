import React, { useState, useEffect, useRef } from 'react';
import type { PersonalDetails } from '../types/portfolio';

interface AboutProps {
  personal: PersonalDetails;
}

interface StatCardProps {
  endValue: number;
  label: string;
  suffix?: string;
}

const StatCard: React.FC<StatCardProps> = ({ endValue, label, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 1200; // Animation duration in ms
          const increment = endValue / (duration / 16); // ~60fps
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= endValue) {
              setCount(endValue);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [endValue, hasAnimated]);

  return (
    <div ref={cardRef} className="stat-card glass-card">
      <div className="stat-number">
        {count}{suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

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
            <StatCard endValue={2} label="Years of Experience" suffix="+" />
            <StatCard endValue={15} label="Projects Completed" suffix="+" />
            <StatCard endValue={5} label="Open Source Contributions" suffix="+" />
            <StatCard endValue={100} label="Client Satisfaction" suffix="%" />
          </div>
        </div>
      </div>
    </section>
  );
};
