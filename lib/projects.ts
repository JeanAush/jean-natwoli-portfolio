export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  shortDescription: string;
  technologies: string[];
  featured: boolean;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: "ncic-finance-procurement",
    number: "01",
    title: "NCIC Finance & Procurement System",
    category: "Enterprise Finance Platform",
    shortDescription: "An organizational finance application supporting payment workflows that include payroll and vendor payments.",
    technologies: ["Next.js", "Paystack", "Microsoft Dynamics 365"],
    featured: true,
  },
  {
    id: "payment-gateway-integrations",
    number: "02",
    title: "Payment Gateway Integrations",
    category: "Payments & API Engineering",
    shortDescription: "Payment workflows using M-Pesa and Paystack across multiple applications, supporting C2B and B2B transactions.",
    technologies: ["M-Pesa", "Paystack", "Node.js", "Django"],
    featured: true,
  },
  {
    id: "executive-scheduling-board-governance",
    number: "03",
    title: "Executive Scheduling & Board Governance Platform",
    category: "Enterprise Applications",
    shortDescription: "A scheduling platform for executive appointments and board meetings, with digital voting and meeting document management.",
    technologies: ["Expo Go", "MySQL", "Mailjet", "Advanta SMS", "REST APIs"],
    featured: true,
  },
  {
    id: "ncic-early-warning",
    number: "04",
    title: "NCIC Early Warning System",
    category: "Public Data Platform",
    shortDescription: "A public-facing early-warning platform using social crawling and the ACLED API.",
    technologies: ["Social crawling", "ACLED API", "Next.js", "Lucide", "Tailwind CSS", "Django", "D3.js"],
    featured: true,
    liveUrl: "https://ews.cohesion.go.ke",
  },
  {
    id: "ncic-main-website",
    number: "05",
    title: "NCIC Main Website",
    category: "Public Platform",
    shortDescription: "Development and maintenance of the Commission's public website and digital platforms.",
    technologies: ["React", "TypeScript", "Node.js", "Express.js", "Prisma", "Docker", "Nginx", "Multer", "JWT", "bcryptjs", "MySQL",],
    featured: false,
    liveUrl: "https://cohesion.go.ke",
  },
  {
    id: "ncic-performance-appraisal",
    number: "06",
    title: "NCIC Performance Appraisal System",
    category: "Enterprise HR System",
    shortDescription: "An organizational HR system for managing and evaluating employee performance.",
    technologies: ["Django", "Microsoft Dynamics 365"],
    featured: false,
  },
  {
    id: "ncic-data-management",
    number: "07",
    title: "NCIC Data Management System",
    category: "Data Engineering & Analytics",
    shortDescription: "A system for data entry, cleaning, analysis, and reporting with RStudio integration.",
    technologies: ["Python", "RStudio"],
    featured: false,
  },
  {
    id: "amani-clubs",
    number: "08",
    title: "Amani Clubs Website",
    category: "Public & Community Platform",
    shortDescription: "A public platform connecting youth and schools with peace-building activities.",
    technologies: ["React", "TypeScript", "Node.js", "Express.js", "Prisma", "Docker", "Nginx", "Multer", "JWT", "bcryptjs", "MySQL",],
    featured: false,
    liveUrl: "https://amaniclubs.cohesion.go.ke",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
