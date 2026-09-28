import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Blocks, CreditCard, Database, PlugZap } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { featuredProjects } from "@/lib/projects";

const capabilities = [
  { title: "Enterprise Applications", text: "Internal systems that support organizational workflows, from scheduling to finance and HR.", Icon: Blocks },
  { title: "Financial & Payment Systems", text: "Payment integrations and transaction workflows for payroll, vendors, and C2B or B2B use cases.", Icon: CreditCard },
  { title: "Data Platforms", text: "Tools for collecting, cleaning, analysing, and reporting organizational data.", Icon: Database },
  { title: "API & System Integrations", text: "Connecting applications and external services through practical integrations and APIs.", Icon: PlugZap },
];

export default function Home() {
  return (
    <div className="pb-20 pt-28 sm:pt-36">
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-[1.15fr_0.85fr] md:gap-16">
        <div>
          <p className="mb-5 font-mono text-xs tracking-[0.2em] text-accent-light">SOFTWARE ENGINEERING · KENYA</p>
          <h1 className="mb-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl xl:text-6xl">Engineering Digital Systems That Matter</h1>
          <p className="mb-7 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg">I&apos;m Jean Natwoli, a Full-Stack Software Engineer based in Kenya. I design and build secure, data-driven applications, from enterprise finance and HR systems to payment integrations and public-facing platforms.</p>
          <p className="mb-8 max-w-2xl font-mono text-xs leading-6 text-gray-400 sm:text-sm">Enterprise Systems <span className="text-accent-light">·</span> Full-Stack Development <span className="text-accent-light">·</span> Payments <span className="text-accent-light">·</span> APIs <span className="text-accent-light">·</span> Cloud & DevOps</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/projects" className="btn-primary">View My Work <ArrowRight size={17} aria-hidden="true" /></Link>
              <Link href="/contact" className="btn-outline">Get In Touch</Link>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-sm md:justify-self-end">
          <div className="absolute -inset-3 -z-10 rounded-[2rem] border border-accent/20" />
          <Image src="/profile-portrait.jpg" alt="Jean Natwoli" width={900} height={948} priority className="aspect-[9/10] w-full rounded-2xl border border-border object-cover object-center" sizes="(max-width: 768px) 80vw, 360px" />
          <p className="mt-3 font-mono text-xs text-gray-500">FULL-STACK SOFTWARE ENGINEER <span className="text-accent-light">/</span> NAIROBI, KENYA</p>
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-7xl px-6 sm:mt-32" aria-labelledby="build-heading">
        <div className="mb-8 max-w-2xl"><p className="section-kicker">CAPABILITIES</p><h2 id="build-heading" className="section-title">What I Build</h2></div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map(({ title, text, Icon }) => <article key={title} className="glass-panel p-6"><Icon className="mb-5 text-accent-light" size={23} aria-hidden="true" /><h3 className="mb-2 font-semibold text-white">{title}</h3><p className="text-sm leading-relaxed text-gray-400">{text}</p></article>)}
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-7xl px-6 sm:mt-32" aria-labelledby="featured-heading">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4"><div><p className="section-kicker">SELECTED ENGINEERING WORK</p><h2 id="featured-heading" className="section-title">Featured Projects</h2></div><Link href="/projects" className="text-sm text-gray-300 underline decoration-border underline-offset-4 hover:text-white">All systems <ArrowRight className="ml-1 inline" size={15} aria-hidden="true" /></Link></div>
        <div className="grid gap-5 md:grid-cols-2">{featuredProjects.map((project) => <ProjectCard key={project.id} project={project} />)}</div>
      </section>

    </div>
  );
}
