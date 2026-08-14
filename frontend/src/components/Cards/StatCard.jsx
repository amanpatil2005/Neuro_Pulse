import React from "react";

const StatCard = ({ number, title }) => {
  return (
    <div className="relative group overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-950/20">
      
      {/* Background Micro-glow on Hover */}
      <div className="absolute -inset-px bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* High-Contrast Vibrant Metric Number */}
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-purple-300 transition-all duration-300">
        {number}
      </h2>

      {/* Crisp White Description Text */}
      <p className="text-sm md:text-base font-medium text-slate-200 group-hover:text-white transition-colors duration-200 tracking-wide">
        {title}
      </p>

    </div>
  );
};

export default StatCard;