import {
  Gamepad2,
  Briefcase,
  Code2,
  Mail,
  Settings,
  Wifi,
  Trophy,
  Star,
} from 'lucide-react';

export const SECTIONS = [
  {
    id: 'home',
    title: 'Explore',
    subtitle: 'Full Stack Engineer',
    icon: Gamepad2,
    bgImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop',
    logoText: 'NEIL LEWIS',
    description:
      'Versatile Full Stack Engineer specializing in Angular, .NET, Python, and Azure. Building scalable, secure, and high-performance systems — from pixel-perfect UI/UX to cloud infrastructure and ML-driven cost optimization.',
    primaryAction: 'View Resume',
  },
  {
    id: 'projects',
    title: 'Library',
    subtitle: 'Projects & Work',
    icon: Briefcase,
    bgImage: 'https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?q=80&w=2070&auto=format&fit=crop',
    logoText: 'PROJECT ARCHIVE',
    description:
      'Enterprise projects built at Schneider Electric — Azure infrastructure tooling, cloud dashboards, inventory management, ML optimization models, and fully-automated CI/CD pipelines.',
    primaryAction: 'Browse Projects',
  },
  {
    id: 'skills',
    title: 'Trophies',
    subtitle: 'Skills & Certifications',
    icon: Trophy,
    bgImage: 'https://images.unsplash.com/photo-1618365908648-e71bd5716cba?q=80&w=2070&auto=format&fit=crop',
    logoText: 'SKILL TREE',
    description:
      'Full-stack arsenal: Angular, TypeScript, .NET Core, Node.js, Python, Azure, Docker, Terraform, and Figma. Microsoft Certified Azure Developer Associate.',
    primaryAction: 'View All Skills',
  },
  {
    id: 'experience',
    title: 'Activity',
    subtitle: 'Career History',
    icon: Code2,
    bgImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
    logoText: 'CAREER LOG',
    description:
      'Engineer at Schneider Electric (2022–2025). Pursuing M.Tech Software Engineering at MIT Manipal (8.6 CGPA). Microsoft Certified Azure Developer Associate (2024).',
    primaryAction: 'View Timeline',
  },
  {
    id: 'contact',
    title: 'Friends',
    subtitle: 'Network & Contact',
    icon: Mail,
    bgImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop',
    logoText: 'MULTIPLAYER',
    description:
      'Looking for a co-op partner? Connect on GitHub, LinkedIn, or drop a direct message to start a new professional collaboration.',
    primaryAction: 'Send Message',
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: 'Blueprints App',
    type: 'Full Stack',
    completion: '100%',
    tech: 'Angular · .NET · MongoDB · Azure',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Azure Dashboards',
    type: 'Frontend',
    completion: '100%',
    tech: 'Angular · Highcharts · Grafana',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Inventory Builder',
    type: 'Frontend',
    completion: '100%',
    tech: 'Angular · Python · Azure',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'CI/CD Automation',
    type: 'DevOps',
    completion: '100%',
    tech: 'Python · GitHub Actions · Terraform · Jira',
    image: 'https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Org Provisioning API',
    type: 'Backend',
    completion: '100%',
    tech: '.NET · Azure · RBAC',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 6,
    title: 'ML VM Optimizer',
    type: 'ML / Python',
    completion: '100%',
    tech: 'Python · Azure Monitor · ML',
    image: 'https://images.unsplash.com/photo-1618365908648-e71bd5716cba?q=80&w=800&auto=format&fit=crop',
  },
];

export const SKILLS = [
  { id: 1, title: 'Frontend',      grade: 'Platinum', desc: 'Angular · TypeScript · D3.js · Tailwind · Bootstrap · HTML/CSS',          icon: Code2,    color: 'text-blue-300'   },
  { id: 2, title: 'Backend',       grade: 'Gold',     desc: '.NET Core · C# · Node.js · Express.js · Python · LINQ',                   icon: Settings, color: 'text-yellow-400' },
  { id: 3, title: 'Databases',     grade: 'Gold',     desc: 'MongoDB · MySQL · Azure Cosmos DB',                                       icon: Star,     color: 'text-yellow-400' },
  { id: 4, title: 'DevOps & Cloud',grade: 'Platinum', desc: 'Azure · Docker · Terraform · GitHub Actions · Azure DevOps · Linux',      icon: Wifi,     color: 'text-blue-300'   },
  { id: 5, title: 'UI/UX Design',  grade: 'Silver',   desc: 'Figma · Adobe Creative Suite · Canva',                                    icon: Gamepad2, color: 'text-gray-300'   },
  { id: 6, title: 'Azure Certified',grade: 'Platinum',desc: 'Azure Developer Associate · ID: 995510485 · Passed 2024',                 icon: Trophy,   color: 'text-blue-300'   },
];

export const ACHIEVEMENTS = [
  { id: 1, label: 'Best Graduate Engineer Trainee',      year: '2022', color: 'text-yellow-400' },
  { id: 2, label: 'Accelerator Award',                   year: '2024', color: 'text-yellow-400' },
  { id: 3, label: 'Azure Developer Associate',           year: '2024', color: 'text-blue-300'   },
  { id: 4, label: 'R&D Day – 1st Place',                 year: '2023', color: 'text-green-400'  },
  { id: 5, label: 'AI/ML Research Paper – ETAP Recognition', year: '2024', color: 'text-purple-400' },
];

export const EXPERIENCE = [
  {
    id: 1,
    role: 'Engineer',
    company: 'Schneider Electric',
    period: '2022 – 2025',
    highlights: [
      'Blueprints App — Azure infra design & deployment tool',
      'Azure Dashboards — real-time cloud monitoring',
      'Org API — reduced provisioning 97% (2 days → 45 min)',
      'CI/CD — automated 25+ Azure resources via Terraform',
      'ML VM Optimizer — cost savings via Python & Azure Monitor',
    ],
  },
  {
    id: 2,
    role: 'M.Tech Software Engineering',
    company: 'MIT Manipal, Karnataka',
    period: '2023 – 2025',
    highlights: ['8.6 CGPA (as of 2nd Semester)', 'Pursuing'],
  },
  {
    id: 3,
    role: 'B.Tech Electronics & Communication',
    company: 'CMR Institute of Technology, Karnataka',
    period: '2018 – 2022',
    highlights: ['7.45 CGPA'],
  },
];
