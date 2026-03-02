import { Github, Linkedin, Instagram, Facebook, Code, Cloud, Layout, Database, Server, GitBranch, Globe } from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Umer Khalid",
  title: "Junior Frontend Developer",
  tagline: "Building fast, scalable, and user-friendly web applications",
  location: "Karachi, Pakistan",
  email: "umerkhalid1911@gmail.com",
  resumeUrl: "/resume.pdf", // Path to the resume file in the public folder
  summary: "Junior Frontend Developer with hands-on experience building and deploying web applications using React.js and modern JavaScript. Familiar with REST APIs, authentication flows, and cloud services like Microsoft Azure. Passionate about creating clean UI, solving real problems, and continuously improving as a developer.",
};

export const SOCIAL_LINKS = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/umer-khalid-033117253', icon: Linkedin },
  { name: 'GitHub', url: 'https://github.com/Umer-1911', icon: Github },
  { name: 'Instagram', url: 'https://www.instagram.com/umertechofficial/', icon: Instagram },
  { name: 'Facebook', url: 'https://www.facebook.com/umer.khalid.957782/', icon: Facebook },
];

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export const STATS = [
  { label: 'Projects Completed', value: 1, suffix: '+' },
  { label: 'Experience', value: 1, suffix: ' year' },
  { label: 'Technologies', value: 8, suffix: '+' },
  { label: 'GitHub Contributions', value: 250, suffix: '+' },
  { label: 'LinkedIn Followers', value: 500, suffix: '+' },
];

export const SERVICES = [
  {
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces using React, Tailwind CSS, and modern JavaScript.",
    icon: Layout,
  },
  {
    title: "Cloud Integration",
    description: "Deploying and managing applications on Microsoft Azure, utilizing Azure Functions and cloud storage.",
    icon: Cloud,
  },
  {
    title: "Clean UI & UX",
    description: "Focusing on performance optimization and accessible design to provide the best user experience.",
    icon: Code,
  },
];

export const SKILLS = {
  frontend: [
    { name: 'HTML5', level: 90, icon: 'html' },
    { name: 'CSS3', level: 85, icon: 'css' },
    { name: 'JavaScript (ES6+)', level: 80, icon: 'js' },
    { name: 'React.js (Vite)', level: 85, icon: 'react' },
    { name: 'Tailwind CSS', level: 90, icon: 'tailwind' },
    { name: 'SAPUI5', level: 70, icon: 'fedora' }, // Using a placeholder for SAPUI5 if not available
  ],
  backend: [
    { name: 'Node.js', level: 65, icon: 'nodejs' },
    { name: 'REST APIs', level: 80, icon: 'postman' },
    { name: 'Azure Functions', level: 70, icon: 'azure' },
  ],
  tools: [
    { name: 'Microsoft Azure', level: 75, icon: 'azure' },
    { name: 'Firebase Auth', level: 80, icon: 'firebase' },
    { name: 'MySQL', level: 60, icon: 'mysql' },
    { name: 'Git & GitHub', level: 85, icon: 'github' },
  ],
};

export const PROJECTS = [
  {
    title: "AI Resume Analyzer",
    description: "AI-powered web app that analyzes resumes uploaded as PDFs and extracts structured data such as skills, education, and experience.",
    tech: ["React.js", "Tailwind CSS", "Firebase Auth", "Azure Functions", "Azure Document Intelligence"],
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800",
    liveUrl: "#",
    githubUrl: "https://github.com/Umer-1911",
  },
];

export const EXPERIENCE = [
  {
    role: "SAPUI5 Developer Intern",
    company: "iSoftMart Solutions",
    period: "May 2025 – Aug 2025",
    description: [
      "Built ERP UI modules using SAPUI5",
      "Developed form-based data entry pages",
      "Integrated notification module with PostgreSQL",
      "Implemented multilingual support using i18n",
      "Improved UI responsiveness and data binding",
    ],
  },
  {
    role: "Business Developer",
    company: "Artex Digital",
    period: "Dec 2023 – Feb 2025",
    description: [
      "Client acquisition and negotiations",
      "Led sales team to achieve targets",
      "Delivered tailored digital solutions",
    ],
  },
];
