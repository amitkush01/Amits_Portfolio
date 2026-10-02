"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, ArrowRight, Mail, Code2, Sparkles, Terminal, ShieldCheck } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import TiltCard from "@/components/ui/TiltCard";

interface HeroSectionProps {
  onOpenRecruiterModal: () => void;
}

export default function HeroSection({ onOpenRecruiterModal }: HeroSectionProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    "Full Stack Developer",
    "Java & DSA Enthusiast",
    "Cloud & AI Enthusiast",
    "B.Tech CSE Student (2023-2027)"
  ];

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  const handleDownloadResume = () => {
    const element = document.createElement("a");
    element.href = "/Amit_Kumar_Resume.pdf";
    element.download = "Amit_Kumar_Resume.pdf";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-transparent">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Text & CTAs Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/10 via-violet-500/10 to-sky-500/10 border border-cyan-400/30 text-xs font-mono text-cyan-300 shadow-lg shadow-cyan-500/10 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Open to Software Engineering Opportunities</span>
            </div>

            {/* Main Name & Title */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
                <span className="text-white/90">Hi, I&apos;m</span>
                <br />
                <span className="text-white">
                  {PERSONAL_INFO.name}
                </span>
              </h1>

              {/* Animated Typing Text */}
              <div className="text-xl sm:text-2xl font-mono font-semibold h-9 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-cyan-400 shrink-0" />
                <span
                  style={{
                    background: "linear-gradient(90deg, #38bdf8, #a78bfa)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {displayText}
                </span>
                <span className="w-2 h-5 bg-cyan-400 animate-pulse ml-0.5 rounded-sm" />
              </div>
            </div>

            {/* Tagline */}
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl font-normal leading-relaxed">
              A{" "}
              <span className="text-cyan-300 font-semibold">passionate Full-Stack Developer</span>{" "}
              focused on building{" "}
              <span className="text-violet-300 font-semibold">clean, scalable, and high-performance</span>{" "}
              web applications with modern technologies —{" "}
              <span className="text-sky-300 font-semibold">React, Next.js, Node.js & the MERN stack</span>.
            </p>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 gap-6 py-4 border-y border-white/5 max-w-sm">
              <div className="space-y-0.5">
                <div
                  className="text-2xl font-bold font-mono"
                  style={{
                    background: "linear-gradient(90deg, #38bdf8, #22d3ee)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  100+
                </div>
                <div className="text-xs text-slate-500 font-mono uppercase tracking-widest">DSA Problems</div>
              </div>
              <div className="space-y-0.5">
                <div
                  className="text-2xl font-bold font-mono"
                  style={{
                    background: "linear-gradient(90deg, #a78bfa, #38bdf8)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  7.13 / 10
                </div>
                <div className="text-xs text-slate-500 font-mono uppercase tracking-widest">CGPA</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button
                onClick={handleDownloadResume}
                className="px-7 py-3.5 rounded-xl text-white text-sm font-bold shadow-xl transition-all transform hover:-translate-y-1 flex items-center gap-2"
                style={{
                  background: "linear-gradient(135deg, #38bdf8 0%, #a78bfa 50%, #34d399 100%)",
                  boxShadow: "0 10px 30px -5px rgba(56,189,248,0.4)",
                }}
                onMouseOver={e => (e.currentTarget.style.boxShadow = "0 15px 40px -5px rgba(56,189,248,0.5)")}
                onMouseOut={e => (e.currentTarget.style.boxShadow = "0 10px 30px -5px rgba(56,189,248,0.4)")}
              >
                <Download className="w-4 h-4" />
                Download Resume
              </button>

              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl text-white text-sm font-semibold border border-violet-500/30 bg-violet-500/10 hover:bg-violet-500/20 hover:border-violet-400/60 transition-all transform hover:-translate-y-1 flex items-center gap-2 backdrop-blur-sm"
              >
                View Projects
                <ArrowRight className="w-4 h-4 text-violet-300" />
              </a>

              <a
                href="#contact"
                className="px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-sm font-medium border border-white/10 transition-all flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-pink-400" />
                Contact Me
              </a>
            </div>

            {/* Recruiter Banner */}
            <div className="pt-1">
              <button
                onClick={onOpenRecruiterModal}
                className="text-xs text-slate-500 hover:text-violet-400 flex items-center gap-1.5 transition-colors underline decoration-violet-500/40 underline-offset-4"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-violet-400" />
                Are you a Technical Recruiter or Hiring Manager? Click here for Fast ATS View.
              </button>
            </div>
          </motion.div>

          {/* Right Profile Card Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <TiltCard className="w-full max-w-md">
              {/* Multi-color gradient border */}
              <div
                className="relative w-full rounded-3xl p-[3px] animate-gradient group transition-all duration-700"
                style={{
                  background: "linear-gradient(135deg, #f472b6, #a78bfa, #38bdf8, #34d399, #f472b6)",
                  backgroundSize: "300% 300%",
                  boxShadow: "0 25px 60px -10px rgba(167,139,250,0.35)",
                }}
              >
                {/* Inner Card */}
                <div className="w-full bg-[#06040f]/92 backdrop-blur-xl rounded-[22px] p-6 sm:p-8 flex flex-col items-center gap-6 relative overflow-hidden border border-white/5">

                  {/* Subtle inner glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 via-violet-500/5 to-sky-500/5 rounded-[22px] pointer-events-none" />

                  {/* Top status bar */}
                  <div className="w-full flex items-center justify-between border-b border-white/5 pb-3 relative z-10">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                      <span className="text-xs font-mono text-emerald-300 font-semibold">Available for Work</span>
                    </div>
                    <Code2 className="w-4 h-4 text-violet-400" />
                  </div>

                  {/* Avatar */}
                  <div className="relative z-10 w-full flex flex-col items-center gap-5">
                    <div
                      className="relative w-56 h-64 sm:w-64 sm:h-72 rounded-[2.5rem] p-[4px] shadow-2xl group-hover:-translate-y-3 transition-all duration-500"
                      style={{
                        background: "linear-gradient(135deg, #f472b6, #a78bfa, #38bdf8)",
                        boxShadow: "0 20px 50px -10px rgba(167,139,250,0.5)",
                      }}
                    >
                      <div
                        className="absolute inset-0 rounded-[2.5rem] blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-700"
                        style={{
                          background: "linear-gradient(135deg, #f472b6, #a78bfa, #38bdf8)",
                        }}
                      />
                      <img
                        src="/images/profile.jpg"
                        alt="Amit Kumar"
                        className="w-full h-full object-cover object-top rounded-[2.3rem] bg-[#06040f] relative z-10"
                      />
                    </div>

                    <div className="text-center">
                      <h3
                        className="text-xl font-bold tracking-tight"
                        style={{
                          background: "linear-gradient(90deg, #f472b6, #a78bfa, #38bdf8)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        {PERSONAL_INFO.name}
                      </h3>
                      <p className="text-sm text-slate-400 font-mono mt-0.5">B.Tech (CSE)</p>
                    </div>
                  </div>

                  {/* Tech Chips */}
                  <div className="w-full flex flex-wrap items-center justify-center gap-2 pt-2 border-t border-white/5 relative z-10">
                    {[
                      { name: "Java", color: "text-rose-300 border-rose-500/30 bg-rose-500/10" },
                      { name: "React.js", color: "text-sky-300 border-sky-500/30 bg-sky-500/10" },
                      { name: "C++", color: "text-violet-300 border-violet-500/30 bg-violet-500/10" },
                      { name: "Next.js", color: "text-slate-200 border-white/20 bg-white/5" },
                      { name: "Node.js", color: "text-emerald-300 border-emerald-500/30 bg-emerald-500/10" },
                      { name: "MongoDB", color: "text-green-300 border-green-500/30 bg-green-500/10" },
                    ].map((tech) => (
                      <span
                        key={tech.name}
                        className={`px-2.5 py-1 rounded-lg border text-[11px] font-mono font-medium hover:scale-105 transition-transform ${tech.color}`}
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
