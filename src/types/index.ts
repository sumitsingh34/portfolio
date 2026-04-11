export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: "work" | "academic" | "part-time";
  description: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
}

export interface Education {
  degree: string;
  field: string;
  institution: string;
  location: string;
  year: string;
  gpa: string;
  coursework: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  description: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}
