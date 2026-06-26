import heroImg from '../assets/hero.jpg';
import type { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
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
    github: 'https://github.com/AbhinandAmmanamkandy',
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
};
