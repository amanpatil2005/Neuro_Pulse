import { CalendarDays, FileSearch, Activity, Bell, MessageSquareCode, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Appointment",
    description: "Schedule visits seamlessly with top medical professionals.",
    icon: CalendarDays,
    color: "#06b6d4", 
    bgLight: "rgba(6, 182, 212, 0.08)",
    link: "/appointment",
  },
  {
    title: "Report Analyzer",
    description: "Upload medical reports for intelligent breakdowns.",
    icon: FileSearch,
    color: "#a855f7", 
    bgLight: "rgba(168, 85, 247, 0.08)",
  },
  {
    title: "Disease Prediction",
    description: "Advanced predictive analytics to map potential risks early.",
    icon: Activity,
    color: "#3b82f6", 
    bgLight: "rgba(59, 130, 246, 0.08)",
  },
  {
    title: "Med Reminder",
    description: "Never miss a dose with smart, automated tracking alerts.",
    icon: Bell,
    color: "#10b981", 
    bgLight: "rgba(16, 185, 129, 0.08)",
  },
  {
    title: "AI Chatbot",
    description: "24/7 intelligent virtual assistant for your inquiries.",
    icon: MessageSquareCode,
    color: "#f59e0b", 
    bgLight: "rgba(245, 158, 11, 0.08)",
  },
];

const Services = () => {
  return (
    <section className="w-full bg-slate-950 py-12 md:py-16 text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Section Header - Tighter margins */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Our <span style={{
              background: "linear-gradient(135deg, #06b6d4, #a855f7)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent"
            }}>Healthcare Services</span>
          </h2>
          <p className="text-slate-400 mt-2 text-sm md:text-base">
            Comprehensive, AI-driven healthcare solutions tailored for you.
          </p>
        </div>

        {/* Unified Single Row Layout (Grid forces 5 columns on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-center">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-slate-900/30 backdrop-blur-md p-5 rounded-xl border transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                style={{ 
                  borderColor: "rgba(255, 255, 255, 0.04)",
                  boxShadow: "0 4px 20px -10px rgba(0,0,0,0.5)"
                }}
              >
                {/* Glow Effect */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at top left, ${service.bgLight}, transparent 70%)`
                  }}
                />

                <div>
                  {/* Smaller Icon Box */}
                  <div 
                    className="w-11 h-11 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundColor: service.bgLight }}
                  >
                    <IconComponent size={22} style={{ color: service.color }} />
                  </div>

                  {/* Smaller, Snug text sizing */}
                  <h3 className="text-base font-bold text-slate-100 group-hover:text-white transition-colors tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 mt-2 text-xs leading-relaxed group-hover:text-slate-300 transition-colors">
                    {service.description}
                  </p>
                </div>

                {/* Smaller footer element */}
                <div className="mt-5 flex justify-end">
                  <div 
                    className="w-7 h-7 rounded-full flex items-center justify-center border border-white/5 transition-all duration-300 bg-white/[0.01]"
                  >
                    <ArrowRight 
                      size={12} 
                      className="text-slate-500 group-hover:text-white transition-transform duration-300 group-hover:translate-x-0.5" 
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;