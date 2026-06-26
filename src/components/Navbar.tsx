import React from 'react';
import * as Icons from './Icons';

interface NavbarProps {
  scrolled: boolean;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  activeSection: string;
  theme: string;
  toggleTheme: () => void;
  currentView: 'main' | 'github-projects';
  personalName: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  scrolled,
  menuOpen,
  setMenuOpen,
  activeSection,
  theme,
  toggleTheme,
  currentView,
  personalName
}) => {
  const isGithubView = currentView === 'github-projects';

  return (
    <nav className={`navbar ${scrolled || isGithubView ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#" className="logo" id="nav-logo">
          {personalName}.
        </a>

        {isGithubView ? (
          <ul className="nav-links">
            <li>
              <a href="#" className="nav-link">
                ← Back to Home
              </a>
            </li>
          </ul>
        ) : (
          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className={`nav-link ${activeSection === section ? 'active' : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        )}

        <div className="nav-actions">
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label="Toggle theme"
            id="theme-toggler"
          >
            {theme === 'dark' ? <Icons.Sun /> : <Icons.Moon />}
          </button>
          
          {!isGithubView && (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="menu-toggle-btn"
              aria-label="Toggle menu"
              id="menu-toggler"
            >
              {menuOpen ? <Icons.Close /> : <Icons.Menu />}
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};
