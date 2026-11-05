export interface ClientService {
  number: string;
  id: string;
  title: string;
  subtitle: string;
  description: string;
  clientBenefit: string;
  deliverables: string[];
  tools: string[];
  icon: string;
}

export interface ClientProject {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  problem?: string;
  solution?: string;
  role?: string;
  highlights: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  screenshot?: string;
  screenshots?: string[];
  isInstitutional?: boolean;
}

export interface ExperienceItem {
  period: string;
  company: string;
  role: string;
  description: string;
  linkText?: string;
  linkUrl?: string;
  badge?: string;
}

export interface ToolItem {
  name: string;
  icon: string;
}

export interface ToolCategory {
  title: string;
  tools: ToolItem[];
}

export interface ClientStandard {
  number: string;
  title: string;
  summary: string;
}

export interface LiveProduct {
  id: string;
  title: string;
  officialName: string;
  tagline: string;
  category: string;
  deployedUrl: string;
  githubUrl?: string;
  summary: string;
  problem: string;
  solution: string;
  features: string[];
  techStack: string[];
  keyHighlights: string[];
  contributionNote?: string;
  screenType: 'imagefit' | 'hucms' | 'tehatech' | 'huis';
  screenshot: string;
}

export interface InstitutionalSystem {
  id: string;
  title: string;
  code: string;
  tagline: string;
  category: string;
  status: string;
  overview: string;
  hamzaContribution: string;
  coreModules: {
    name: string;
    description: string;
  }[];
  architectureHighlights: string[];
  techStack: string[];
  impactMetric: string;
}

export interface DevelopmentProject {
  id: string;
  title: string;
  tagline: string;
  category: string;
  period: string;
  description: string;
  architectureHighlights: string[];
  techStack: string[];
  features: string[];
  githubUrl?: string;
  stats: { label: string; value: string }[];
}

export interface Service {
  number: string;
  title: string;
  subtitle: string;
  summary: string;
  deliverables: string[];
  accentGradient: string;
  iconName: string;
}

export interface TechnologyItem {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tooling';
  experienceLevel: 'Comfortable' | 'In Active Projects' | 'Continuous Learning';
  highlight: string;
  icon: string;
}

export interface EducationMilestone {
  institution: string;
  degree: string;
  period: string;
  location: string;
  description: string;
  coursework: string[];
  type: 'university' | 'systems-lab';
}

