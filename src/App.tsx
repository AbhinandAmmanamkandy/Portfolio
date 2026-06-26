import { useState, useEffect } from 'react';
import { portfolioData } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { FeaturedProjects } from './components/FeaturedProjects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { GitHubProjects } from './GitHubProjects';
import { Footer } from './components/Footer';
import './App.css';

function App() {
  const [theme, setTheme] = useState(() => {
    // Default to dark theme
    const saved = localStorage.getItem('theme');
    return saved ? saved : 'dark';
  });
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [currentView, setCurrentView] = useState<'main' | 'github-projects'>(() => {
    return window.location.hash === '#github-projects' ? 'github-projects' : 'main';
  });

  // Theme management
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Listen for hash routing transitions
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#github-projects') {
        setCurrentView('github-projects');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        setCurrentView('main');
        if (!window.location.hash || window.location.hash === '#') {
          setActiveSection('home');
        }
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    // Sync initial load routing state
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Scroll listener for navbar height & active link highlights
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check active sections
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPos = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <>
      <Navbar
        scrolled={scrolled}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        activeSection={activeSection}
        theme={theme}
        toggleTheme={toggleTheme}
        currentView={currentView}
        personalName={portfolioData.personal.name}
      />

      {currentView === 'github-projects' ? (
        <div style={{ paddingTop: '80px' }}>
          <GitHubProjects />
        </div>
      ) : (
        <>
          <Hero personal={portfolioData.personal} socials={portfolioData.socials} />
          <About personal={portfolioData.personal} />
          <Skills skills={portfolioData.skills} />
          <FeaturedProjects projects={portfolioData.projects} />
          <Experience experience={portfolioData.experience} />
          <Contact personal={portfolioData.personal} />
        </>
      )}

      <Footer personalName={portfolioData.personal.name} />
    </>
  );
}

export default App;
