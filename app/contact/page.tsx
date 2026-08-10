"use client";

import { useState } from "react";
import { Mail, Phone, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "w3f_d95ac275756ca2f53cccb92f976d2689d86846fd817c7c75");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message sent successfully!", {
          description: "I'll get back to you as soon as possible.",
        });
        e.currentTarget.reset(); // Clear the form
      } else {
        toast.error("Something went wrong.", {
          description: data.message || "Please try again later.",
        });
      }
    } catch (error) {
      toast.error("Network error.", {
        description: "Please check your connection and try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

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

        <form onSubmit={handleSubmit} className="glass-panel p-8 flex flex-col gap-5">
          <div>
            <label htmlFor="name" className="text-xs text-gray-500 uppercase tracking-wider mb-2 block">Your Name</label>
            <input 
              id="name"
              name="name" 
              type="text" 
              placeholder="John Doe" 
              required
              className="w-full bg-white/[0.03] border border-border rounded-lg p-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-xs text-gray-500 uppercase tracking-wider mb-2 block">Your Email</label>
            <input 
              id="email"
              name="email"
              type="email" 
              placeholder="john@company.com" 
              required
              className="w-full bg-white/[0.03] border border-border rounded-lg p-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-xs text-gray-500 uppercase tracking-wider mb-2 block">Project Details</label>
            <textarea 
              id="message"
              name="message"
              placeholder="Tell me about your requirements..." 
              rows={5}
              required
              className="w-full bg-white/[0.03] border border-border rounded-lg p-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
            ></textarea>
          </div>
          
          {/* Honeypot spam protection */}
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
          <button 
            type="submit" 
            disabled={isLoading} 
            className="btn-primary w-full justify-center mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <Loader2 size={16} className="animate-spin" /> Sending...
              </>
            ) : (
              <>
                Send Message <Send size={16} />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}