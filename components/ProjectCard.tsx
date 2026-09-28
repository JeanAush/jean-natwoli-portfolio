import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="glass-panel flex h-full flex-col p-6 transition-all duration-200 hover:-translate-y-1 hover:border-accent/40 focus-within:border-accent/50 sm:p-7">
      <div className="mb-5 flex items-center justify-between gap-4">
        <span className="font-mono text-xs text-accent-light">{project.number} / SYSTEM</span>
        <span className="text-right text-xs text-gray-500">{project.category}</span>
      </div>
      <h3 className="mb-3 text-xl font-semibold leading-snug text-white">{project.title}</h3>
      <p className="mb-6 flex-grow text-sm leading-relaxed text-gray-400">{project.shortDescription}</p>
      <ul className="mb-6 flex flex-wrap gap-2" aria-label="Technologies">
        {project.technologies.map((technology) => <li key={technology} className="tech-tag">{technology}</li>)}
      </ul>
      {project.liveUrl && <div className="border-t border-border pt-4"><a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-300 underline decoration-border underline-offset-4 hover:text-white">Visit live site<span className="sr-only"> for {project.title}</span></a></div>}
    </article>
  );
}
