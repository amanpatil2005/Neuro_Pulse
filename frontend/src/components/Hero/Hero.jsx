import { Rocket, CheckCircle2, Users } from "lucide-react";
import bgImg from "../../assets/bgImg.jpg";
import HeroStats from "./HeroStats";

const Hero = () => {
  return (
    // Outer section now takes 100% viewport width with no bounding box cuts
    <section 
      className="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat py-20 md:py-28"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Dark overlay to ensure crisp text readability */}
      <div className="absolute inset-0 bg-slate-950/50 pointer-events-none" />

      {/* Decorative accent glows matching the image's cyan/purple tones */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-24 -left-24 w-96 h-96 rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, #6d4aad, transparent 70%)" }}
        />
        <div
          className="absolute bottom-10 right-10 w-[24rem] h-[24rem] rounded-full opacity-25 blur-3xl"
          style={{ background: "radial-gradient(circle, #06b6d4, transparent 70%)" }}
        />
      </div>

      {/* Inner Container - This safely constrains your content so it aligns with the rest of your site layout */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-8 z-10">
        
        {/* Grid Layout */}
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          
          {/* Left Column - Content */}
          <div>
            {/* Top Pill Badge */}
            <div
              className="inline-flex items-center gap-2 bg-slate-900/60 backdrop-blur-md px-4 py-2 rounded-full border shadow-lg"
              style={{ borderColor: "rgba(109, 74, 173, 0.3)" }}
            >
              <Rocket size={16} className="text-cyan-400" strokeWidth={2.5} />
              <span className="text-sm font-medium text-slate-200">
                Now: Advanced Predictive Analytics
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mt-8 leading-[1.1] tracking-tight text-white">
              AI-Powered
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #a855f7, #06b6d4)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Healthcare for
              </span>
              <br />
              Better Decisions
            </h1>

            {/* Description */}
            <p className="text-slate-300 mt-6 text-lg leading-relaxed max-w-xl">
              Analyze patient data, predict health risks, and support medical
              decisions with secure, intelligent technology.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-9">
              <button
                className="relative overflow-hidden text-white px-8 py-4 rounded-full font-semibold transition-transform duration-200 hover:scale-[1.04] active:scale-[0.98]"
                style={{
                  background: "linear-gradient(135deg, #6d4aad 0%, #4f2f8c 100%)",
                  boxShadow: "0 10px 25px rgba(109, 74, 173, 0.4)",
                }}
              >
                Book a call
              </button>
              <button
                className="bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full border font-semibold text-white transition-colors duration-200 hover:bg-white hover:text-slate-900"
                style={{ borderColor: "rgba(255,255,255,0.2)" }}
              >
                Appointment
              </button>
            </div>

            {/* Trust Avatars */}
            <div className="flex items-center gap-3 mt-12">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-slate-950"
                    style={{
                      background: `linear-gradient(135deg, #4f2f8c, #06b6d4)`,
                      opacity: 0.9,
                    }}
                  />
                ))}
              </div>
              <p className="text-sm text-slate-400">
                Trusted by <span className="font-semibold text-slate-200">500+</span> care teams worldwide
              </p>
            </div>
          </div>

          {/* Right Column - Floating Status Cards Over the Background Face */}
          <div className="relative h-64 lg:h-full flex flex-col justify-between lg:justify-around items-end lg:pr-6">
            
            {/* Floating Card 1 */}
            <div
              className="bg-slate-900/75 backdrop-blur-md px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 self-start lg:translate-x-[-2rem]"
              style={{ 
                border: "1px solid rgba(6, 182, 212, 0.2)",
                animation: "np-float 6s ease-in-out infinite" 
              }}
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-cyan-500/10">
                <CheckCircle2 size={20} className="text-cyan-400" />
              </div>
              <div>
                <p className="text-slate-400 text-xs tracking-wider uppercase">System Status</p>
                <h3 className="font-bold text-sm text-white">Analysis Complete</h3>
              </div>
            </div>

            {/* Floating Card 2 */}
            <div
              className="bg-slate-900/75 backdrop-blur-md px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 self-end lg:translate-y-12"
              style={{ 
                border: "1px solid rgba(168, 85, 247, 0.2)",
                animation: "np-float 6s ease-in-out infinite 3s" 
              }}
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-purple-500/10">
                <Users size={20} className="text-purple-400" />
              </div>
              <div>
                <h3 className="font-bold text-base text-white">500+</h3>
                <p className="text-slate-400 text-xs">Expert Doctors</p>
              </div>
            </div>

          </div>
        </div>

        {/* Hero Stats Section */}
        <div className="mt-16 pt-8 border-t border-white/5">
          <HeroStats />
        </div>
      </div>

      <style>{`
        @keyframes np-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;