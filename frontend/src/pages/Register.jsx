import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Activity, ShieldAlert, User, Mail, Smartphone, Lock, Eye, EyeOff } from "lucide-react";

const Register = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (!agreeTerms) {
      alert("Please validate secure protocol terms to authorize node registration.");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert("Security passkeys do not match. Re-verify configuration credentials.");
      return;
    }
    console.log("Registering New NeuroPulse Practitioner Node:", formData);
  };

  return (
    <div className="w-full min-h-[85vh] grid grid-cols-1 lg:grid-cols-12 items-center gap-12 max-w-7xl mx-auto px-6 md:px-8 py-12 relative">
      
      {/* Decorative Branding Radial Ambient Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 translate-x-1/2 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* --- LEFT HAND SIDE: IDENTITY DEEPLINK INTERFACE --- */}
      <div className="lg:col-span-5 flex flex-col justify-center space-y-8 relative">
        <div className="space-y-4 max-w-lg">
          <div className="text-6xl md:text-7xl font-extrabold tracking-tighter text-white">
            Neuro<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Pulse</span>
          </div>
          <div className="text-xs uppercase tracking-[0.4em] text-slate-500 font-bold ml-1">
            Autonomous Health Network // Node Generation
          </div>
        </div>

        <div className="space-y-3 max-w-sm hidden lg:block border-l-2 border-purple-500/20 pl-4 py-2">
          <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">System Provisions:</div>
          <p className="bg-slate-900/40 backdrop-blur-sm border border-white/5 text-slate-300 text-xs px-3 py-2 rounded-xl rounded-tl-none inline-block">
            Creating a secure practitioner account maps your clinical credentials onto our real-time analytics stream.
          </p>
        </div>
      </div>

      {/* --- RIGHT HAND SIDE: REGISTRATION FORM --- */}
      <div className="lg:col-span-7 flex justify-center w-full">
        <div className="w-full max-w-[550px] rounded-3xl bg-slate-900/40 border border-white/5 p-6 md:p-8 backdrop-blur-md shadow-2xl relative">
          
          <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-6 flex items-center gap-2">
            <ShieldAlert size={22} className="text-purple-400" />
            Registration
          </h2>

          <form onSubmit={handleRegisterSubmit} className="space-y-5">
            
            {/* Row 1: First & Last Name Grid (Side-by-Side) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">First Name</label>
                <div className="relative flex items-center">
                  <User className="absolute left-4 text-slate-500" size={16} />
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Aman"
                    required
                    className="w-full pl-11 pr-4 py-3 bg-slate-950 border border-white/5 rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/40 focus:ring-1 focus:ring-cyan-500/30 transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Last Name</label>
                <div className="relative flex items-center">
                  <User className="absolute left-4 text-slate-500" size={16} />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Patil"
                    required
                    className="w-full pl-11 pr-4 py-3 bg-slate-950 border border-white/5 rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/40 focus:ring-1 focus:ring-cyan-500/30 transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Row 2: Mobile Number (Full Width Row) */}
            <div className="flex flex-col space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Mobile Number</label>
              <div className="relative flex items-center">
                <Smartphone className="absolute left-4 text-slate-500" size={16} />
                <input
                  type="tel"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleInputChange}
                  placeholder="+91 98765 43210"
                  required
                  className="w-full pl-11 pr-4 py-3 bg-slate-950 border border-white/5 rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/40 focus:ring-1 focus:ring-cyan-500/30 transition-all"
                />
              </div>
            </div>

            {/* Row 3: Email Address (Full Width Row) */}
            <div className="flex flex-col space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Email Address</label>
              <div className="relative flex items-center">
                <Mail className="absolute left-4 text-slate-500" size={16} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="aman@svnit.ac.in"
                  required
                  className="w-full pl-11 pr-4 py-3 bg-slate-950 border border-white/5 rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/40 focus:ring-1 focus:ring-cyan-500/30 transition-all"
                />
              </div>
            </div>

            {/* Row 4: Access Passkey (Full Width Row) */}
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

            {/* Row 5: Confirm Passkey (Full Width Row) */}
            <div className="flex flex-col space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Re-type Password</label>
              <div className="relative flex items-center">
                <Lock className="absolute left-4 text-slate-500" size={16} />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="••••••••••••"
                  required
                  className="w-full pl-11 pr-12 py-3 bg-slate-950 border border-white/5 rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/40 focus:ring-1 focus:ring-cyan-500/30 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 text-slate-500 hover:text-slate-300 transition-colors"
                >
                  {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Protocol Agreements Checkbox */}
            <div className="flex items-start gap-3 pt-2">
              <input
                type="checkbox"
                id="register-terms"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="mt-1 rounded border-white/10 bg-slate-950 text-purple-500 focus:ring-0 focus:ring-offset-0 cursor-pointer"
              />
              <label htmlFor="register-terms" className="text-xs leading-normal text-slate-400 cursor-pointer select-none">
                I verify that the above credentials represent a legitimate healthcare ecosystem entity. I agree to the <a href="#" className="text-purple-400 hover:underline">Data Isolation Rules</a>.
              </label>
            </div>

            {/* Action Execution Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full text-white font-semibold text-sm py-3.5 rounded-xl transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]"
                style={{
                  background: "linear-gradient(135deg, #a855f7 0%, #3c2369 100%)",
                  boxShadow: "0 4px 20px rgba(168, 85, 247, 0.15)"
                }}
              >
                Register
              </button>
            </div>
          </form>

          {/* Subtext Redirect */}
          <div className="mt-6 text-center text-xs font-medium text-slate-500">
            Already have an active account?{" "}
            <Link to="/login" className="text-cyan-400 hover:underline">
              Login
            </Link>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Register;