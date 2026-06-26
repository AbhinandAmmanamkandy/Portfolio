import React from 'react';
import type { PersonalDetails, SocialLinks } from '../types/portfolio';
import * as Icons from './Icons';

interface HeroProps {
  personal: PersonalDetails;
  socials: SocialLinks;
}

export const Hero: React.FC<HeroProps> = ({ personal, socials }) => {
  return (
    <header id="home" className="hero-section section">
      <div className="container hero-grid">
        <div className="hero-content-wrap">
          <span className="hero-tagline">Welcome to my space</span>
          <h1 className="hero-title">
            Hi, I'm <span>{personal.name}</span>
          </h1>
          <p className="hero-subtitle">{personal.subtitle}</p>
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
            <a href={socials.github} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
              <Icons.Github />
            </a>
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
              <Icons.Linkedin />
            </a>
            <a href={socials.twitter} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Twitter">
              <Icons.Twitter />
            </a>
            <a href={socials.email} className="social-link" aria-label="Email">
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
