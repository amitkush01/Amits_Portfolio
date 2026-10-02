"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Cpu, Shield, Zap, Sparkles } from "lucide-react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [stepText, setStepText] = useState("Initializing Core Quantum Engines...");

  useEffect(() => {
    const steps = [
      { p: 20, text: "Initializing Core Quantum Engine..." },
      { p: 45, text: "Compiling React 19 & Next.js Modules..." },
      { p: 70, text: "Establishing Secure Database Links..." },
      { p: 90, text: "Optimizing Futuristic Cyber Interface..." },
      { p: 100, text: "Welcome to Amit Kumar Portfolio" },
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        setProgress(steps[currentStep].p);
        setStepText(steps[currentStep].text);
        currentStep++;
      } else {
        clearInterval(interval);
        setTimeout(() => setLoading(false), 150);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.02,
            filter: "blur(6px)",
            transition: { duration: 0.35, ease: "easeOut" } 
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#03050e] text-white px-4 overflow-hidden select-none"
        >
          {/* Cybernetic Ambient Glow Background */}
          <div className="absolute w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[120px] animate-pulse pointer-events-none" />
          <div className="absolute w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none translate-x-32 -translate-y-32" />
          <div className="absolute w-[450px] h-[450px] bg-purple-600/15 rounded-full blur-[110px] pointer-events-none -translate-x-32 translate-y-32" />

          {/* Grid Background Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.07] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />

          <div className="w-full max-w-lg relative z-10 p-6 sm:p-8 rounded-3xl bg-[#080d1e]/70 border border-slate-800/80 backdrop-blur-2xl shadow-[0_0_80px_rgba(0,0,0,0.8)] space-y-7">
            {/* Terminal Header */}
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-3.5">
              <div className="flex items-center gap-2.5 text-cyan-400 font-mono text-xs font-semibold tracking-wider">
                <Terminal className="w-4 h-4 text-cyan-400 animate-pulse" />
                <span>AMIT_KUMAR.SYS // KERNEL v2.7</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  ONLINE
                </span>
              </div>
            </div>

            {/* Futuristic 3D Orbiting Logo Center Container */}
            <div className="flex items-center justify-center py-6 relative">
              {/* Outer Neon Orbit Ring 1 */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute w-44 h-44 rounded-full border border-dashed border-cyan-500/40"
              />

              {/* Inner Reverse Neon Orbit Ring 2 */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute w-36 h-36 rounded-full border border-dotted border-purple-500/50"
              />

              {/* Spinning background halo */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="absolute w-40 h-40 bg-gradient-to-tr from-cyan-500/20 via-blue-600/30 to-purple-600/20 rounded-full blur-xl"
              />
              
              {/* Central Glass Shield Badge (Clean & Steady) */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative w-28 h-28 rounded-2xl bg-gradient-to-tr from-cyan-400 via-blue-600 to-purple-600 p-[2px] shadow-[0_0_30px_rgba(59,130,246,0.3)]"
              >
                <div className="w-full h-full bg-[#050816] rounded-[14px] flex items-center justify-center relative overflow-hidden p-2">
                  {/* Custom Logo Image - Clean & Steady */}
                  <img 
                    src="/images/logo.jpg" 
                    alt="Amit Logo" 
                    className="w-full h-full object-contain rounded-lg z-20" 
                  />
                </div>
              </motion.div>
            </div>

            {/* Status Info & Progress Bar */}
            <div className="space-y-3 font-mono">
              <div className="flex items-center justify-between text-xs">
                <span className="flex items-center gap-2 text-slate-300 font-medium">
                  <Cpu className="w-4 h-4 text-cyan-400 animate-spin" />
                  {stepText}
                </span>
                <span className="text-sm font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  {progress}%
                </span>
              </div>

              {/* Enhanced Progress Bar Track */}
              <div className="w-full h-2.5 bg-slate-900/90 rounded-full overflow-hidden p-[1px] border border-slate-800 relative">
                <motion.div
                  className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full relative shadow-[0_0_15px_#3b82f6]"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {/* Trailing Laser Light Flare */}
                  <div className="absolute right-0 top-0 bottom-0 w-3 bg-white blur-[2px] rounded-full" />
                </motion.div>
              </div>

              {/* Status Badges */}
              <div className="flex items-center justify-between pt-1 text-[11px] text-slate-400">
                <span className="flex items-center gap-1">
                  <Zap className="w-3 h-3 text-amber-400" />
                  Full Stack Architecture
                </span>
                <span className="flex items-center gap-1 text-slate-500">
                  <Sparkles className="w-3 h-3 text-purple-400" />
                  CSE &apos;27
                </span>
              </div>
            </div>

            {/* Footer Tag */}
            <div className="text-center font-mono text-[10px] text-slate-500 border-t border-slate-800/60 pt-3">
              Designed & Built by <span className="text-blue-400 font-semibold">Amit Kumar</span> • CGC Landran
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
