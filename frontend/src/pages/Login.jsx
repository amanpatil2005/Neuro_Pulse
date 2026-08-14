import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Activity, ShieldCheck, Mail, Smartphone, Lock, Eye, EyeOff } from "lucide-react";

const Login = () => {

  const [activeTab, setActiveTab] = useState("email"); // "email" or "phone"
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [formData, setFormData] = useState({ identifier: "", password: "" });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    if (!agreeTerms) {
      alert("Please validate secure protocol terms to authorize intake.");
      return;
    }
    console.log("Authenticating NeuroPulse Session:", { method: activeTab, ...formData });
  };

  return (
    <div className="w-full min-h-[85vh] grid grid-cols-1 lg:grid-cols-12 items-center gap-12 max-w-7xl mx-auto px-6 md:px-8 py-12 relative">
      
      {/* Decorative Branding Radial Ambient Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 translate-x-1/2 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* --- LEFT HAND SIDE: IDENTITY DEEPLINK INTERFACE --- */}
      <div className="lg:col-span-6 flex flex-col justify-center space-y-8 relative">
        <div className="space-y-4 max-w-lg">
          <div className="text-6xl md:text-7xl font-extrabold tracking-tighter text-white">
            Neuro<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Pulse</span>
          </div>
          <div className="text-xs uppercase tracking-[0.4em] text-slate-500 font-bold ml-1">
            Autonomous Health Network // Ecosystem Access
          </div>
        </div>

        {/* Floating Mock Chat Stream UI referencing your image layout */}
        <div className="space-y-3 max-w-sm hidden sm:block border-l-2 border-cyan-500/20 pl-4 py-2">
          <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Secure Node Triage:</div>
          <p className="bg-slate-900/40 backdrop-blur-sm border border-white/5 text-slate-300 text-xs px-3 py-2 rounded-xl rounded-tl-none inline-block">
            Initializing handshakes... identity metrics requested.
          </p>
          <p className="bg-slate-900/40 backdrop-blur-sm border border-white/5 text-slate-300 text-xs px-3 py-2 rounded-xl rounded-tl-none inline-block">
            I'll need to verify your access sequence keys first, though.
          </p>
        </div>
      </div>

      {/* --- RIGHT HAND SIDE: ENCRYPTED PORTAL CONTAINER --- */}
      <div className="lg:col-span-6 flex justify-center w-full">
        <div className="w-full max-w-[450px] rounded-3xl bg-slate-900/40 border border-white/5 p-6 md:p-8 backdrop-blur-md shadow-2xl relative group">
          
          <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-6 flex items-center gap-2">
            <ShieldCheck size={22} className="text-cyan-400" />
            Login
          </h2>

          {/* TAB PICKERS (Email / Mobile Node Selection) */}
          <div className="flex border-b border-white/5 mb-6 text-sm font-medium">
            <button
              onClick={() => { setActiveTab("email"); setFormData({ identifier: "", password: "" }); }}
              className={`pb-3 pr-4 transition-all relative ${activeTab === "email" ? "text-cyan-400 font-bold" : "text-slate-400 hover:text-white"}`}
            >
              Email
              {activeTab === "email" && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-400 rounded-full" />}
            </button>
            <button
              onClick={() => { setActiveTab("phone"); setFormData({ identifier: "", password: "" }); }}
              className={`pb-3 px-4 transition-all relative ${activeTab === "phone" ? "text-cyan-400 font-bold" : "text-slate-400 hover:text-white"}`}
            >
              Mobile Number
              {activeTab === "phone" && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-400 rounded-full" />}
            </button>
          </div>

          <form onSubmit={handleAuthSubmit} className="space-y-4">
            {/* Input Identifier Node */}
            <div className="flex flex-col space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                {activeTab === "email" ? "Registration Email" : "Linked Mobile Number"}
              </label>
              <div className="relative flex items-center">
                {activeTab === "email" ? (
                  <Mail className="absolute left-4 text-slate-500" size={16} />
                ) : (
                  <Smartphone className="absolute left-4 text-slate-500" size={16} />
                )}
                <input
                  type={activeTab === "email" ? "email" : "tel"}
                  name="identifier"
                  value={formData.identifier}
                  onChange={handleInputChange}
                  placeholder={activeTab === "email" ? "practitioner@neuropulse.ai" : "+1 (555) 000-0000"}
                  required
                  className="w-full pl-11 pr-4 py-3 bg-slate-950 border border-white/5 rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/40 focus:ring-1 focus:ring-cyan-500/30 transition-all"
                />
              </div>
            </div>

            {/* Input Password Node */}
            <div className="flex flex-col space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Password</label>
              <div className="relative flex items-center">
                <Lock className="absolute left-4 text-slate-500" size={16} />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="••••••••••••"
                  required
                  className="w-full pl-11 pr-12 py-3 bg-slate-950 border border-white/5 rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/40 focus:ring-1 focus:ring-cyan-500/30 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 text-slate-500 hover:text-slate-300 transition-colors"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Protocol Agreements Checkbox */}
            <div className="flex items-start gap-3 pt-2">
              <input
                type="checkbox"
                id="terms"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="mt-1 rounded border-white/10 bg-slate-950 text-cyan-500 focus:ring-0 focus:ring-offset-0 cursor-pointer"
              />
              <label htmlFor="terms" className="text-xs leading-normal text-slate-400 cursor-pointer select-none">
                I authorize node sync protocols under the standard <a href="#" className="text-cyan-400 hover:underline">User System Accord</a> and <a href="#" className="text-purple-400 hover:underline">HIPAA Data Isolation Terms</a>.
              </label>
            </div>

            {/* Action Execution Button */}
            <div className="pt-3">
              <button
                type="submit"
                className="w-full text-white font-semibold text-sm py-3.5 rounded-xl transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]"
                style={{
                  background: "linear-gradient(135deg, #06b6d4 0%, #4f2f8c 100%)",
                  boxShadow: "0 4px 20px rgba(6, 182, 212, 0.15)"
                }}
              >
                Login
              </button>
            </div>
          </form>

          {/* Subtext Account Redirectors */}
          <div className="mt-6 text-center text-xs font-medium text-slate-500">
            Don't have an account?{" "}
            <Link to="/register" className="text-cyan-400 hover:underline">
              Register
            </Link>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Login;