// TypeScript interfaces for portfolio content

export interface Personal {
    name: string;
    title: string;
    tagline: string;
    location: string;
    bio: string;
    email: string;
    phone: string;
    resume: string;
    socials: {
        github: string;
        linkedin: string;
        twitter?: string;
        email: string;
    };
}

export interface Skills {
    frontend: string[];
    backend: string[];
    tools: string[];
    other: string[];
}

export interface Experience {
    id: number;
    company: string;
    position: string;
    duration: string;
    location: string;
    description: string;
    achievements: string[];
    technologies: string[];
}

export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    features: string[];
    links: {
        demo?: string;
        github?: string;
    };
    category: string;
}

export interface OpenSource {
    id: number;
    name: string;
    description: string;
    url: string;
    stars: number;
    language: string;
}

export interface Certification {
    id: number;
    name: string;
    issuer: string;
    date: string;
    credentialUrl: string;
}

export interface Education {
    id: number;
    degree: string;
    institution: string;
    location: string;
    duration: string;
    grade: string;
    achievements: string[];
}

export interface Testimonial {
    id: number;
    name: string;
    role: string;
    company: string;
    image: string;
    quote: string;
}

export interface PortfolioContent {
    personal: Personal;
    skills: Skills;
    experience: Experience[];
    projects: Project[];
    certifications: Certification[];
    education: Education[];
    testimonials: Testimonial[];
}
