import React from "react";
import { 
  Activity, 
  Mail, 
  ArrowUpRight 
} from "lucide-react";

const NeuroPulseFooter = () => {
  return (
    <footer className="relative w-full overflow-hidden bg-slate-950 text-slate-400 border-t border-white/5 pt-16 pb-8">
      
      {/* Background Decorative Ambient Radial Glows */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Footer Content Container */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 mb-12">
        
        {/* Column 1: Brand & Bio */}
        <div className="flex flex-col space-y-4">
          <div className="flex items-center gap-2 text-white font-extrabold text-2xl tracking-tight">
            <Activity className="text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]" size={26} />
            <span>Neuro<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Pulse</span></span>
          </div>
          <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
            Pioneering the future of autonomous medical intelligence. Empowering clinical spaces with real-time neural diagnostics and scalable intake triage.
          </p>
          
          {/* Social Icons using bulletproof, raw SVGs to bypass Vite's bundler cache issues */}
          <div className="flex items-center gap-3 pt-2">
            {[
              { 
                // X / Twitter SVG
                svg: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>, 
                href: "#" 
              },
              { 
                // LinkedIn SVG
                svg: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/></svg>, 
                href: "#" 
              },
              { 
                // YouTube SVG
                svg: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>, 
                href: "#" 
              }
            ].map((social, index) => (
              <a 
                key={index} 
                href={social.href}
                className="p-2 rounded-lg bg-slate-900 border border-white/5 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-slate-900/80 transition-all duration-200"
              >
                {social.svg}
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-white font-semibold text-base tracking-wider relative after:content-[''] after:block after:w-8 after:h-[2px] after:bg-cyan-400 after:mt-1.5">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm font-medium">
            {["AI Diagnoses", "Predictive Triaging", "Clinical Ecosystems", "Neural Networks"].map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-white transition-colors duration-150 flex items-center gap-1 group">
                  <span>{link}</span>
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 group-hover:text-cyan-400 transition-all duration-150 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Corporate Info */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-white font-semibold text-base tracking-wider relative after:content-[''] after:block after:w-8 after:h-[2px] after:bg-purple-400 after:mt-1.5">
            Information
          </h3>
          <div className="space-y-3 text-sm leading-relaxed">
            <div>
              <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">Headquarters</h4>
              <p className="text-slate-400 mt-0.5">Core Tech Block, Innovation Hub, Zone-4</p>
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">Operation Windows</h4>
              <p className="text-slate-400 mt-0.5">Mon — Fri: 08:00 AM - 10:00 PM</p>
              <p className="text-xs text-cyan-400 mt-0.5">Automated Ecosystem: 24/7/365</p>
            </div>
          </div>
        </div>

        {/* Column 4: Newsletter Subscription */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-white font-semibold text-base tracking-wider relative after:content-[''] after:block after:w-8 after:h-[2px] after:bg-cyan-400 after:mt-1.5">
            Stay In Touch
          </h3>
          <p className="text-sm leading-relaxed text-slate-400">
            Subscribe to receive our latest medical AI whitepapers and network upgrade intelligence.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col space-y-2">
            <div className="relative flex items-center">
              <Mail className="absolute left-3 text-slate-500" size={16} />
              <input 
                type="email" 
                placeholder="Medical Email Address" 
                className="w-full pl-10 pr-3 py-2.5 bg-slate-900 border border-white/5 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/40 focus:ring-1 focus:ring-cyan-500/30 transition-all"
              />
            </div>
            <button 
              type="submit"
              className="w-full text-white font-semibold text-sm py-2.5 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: "linear-gradient(135deg, #06b6d4 0%, #4f2f8c 100%)",
                boxShadow: "0 4px 15px rgba(6, 182, 212, 0.15)"
              }}
            >
              Subscribe System
            </button>
          </form>
        </div>

      </div>

      {/* Bottom Horizontal Separation Rule */}
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent my-6" />
        
        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-500">
          <p>© {new Date().getFullYear()} NeuroPulse Ecosystem. All clinical rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Architecture</a>
            <a href="#" className="hover:text-slate-300 transition-colors">HIPAA Compliance</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Developer Portal</a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default NeuroPulseFooter;