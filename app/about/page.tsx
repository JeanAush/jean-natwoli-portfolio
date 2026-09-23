import { Terminal } from "lucide-react";

export default function About() {
  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-6">
      <h2 className="font-mono text-sm text-accent-light mb-4 tracking-widest">// WHO_AM_I</h2>
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-12">A bit about my background.</h1>
      
      <div className="grid md:grid-cols-5 gap-12">
        <div className="md:col-span-3 space-y-6 text-gray-400 leading-relaxed text-lg">
          <p>
            I am a Software Developer currently engineering critical systems at the National Cohesion and Integration Commission (NCIC) Kenya. My work spans across the full stack, from designing database architectures to deploying intuitive user interfaces.
          </p>
          <p>
            During my time at NCIC, I&apos;ve spearheaded the development of high-stakes internal applications, including a secure Finance and Procurement system handling payroll and vendor payments, a digital voting system for Commission board meetings, and comprehensive data management tools integrated with RStudio.
          </p>
          <p>
            My approach is rooted in writing clean, maintainable, and highly secure code. Whether I am building a public-facing website or an internal HR appraisal system, I focus on scalability, performance, and user experience.
          </p>
        </div>
        
        {/* Terminal-style tech stack */}
        <div className="md:col-span-2">
          <div className="glass-panel overflow-hidden">
            <div className="bg-white/[0.02] px-4 py-3 border-b border-border flex items-center gap-2">
              <Terminal size={16} className="text-accent" />
              <span className="font-mono text-xs text-gray-500">stack.config.ts</span>
            </div>
            <div className="p-6 font-mono text-sm space-y-3">
              <div className="flex justify-between"><span className="text-gray-500">frontend:</span><span className="text-accent-light">ReactJS, Next.js, Flutter</span></div>
              <div className="flex justify-between"><span className="text-gray-500">backend:</span><span className="text-accent-light">Node.js, Django, Flask, PHP</span></div>
              <div className="flex justify-between"><span className="text-gray-500">database:</span><span className="text-accent-light">PostgreSQL, MySQL</span></div>
              <div className="flex justify-between"><span className="text-gray-500">devops:</span><span className="text-accent-light">AWS, jenkins, Docker, Kubernetes</span></div>
              <div className="flex justify-between"><span className="text-gray-500">payments:</span><span className="text-accent-light">Mpesa, Paystack</span></div>
              <div className="flex justify-between"><span className="text-gray-500">data:</span><span className="text-accent-light">RStudio, Python</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}