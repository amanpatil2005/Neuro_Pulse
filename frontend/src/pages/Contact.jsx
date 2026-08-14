import React, { useState } from "react";
import { MapPin, Phone, Mail, Send, Activity } from "lucide-react";

const NeuroPulseContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Submitting NeuroPulse Contact Form:", formData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="relative w-full overflow-hidden bg-slate-950 text-slate-300 py-16 md:py-24 border-t border-white/5">
      
      {/* Cinematic Background Glow Elements */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        
        {/* --- HEADER SECTION --- */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Activity size={12} className="animate-pulse" />
            Global Intake Channels
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Contact Us For <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">More Info</span>
          </h2>
          <p className="text-base md:text-lg text-slate-400 leading-relaxed">
            Have questions about integrating our neural diagnostic engines into your current clinical pipeline? Connect directly with our platform deployment team.
          </p>
        </div>

        {/* --- INFO CARDS GRID (3 Columns) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: <MapPin className="text-cyan-400" size={24} />,
              title: "Location Address",
              lines: ["SVNIT Health Centre, Dumas Road, Keval Chowk, Surat, Gujarat 395007"]
            },
            {
              icon: <Phone className="text-purple-400" size={24} />,
              title: "Network Nodes",
              lines: ["+91 8766455463 (Clinical Support)", "+91 9403741583 (Developer Desk)"]
            },
            {
              icon: <Mail className="text-cyan-400" size={24} />,
              title: "Secure Routing Addresses",
              lines: ["intake@neuropulse.ai", "deployments@neuropulse.ai"]
            }
          ].map((info, idx) => (
            <div 
              key={idx} 
              className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 backdrop-blur-md flex flex-col items-center text-center group hover:border-cyan-500/20 transition-all duration-300"
            >
              <div className="p-3.5 rounded-xl bg-slate-900 border border-white/10 mb-4 shadow-inner group-hover:scale-110 transition-transform duration-300">
                {info.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-2 tracking-wide">{info.title}</h3>
              {info.lines.map((line, lIdx) => (
                <p key={lIdx} className="text-sm text-slate-400 leading-normal">{line}</p>
              ))}
            </div>
          ))}
        </div>

        {/* --- FORM SECTION --- */}
        <div className="max-w-3xl mx-auto rounded-3xl bg-slate-900/30 border border-white/5 p-6 md:p-10 backdrop-blur-md shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name Field */}
              <div className="flex flex-col space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Your Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Dr. Aman Patil" 
                  required
                  className="w-full px-4 py-3 bg-slate-950 border border-white/5 rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/40 focus:ring-1 focus:ring-cyan-500/30 transition-all"
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Medical Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="aman@svnit.ac.in" 
                  required
                  className="w-full px-4 py-3 bg-slate-950 border border-white/5 rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/40 focus:ring-1 focus:ring-cyan-500/30 transition-all"
                />
              </div>
            </div>

            {/* Subject Field */}
            <div className="flex flex-col space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Subject</label>
              <input 
                type="text" 
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Platform Integration & API Access Inquiries" 
                required
                className="w-full px-4 py-3 bg-slate-950 border border-white/5 rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/40 focus:ring-1 focus:ring-cyan-500/30 transition-all"
              />
            </div>

            {/* Message Field */}
            <div className="flex flex-col space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Enter Your Queries</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                placeholder="Describe your current clinical parameters or workflow technical specifications..." 
                required
                className="w-full px-4 py-3 bg-slate-950 border border-white/5 rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/40 focus:ring-1 focus:ring-cyan-500/30 transition-all resize-none"
              />
            </div>

            {/* Submit Action Button */}
            <div className="pt-2">
              <button 
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-white font-semibold text-sm rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg w-full sm:w-auto"
                style={{
                  background: "linear-gradient(135deg, #06b6d4 0%, #4f2f8c 100%)",
                  boxShadow: "0 4px 20px rgba(6, 182, 212, 0.2)"
                }}
              >
                <Send size={16} />
                Transmit Request
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
};

export default NeuroPulseContact;