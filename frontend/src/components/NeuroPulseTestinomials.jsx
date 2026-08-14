import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

// 1. DATA ARRAY (Now expanded to 6 reviews)
const REVIEWS_DATA = [
  {
    id: 1,
    text: "“NeuroPulse transformed our clinical pipeline. Neural integration reduced diagnostics bottlenecks by 40% with incredible precision.”",
    author: "Dr. Aman Patil",
    role: "CMO, Apex Health"
  },
  {
    id: 2,
    text: "“Allows us to confidently triage high-risk anomalies before they surface. A massive step forward for scalable care pathways.”",
    author: "Saurabh Kadtan",
    role: "Innovation Dir, CoreMed"
  },
  {
    id: 3,
    text: "“Securely scans and handles intake data with high efficiency. It helps our medical staff prioritize critical-care actions seamlessly.”",
    author: "Sharv Helambe",
    role: "Operations, NeuroLife Labs"
  },
  {
    id: 4,
    text: "“The predictive analytics layer turns complex patient data streams into immediate, highly actionable treatment insight.”",
    author: "Dr. Aagam Jain",
    role: "Lead Neurologist, Vanguard"
  },
  {
    id: 5,
    text: "“Implementing this platform redefined our workflow timelines. AI anomaly detection is fast, secure, and incredibly precise.”",
    author: "Prof. Aditya Fulzele",
    role: "Director, SV Medical Center"
  },
  {
    id: 6,
    text: " hostility-free intake processing allows our practitioners to dedicate maximum attention directly back to patient recovery profiles.”",
    author: "Harshit Gupta",
    role: "Chief of Care, Zenith Labs"
  }
];

const NeuroPulseTestimonials = () => {
  const [centerIndex, setCenterIndex] = useState(1); // Tracks the prominent middle card

  const handlePrev = () => {
    setCenterIndex((prev) => (prev === 0 ? REVIEWS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCenterIndex((prev) => (prev === REVIEWS_DATA.length - 1 , 0));
  };

  // Helper calculation to fetch cyclic side-by-side array indexes
  const getIndexAtOffset = (offset) => {
    const rawIndex = centerIndex + offset;
    if (rawIndex < 0) return REVIEWS_DATA.length + (rawIndex % REVIEWS_DATA.length);
    return rawIndex % REVIEWS_DATA.length;
  };

  // Explicit positioning pointers for the 3 side-by-side visible cards
  const cardPositions = [
    { data: REVIEWS_DATA[getIndexAtOffset(-1)], styleClass: "opacity-40 scale-90 translate-y-3 pointer-events-none hidden md:block" },
    { data: REVIEWS_DATA[getIndexAtOffset(0)],  styleClass: "opacity-100 scale-100 z-10 border-cyan-500/30 shadow-xl shadow-cyan-950/20 bg-slate-900/60" },
    { data: REVIEWS_DATA[getIndexAtOffset(1)],  styleClass: "opacity-40 scale-90 translate-y-3 pointer-events-none hidden md:block" }
  ];

  return (
    // Height & padding cut in half (from py-20 to py-10)
    <section className="relative w-full overflow-hidden bg-slate-950 py-10 text-white border-t border-white/5">
      
      {/* Accent Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center relative">
        
        {/* Compact Quote Icon Header */}
        <div className="mb-2 text-purple-400/30">
          <Quote size={28} className="fill-purple-500/10 transform rotate-180" strokeWidth={2} />
        </div>

        {/* --- 3 CARDS SIDE BY SIDE IN CIRCULAR WHEEL PATTERN --- */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 items-center min-h-[180px] px-2">
          {cardPositions.map((card, i) => (
            <div
              key={i}
              className={`p-5 rounded-2xl border border-white/5 backdrop-blur-sm transition-all duration-500 ease-in-out text-center flex flex-col justify-between h-full min-h-[160px] ${card.styleClass}`}
            >
              {/* Quote Content text scaled smaller for half-page density */}
              <p className="text-sm lg:text-base font-normal leading-relaxed text-slate-300 italic tracking-wide line-clamp-4">
                {card.data.text}
              </p>
              
              <div className="mt-4">
                <h4 className="text-sm font-bold text-white tracking-wide">
                  {card.data.author}
                </h4>
                <p className="text-xs font-medium text-cyan-400 mt-0.5">
                  {card.data.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* --- COMPACT CONTROLS --- */}
        <div className="flex items-center gap-6 mt-6 z-20">
          
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-slate-900 border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all duration-200"
              aria-label="Previous Slide"
            >
              <ChevronLeft size={16} />
            </button>
            
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-slate-900 border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all duration-200"
              aria-label="Next Slide"
            >
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Dynamic Tracker Dots */}
          <div className="flex items-center gap-1.5">
            {REVIEWS_DATA.map((_, index) => (
              <button
                key={index}
                onClick={() => setCenterIndex(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  centerIndex === index 
                    ? "w-5 bg-gradient-to-r from-cyan-400 to-purple-500" 
                    : "w-1.5 bg-slate-800 hover:bg-slate-600"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default NeuroPulseTestimonials;