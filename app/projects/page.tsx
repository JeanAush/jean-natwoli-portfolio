import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export const metadata: Metadata = { title: "Projects | Jean Natwoli", description: "Enterprise systems, payment integrations, data platforms, and public websites built and supported by Jean Natwoli." };

export default function Projects() {
  const featured = projects.filter((project) => project.featured);
  const additional = projects.filter((project) => !project.featured);
  return <div className="mx-auto max-w-7xl px-6 pb-20 pt-28 sm:pt-36">
    <header className="mb-12 max-w-3xl"><p className="section-kicker">SELECTED ENGINEERING WORK</p><h1 className="section-title text-4xl sm:text-5xl">Projects & Systems</h1><p className="mt-4 leading-relaxed text-gray-400">A selection of enterprise applications, integrations, data tools, and public platforms. Project descriptions reflect the information currently available.</p></header>
    <section aria-labelledby="featured-projects"><h2 id="featured-projects" className="mb-5 font-mono text-xs tracking-widest text-accent-light">FEATURED SYSTEMS</h2><div className="grid gap-5 md:grid-cols-2">{featured.map((project) => <ProjectCard key={project.id} project={project} />)}</div></section>
    <section className="mt-16" aria-labelledby="more-projects"><h2 id="more-projects" className="mb-5 font-mono text-xs tracking-widest text-accent-light">ADDITIONAL SYSTEMS</h2><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{additional.map((project) => <ProjectCard key={project.id} project={project} />)}</div></section>
  </div>;
}
