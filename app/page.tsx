import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Database, ShieldCheck, Cloud } from "lucide-react";

export default function Home() {
  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
        
        <div className="grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-white/[0.03] backdrop-blur-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="font-mono text-xs text-gray-400">Available for new projects</span>
            </div>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white tracking-tight mb-6 leading-tight">
              Architecting Scalable<br />
              <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">Enterprise Systems</span>
            </h1>

            <p className="text-base md:text-lg text-gray-400 max-w-xl mx-auto md:mx-0 mb-8 leading-relaxed">
              I&apos;m Jean Natwoli, a Full-Stack Software Engineer based in Kenya. I build robust, secure, and high-performance applications, from complex internal financial tools to large-scale public platforms.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Link href="/projects" className="btn-primary">
                View Work <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="btn-outline">Start a Project</Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute inset-8 rounded-full bg-accent/20 blur-3xl pointer-events-none" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-2 shadow-2xl">
              <Image
                src="/profile-portrait.jpg"
                alt="Jean Natwoli"
                width={900}
                height={948}
                priority
                className="aspect-[9/10] w-full rounded-[1.5rem] object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="max-w-7xl mx-auto px-6 mt-32">
        <h2 className="font-mono text-sm text-accent-light mb-12 tracking-widest">// CORE_COMPETENCIES</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="glass-panel p-8 hover:border-accent/30 transition-all duration-300 group">
            <ShieldCheck className="text-accent mb-4" size={32} />
            <h3 className="text-xl font-semibold text-white mb-2">Secure Integrations</h3>
            <p className="text-gray-400 leading-relaxed text-sm">Expertise in implementing secure payment gateways, including Mpesa and Paystack, with strict adherence to data integrity and financial security standards.</p>
          </div>
          <div className="glass-panel p-8 hover:border-accent/30 transition-all duration-300 group">
            <Cloud className="text-accent mb-4" size={32} />
            <h3 className="text-xl font-semibold text-white mb-2">DevOps & Cloud</h3>
            <p className="text-gray-400 leading-relaxed text-sm">Proficient in deploying and managing applications on AWS. Utilizing CI/CD pipelines via Jenkins to ensure smooth, zero-downtime deployments.</p>
          </div>
          <div className="glass-panel p-8 hover:border-accent/30 transition-all duration-300 group">
            <Database className="text-accent mb-4" size={32} />
            <h3 className="text-xl font-semibold text-white mb-2">Complex Architecture</h3>
            <p className="text-gray-400 leading-relaxed text-sm">Designing relational and non-relational database schemas (PostgreSQL, MySQL) that power high-stakes applications, from payroll systems to live voting.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
