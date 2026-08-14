import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Activity, Menu, X } from "lucide-react";

// Assigning explicit individual paths prevents all items from triggering active styles together
const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "Solutions", path: "/solutions" },
  { name: "How it Works", path: "/how-it-works" },
  { name: "Appointment", path: "/appointment" },
  { name: "Pricing", path: "/pricing" },
  { name: "Resources", path: "/resources" },
  { name: "Contact", path: "/contact" }
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="sticky top-0 z-50 w-full transition-all duration-300"
      style={{
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        backgroundColor: scrolled ? "rgba(2, 6, 23, 0.85)" : "rgba(2, 6, 23, 0.45)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
        boxShadow: scrolled ? "0 10px 30px rgba(0,0,0,0.3)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto py-4 px-6 md:px-8 flex justify-between items-center">
        {/* Logo Link */}
        <Link
          to="/"
          className="relative flex items-center gap-2 px-5 py-2 rounded-full text-white cursor-pointer"
          style={{
            background: "linear-gradient(135deg, #3c2369 0%, #6d4aad 100%)",
            boxShadow: "0 4px 14px rgba(60,35,105,0.35)",
          }}
        >
          <span
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              boxShadow: "0 0 0 0 rgba(109,74,173,0.55)",
              animation: "np-pulse 2.4s ease-out infinite",
            }}
          />
          <Activity size={16} strokeWidth={2.5} />
          <span className="font-semibold tracking-tight relative">NeuroPulse</span>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex gap-9 text-[15px] font-medium text-slate-400">
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <li key={link.name} className="relative cursor-pointer group py-1">
                <Link
                  to={link.path}
                  className={`transition-colors duration-200 ${isActive ? "text-cyan-400" : "hover:text-white"}`}
                >
                  {link.name}
                </Link>
                {/* Underline Layer: 
                  - If active: Static cyan line at full width (w-full bg-cyan-400).
                  - If inactive: Hidden by default (w-0), slides open to full width on cursor hover with a sleek gradient.
                */}
                <span
                  className={`absolute left-0 -bottom-0.5 h-[2px] transition-all duration-300 rounded-full ${
                    isActive 
                      ? "w-full bg-cyan-400" 
                      : "w-0 group-hover:w-full bg-gradient-to-r from-cyan-400 to-purple-400"
                  }`}
                />
              </li>
            );
          })}
        </ul>

        {/* Action Button */}
        <button
          onClick={() => navigate("/login")}
          className="hidden md:inline-flex relative items-center gap-2 text-white px-6 py-3 rounded-full font-medium overflow-hidden transition-transform duration-200 hover:scale-[1.04] active:scale-[0.98]"
          style={{
            background: "linear-gradient(135deg, #3c2369 0%, #6d4aad 55%, #4f2f8c 100%)",
            boxShadow: "0 8px 24px rgba(60,35,105,0.45)",
          }}
        >
          <span className="relative">Get Started</span>
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full cursor-pointer bg-slate-900 border border-white/5 text-slate-200"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay Panel */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4 border-t border-white/5 bg-slate-950/95"
          style={{ backdropFilter: "blur(16px)" }}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`text-[15px] font-medium transition-colors ${
                location.pathname === link.path ? "text-cyan-400" : "text-slate-300 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <button 
          onClick={() => { setMenuOpen(false); navigate("/login"); }} 
          className="w-full text-white px-6 py-3 rounded-full font-medium mt-2 bg-gradient-to-r from-cyan-500 to-purple-600">
            Get Started
          </button>
        </div>
      )}

      <style>{`
        @keyframes np-pulse {
          0%   { box-shadow: 0 0 0 0 rgba(109,74,173,0.55); }
          70%  { box-shadow: 0 0 0 10px rgba(109,74,173,0); }
          100% { box-shadow: 0 0 0 0 rgba(109,74,173,0); }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;