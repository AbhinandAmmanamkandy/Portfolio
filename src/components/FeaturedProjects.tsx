import React, { useState, useMemo } from 'react';
import type { ProjectItem } from '../types/portfolio';
import * as Icons from './Icons';

interface FeaturedProjectsProps {
  projects: ProjectItem[];
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ projects }) => {
  const [activeTab, setActiveTab] = useState('All');

  const filteredProjects = useMemo(() => {
    if (activeTab === 'All') return projects;
    return projects.filter((p) => p.category === activeTab);
  }, [projects, activeTab]);

  return (
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
            <article key={`${activeTab}-${project.id}`} className="project-card glass-card">
              <div className="project-image">
                <img src={project.imageUrl} alt={project.title} loading="lazy" />
                <div className="project-overlay">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-overlay-link"
                    aria-label="GitHub Repository"
                  >
                    <Icons.Github />
                  </a>
                  {project.demoLink && project.demoLink !== project.githubLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-overlay-link"
                      aria-label="Live Demo"
                    >
                      <Icons.ExternalLink />
                    </a>
                  )}
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
                
                <div className="project-links" style={{ justifyContent: project.demoLink && project.demoLink !== project.githubLink ? 'space-between' : 'center' }}>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    id={`project-code-${project.id}`}
                    style={project.demoLink && project.demoLink !== project.githubLink ? {} : { width: '100%', justifyContent: 'center' }}
                  >
                    <Icons.Code /> Code & Repo
                  </a>
                  {project.demoLink && project.demoLink !== project.githubLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      id={`project-demo-${project.id}`}
                    >
                      <Icons.ExternalLink /> Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="view-more-repos-wrap">
          <p className="view-more-repos-text">Want to see more of my code?</p>
          <a href="#github-projects" className="btn btn-primary">
            Explore All GitHub Repositories
            <Icons.ArrowRight size={18} style={{ marginLeft: '4px' }} />
          </a>
        </div>
      </div>
    </section>
  );
};
