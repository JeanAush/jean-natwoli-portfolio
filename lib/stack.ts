export interface StackTechnology {
  name: string;
  context?: string;
}

export interface StackCategory {
  id: string;
  label: string;
  description: string;
  technologies: StackTechnology[];
}

export const stackCategories: StackCategory[] = [
  {
    id: "frontend",
    label: "frontend",
    description: "Interfaces and client-side tools represented in portfolio projects.",
    technologies: [
      { name: "React.js" }, { name: "Next.js" }, { name: "TypeScript" },
      { name: "React Router" }, { name: "Tailwind CSS" }, { name: "Lucide" },
      { name: "Goober" }, { name: "Expo Go" }, { name: "Flutter" },
    ],
  },
  {
    id: "backend",
    label: "backend",
    description: "Application frameworks, APIs, and services across the project stack.",
    technologies: [
      { name: "Node.js" }, { name: "Express.js" }, { name: "Django" },
      { name: "Flask" }, { name: "PHP" }, { name: "REST APIs" },
      { name: "Multer" }, { name: "JWT" }, { name: "bcryptjs" },
    ],
  },
  {
    id: "database",
    label: "database",
    description: "Database and data-analysis technologies documented across projects and experience.",
    technologies: [
      { name: "MySQL" }, { name: "PostgreSQL" }, { name: "Prisma" },
    ],
  },
  {
    id: "devops",
    label: "devops",
    description: "Container, cloud, automation, and infrastructure tools listed in your CV.",
    technologies: [
      { name: "Docker", context: "Used to containerize and manage development environments." },
      { name: "AWS" }, { name: "Azure" },
      { name: "Jenkins", context: "Used to build CI/CD pipelines during DevOps training." },
      { name: "Kubernetes" }, { name: "Nginx" }, { name: "HTTP/3" },
    ],
  },
  {
    id: "payments",
    label: "payments",
    description: "Payment services documented in C2B and B2B project workflows.",
    technologies: [
      { name: "M-Pesa", context: "Payment workflows include C2B and B2B transactions." },
      { name: "Paystack", context: "Payment workflows include C2B and B2B transactions." },
    ],
  },
  {
    id: "data",
    label: "data",
    description: "Data analysis technologies represented in organizational data systems and experience.",
    technologies: [{ name: "Python" }, { name: "R" }, { name: "RStudio" }],
  },
  {
    id: "integrations",
    label: "integrations",
    description: "External services and platforms listed with the systems in this portfolio.",
    technologies: [
      { name: "Microsoft Dynamics 365" }, { name: "ACLED" },
      { name: "Mailjet" }, { name: "Advanta SMS" },
      { name: "Cloudinary" }, { name: "OpenAI API" },
    ],
  },
];
