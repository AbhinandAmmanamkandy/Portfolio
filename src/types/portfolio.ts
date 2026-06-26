export interface PersonalDetails {
  name: string;
  title: string;
  subtitle: string;
  bio: string;
  location: string;
  email: string;
  phone: string;
  resumeUrl: string;
  avatar: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  twitter: string;
  email: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  tags: string[];
  category: string;
  githubLink: string;
  demoLink: string;
  imageUrl: string;
}

export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  duration: string;
  description: string;
}

export interface PortfolioData {
  personal: PersonalDetails;
  socials: SocialLinks;
  skills: SkillCategory[];
  projects: ProjectItem[];
  experience: ExperienceItem[];
}
