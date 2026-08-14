import React, { useState } from "react";
import drSanikaImg from "../assets/Dr.jpeg";
import drcbjImg from "../assets/cbj.jpeg";
import { 
  Activity, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Star, 
  User, 
  Mail, 
  Smartphone, 
  Brain, 
  Heart, 
  Bone, 
  Activity as OncologyIcon, 
  ChevronRight,
  ShieldCheck
} from "lucide-react";

// 1. DEPARTMENTS DATA
const DEPARTMENTS = [
  { id: "neurology", name: "Neurology", icon: <Brain size={18} />, count: "3 Specialists" },
  { id: "cardiology", name: "Cardiology", icon: <Heart size={18} />, count: "3 Specialists" },
  { id: "orthopedics", name: "Orthopedics", icon: <Bone size={18} />, count: "2 Specialists" },
  { id: "oncology", name: "Oncology", icon: <OncologyIcon size={18} />, count: "2 Specialists" }
];

// 2. DOCTORS DATA BY DEPARTMENT
const DOCTORS_DATA = [
  {
    id: "doc-1",
    departmentId: "neurology",
    name: "Dr. Charwak Jambhalunkar",
    title: "Chief Neurologist & Neuro-AI Lead",
    rating: "4.9",
    reviews: "128",
    image: drcbjImg,
    slots: ["09:00 AM", "11:30 AM", "02:00 PM", "04:30 PM"]
  },
  {
    id: "doc-2",
    departmentId: "neurology",
    name: "Dr. Aashray Neema",
    title: "Senior Neuro-Radiologist",
    rating: "5",
    reviews: "10",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400&auto=format&fit=crop",
    slots: ["10:00 AM", "01:00 PM", "03:30 PM"]
  },
  {
    id: "doc-3",
    departmentId: "neurology",
    name: "Dr. Tanmay Chakkarwar",
    title: "Cognitive Anomaly Specialist",
    rating: "4.9",
    reviews: "112",
    image: "https://images.unsplash.com/photo-1594824813566-78a9a4b3d758?q=80&w=400&auto=format&fit=crop",
    slots: ["09:30 AM", "12:00 PM", "05:00 PM"]
  },
  {
    id: "doc-4",
    departmentId: "cardiology",
    name: "Dr. Sanika Patil",
    title: "Head of Cardiovascular AI",
    rating: "4.9",
    reviews: "156",
    image: drSanikaImg,
    slots: ["08:30 AM", "11:00 AM", "02:30 PM"]
  },
  {
    id: "doc-5",
    departmentId: "cardiology",
    name: "Dr. Vishal Deshmukh",
    title: "Interventional Cardiologist",
    rating: "4.7",
    reviews: "88",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=400&auto=format&fit=crop",
    slots: ["10:30 AM", "01:30 PM", "04:00 PM"]
  },
  {
    id: "doc-6",
    departmentId: "orthopedics",
    name: "Dr. Shivam Rathod",
    title: "Joint & Spine Reconstruction Specialist",
    rating: "4.9",
    reviews: "142",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400&auto=format&fit=crop",
    slots: ["09:00 AM", "12:30 PM", "03:00 PM"]
  },
  {
    id: "doc-7",
    departmentId: "oncology",
    name: "Dr. Sumit Rude",
    title: "Precision Oncology Research Lead",
    rating: "5.0",
    reviews: "204",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=400&auto=format&fit=crop",
    slots: ["10:00 AM", "02:00 PM", "04:00 PM"]
  }
];

