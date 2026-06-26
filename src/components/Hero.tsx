import React, { useState, useEffect, useMemo } from 'react';
import type { PersonalDetails, SocialLinks } from '../types/portfolio';
import * as Icons from './Icons';
import { ParticleBackground } from './ParticleBackground';

interface HeroProps {
  personal: PersonalDetails;
  socials: SocialLinks;
}

export const Hero: React.FC<HeroProps> = ({ personal, socials }) => {
  const roles = useMemo(() => [
    personal.title,
    'Backend Systems Engineer',
    'Open-Source Contributor'
  ], [personal.title]);

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer: any;
    const fullText = roles[currentRoleIndex];

    const handleType = () => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(80); // Speed up typing slightly

        if (currentText === fullText) {
          timer = setTimeout(() => setIsDeleting(true), 2500); // Hold for 2.5s
          return;
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(40); // Faster deletion

        if (currentText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(300); // Delay before typing next role
          return;
        }
      }

      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, typingSpeed, roles]);

  return (
    <header id="home" className="hero-section section">
      {/* Interactive Particle Network Background */}
      <ParticleBackground />

      <div className="container hero-grid" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-content-wrap">
          <span className="hero-tagline">Welcome to my space</span>
          <h1 className="hero-title">
            Hi, I'm <span>{personal.name}</span>
          </h1>
          <p className="hero-subtitle">
            {currentText}
            <span className="typewriter-cursor"></span>
          </p>
          <p className="hero-bio">{personal.bio}</p>

          <div className="hero-ctas">
            <a href="#projects" className="btn btn-primary">
              View My Projects
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </div>

          <div className="hero-socials">
            <a 
              href={socials.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link" 
              aria-label="GitHub"
              style={{ '--social-brand-color': '#181717' } as React.CSSProperties}
            >
              <Icons.Github />
            </a>
            <a 
              href={socials.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link" 
              aria-label="LinkedIn"
              style={{ '--social-brand-color': '#0a66c2' } as React.CSSProperties}
            >
              <Icons.Linkedin />
            </a>
            <a 
              href={socials.twitter} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link" 
              aria-label="Twitter"
              style={{ '--social-brand-color': '#1da1f2' } as React.CSSProperties}
            >
              <Icons.Twitter />
            </a>
            <a 
              href={socials.email} 
              className="social-link" 
              aria-label="Email"
              style={{ '--social-brand-color': '#ea4335' } as React.CSSProperties}
            >
              <Icons.Mail />
            </a>
          </div>
        </div>

        <div className="hero-avatar-wrapper">
          <div className="hero-avatar-glow"></div>
          <div className="hero-avatar-frame">
            <img src={personal.avatar} alt={personal.name} id="hero-avatar-img" />
          </div>
        </div>
      </div>
    </header>
  );
};