export const PORTFOLIO_DATA = {
  brand: {
    name: 'HAMZA TEHA',
    logoName: 'Hamza',
    title: 'Full-Stack Developer · Video Editor · Graphic Designer',
    academicTitle: 'Third-Year Information Technology Student',
    academicInstitution: 'Haramaya University, Ethiopia',
    headline: 'HAMZA TEHA',
    subheadline:
      'Freelance Full-Stack Developer, Video Editor & Graphic Designer. Creating modern web applications, high-impact video content, and refined visual design for businesses and creators.',
    shortBio:
      'Freelance Full-Stack Developer, Video Editor, and Graphic Designer based at Haramaya University, Ethiopia. Dedicated to building reliable digital products, compelling multimedia, and clean user-centered design.',
    status: 'Available for Hire',
    statusDetail: 'Open for freelance web development contracts, video editing projects, and graphic design opportunities.',
    primaryAction: 'Start a Project',
    location: 'Haramaya University, Ethiopia',
    email: 'hamzatehafeko8@gmail.com',
    github: 'https://github.com/hamzatehafeko8-boop',
    linkedin: 'https://linkedin.com/in/hamzateha',
    telegram: 'https://t.me/hamzateha',
  },

  navigation: [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Tools', href: '#tools' },
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ],

  // ==========================================
  // ABOUT SECTION METRICS & NARRATIVE (Ref: miftahfentaw.site #about)
  // ==========================================
  aboutStats: [
    { value: '3+', label: 'Years Experience' },
    { value: '10+', label: 'Projects Built' },
    { value: '100%', label: 'Client Commitment' },
  ],

  aboutHeadline: 'Crafting scalable web systems, dynamic video content, and refined design.',
  aboutParagraphs: [
    'I take complex business requirements and engineer systems that perform. From designing resilient full-stack architectures and responsive user interfaces to editing high-retention video content, I focus on delivering digital experiences that solve real-world problems.',
    'I own the entire creative and technical lifecycle—from initial wireframing and design through code and live deployment—ensuring dependable delivery, high reliability, and a seamless client experience.',
  ],

  // ==========================================
  // EXPERIENCE TIMELINE (Ref: miftahfentaw.site #experience)
  // ==========================================
  experiences: [
    {
      period: '2024 – Present',
      company: 'Freelance & Independent Client Work',
      role: 'Full-Stack Developer & Creative Specialist',
      description:
        'Delivering custom web applications, responsive business landing pages, and post-production video editing for clients and creators worldwide. Focused on clean code, transparent communication, and dependable delivery across React, Next.js, and Node.js.',
      linkText: 'Inquire for freelance work →',
      linkUrl: '#contact',
    },
    {
      period: '2024 – Present',
      company: 'TEHA TECH Creator Studio',
      role: 'Platform Architect & Video Content Lead',
      description:
        'Architected and deployed the Creator Command Center web platform—a bilingual structured digital studio offering 4-week production roadmaps and content workflows. Managing video post-production, motion graphics, and publishing schedules.',
      linkText: 'Explore TEHA TECH platform →',
      linkUrl: 'https://tehatech-creator-commend-center.vercel.app/',
    },
    {
      period: '2023 – Present',
      company: 'Haramaya University, Ethiopia',
      role: 'Information Technology Scholar & Systems Developer',
      description:
        'Third-year undergraduate training in Information Technology. Designed relational database schemas for institutional management systems, collaborative inventory platforms (HUIS), and educational platforms.',
      linkText: 'View institutional architectures →',
      linkUrl: '#work',
    },
  ] as ExperienceItem[],

  // ==========================================
  // CATEGORIZED TOOLS (Ref: miftahfentaw.site #tools)
  // ==========================================
  toolCategories: [
    {
      title: 'Web & Frontend Development',
      tools: [
        { name: 'React', icon: 'react' },
        { name: 'Next.js', icon: 'nextjs' },
        { name: 'TypeScript', icon: 'typescript' },
        { name: 'JavaScript', icon: 'javascript' },
        { name: 'Tailwind CSS', icon: 'tailwind' },
        { name: 'HTML5 & CSS3', icon: 'html5' },
      ],
    },
    {
      title: 'Backend & Data Architecture',
      tools: [
        { name: 'Node.js', icon: 'nodejs' },
        { name: 'Express.js', icon: 'express' },
        { name: 'PostgreSQL', icon: 'postgresql' },
        { name: 'MySQL', icon: 'mysql' },
        { name: 'REST APIs', icon: 'api' },
        { name: 'Git & GitHub', icon: 'git' },
      ],
    },
    {
      title: 'Graphic & UI/UX Design',
      tools: [
        { name: 'Figma', icon: 'figma' },
        { name: 'Adobe Photoshop', icon: 'photoshop' },
        { name: 'Adobe Illustrator', icon: 'illustrator' },
        { name: 'Design Systems', icon: 'design' },
      ],
    },
    {
      title: 'Video Editing & Motion',
      tools: [
        { name: 'Premiere Pro', icon: 'premiere' },
        { name: 'After Effects', icon: 'aftereffects' },
        { name: 'DaVinci Resolve', icon: 'davinci' },
        { name: 'Audio Mastering', icon: 'audition' },
      ],
    },
  ] as ToolCategory[],

  // ==========================================
  // SERVICES ("What I Do") (Ref: miftahfentaw.site #services)
  // ==========================================
  clientServices: [
    {
      number: '01',
      id: 'web-development',
      title: 'End-to-End Web Engineering',
      subtitle: 'Modern Web Applications, Business Sites & Custom Landing Pages',
      description:
        'Transform complex business requirements into fast, production-ready web applications with scalable architectures, responsive mobile layouts, and modern Next.js/React frameworks.',
      clientBenefit:
        'Deliver lightning-fast load times, flawless mobile responsiveness, and clean maintainable code built to scale seamlessly as your business grows.',
      deliverables: [
        'Custom React & Next.js Web Applications',
        'High-Converting Landing Pages & Portfolios',
        'Full-Stack API Design & Database Integration',
        'Responsive Mobile-First UI & Technical SEO',
      ],
      tools: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'PostgreSQL'],
      icon: 'code',
    },
    {
      number: '02',
      id: 'video-editing',
      title: 'Dynamic Video Editing & Production',
      subtitle: 'Engaging Content, Product Demos & Visual Storytelling',
      description:
        'High-retention video post-production tailored for technology educators, creators, brands, and digital products. Structured storytelling with rhythmic pacing, motion graphics, and clean audio.',
      clientBenefit:
        'Hold viewer attention, communicate complex ideas simply, and reinforce brand authority with professional pacing, motion graphics, and crisp sound design.',
      deliverables: [
        'YouTube & Social Media Video Editing',
        'Product Walkthroughs & Tech Demonstrations',
        'Motion Graphics & Animated Callouts',
        'Audio Mastering, Sound Design & Color Grading',
      ],
      tools: ['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Audition'],
      icon: 'video',
    },
    {
      number: '03',
      id: 'graphic-design',
      title: 'Brand Identity & UI/UX Design',
      subtitle: 'Brand Systems, Figma UI Layouts & Digital Marketing Assets',
      description:
        'Intentional visual design that establishes instant credibility. Thoughtful typography, refined color palettes, and intuitive interface layouts crafted in Figma.',
      clientBenefit:
        'Make a lasting impression with cohesive visual branding, accessible user interfaces, and marketing assets that build customer confidence and drive action.',
      deliverables: [
        'UI/UX Web & Mobile Interface Design in Figma',
        'Brand Identity, Wordmarks & Visual Systems',
        'Marketing Creatives, Thumbnails & Social Banners',
        'Design Systems & Component Style Guides',
      ],
      tools: ['Figma', 'Photoshop', 'Illustrator', 'Design Systems'],
      icon: 'palette',
    },
    {
      number: '04',
      id: 'backend-systems',
      title: 'Backend Architecture & Database Modeling',
      subtitle: 'Resilient Server APIs, Relational Schemas & System Integration',
      description:
        'Architecting structured Node.js / Express backends and ACID-compliant relational databases (PostgreSQL / MySQL) designed for security, integrity, and predictable response times.',
      clientBenefit:
        'Ensure user data integrity, robust role-based access control (RBAC), and reliable API performance under real-world operational loads.',
      deliverables: [
        'RESTful API Route & Controller Engineering',
        'Relational Data Schemas & Migrations (SQL)',
        'Role-Based Access Governance (RBAC)',
        'Input Validation & Error Recovery Protocols',
      ],
      tools: ['Node.js', 'Express', 'PostgreSQL', 'MySQL', 'REST APIs'],
      icon: 'server',
    },
  ] as ClientService[],

  // ==========================================
  // SELECTED CLIENT & DEPLOYED WORK (Ref: miftahfentaw.site #work)
  // ==========================================
  selectedProjects: [
    {
      id: 'hucms',
      title: 'HU CMS — Clinic Management System',
      category: 'Healthcare Operations Platform',
      tagline: 'Comprehensive Clinic OS for Patient Intake & Medical Records',
      description:
        'A full-featured clinic management platform engineered for medical centers and campus clinics. Streamlines patient intake, doctor scheduling, electronic medical records (EMR), and prescription tracking into a single unified workspace.',
      problem:
        'Medical centers and campus health services faced severe operational bottlenecks due to paper-based intake forms, lost clinical histories, and conflicting doctor consultation schedules.',
      solution:
        'Engineered an integrated clinical operating system providing unified electronic medical records (EMR), automated patient registration, doctor scheduling, and clinical consultation workflows.',
      role: 'Frontend Architect & Full-Stack Developer — built the responsive UI, client-side session state management, clinical record schemas, and doctor consultation workflows.',
      highlights: [
        'Unified role-based dashboards for administrators, doctors, and staff',
        'Centralized electronic medical records (EMR) & clinical notes',
        'Interactive appointment scheduling & patient directory',
      ],
      techStack: ['JavaScript (ES6+)', 'Modern Semantic UI', 'CSS3 Architecture', 'Session Storage'],
      liveUrl: 'https://hucms.vercel.app/',
      screenshot: '/screenshots/hucms.png',
      screenshots: ['/screenshots/hucms.png'],
    },
    {
      id: 'tehatech',
      title: 'TEHA TECH — Creator Command Center',
      category: 'Digital Studio & Educational Platform',
      tagline: 'Bilingual Technology Creator Suite & Production Roadmap',
      description:
        'A dedicated educational platform and production studio engineered for digital technology creators. Combines structured multi-week curriculums, video planning engines, and publishing calendars with bilingual interface support.',
      problem:
        'Independent content creators and IT students lacked a centralized system to organize video scripts, track multi-week technical roadmaps, and toggle bilingual instructional materials.',
      solution:
        'Developed a bilingual studio platform combining structured curriculum milestones, video production checklists, script planning workspaces, and fast responsive navigation.',
      role: 'Platform Architect, UI/UX Designer & Lead Developer — designed the Figma component system, built the React/Vite architecture, integrated TanStack Router, and authored bilingual Afaan Oromoo/English curriculum modules.',
      highlights: [
        'Bilingual interface supporting Afaan Oromoo and English',
        'Step-by-step video production planners & script structuring workspaces',
        'Responsive dark/light interface system with fast client routing',
      ],
      techStack: ['React', 'Vite', 'Tailwind CSS', 'TanStack Router', 'Lucide'],
      liveUrl: 'https://tehatech-creator-commend-center.vercel.app/',
      screenshot: '/screenshots/tehatech.png',
      screenshots: ['/screenshots/tehatech.png'],
    },
    {
      id: 'huis',
      title: 'HUIS — Inventory Management System',
      category: 'Campus Asset & Voucher Management',
      tagline: 'Centralized Asset Tracking & Storekeeper Voucher Workflow',
      description:
        'A property tracking and inventory web platform built to eliminate manual paperwork in university departments. Manages item registries, automatic stock valuation, and storekeeper voucher accountability.',
      problem:
        'University department storekeepers relied on paper vouchers and manual logbooks, causing equipment tracking discrepancies, missing audit trails, and inaccurate valuation metrics.',
      solution:
        'Engineered an automated asset management ledger with instant category filtering, real-time stock valuation computation, and structured digital issuance/return vouchers.',
      role: 'Full-Stack Developer & Database Modeler — implemented relational item data schemas, automatic balance calculation logic, persistent storekeeper records, and mobile-friendly data tables.',
      highlights: [
        'Automated asset valuation aggregation across campus departments',
        'Structured item issuance & return voucher tracking system',
        'Responsive data management tables with secure administrative access',
      ],
      techStack: ['JavaScript (ES6+)', 'HTML5', 'Responsive CSS', 'Data Persistence'],
      liveUrl: 'https://huis-inky.vercel.app/',
      screenshot: '/screenshots/huis.png',
      screenshots: ['/screenshots/huis.png'],
    },
    {
      id: 'imagefit',
      title: 'ImageFit — Aspect Ratio & Scaling Utility',
      category: 'Digital Media Processing Utility',
      tagline: 'Client-Side Image Fitting, Aspect Ratio Adjustment & Scaling',
      description:
        'A browser-based image aspect ratio and scaling utility designed for designers, developers, and creators to quickly format imagery without quality loss or server uploads.',
      problem:
        'Content creators and web developers waste time launching heavy desktop software or uploading sensitive assets to ad-supported online tools just to crop and scale pictures to exact specifications.',
      solution:
        'Engineered a zero-dependency client-side utility leveraging HTML5 Canvas to instantly scale, crop, and fit imagery into standard social and web dimensions directly inside the browser.',
      role: 'Solo Developer — created the client-side canvas processing pipeline, preset aspect ratio algorithms, responsive drag-and-drop file interface, and instant export routines.',
      highlights: [
        'Zero-server processing ensuring complete client privacy',
        'Preset aspect ratios for standard web, social media, and banner formats',
        'Instant lossless image export directly in-browser',
      ],
      techStack: ['JavaScript (ES6+)', 'HTML5 Canvas API', 'CSS Grid', 'Vercel'],
      liveUrl: 'https://imagefitv1-d8bx.vercel.app/',
      screenshot: '/screenshots/imagefit.png',
      screenshots: ['/screenshots/imagefit.png'],
    },
    {
      id: 'institutional',
      title: 'SIEC & SMS — Institutional System Architectures',
      category: 'Large-Scale Institutional Software',
      tagline: 'Relational Database Modeling & Academic Operations Platforms',
      description:
        'Verified software engineering architectures designed for large-scale institutional operations: the Islamic Education Center System (SIEC) and School Management System (SMS). Engineered with ACID-compliant relational schemas and role-based access control.',
      problem:
        'Large academic and religious institutions struggled with scheduling clashes, duplicate student demographic entries, grade calculation discrepancies, and vulnerable record storage.',
      solution:
        'Architected normalized relational schemas (3NF) with foreign key constraints, role-based access control (RBAC), and automated GPA/transcript calculation services.',
      role: 'Database Modeler & Backend Systems Architect — drafted entity-relationship diagrams (ERDs), SQL normalization schemas, transaction management, and secure API contract definitions.',
      highlights: [
        'Normalized relational schemas preventing scheduling collisions & duplicate records',
        'Permission-governed role access across administrators, teachers, and registrars',
        'Automated GPA calculations, academic transcripts, and report card publishing',
      ],
      techStack: ['Relational Database (SQL)', 'Node.js', 'REST APIs', 'System Architecture'],
      isInstitutional: true,
    },
  ] as ClientProject[],

  // ==========================================
  // CLIENT CONFIDENCE & WORK STANDARDS
  // ==========================================
  standards: [
    {
      number: '01',
      title: 'End-to-End Ownership',
      summary:
        'From initial concept through visual design, development, and live deployment, I manage the complete project lifecycle so you have a single accountable partner.',
    },
    {
      number: '02',
      title: 'Clean, Scalable Architecture',
      summary:
        'No shortcuts or disposable code. Every application is built with clean separation of concerns, modern standards, and scalable foundations that last.',
    },
    {
      number: '03',
      title: 'Transparent Communication',
      summary:
        'Clear milestones, regular progress updates, and dependable delivery timelines. You always know exactly where your project stands.',
    },
    {
      number: '04',
      title: 'Performance & Detail-Obsessed',
      summary:
        'Fast page loads, fluid mobile responsiveness, intentional typography, and polished user experiences crafted to build trust and drive conversions.',
    },
  ] as ClientStandard[],

  // Legacy compatibility exports to ensure no external references break
  liveProducts: [
    {
      id: 'hucms',
      title: 'HU CMS',
      officialName: 'HU CMS — Clinic Management System',
      tagline: 'Comprehensive Healthcare Center Operational Platform',
      category: 'Clinical Administration System',
      deployedUrl: 'https://hucms.vercel.app/',
      summary: 'A full-featured clinic management system for patient intake, scheduling, and medical records.',
      problem: 'Paper-based patient records and clinical bottlenecks.',
      solution: 'A unified clinic management workspace with role-based dashboards.',
      features: ['Patient Intake', 'Doctor Rostering', 'Appointment Booking', 'EMR Records'],
      techStack: ['JavaScript', 'CSS3', 'HTML5'],
      keyHighlights: ['Complete end-to-end workflow', 'Role-based access'],
      screenType: 'hucms',
      screenshot: '/screenshots/hucms.png',
    },
    {
      id: 'tehatech',
      title: 'TEHA TECH',
      officialName: 'TEHA TECH — Creator Command Center',
      tagline: 'Creator Studio & Roadmap Platform',
      category: 'Content Operations & Creator Studio',
      deployedUrl: 'https://tehatech-creator-commend-center.vercel.app/',
      summary: 'A digital workspace and curriculum for technology content creators.',
      problem: 'Disorganized production workflows.',
      solution: 'Bilingual creator studio with production planners.',
      features: ['Roadmap', 'Video Planner', 'Bilingual Support'],
      techStack: ['React', 'Tailwind CSS', 'Vite'],
      keyHighlights: ['Bilingual Afaan Oromoo & English', 'Integrated production checklists'],
      screenType: 'tehatech',
      screenshot: '/screenshots/tehatech.png',
    },
    {
      id: 'huis',
      title: 'HUIS',
      officialName: 'HUIS — Inventory Management System',
      tagline: 'University Property & Asset Tracking',
      category: 'Academic Asset Management',
      deployedUrl: 'https://huis-inky.vercel.app/',
      summary: 'Centralized inventory tracking and voucher management.',
      problem: 'Lost equipment and manual vouchers.',
      solution: 'Automated valuation and voucher registry.',
      features: ['Registry', 'Value Calculation', 'Voucher Records'],
      techStack: ['JavaScript', 'HTML5', 'CSS'],
      keyHighlights: ['Direct value calculation', 'Structured vouchers'],
      screenType: 'huis',
      screenshot: '/screenshots/huis.png',
    },
  ] as LiveProduct[],

  institutionalSystems: [
    {
      id: 'siec',
      title: 'SIEC — Islamic Education Center System',
      code: 'SIEC-SYSTEM',
      tagline: 'Institutional Academic & Quranic Progress Management System',
      category: 'Institutional Education Management System',
      status: 'Institutional Academic System Design',
      overview: 'Specialized institutional management platform for student enrollment and progress tracking.',
      hamzaContribution: 'Developer & Relational Database Modeler',
      coreModules: [{ name: 'Registry', description: 'Student & family profiles' }],
      architectureHighlights: ['Relational schema', 'Normalized grading'],
      techStack: ['Full-Stack Web', 'SQL Schema', 'REST API'],
      impactMetric: 'Institutional Record Architecture',
    },
    {
      id: 'sms',
      title: 'SMS — School Management System',
      code: 'SMS-SYSTEM',
      tagline: 'Academic Operations & Student Information System (SIS)',
      category: 'School Administration Platform',
      status: 'Institutional Academic System Design',
      overview: 'Comprehensive school management system for academic operations and registrar records.',
      hamzaContribution: 'Developer & Database Modeler',
      coreModules: [{ name: 'Registrar', description: 'Student records & GPA' }],
      architectureHighlights: ['RBAC permissions', 'ACID-compliant design'],
      techStack: ['Relational Database (SQL)', 'Node.js', 'REST APIs'],
      impactMetric: 'Multi-Role Institutional ERP',
    },
  ] as InstitutionalSystem[],

  academicProjects: [] as DevelopmentProject[],
  technologies: [] as TechnologyItem[],
  services: [] as Service[],
  education: [] as EducationMilestone[],
  creativeCapabilities: [] as { title: string; tool: string; description: string }[],
};
