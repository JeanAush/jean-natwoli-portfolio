import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import TechWorkspace from "@/components/TechWorkspace";

export const metadata: Metadata = { title: "About | Jean Natwoli", description: "Jean Natwoli is a Kenya-based Full-Stack Software Engineer building enterprise applications, integrations, APIs, data systems, and public-facing platforms." };

const specialties = [
  { title: "Enterprise Software", description: "Applications built around how organizations actually work, not how a template assumes they do." },
  { title: "Full-Stack Development", description: "Web and backend applications, from the interface down to databases and APIs." },
  { title: "Payment & API Integrations", description: "Connecting systems with payment platforms, messaging services, external APIs, and enterprise tools." },
  { title: "Data Systems", description: "Tools for managing, processing, analysing, and presenting organizational data clearly." },
  { title: "Architecture & Deployment", description: "Containerized applications, databases, and production environments designed to run reliably." },
];

export default function About() {
  return <div className="mx-auto max-w-7xl px-6 pb-20 pt-28 sm:pt-36">
    <header className="mb-14 max-w-4xl">
      <p className="section-kicker">ABOUT</p>
      <h1 className="section-title mb-7 text-4xl sm:text-5xl">Full-Stack Software Engineer</h1>
      <div className="space-y-5 text-base leading-relaxed text-gray-400 sm:text-lg">
        <p>I&apos;m a full-stack software engineer currently working at the National Cohesion and Integration Commission (NCIC), where I build the digital systems the Commission relies on every day. I like work that solves real problems for real people, and I care about software that keeps working long after launch.</p>
        <p>My work has covered enterprise applications, payment and financial systems, data platforms, governance tools, public-facing websites, and integrations between systems that were never designed to talk to each other. I&apos;m involved from start to finish, from understanding business needs and designing architecture to building, integrating, deploying, and maintaining applications.</p>
        <p>Day to day, I work with React, TypeScript, Node.js, Express.js, Python, Django, MySQL, Prisma, and Docker. I also work with REST APIs and third-party integrations.</p>
      </div>
    </header>

    <section className="mb-20" aria-labelledby="engineering-stack-heading">
      <div className="mb-7 max-w-3xl">
        <p className="section-kicker">ENGINEERING WORKSPACE</p>
        <h2 id="engineering-stack-heading" className="mb-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">I BUILD SYSTEMS, NOT JUST INTERFACES.</h2>
        <p className="text-sm leading-relaxed text-gray-400 sm:text-base">My work spans application development, APIs, databases, infrastructure, payments and data systems.</p>
      </div>
      <TechWorkspace />
    </section>

    <section className="mb-16" aria-labelledby="what-i-do-heading">
      <p className="section-kicker">CAPABILITIES</p>
      <h2 id="what-i-do-heading" className="section-title mb-6">What I Do</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {specialties.map((item) => <article className="glass-panel p-5 sm:p-6" key={item.title}><h3 className="mb-2 font-semibold text-white">{item.title}</h3><p className="text-sm leading-relaxed text-gray-400">{item.description}</p></article>)}
      </div>
    </section>

    <section className="mb-16 grid gap-8 border-y border-border py-10 md:grid-cols-2 md:gap-14" aria-labelledby="how-i-work-heading">
      <div><p className="section-kicker">APPROACH</p><h2 id="how-i-work-heading" className="section-title">How I Work</h2></div>
      <div className="space-y-4 text-sm leading-relaxed text-gray-400 sm:text-base">
        <p>For me, good software is more than code that runs. Other people should be able to understand it, trust it, and build on it as the organization changes.</p>
        <p>I start by learning the problem, the users, and the systems already in place. From there, I aim for a clear architecture, dependable integrations, and a steady focus on security and long-term maintainability.</p>
      </div>
    </section>

    <section className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end" aria-labelledby="beyond-code-heading">
      <div className="max-w-3xl"><p className="section-kicker">MOTIVATION</p><h2 id="beyond-code-heading" className="section-title mb-4">Beyond the Code</h2><div className="space-y-3 text-sm leading-relaxed text-gray-400 sm:text-base"><p>I&apos;m happiest working on projects where technology changes how an organization operates and how people access services and information.</p><p>My goal is to keep building systems that pair solid engineering with real impact.</p></div></div>
      <Link href="/contact" className="btn-outline shrink-0">Get in Touch <ArrowRight size={16} aria-hidden="true" /></Link>
    </section>
  </div>;
}