const Appointment = () => {
  const [activeDept, setActiveDept] = useState("neurology");
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [patientData, setPatientData] = useState({
    fullName: "",
    email: "",
    phone: "",
    reason: ""
  });

  const handleDeptChange = (deptId) => {
    setActiveDept(deptId);
    setSelectedDoctor(null);
    setSelectedTime("");
  };

  const handleDoctorSelect = (doctor, slot) => {
    setSelectedDoctor(doctor);
    setSelectedTime(slot);
  }; 

  const handleInputChange = (e) => {
    setPatientData({ ...patientData, [e.target.name]: e.target.value });
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime || !selectedDoctor) {
      alert("Please select a date, time slot, and specialist.");
      return;
    }
    setIsSubmitted(true);
  };

  // Filter doctors based on selected department tab      
  const filteredDoctors = DOCTORS_DATA.filter((doc) => doc.departmentId === activeDept);

  return (
    <div className="w-full min-h-screen bg-slate-950 text-slate-300 py-16 md:py-24 relative overflow-hidden">
      
      {/* Background Decorative Radial Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* --- PAGE HEADER --- */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Activity size={14} className="animate-pulse" />
            Patient Clinical Scheduling
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Book a <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Specialist Consultation</span>
          </h1>
          <p className="text-base text-slate-400 leading-relaxed">
            Select a specialized medical department, choose your preferred physician, and reserve an available appointment window.
          </p>
        </div>

        {isSubmitted ? (
          /* --- CONFIRMATION CARD --- */
          <div className="max-w-2xl mx-auto rounded-3xl bg-slate-900/40 border border-cyan-500/30 p-8 md:p-12 text-center backdrop-blur-md shadow-2xl">
            <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/40 text-cyan-400 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={36} />
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
              Patient Appointment Confirmed!
            </h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
              Your consultation request has been booked with <span className="text-cyan-400 font-semibold">{selectedDoctor?.name}</span>. A digital receipt has been sent to <span className="text-white font-medium">{patientData.email}</span>.
            </p>
            <div className="bg-slate-950 p-5 rounded-2xl border border-white/5 text-left text-xs space-y-2.5 mb-8 max-w-md mx-auto">
              <div className="flex justify-between text-slate-400">
                <span>Physician:</span>
                <span className="text-white font-medium">{selectedDoctor?.name} ({selectedDoctor?.title})</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Appointment Date:</span>
                <span className="text-cyan-400 font-medium">{selectedDate}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Time Window:</span>
                <span className="text-purple-400 font-medium">{selectedTime}</span>
              </div>
            </div>
            <button
              onClick={() => { setIsSubmitted(false); setSelectedDoctor(null); }}
              className="px-8 py-3.5 rounded-full font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 to-purple-600 hover:scale-105 transition-all"
            >
              Book Another Appointment
            </button>
          </div>
        ) : (
          /* --- MAIN APPOINTMENT FLOW --- */
          <div className="space-y-12">
            
            {/* 1. DEPARTMENT SPECIALIZATION TABS */}
            <div>
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <ShieldCheck size={20} className="text-cyan-400" />
                1. Select Hospital Department
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {DEPARTMENTS.map((dept) => {
                  const isActive = activeDept === dept.id;
                  return (
                    <button
                      key={dept.id}
                      type="button"
                      onClick={() => handleDeptChange(dept.id)}
                      className={`p-5 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between ${
                        isActive
                          ? "bg-slate-900 border-cyan-500/50 shadow-lg shadow-cyan-950/30 scale-[1.02]"
                          : "bg-slate-900/30 border-white/5 hover:border-white/15 hover:bg-slate-900/50"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className={`p-2.5 rounded-xl ${isActive ? "bg-cyan-500/20 text-cyan-400" : "bg-slate-950 text-slate-400"}`}>
                          {dept.icon}
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                          {dept.count}
                        </span>
                      </div>
                      <div>
                        <h3 className={`font-bold text-sm ${isActive ? "text-white" : "text-slate-300"}`}>
                          {dept.name}
                        </h3>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. DOCTOR CARDS GRID */}
            <div>
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <User size={20} className="text-purple-400" />
                2. Choose Specialist & Available Slot
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDoctors.map((doc) => {
                  const isDocSelected = selectedDoctor?.id === doc.id;
                  return (
                    <div
                      key={doc.id}
                      className={`rounded-3xl border p-6 backdrop-blur-md transition-all duration-300 flex flex-col justify-between ${
                        isDocSelected
                          ? "bg-slate-900 border-cyan-500/50 shadow-xl shadow-cyan-950/20"
                          : "bg-slate-900/40 border-white/5 hover:border-white/15"
                      }`}
                    >
                      <div>
                        {/* Doctor Profile Header with Increased Image Size */}
                        <div className="flex items-center gap-5 mb-5">
                          <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden border-2 border-white/10 flex-shrink-0 bg-slate-950 shadow-inner">
                            <img
                              src={doc.image}
                              alt={doc.name}
                              className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                              onError={(e) => {
                                // Fallback image if local asset path is misconfigured
                                e.currentTarget.src = "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&auto=format&fit=crop";
                              }}
                            />
                          </div>
                          <div className="flex flex-col justify-center">
                            <h3 className="font-bold text-white text-base md:text-lg tracking-wide leading-tight">{doc.name}</h3>
                            <p className="text-xs text-cyan-400 font-medium mt-1 leading-normal">{doc.title}</p>
                            <div className="flex items-center gap-1.5 mt-2 text-xs text-slate-400">
                              <Star size={13} className="text-amber-400 fill-amber-400" />
                              <span className="text-white font-semibold">{doc.rating}</span>
                              <span>({doc.reviews} reviews)</span>
                            </div>
                          </div>
                        </div>

                        {/* Available Slots Section */}
                        <div className="border-t border-white/5 pt-4 mb-4">
                          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                            <Clock size={12} className="text-cyan-400" />
                            Select Time Slot:
                          </p>
                          <div className="grid grid-cols-2 gap-2">
                            {doc.slots.map((slot) => {
                              const isSlotSelected = isDocSelected && selectedTime === slot;
                              return (
                                <button
                                  key={slot}
                                  type="button"
                                  onClick={() => handleDoctorSelect(doc, slot)}
                                  className={`py-2 px-3 rounded-xl text-xs font-medium border transition-all ${
                                    isSlotSelected
                                      ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white border-transparent font-bold shadow-md"
                                      : "bg-slate-950 text-slate-300 border-white/5 hover:border-cyan-500/30 hover:text-white"
                                  }`}
                                >
                                  {slot}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </div>

                      {/* Selected Status Indicator */}
                      {isDocSelected && (
                        <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-2.5 text-center text-xs text-cyan-400 font-medium flex items-center justify-center gap-1.5">
                          <CheckCircle2 size={14} />
                          Selected: {selectedTime}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 3. PATIENT DETAILS FORM (Appears once doctor and time slot are picked) */}
            {selectedDoctor && selectedTime && (
              <div className="rounded-3xl bg-slate-900/40 border border-cyan-500/30 p-6 md:p-8 backdrop-blur-md shadow-2xl transition-all duration-500">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-white/5 pb-6 mb-6 gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <Calendar className="text-cyan-400" size={22} />
                      3. Complete Patient Intake Registration
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Booking consultation with <span className="text-cyan-400 font-semibold">{selectedDoctor.name}</span> at <span className="text-purple-400 font-semibold">{selectedTime}</span>
                    </p>
                  </div>
                </div>

                <form onSubmit={handleBookingSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                    
                    {/* Appointment Date */}
                    <div className="flex flex-col space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Appointment Date</label>
                      <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        required
                        className="w-full px-4 py-3 bg-slate-950 border border-white/5 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-500/40 transition-all [color-scheme:dark]"
                      />
                    </div>

                    {/* Full Name */}
                    <div className="flex flex-col space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Patient Full Name</label>
                      <div className="relative flex items-center">
                        <User className="absolute left-4 text-slate-500" size={16} />
                        <input
                          type="text"
                          name="fullName"
                          value={patientData.fullName}
                          onChange={handleInputChange}
                          placeholder="Aman Patil"
                          required
                          className="w-full pl-11 pr-4 py-3 bg-slate-950 border border-white/5 rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/40 transition-all"
                        />
                      </div>
                    </div>

                    {/* Email Address */}
                    <div className="flex flex-col space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Email Address</label>
                      <div className="relative flex items-center">
                        <Mail className="absolute left-4 text-slate-500" size={16} />
                        <input
                          type="email"
                          name="email"
                          value={patientData.email}
                          onChange={handleInputChange}
                          placeholder="aman@svnit.ac.in"
                          required
                          className="w-full pl-11 pr-4 py-3 bg-slate-950 border border-white/5 rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/40 transition-all"
                        />
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div className="flex flex-col space-y-1.5 sm:col-span-2 md:col-span-1">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Phone Number</label>
                      <div className="relative flex items-center">
                        <Smartphone className="absolute left-4 text-slate-500" size={16} />
                        <input
                          type="tel"
                          name="phone"
                          value={patientData.phone}
                          onChange={handleInputChange}
                          placeholder="+91 98765 43210"
                          required
                          className="w-full pl-11 pr-4 py-3 bg-slate-950 border border-white/5 rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/40 transition-all"
                        />
                      </div>
                    </div>

                    {/* Reason / Symptoms Description */}
                    <div className="flex flex-col space-y-1.5 sm:col-span-2 md:col-span-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Symptoms / Reason for Visit</label>
                      <input
                        type="text"
                        name="reason"
                        value={patientData.reason}
                        onChange={handleInputChange}
                        placeholder="Briefly describe your medical concerns or symptoms..."
                        className="w-full px-4 py-3 bg-slate-950 border border-white/5 rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/40 transition-all"
                      />
                    </div>

                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex justify-end">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-8 py-3.5 text-white font-semibold text-sm rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg w-full sm:w-auto justify-center"
                      style={{
                        background: "linear-gradient(135deg, #06b6d4 0%, #4f2f8c 100%)",
                        boxShadow: "0 4px 20px rgba(6, 182, 212, 0.25)"
                      }}
                    >
                      <span>Finalize Booking</span>
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </form>
              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
};

export default Appointment;