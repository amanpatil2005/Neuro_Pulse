import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Activity, 
  BrainCircuit, 
  Stethoscope, 
  Dna, 
  ShieldAlert, 
  Database, 
  ArrowRight,
  CheckCircle2,
  Zap
} from "lucide-react";

const SERVICES_DATA = [
  {
    id: "neural-diagnostics",
    icon: <BrainCircuit className="text-cyan-400" size={28} />,
    title: "Neural Diagnostic Engine",
    tagline: "Real-time anomaly identification via deep learning",
    description: "Scans patient imaging and vital streams in real time, detecting micro-anomalies in neural and cardiovascular pathways with up to 98% accuracy.",
    features: [
      "Automated X-Ray & MRI anomaly flagging",
      "Sub-second pattern recognition",
      "HIPAA-compliant data isolation"
    ],
    badge: "Core AI Engine"
  },
  {
    id: "predictive-triage",
    icon: <ShieldAlert className="text-purple-400" size={28} />,
    title: "Predictive Patient Triaging",
    tagline: "Intelligent intake prioritization pathways",
    description: "Evaluates patient intake parameters dynamically to assign risk severity ranks, streamlining emergency room and ICU routing pipelines.",
    features: [
      "Automated intake severity scoring",
      "EHR integration pipelines",
      "Dynamic bed allocation alerts"
    ],
    badge: "Clinical Workflow"
  },
  {
    id: "continuous-monitoring",
    icon: <Stethoscope className="text-cyan-400" size={28} />,
    title: "Autonomous Patient Monitoring",
    tagline: "24/7 telemetry and vitals tracking",
    description: "Monitors critical bedside telemetry continuously, flagging subtle drift metrics before high-risk clinical events occur.",
    features: [
      "24/7 biometrics stream evaluation",
      "Early warning threshold alerts",
      "Multi-device telemetry sync"
    ],
    badge: "Patient Care"
  }
];

const Solutions = () => {
  const [selectedService, setSelectedService] = useState(SERVICES_DATA[0]);

  return (
    <div className="w-full min-h-screen bg-slate-950 text-slate-300 py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Activity size={14} className="animate-pulse" />
            Clinical AI Capabilities
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
            Autonomous Healthcare <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Services & Ecosystems
            </span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="group relative rounded-3xl p-6 md:p-8 border bg-slate-900/30 border-white/5 hover:border-white/15 cursor-pointer"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="p-3.5 rounded-2xl bg-slate-950 border border-white/10">
                  {service.icon}
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 text-slate-400">
                  {service.badge}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-xs font-semibold text-cyan-400 mb-4">{service.tagline}</p>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">{service.description}</p>

              <div className="space-y-2 pt-4 border-t border-white/5">
                {service.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2 text-xs font-medium text-slate-300">
                    <CheckCircle2 size={14} className="text-cyan-400 flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Solutions;