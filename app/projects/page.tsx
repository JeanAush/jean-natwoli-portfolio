interface Project {
  title: string;
  description: string;
  tags: string[];
  category: string;
}

const projects: Project[] = [
  {
    title: "NCIC Finance & Procurement System",
    category: "Enterprise App",
    description: "An internal application used to handle organizational payments, including payroll processing and vendor payments. Built with high-security standards to ensure accurate financial tracking and reporting.",
    tags: ["Payments", "Payroll", "Internal Tools", "Secure Data"]
  },
  {
    title: "Payment Gateway Integrations",
    category: "Integrations",
    description: "Successfully integrated Mpesa APIs and card payment processing via Paystack into various applications, enabling seamless C2B and B2B transactions.",
    tags: ["Mpesa", "Paystack", "Node.js", "Django"]
  },
  {
    title: "CEO Schedule & Board Voting App",
    category: "Enterprise App",
    description: "An internal app to manage the CEO's schedule, set up Commissioners' board meetings, enable secure digital voting during meetings, and store meeting documents securely.",
    tags: ["Scheduling", "Voting System", "Document Security"]
  },
  {
    title: "NCIC Data Management System",
    category: "Data Engineering",
    description: "An application used for filling, cleaning up, and analyzing data. Integrated with RStudio for advanced statistical analysis and reporting.",
    tags: ["Data Analysis", "RStudio", "Python"]
  },
  {
    title: "NCIC Performance Appraisal System",
    category: "Enterprise App",
    description: "A comprehensive HR tool used to track, manage, and evaluate employee performance across the organization.",
    tags: ["HR Tech", "Internal Tools"]
  },
  {
    title: "NCIC Early Warning System (EWS)",
    category: "Web Platform",
    description: "Public-facing platform (ews.cohesion.go.ke) used to track and report early warning signs of conflict to promote national cohesion.",
    tags: ["Public Web", "Data Tracking"]
  },
  {
    title: "NCIC Main Website",
    category: "Web Platform",
    description: "Designed and developed the primary organizational website (cohesion.go.ke) to reflect the brand and mandate of NCIC.",
    tags: ["CMS", "Web Development"]
  },
  {
    title: "Amani Clubs Website",
    category: "Web Platform",
    description: "Platform for Amani Clubs (amaniclubs.cohesion.go.ke) to engage youth and schools in peace-building activities.",
    tags: ["Web Development", "Community"]
  },
  {
    title: "Amuse Kenya Website",
    category: "Web Platform",
    description: "Developed amusekenya.co.ke, a platform dedicated to entertainment and events in Kenya.",
    tags: ["Web Development", "Events"]
  }
];

export default function Projects() {
  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-6">
      <h2 className="font-mono text-sm text-accent-light mb-4 tracking-widest">// FEATURED_WORK</h2>
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-12">Selected Projects & Systems</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="glass-panel p-8 flex flex-col group hover:bg-white/[0.05] transition-all duration-300 hover:shadow-[0_0_40px_-10px_var(--color-accent-glow)]">
            <span className="font-mono text-xs text-accent-light mb-4">{project.category}</span>
            <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-accent-light transition-colors">{project.title}</h3>
            <p className="text-gray-400 flex-grow mb-6 leading-relaxed text-sm">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span key={i} className="tech-tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}