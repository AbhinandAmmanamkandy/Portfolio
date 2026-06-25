import { useState, useEffect } from 'react'
import heroImg from './assets/hero.png'
import './App.css'

// --- PORTFOLIO CUSTOM CONFIGURATION ---
const portfolioData = {
  personal: {
    name: 'Abhinand Ammanamkandy',
    title: 'Full-Stack Software Engineer',
    subtitle: 'Crafting Premium Digital Experiences',
    bio: 'A passionate developer specializing in building beautiful, high-performance web applications using React, TypeScript, and modern ecosystem tools. Focused on clean code, micro-animations, and outstanding user experiences.',
    location: 'Bangalore, India',
    email: 'abhinand.dev@example.com',
    phone: '+91 98765 43210',
    resumeUrl: '#',
    avatar: heroImg,
  },
  socials: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://x.com',
    email: 'mailto:abhinand.dev@example.com',
  },
  skills: [
    {
      category: 'Frontend Engineering',
      items: ['React', 'TypeScript', 'Next.js', 'Redux Toolkit', 'HTML5 & CSS3', 'Sass / SCSS', 'Vite', 'Tailwind CSS']
    },
    {
      category: 'Backend & Databases',
      items: ['Node.js', 'Express.js', 'RESTful APIs', 'GraphQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Firebase']
    },
    {
      category: 'Tools & DevOps',
      items: ['Git & GitHub', 'Docker', 'AWS (S3/EC2)', 'Vercel / Netlify', 'CI/CD Pipelines', 'Figma', 'Oxlint / ESLint', 'Jest']
    }
  ],
  projects: [
    {
      id: 1,
      title: 'VibeSync - Social Music Platform',
      description: 'A collaborative real-time music sharing application featuring interactive canvas visualizers, custom room playlists, and Spotify API integration.',
      tags: ['React', 'TypeScript', 'Node.js', 'Socket.io', 'Web Audio API'],
      category: 'Web',
      githubLink: 'https://github.com',
      demoLink: 'https://github.com',
      imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
      id: 2,
      title: 'NeuraGrid - AI Canvas Dashboard',
      description: 'An interactive drag-and-drop workspace layout for visualizing neural network layers, custom training datasets, and pipeline telemetry nodes.',
      tags: ['React', 'Next.js', 'D3.js', 'CSS Grid', 'Zustand'],
      category: 'Web',
      githubLink: 'https://github.com',
      demoLink: 'https://github.com',
      imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
      id: 3,
      title: 'AeroTask - Minimal Mobile Planner',
      description: 'A native productivity and habit-building application showcasing physics-based micro-interactions, dark mode sync, and offline database persistence.',
      tags: ['React Native', 'TypeScript', 'Expo', 'SQLite', 'Reanimated'],
      category: 'Apps',
      githubLink: 'https://github.com',
      demoLink: 'https://github.com',
      imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
      id: 4,
      title: 'PrismCSS - Custom Glow Engine',
      description: 'An open-source CSS custom properties library to rapidly inject lightweight, high-performance ambient glow shaders into web wrappers.',
      tags: ['TypeScript', 'CSS Variables', 'Rollup', 'NPM Package'],
      category: 'Open Source',
      githubLink: 'https://github.com',
      demoLink: 'https://github.com',
      imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    }
  ],
  experience: [
    {
      id: 1,
      role: 'Full-Stack Software Engineer',
      company: 'Creative Digital Solutions',
      duration: '2024 - Present',
      description: 'Engineered responsive single-page applications and dashboards. Designed and integrated REST and GraphQL endpoints in Node.js, boosting data loading efficiency by 30%. Implemented responsive component libraries.'
    },
    {
      id: 2,
      role: 'Frontend Developer Intern',
      company: 'PixelCraft Labs',
      duration: '2023 - 2024',
      description: 'Developed interactive custom UI widgets and page layouts. Conducted automated testing and linter code reviews with Jest and ESLint. Integrated content management services for production clients.'
    }
  ]
}

