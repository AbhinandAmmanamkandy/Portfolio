import React, { useState, useMemo } from 'react';
import * as Icons from './components/Icons';

// Define the structure of repository data
interface Repository {
  name: string;
  url: string;
  description: string;
  language: string;
  isFork: boolean;
  forkSource?: string;
  updatedAt: string;
  stars?: number;
}

const REPOSITORIES: Repository[] = [
  {
    name: 'Portfolio',
    url: 'https://github.com/AbhinandAmmanamkandy/Portfolio',
    description: 'Vite-React developer portfolio application highlighting professional skills, experience, and custom responsive layouts with dark/light mode.',
    language: 'TypeScript',
    isFork: false,
    updatedAt: '2026-06-25T16:20:06Z',
    stars: 1
  },
  {
    name: 'Akira_Flutter',
    url: 'https://github.com/AbhinandAmmanamkandy/Akira_Flutter',
    description: 'A beautiful Flutter-based client app for streaming and viewing anime with responsive user interfaces and robust state management.',
    language: 'Dart',
    isFork: false,
    updatedAt: '2026-06-25T08:21:08Z',
    stars: 3
  },
  {
    name: 'Viddy',
    url: 'https://github.com/AbhinandAmmanamkandy/Viddy',
    description: 'A lightweight and high-performance video downloader application written in C++ to save media streams with high download speed and efficiency.',
    language: 'C++',
    isFork: false,
    updatedAt: '2026-06-19T14:33:39Z',
    stars: 0
  },
  {
    name: 'Akira_Reborn',
    url: 'https://github.com/AbhinandAmmanamkandy/Akira_Reborn',
    description: 'An Android application designed to watch anime. Refactored and modernized to support newer Android APIs and improved media players.',
    language: 'Java',
    isFork: true,
    forkSource: 'TorqueReborn/Akira_Reborn',
    updatedAt: '2026-06-15T06:17:59Z',
    stars: 0
  },
  {
    name: 'infinite-typing',
    url: 'https://github.com/AbhinandAmmanamkandy/infinite-typing',
    description: 'An interactive speed typing platform built with TypeScript to practice and improve keyboard mechanics through continuous sentence flows.',
    language: 'TypeScript',
    isFork: false,
    updatedAt: '2026-04-16T07:25:47Z',
    stars: 2
  },
  {
    name: 'Git',
    url: 'https://github.com/AbhinandAmmanamkandy/Git',
    description: 'A structured curation of custom shell scripts, global configurations, and hook presets to automate development workflows in Git.',
    language: 'Shell',
    isFork: false,
    updatedAt: '2026-04-12T03:30:09Z',
    stars: 0
  },
  {
    name: 'Authentication',
    url: 'https://github.com/AbhinandAmmanamkandy/Authentication',
    description: 'A standard user authentication and authorization service package developed in Java, demonstrating secure hashing and token verification.',
    language: 'Java',
    isFork: false,
    updatedAt: '2026-03-11T17:13:43Z',
    stars: 0
  },
  {
    name: 'AkiraDjango',
    url: 'https://github.com/AbhinandAmmanamkandy/AkiraDjango',
    description: 'A Python-Django server framework customized to power data flows, user playlists, and anime details for client-side devices.',
    language: 'Python',
    isFork: true,
    forkSource: 'TorqueReborn/AkiraDjango',
    updatedAt: '2026-01-05T12:47:40Z',
    stars: 0
  },
  {
    name: 'django-blog',
    url: 'https://github.com/AbhinandAmmanamkandy/django-blog',
    description: 'A clean, customizable multi-author blogging engine template built with Python, Django, SQLite, and premium template views.',
    language: 'Python',
    isFork: true,
    forkSource: 'TorqueReborn/django-blog',
    updatedAt: '2025-12-20T11:18:04Z',
    stars: 0
  },
  {
    name: 'DjangoSetupScript',
    url: 'https://github.com/AbhinandAmmanamkandy/DjangoSetupScript',
    description: 'An automation setup script to bootstrap a standard production-ready Django project structure in seconds, including CORS and environmental variables.',
    language: 'Python',
    isFork: true,
    forkSource: 'TorqueReborn/DjangoSetupScript',
    updatedAt: '2025-12-08T05:58:30Z',
    stars: 1
  },
  {
    name: 'AkiraWeb',
    url: 'https://github.com/AbhinandAmmanamkandy/AkiraWeb',
    description: 'A TypeScript React web interface designed as a web companion for the Akira anime streaming application with responsive video widgets.',
    language: 'TypeScript',
    isFork: true,
    forkSource: 'TorqueReborn/AkiraWeb',
    updatedAt: '2025-11-02T11:22:21Z',
    stars: 0
  },
  {
    name: 'Akira',
    url: 'https://github.com/AbhinandAmmanamkandy/Akira',
    description: 'The native Android client app built in Kotlin, incorporating modern Android architecture components like Jetpack Compose and Coroutines.',
    language: 'Kotlin',
    isFork: true,
    forkSource: 'TorqueReborn/Akira',
    updatedAt: '2025-08-17T10:43:05Z',
    stars: 2
  },
  {
    name: 'AkiraTV',
    url: 'https://github.com/AbhinandAmmanamkandy/AkiraTV',
    description: 'A lean Android TV application build targeting large screens for smooth and interactive TV controls, media players, and movie cards.',
    language: 'Kotlin',
    isFork: true,
    forkSource: 'TorqueReborn/AkiraTV',
    updatedAt: '2025-05-23T17:12:52Z',
    stars: 0
  }
];

