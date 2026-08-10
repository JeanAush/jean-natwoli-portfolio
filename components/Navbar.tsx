"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-bg/80 backdrop-blur-xl border-b border-border" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="font-mono text-lg font-bold text-white tracking-tight">
          <span className="text-accent">{"<"}</span>Jean Natwoli<span className="text-accent">{"/>"}</span>
        </Link>
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">Home</Link>
          <Link href="/about" className="text-sm text-gray-400 hover:text-white transition-colors">About</Link>
          <Link href="/projects" className="text-sm text-gray-400 hover:text-white transition-colors">Projects</Link>
          <Link href="/contact" className="btn-primary text-sm py-2 px-4">Get in Touch</Link>
        </div>
      </div>
    </nav>
  );
}