function App() {
  // --- STATES ---
  const [theme, setTheme] = useState(() => {
    // Default to dark theme
    const saved = localStorage.getItem('theme');
    return saved ? saved : 'dark';
  });
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('All');
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  // Contact Form States
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formLoading, setFormLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // --- EFFECTS ---
  // Theme management
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

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

  // --- ACTIONS ---
  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormLoading(true);
    // Simulate API request delay
    setTimeout(() => {
      setFormLoading(false);
      setFormSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  // Filter projects by category
  const filteredProjects = activeTab === 'All'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category === activeTab);

  // SVG Icon Components
  const Icons = {
    Sun: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>
    ),
    Moon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
    ),
    Github: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
    ),
    Linkedin: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
    ),
    Twitter: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
    ),
    Mail: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
    ),
    MapPin: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
    ),
    Phone: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
    ),
    ExternalLink: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
    ),
    Code: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
    ),
    Send: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
    ),
    Menu: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="18" x2="20" y2="18"/></svg>
    ),
    Close: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    ),
    Check: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
    ),
    User: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
    ),
    Briefcase: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
    ),
    GraduationCap: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M6 18.8v-4L3.07 13.4a1 1 0 0 0-1.07 0L2 13.4"/></svg>
    )
  };

  return (
    <>
      {/* --- STICKY HEADER / NAVIGATION --- */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <a href="#home" className="logo" id="nav-logo">
            {portfolioData.personal.name}.
          </a>

          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <li>
              <a 
                href="#home" 
                className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#skills" 
                className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                Skills
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                href="#experience" 
                className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                Experience
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>

          <div className="nav-actions">
            <button 
              onClick={toggleTheme} 
              className="theme-toggle-btn"
              aria-label="Toggle theme"
              id="theme-toggler"
            >
              {theme === 'dark' ? <Icons.Sun /> : <Icons.Moon />}
            </button>
            <button 
              onClick={() => setMenuOpen(!menuOpen)} 
              className="menu-toggle-btn"
              aria-label="Toggle menu"
              id="menu-toggler"
            >
              {menuOpen ? <Icons.Close /> : <Icons.Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header id="home" className="hero-section section">
        <div className="container hero-grid">
          <div className="hero-content-wrap">
            <span className="hero-tagline">Welcome to my space</span>
            <h1 className="hero-title">
              Hi, I'm <span>{portfolioData.personal.name}</span>
            </h1>
            <p className="hero-subtitle">{portfolioData.personal.subtitle}</p>
            <p className="hero-bio">{portfolioData.personal.bio}</p>
            
            <div className="hero-ctas">
              <a href="#projects" className="btn btn-primary">
                View My Projects
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get In Touch
              </a>
            </div>

            <div className="hero-socials">
              <a href={portfolioData.socials.github} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                <Icons.Github />
              </a>
              <a href={portfolioData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                <Icons.Linkedin />
              </a>
              <a href={portfolioData.socials.twitter} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Twitter">
                <Icons.Twitter />
              </a>
              <a href={portfolioData.socials.email} className="social-link" aria-label="Email">
                <Icons.Mail />
              </a>
            </div>
          </div>

          <div className="hero-avatar-wrapper">
            <div className="hero-avatar-glow"></div>
            <div className="hero-avatar-frame">
              <img 
                src={portfolioData.personal.avatar} 
                alt={portfolioData.personal.name} 
                id="hero-avatar-img"
              />
            </div>
          </div>
        </div>
      </header>

      {/* --- ABOUT SECTION --- */}
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
                  <span className="info-value">{portfolioData.personal.location}</span>
                </li>
                <li className="about-info-item">
                  <span className="info-label">Email:</span>
                  <span className="info-value">{portfolioData.personal.email}</span>
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

      {/* --- SKILLS SECTION --- */}
      <section id="skills" className="section">
        <div className="container">
          <h2 className="section-title">Technical Expertise</h2>
          <p className="section-desc">A breakdown of my programming languages, frameworks, and workflow tools.</p>
          
          <div className="skills-grid">
            {portfolioData.skills.map((category, idx) => (
              <div key={idx} className="skills-category glass-card">
                <h3 className="skills-category-title">
                  <span className="skill-icon-wrap">
                    {idx === 0 ? <Icons.Code /> : idx === 1 ? <Icons.Briefcase /> : <Icons.GraduationCap />}
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

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-desc">Explore a curated collection of application builds, tools, and libraries.</p>

          <div className="portfolio-filters">
            {['All', 'Web', 'Apps', 'Open Source'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`filter-btn ${activeTab === tab ? 'active' : ''}`}
                id={`filter-btn-${tab.toLowerCase().replace(' ', '-')}`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <article key={project.id} className="project-card glass-card">
                <div className="project-image">
                  <img src={project.imageUrl} alt={project.title} loading="lazy" />
                  <div className="project-overlay">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-overlay-link" aria-label="GitHub Repository">
                      <Icons.Github />
                    </a>
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-overlay-link" aria-label="Live Demo">
                      <Icons.ExternalLink />
                    </a>
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link" id={`project-code-${project.id}`}>
                      <Icons.Code /> Code
                    </a>
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-link" id={`project-demo-${project.id}`}>
                      <Icons.ExternalLink /> Demo
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* --- EXPERIENCE SECTION --- */}
      <section id="experience" className="section">
        <div className="container">
          <h2 className="section-title">My Journey</h2>
          <p className="section-desc">Timeline of my professional work experience and academic milestones.</p>
          
          <div className="timeline">
            {portfolioData.experience.map((item) => (
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

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="section" style={{ borderBottom: 'none' }}>
        <div className="container">
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-desc">Have a question or want to work together? Feel free to reach out!</p>
          
          <div className="contact-container">
            <div className="contact-info">
              <div className="contact-info-card glass-card">
                <div className="contact-icon-wrap">
                  <Icons.Mail />
                </div>
                <div>
                  <div className="contact-info-title">Email Me</div>
                  <a href={`mailto:${portfolioData.personal.email}`} className="contact-info-detail">
                    {portfolioData.personal.email}
                  </a>
                </div>
              </div>
              
              <div className="contact-info-card glass-card">
                <div className="contact-icon-wrap">
                  <Icons.Phone />
                </div>
                <div>
                  <div className="contact-info-title">Call Me</div>
                  <div className="contact-info-detail">{portfolioData.personal.phone}</div>
                </div>
              </div>
              
              <div className="contact-info-card glass-card">
                <div className="contact-icon-wrap">
                  <Icons.MapPin />
                </div>
                <div>
                  <div className="contact-info-title">Location</div>
                  <div className="contact-info-detail">{portfolioData.personal.location}</div>
                </div>
              </div>
            </div>

            <div className="contact-form-wrap glass-card">
              {formSubmitted ? (
                <div className="form-success-banner">
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px', color: 'var(--success)' }}>
                    <Icons.Check />
                  </div>
                  <h4>Message Sent Successfully!</h4>
                  <p>Thank you for reaching out. I will get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} id="contact-form">
                  <div className="form-group">
                    <label htmlFor="name-input" className="form-label">Full Name</label>
                    <input 
                      type="text" 
                      id="name-input" 
                      name="name" 
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe" 
                      className="form-input" 
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email-input" className="form-label">Email Address</label>
                    <input 
                      type="email" 
                      id="email-input" 
                      name="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com" 
                      className="form-input" 
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject-input" className="form-label">Subject</label>
                    <input 
                      type="text" 
                      id="subject-input" 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Project Inquiry" 
                      className="form-input" 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message-input" className="form-label">Your Message</label>
                    <textarea 
                      id="message-input" 
                      name="message" 
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project..." 
                      className="form-input" 
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn btn-primary submit-btn" 
                    disabled={formLoading}
                    id="submit-form-btn"
                  >
                    {formLoading ? 'Sending...' : (
                      <>
                        Send Message <Icons.Send />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="footer">
        <div className="container">
          <div className="footer-logo">{portfolioData.personal.name}.</div>
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  )
}

export default App
