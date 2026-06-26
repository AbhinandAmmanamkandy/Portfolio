import heroImg from '../assets/hero.jpg';
import type { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  personal: {
    name: 'Abhinand Ammanamkandy',
    title: 'Full-Stack Software Engineer',
    subtitle: 'Crafting Premium Digital Experiences',
    bio: 'A passionate developer specializing in building beautiful, high-performance web applications using React, TypeScript, and modern ecosystem tools. Focused on clean code, micro-animations, and outstanding user experiences.',
    location: 'Kozhikode, Kerala, India',
    email: 'abhinandammanamkandy@gmail.com',
    phone: '+91 8921640287',
    resumeUrl: '#',
    avatar: heroImg,
  },
  socials: {
    github: 'https://github.com/AbhinandAmmanamkandy',
    linkedin: 'https://in.linkedin.com/in/abhinandammanamkandy',
    twitter: 'https://x.com/AbhinandAmmanam',
    email: 'mailto:abhinandammanamkandy@gmail.com',
  },
  skills: [
    {
      category: 'Frontend Engineering',
      items: ['React', 'TypeScript', 'HTML5 & CSS3', 'Vite', 'Tailwind CSS']
    },
    {
      category: 'Backend & Databases',
      items: ['Node.js', 'Express.js', 'RESTful APIs', 'GraphQL', 'PostgreSQL', 'MongoDB', 'Redis']
    },
    {
      category: 'Tools & DevOps',
      items: ['Git & GitHub', 'Docker', 'Vercel / Netlify', 'Figma']
    }
  ],
  projects: [
    {
      id: 1,
      title: 'Akira Flutter - Anime Watching App',
      description: 'A cross-platform Flutter application built to stream anime, featuring native video player integrations, clean layouts, and watchlist sync.',
      tags: ['Flutter', 'Dart', 'Android', 'iOS', 'ExoPlayer'],
      category: 'Apps',
      githubLink: 'https://github.com/AbhinandAmmanamkandy/Akira_Flutter',
      demoLink: 'https://github.com/AbhinandAmmanamkandy/Akira_Flutter',
      imageUrl: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&auto=format&fit=crop&q=60'
    },
    {
      id: 2,
      title: 'AkiraTV - Android TV App',
      description: 'A cleanback TV anime watching application built in Kotlin, tailored for large screens, D-pad remote inputs, and fluid catalog browsing.',
      tags: ['Kotlin', 'Android TV', 'Leanback UI', 'ExoPlayer', 'Media Streaming'],
      category: 'Apps',
      githubLink: 'https://github.com/AbhinandAmmanamkandy/AkiraTV',
      demoLink: 'https://github.com/AbhinandAmmanamkandy/AkiraTV',
      imageUrl: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=600&auto=format&fit=crop&q=60'
    },
    {
      id: 3,
      title: 'Viddy - Video Downloader App',
      description: 'A high-performance C++ video downloader utility designed to retrieve online media streams quickly and merge segments with high efficiency.',
      tags: ['C++', 'Video Downloader', 'FFmpeg', 'Network Protocols', 'Systems'],
      category: 'Open Source',
      githubLink: 'https://github.com/AbhinandAmmanamkandy/Viddy',
      demoLink: 'https://github.com/AbhinandAmmanamkandy/Viddy',
      imageUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&auto=format&fit=crop&q=60'
    }
  ],
  experience: [
    {
      id: 1,
      role: 'Backend Developer',
      company: 'BufferBytes Technologies',
      duration: '2025 - Present',
      description: 'Architecting and optimizing secure, scalable RESTful APIs using Django and Django REST Framework. Streamlining database query performance, designing robust relational schemas in PostgreSQL/MongoDB, and integrating third-party services to support high-traffic applications.'
    },
    {
      id: 2,
      role: 'Backend Developer Intern',
      company: 'BufferBytes Technologies',
      duration: '2025 - 2025',
      description: 'Designed and built custom RESTful endpoints with Python and Django. Implemented user authentication, conducted unit testing, and automated routine data sync jobs, learning best practices in backend engineering and database design.'
    }
  ]
};
