import { Mail, Phone, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-6">
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      
      <h2 className="font-mono text-sm text-accent-light mb-4 tracking-widest">// INITIATE_CONTACT</h2>
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-12">Let&apos;s build something exceptional.</h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <p className="text-lg text-gray-400 leading-relaxed">
            I am currently available for new projects and consulting opportunities. If you need a reliable engineer to architect your next platform, integrate complex payment systems, or build internal tools, let&apos;s talk.
          </p>

          <div className="space-y-4">
            <a href="tel:0759304400" className="flex items-center gap-4 p-4 glass-panel hover:border-accent/30 transition-all group">
              <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-all">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="text-xs text-gray-500 uppercase tracking-wider">Phone</h4>
                <span className="text-white font-medium">0759304400</span>
              </div>
            </a>

            <a href="mailto:natwolijean@gmail.com" className="flex items-center gap-4 p-4 glass-panel hover:border-accent/30 transition-all group">
              <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-all">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="text-xs text-gray-500 uppercase tracking-wider">Email</h4>
                <span className="text-white font-medium">natwolijean@gmail.com</span>
              </div>
            </a>
          </div>
        </div>

        <form className="glass-panel p-8 flex flex-col gap-5">
          <div>
            <label className="text-xs text-gray-500 uppercase tracking-wider mb-2 block">Your Name</label>
            <input 
              type="text" 
              placeholder="John Doe" 
              className="w-full bg-white/[0.03] border border-border rounded-lg p-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
            />
          </div>
          <div>
            <label className="text-xs text-gray-500 uppercase tracking-wider mb-2 block">Your Email</label>
            <input 
              type="email" 
              placeholder="john@company.com" 
              className="w-full bg-white/[0.03] border border-border rounded-lg p-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
            />
          </div>
          <div>
            <label className="text-xs text-gray-500 uppercase tracking-wider mb-2 block">Project Details</label>
            <textarea 
              placeholder="Tell me about your requirements..." 
              rows={5}
              className="w-full bg-white/[0.03] border border-border rounded-lg p-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
            ></textarea>
          </div>
          <button type="submit" className="btn-primary w-full justify-center mt-2">
            Send Message <Send size={16} />
          </button>
        </form>
      </div>
    </div>
  );
}