// Language colors matching GitHub official styles
const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: '#3178c6',
  Dart: '#00b4ab',
  'C++': '#f34b7d',
  Java: '#b07219',
  Python: '#3572a5',
  Kotlin: '#a97bff',
  Shell: '#89e051',
  Default: '#64748b'
};

// Replaced local Icons object with imported Icons component

export const GitHubProjects: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeType, setActiveType] = useState<'All' | 'Sources' | 'Forks'>('All');
  const [activeLanguage, setActiveLanguage] = useState('All');

  // Compute page statistics
  const stats = useMemo(() => {
    const total = REPOSITORIES.length;
    const sources = REPOSITORIES.filter(r => !r.isFork).length;
    const forks = REPOSITORIES.filter(r => r.isFork).length;
    
    // Count languages
    const languages: Record<string, number> = {};
    REPOSITORIES.forEach(r => {
      languages[r.language] = (languages[r.language] || 0) + 1;
    });

    return { total, sources, forks, languages };
  }, []);

  // Get list of distinct languages for the filter dropdown
  const languagesList = useMemo(() => {
    const langs = new Set<string>();
    REPOSITORIES.forEach(r => langs.add(r.language));
    return ['All', ...Array.from(langs)].sort();
  }, []);

  // Filter repos based on state query & selection triggers
  const filteredRepos = useMemo(() => {
    return REPOSITORIES.filter(repo => {
      const matchesSearch = 
        repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        repo.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        repo.language.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesType = 
        activeType === 'All' ||
        (activeType === 'Sources' && !repo.isFork) ||
        (activeType === 'Forks' && repo.isFork);

      const matchesLanguage = 
        activeLanguage === 'All' || 
        repo.language === activeLanguage;

      return matchesSearch && matchesType && matchesLanguage;
    });
  }, [searchQuery, activeType, activeLanguage]);

  const formatDate = (isoString: string) => {
    const date = new Date(isoString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <div className="github-page-wrapper">
      <div className="container">
        {/* --- HEADER --- */}
        <header className="github-header">
          <a href="#" className="back-btn btn">
            <Icons.ArrowLeft /> Back to Home
          </a>
          <div className="github-title-block">
            <h1 className="hero-title">GitHub <span>Repositories</span></h1>
            <p className="section-desc">
              A comprehensive showcase of my public repositories, utilities, experiments, and open-source contributions synced from my profile.
            </p>
          </div>
        </header>

        {/* --- STATISTICS DASHBOARD --- */}
        <section className="stats-dashboard">
          <div className="stat-card glass-card">
            <div className="stat-icon-wrap primary-gradient">
              <Icons.Folder />
            </div>
            <div className="stat-details">
              <span className="stat-num">{stats.total}</span>
              <span className="stat-label">Total Repositories</span>
            </div>
          </div>

          <div className="stat-card glass-card">
            <div className="stat-icon-wrap accent-gradient">
              <Icons.Code />
            </div>
            <div className="stat-details">
              <span className="stat-num">{stats.sources}</span>
              <span className="stat-label">Source Projects</span>
            </div>
          </div>

          <div className="stat-card glass-card">
            <div className="stat-icon-wrap success-gradient">
              <Icons.CodeBranch />
            </div>
            <div className="stat-details">
              <span className="stat-num">{stats.forks}</span>
              <span className="stat-label">Forked Copies</span>
            </div>
          </div>
        </section>

        {/* --- OWNERSHIP DISCLAIMER BANNER --- */}
        <div className="github-disclaimer-banner glass-card">
          <div className="disclaimer-icon-wrap">
            <Icons.User size={20} />
          </div>
          <div className="disclaimer-text">
            <strong>Ownership Note:</strong> The GitHub organizations{' '}
            <a href="https://github.com/TorqueReborn" target="_blank" rel="noopener noreferrer" className="disclaimer-link">TorqueReborn</a>{' '}
            and{' '}
            <a href="https://github.com/Ghost-Reborn" target="_blank" rel="noopener noreferrer" className="disclaimer-link">Ghost-Reborn</a>{' '}
            are my own profiles/organizations. All repositories and forks originating from these accounts represent my original design and development work.
          </div>
        </div>

        {/* --- CONTROL BAR: SEARCH & FILTERS --- */}
        <section className="github-controls glass-card">
          <div className="search-box-wrap">
            <Icons.Search />
            <input
              type="text"
              placeholder="Search repositories by name, stack, or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
              aria-label="Search repositories"
            />
          </div>

          <div className="filter-controls-group">
            {/* Type Filters */}
            <div className="filter-tabs">
              {(['All', 'Sources', 'Forks'] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => setActiveType(type)}
                  className={`filter-tab-btn ${activeType === type ? 'active' : ''}`}
                >
                  {type}
                </button>
              ))}
            </div>

            {/* Language Filter */}
            <div className="select-filter-wrap">
              <label htmlFor="language-select" className="sr-only">Filter by Language</label>
              <select
                id="language-select"
                value={activeLanguage}
                onChange={(e) => setActiveLanguage(e.target.value)}
                className="language-select"
              >
                <option value="All">All Languages</option>
                {languagesList.filter(l => l !== 'All').map((lang) => (
                  <option key={lang} value={lang}>
                    {lang}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </section>

        {/* --- REPOSITORIES GRID --- */}
        <div className="repos-grid">
          {filteredRepos.length > 0 ? (
            filteredRepos.map((repo) => (
              <article key={repo.name} className="project-card glass-card repo-item-card">
                <div className="repo-card-body">
                  <div className="repo-card-header">
                    <h3 className="project-title">
                      <a href={repo.url} target="_blank" rel="noopener noreferrer">
                        {repo.name}
                      </a>
                    </h3>
                    <span className={`repo-badge ${repo.isFork ? 'fork-badge' : 'source-badge'}`}>
                      {repo.isFork ? <Icons.Fork /> : null}
                      {repo.isFork ? 'Fork' : 'Source'}
                    </span>
                  </div>

                  {repo.isFork && repo.forkSource && (
                    <div className="repo-fork-source">
                      <span>forked from </span>
                      <a 
                        href={`https://github.com/${repo.forkSource}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="fork-source-link"
                      >
                        {repo.forkSource}
                      </a>
                      {(repo.forkSource.startsWith('TorqueReborn/') || repo.forkSource.startsWith('Ghost-Reborn/')) && (
                        <span className="owner-badge" title="This organization is owned by me">(My Org)</span>
                      )}
                    </div>
                  )}

                  <p className="project-desc repo-desc">{repo.description}</p>
                </div>

                <div className="repo-card-footer">
                  <div className="repo-meta-left">
                    <span className="repo-lang">
                      <span 
                        className="lang-color-dot" 
                        style={{ backgroundColor: LANGUAGE_COLORS[repo.language] || LANGUAGE_COLORS.Default }}
                      />
                      {repo.language}
                    </span>
                    <span className="repo-update-time">
                      Updated {formatDate(repo.updatedAt)}
                    </span>
                  </div>

                  <a 
                    href={repo.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="repo-action-btn"
                    title="View on GitHub"
                  >
                    Code <Icons.ExternalLink />
                  </a>
                </div>
              </article>
            ))
          ) : (
            <div className="no-results-card glass-card">
              <Icons.Code />
              <h4>No Repositories Found</h4>
              <p>We couldn't find any repositories matching your search criteria. Try modifying your filter options or search term.</p>
              <button 
                onClick={() => { setSearchQuery(''); setActiveType('All'); setActiveLanguage('All'); }}
                className="btn btn-primary btn-reset"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
