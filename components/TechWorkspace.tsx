"use client";

import { useState } from "react";
import { Check, ChevronDown, ChevronRight, Code2, FileCode2 } from "lucide-react";
import { projects } from "@/lib/projects";
import { stackCategories } from "@/lib/stack";

function normalizeTechnology(value: string) {
  return value.toLowerCase().replace(/\s+v?\d+(?:\.\d+)*$/, "").replace(/\.js$/, "").replace(/[^a-z0-9]/g, "");
}

export default function TechWorkspace() {
  const [activeId, setActiveId] = useState(stackCategories[0].id);
  const [selectedTechnology, setSelectedTechnology] = useState(stackCategories[0].technologies[0].name);
  const category = stackCategories.find((item) => item.id === activeId) ?? stackCategories[0];
  const technology = category.technologies.find((item) => item.name === selectedTechnology) ?? category.technologies[0];
  const usedInProjects = projects.filter((project) =>
    project.technologies.some((item) => normalizeTechnology(item) === normalizeTechnology(technology.name)),
  ).map((project) => project.title);

  const selectCategory = (id: string) => {
    const next = stackCategories.find((item) => item.id === id);
    if (next) {
      setActiveId(id);
      setSelectedTechnology(next.technologies[0].name);
    }
  };

  return <div className="overflow-hidden rounded-xl border border-border bg-[#090a0e] shadow-[0_16px_48px_-32px_rgba(0,0,0,0.9)]">
    <div className="flex items-center justify-between border-b border-border bg-white/[0.025] px-4 py-3">
      <div className="flex items-center gap-2" aria-hidden="true"><span className="h-2.5 w-2.5 rounded-full bg-[#ed6a5e]" /><span className="h-2.5 w-2.5 rounded-full bg-[#e4b44c]" /><span className="h-2.5 w-2.5 rounded-full bg-[#61c454]" /></div>
      <span className="font-mono text-xs text-gray-500">JEAN / ENGINEERING</span>
      <Code2 size={15} className="text-gray-500" aria-hidden="true" />
    </div>

    <div className="flex items-center gap-1 overflow-x-auto border-b border-border bg-white/[0.015] px-3 pt-2" aria-label="Open file">
      <span className="inline-flex shrink-0 items-center gap-2 rounded-t-md border border-b-0 border-border bg-[#090a0e] px-3 py-2 font-mono text-xs text-gray-200" aria-current="page"><FileCode2 size={14} className="text-accent-light" aria-hidden="true" />stack.config.ts</span>
    </div>

    <div className="grid min-w-0 md:grid-cols-[190px_minmax(0,1fr)]">
      <nav aria-label="Stack configuration categories" className="flex gap-1 overflow-x-auto border-b border-border p-3 md:flex-col md:overflow-visible md:border-b-0 md:border-r">
        <p className="hidden px-2 pb-2 font-mono text-[10px] tracking-[0.16em] text-gray-600 md:block">CONFIGURATION</p>
        {stackCategories.map((item) => <button key={item.id} type="button" aria-pressed={activeId === item.id} onMouseEnter={() => selectCategory(item.id)} onFocus={() => selectCategory(item.id)} onClick={() => selectCategory(item.id)} className={`shrink-0 rounded-md px-2.5 py-2 text-left font-mono text-xs transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-light ${activeId === item.id ? "bg-accent/10 text-accent-light" : "text-gray-500 hover:bg-white/[0.04] hover:text-gray-200"}`}><span className="mr-2 text-gray-700">{activeId === item.id ? "▾" : "▸"}</span>{item.label}</button>)}
      </nav>

      <div className="min-w-0">
        <div className="grid min-w-0 lg:grid-cols-[minmax(0,1fr)_230px]">
          <div className="min-w-0 p-4 sm:p-6">
            <div className="font-mono text-xs leading-7 sm:text-sm" aria-label={`${category.label} technologies configuration`}>
              <div className="flex gap-5 text-gray-600"><span className="w-4 select-none text-right">1</span><span><span className="text-purple-300">const</span> <span className="text-sky-200">stack</span> = &#123;</span></div>
              <div className="flex gap-5 rounded-md bg-white/[0.035] text-gray-600"><span className="w-4 select-none text-right">2</span><span className="text-accent-light">&nbsp;&nbsp;{category.id}: [</span></div>
              <div className="ml-2 border-l border-border pl-3 sm:ml-3 sm:pl-4">
                {category.technologies.map((item, index) => <div key={item.name} className={`flex min-w-0 items-start gap-5 rounded-md px-1 text-gray-600 transition-colors ${selectedTechnology === item.name ? "bg-accent/[0.07]" : ""}`}>
                  <span className="w-4 shrink-0 select-none text-right">{index + 3}</span>
                  <button type="button" aria-pressed={selectedTechnology === item.name} onMouseEnter={() => setSelectedTechnology(item.name)} onFocus={() => setSelectedTechnology(item.name)} onClick={() => setSelectedTechnology(item.name)} className={`min-w-0 rounded-sm text-left text-emerald-200 hover:text-emerald-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-light ${selectedTechnology === item.name ? "text-white" : ""}`}>&quot;{item.name}&quot;{index < category.technologies.length - 1 ? "," : ""}</button>
                </div>)}
              </div>
              <div className="flex gap-5 text-gray-600"><span className="w-4 select-none text-right">{category.technologies.length + 3}</span><span className="text-accent-light">&nbsp;&nbsp;],</span></div>
              <div className="flex gap-5 text-gray-600"><span className="w-4 select-none text-right">{category.technologies.length + 4}</span><span>&#125;;</span></div>
            </div>
          </div>

          <aside aria-live="polite" className="border-t border-border bg-white/[0.015] p-5 lg:border-l lg:border-t-0">
            <p className="mb-2 font-mono text-[10px] tracking-[0.14em] text-gray-500">SELECTED MODULE</p>
            <h3 className="break-words text-base font-medium text-white">{technology.name}</h3>
            <p className="mt-2 text-xs leading-relaxed text-gray-400">{technology.context ?? category.description}</p>
            {usedInProjects.length > 0 && <div className="mt-5"><p className="mb-2 font-mono text-[10px] tracking-[0.12em] text-gray-500">PROJECTS</p><ul className="space-y-1.5">{usedInProjects.map((title) => <li key={title} className="flex gap-2 text-xs leading-relaxed text-gray-400"><Check size={13} className="mt-0.5 shrink-0 text-accent-light" aria-hidden="true" />{title}</li>)}</ul></div>}
          </aside>
        </div>
      </div>
    </div>

    <div className="flex flex-wrap items-center justify-between gap-2 border-t border-border bg-white/[0.025] px-4 py-2.5 font-mono text-[10px] text-gray-500"><span className="text-accent-light">● <span className="text-gray-400">available for building</span></span><span className="flex flex-wrap items-center gap-3"><span>TypeScript</span><span>UTF-8</span><span>LF</span></span></div>

    <section aria-labelledby="architecture-heading" className="border-t border-border p-5 sm:p-7">
      <div className="mb-5 flex flex-wrap items-end justify-between gap-2"><div><p className="mb-1 font-mono text-[10px] tracking-[0.15em] text-gray-500">ACROSS PROJECTS</p><h3 id="architecture-heading" className="text-base font-medium text-white">A systems view of my work</h3></div><p className="max-w-md text-xs leading-relaxed text-gray-500">A conceptual view of tools used across different projects, not one combined application.</p></div>
      <div className="grid gap-2 md:grid-cols-[1fr_auto_1fr_auto_1.2fr_auto_1fr] md:items-center">
        <ArchitectureNode title="APPLICATIONS" items="React · Next.js · Expo Go" />
        <ArchitectureConnector />
        <ArchitectureNode title="APIs & BACKEND" items="Node.js · Express · Django" />
        <ArchitectureConnector />
        <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-1"><ArchitectureNode title="DATA" items="MySQL · PostgreSQL · Python · R" /><ArchitectureNode title="INTEGRATIONS" items="M-Pesa · Paystack · Dynamics 365" /></div>
        <ArchitectureConnector />
        <ArchitectureNode title="DELIVERY" items="Docker · AWS · Azure · Nginx" />
      </div>
    </section>
  </div>;
}

function ArchitectureConnector() {
  return <span className="flex justify-center py-1 text-gray-600" aria-hidden="true"><ChevronDown className="md:hidden" size={16} /><ChevronRight className="hidden md:block" size={17} /></span>;
}

function ArchitectureNode({ title, items }: { title: string; items: string }) {
  return <div className="rounded-lg border border-border bg-white/[0.02] px-3 py-3"><h4 className="mb-1.5 font-mono text-[9px] tracking-[0.13em] text-gray-500">{title}</h4><p className="text-xs leading-relaxed text-gray-300">{items}</p></div>;
}
