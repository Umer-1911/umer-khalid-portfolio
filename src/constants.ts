import { Github, Linkedin, Code, Cloud, Layout, Database, Server, GitBranch, Globe } from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Umer Khalid",
  title: "Full Stack Developer",
  tagline: "Building fast, scalable, and user friendly web applications",
  location: "Karachi, Pakistan",
  email: "umerkhalid1911@gmail.com",
  resumeUrl: "/resume.pdf", // Path to the resume file in the public folder
  summary: "Final year Computer Networks & Security student with full stack development experience across React.js, Node.js, and PostgreSQL, plus enterprise ERP development as a SAPUI5 Developer Intern. Independently designed, built, and deployed multiple production web applications, including a real world ecommerce ordering platform and an AI powered document processing tool on Microsoft Azure.",
};

export const SOCIAL_LINKS = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/umer-khalid-033117253', icon: Linkedin },
  { name: 'GitHub', url: 'https://github.com/Umer-1911', icon: Github },
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
  { label: 'Projects Shipped', value: 3, suffix: '' },
  { label: 'Experience', value: 1, suffix: ' year' },
  { label: 'Technologies', value: 8, suffix: '+' },
];

export const SERVICES = [
  {
    title: "Full Stack Development",
    description: "Full stack development experience across React.js, Node.js, and PostgreSQL plus enterprise ERP development as a SAPUI5 Developer as an intern.",
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
    description: "AI powered web app that analyzes resumes uploaded as PDFs and extracts structured data such as skills, education, and experience.",
    tech: ["React.js", "Tailwind CSS", "Firebase Auth", "Azure Functions", "Azure Document Intelligence"],
    image: "/localhost_5173.png",
    liveUrl: "#",
    githubUrl: "https://github.com/Umer-1911/recruitx.ai",
  },
  {
    title: "Pizza Run",
    description: "Responsive ecommerce ordering platform for local businesses with real time cart state and WhatsApp based checkout notifications.",
    tech: ["React.js", "Tailwind CSS", "WhatsApp API", "Vercel"],
    image: "/Pizza_Run.png",
    liveUrl: "https://pizzarun-whatsapp-ordering-system.vercel.app/",
    githubUrl: "https://github.com/Umer-1911/pizzarun-whatsapp-ordering-system",
  },
  {
    title: "DevFlow Dashboard",
    description: "Interactive dashboard UI with reusable components and a focus on responsive, clean design.",
    tech: ["React.js", "Tailwind CSS"],
    image: "/devflow-dashboard.png",
    liveUrl: "https://umer-1911.github.io/devflow-dashboard/",
    githubUrl: "https://github.com/Umer-1911/devflow-dashboard",
  },
];

export const EXPERIENCE = [
  {
    role: "SAPUI5 Developer Intern",
    company: "iSoftMart Solutions",
    period: "May 2025 – Aug 2025",
    description: [
      "Built and maintained responsive SAPUI5 UI components for ERP modules used in daily business operations",
      "Designed form based data entry interfaces to streamline internal workflows",
      "Integrated frontend views with a PostgreSQL backend, improving data binding performance and reducing UI lag",
      "Collaborated directly with senior developers to debug production issues and refine user experience",
    ],
  },
  {
    role: "Business Developer",
    company: "Artex Digital",
    period: "Dec 2023 – Feb 2025",
    description: [
      "Liaised with clients to scope requirements and translate them into digital solutions, strengthening client facing communication skills relevant to technical requirement gathering",
    ],
  },
];
