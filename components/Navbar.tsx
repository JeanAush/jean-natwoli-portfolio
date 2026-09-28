"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [["Home", "/"], ["About", "/about"], ["Projects", "/projects"]];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="fixed top-0 z-50 w-full border-b border-border bg-bg/90 backdrop-blur-xl">
    <nav aria-label="Main navigation" className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
      <Link href="/" onClick={() => setOpen(false)} className="rounded-sm font-mono text-base font-bold tracking-tight text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-light"><span className="text-accent-light">&lt;</span> Jean Natwoli <span className="text-accent-light">/&gt;</span></Link>
      <div className="hidden items-center gap-5 lg:flex">{links.map(([label, href]) => <Link key={href} href={href} className="nav-link">{label}</Link>)}<a className="nav-link" href="/Jean-Natwoli-CV.pdf" download>Download CV</a><Link className="btn-primary px-4 py-2 text-sm" href="/contact">Get in Touch</Link></div>
      <button type="button" aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)} className="rounded-md p-2 text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-light lg:hidden">{open ? <X size={22} /> : <Menu size={22} />}</button>
    </nav>
    {open && <div id="mobile-menu" className="border-t border-border bg-bg px-6 py-4 lg:hidden"><div className="mx-auto flex max-w-7xl flex-col gap-1">{links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-sm text-gray-200 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-light">{label}</Link>)}<div className="my-2 border-t border-border" /><div className="flex flex-wrap gap-5 px-3 py-2"><a className="nav-link" href="/Jean-Natwoli-CV.pdf" download>Download CV</a></div><Link href="/contact" onClick={() => setOpen(false)} className="btn-primary mt-2 justify-center">Get in Touch</Link></div></div>}
  </header>;
}
