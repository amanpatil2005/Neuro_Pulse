import React from "react";
import { Clock3 } from "lucide-react";
// Import your doctor asset here. Update the path if necessary.
import digitalDoctorImg from "../assets/infoImg.jpg"; 

const TechPulseInsight = () => {
  return (
    <section className="relative w-full overflow-hidden bg-slate-950 m-0 py-16 md:py-24 text-white border-t border-white/5">
      
      {/* Background radial glow for a futuristic aesthetic */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 translate-x-1/2 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Grid Container */}
      <div className="relative max-w-7xl mx-auto z-10 grid md:grid-cols-2 gap-12 lg:gap-16 items-center px-6 md:px-8">
        
        {/* Left Side: Glowing Digital Doctor Image Showcase */}
        <div className="relative flex justify-center items-center w-full group">
          {/* Subtle back-glow frame matching the image tone */}
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 rounded-3xl blur-2xl opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
          
          <div className="relative w-full max-w-[480px] aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-cyan-950/50">
            <img 
              src={digitalDoctorImg} 
              alt="NeuroPulse AI Medical Assistant" 
              className="w-full h-full object-cover object-center scale-100 group-hover:scale-[1.02] transition-transform duration-700 ease-out"
            />
          </div>
        </div>

        {/* Right Side: Structured Text Content */}
        <div className="flex flex-col justify-center">
          
          {/* Top Pill Badge */}
          <div
            className="inline-flex items-center gap-2 self-start bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-full border shadow-lg mb-6"
            style={{ borderColor: "rgba(6, 182, 212, 0.3)" }}
          >
            <Clock3 size={16} className="text-cyan-400" strokeWidth={2.5} />
            <span className="text-sm font-medium text-slate-200">
              The Future of Healthcare is Autonomous
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-white mb-6">
            NeuroPulse: <br />
            <span
              style={{
                background: "linear-gradient(135deg, #06b6d4, #a855f7)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Future of Healthcare
            </span>
          </h2>

          {/* Content Paragraphs */}
          <div className="space-y-4 text-slate-300 text-base md:text-lg leading-relaxed max-w-xl">
            <p>
              NeuroPulse has developed advanced, AI-driven digital medical ecosystems 
              designed to augment clinical precision. By integrating neural networks with patient intake pipelines, our technology securely scans, flags, and triages anomalies in real-time.
            </p>
            <p>
              We are actively driving innovation across complex medical verticals. From predictive analytics 
              that identify high-risk conditions before they surface, to interactive AI support assets that streamline workflows, NeuroPulse converts diagnostic data into clear, actionable care pathways.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">
            <button
              className="relative overflow-hidden text-white px-8 py-4 rounded-full font-semibold transition-transform duration-200 hover:scale-[1.04] active:scale-[0.98]"
              style={{
                background: "linear-gradient(135deg, #06b6d4 0%, #4f2f8c 100%)",
                boxShadow: "0 10px 25px rgba(109, 74, 173, 0.4)",
              }}
            >
              Access AI Benefits
            </button>
            <button
              className="bg-white/5 backdrop-blur-sm px-8 py-4 rounded-full border font-semibold text-white transition-all duration-200 hover:bg-white hover:text-slate-950"
              style={{ borderColor: "rgba(255,255,255,0.15)" }}
            >
              Join the Future
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default TechPulseInsight;