"use client";

import { motion } from "framer-motion";
import { GraduationCap, Target, Cpu, CheckCircle2, Award, Code, BookOpen } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-transparent">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border text-lg font-mono font-extrabold tracking-widest uppercase tracking-wider" style={{ background: "linear-gradient(90deg, rgba(139,92,246,0.15), rgba(6,182,212,0.15))", borderColor: "rgba(139,92,246,0.4)", color: "#a78bfa" }}>
            <GraduationCap className="w-6 h-6" /> About Me
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Passionate CS Student & <br />
            <span className="gradient-text">Aspiring Software Development Engineer</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Bridging fundamental Computer Science theory with modern web application engineering.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main About Story */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Main About Story Box */}
            <div
              className="rounded-3xl p-[2px]"
              style={{
                background: "linear-gradient(135deg, rgba(6,182,212,0.5), rgba(139,92,246,0.5), rgba(52,211,153,0.5))",
                boxShadow: "0 8px 30px -8px rgba(6,182,212,0.3)",
              }}
            >
              <div className="rounded-[22px] p-6 sm:p-8 space-y-6" style={{ background: "rgba(5,8,22,0.95)", backdropFilter: "blur(16px)" }}>
              <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
              <p>
                {PERSONAL_INFO.about}
              </p>
              <p>
                Currently in my 4th year of B.Tech at <strong className="text-white">CGC Landran (IKGPTU)</strong>, I have dedicated myself to mastering core Computer Science principles including <span className="text-blue-300">Data Structures & Algorithms in Java</span>, <span className="text-purple-300">Object-Oriented Design</span>, <span className="text-cyan-300">Database Systems</span>, and <span className="text-emerald-300">Operating Systems</span>.
              </p>
            </div>

            {/* Career Objective Box */}
            <div className="p-5 rounded-2xl border space-y-2" style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.12), rgba(139,92,246,0.12), rgba(6,182,212,0.08))", borderColor: "rgba(139,92,246,0.35)" }}>
              <div className="flex items-center gap-2 font-bold text-sm uppercase tracking-wider" style={{ background: "linear-gradient(90deg, #60a5fa, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                <Target className="w-6 h-6 text-cyan-400" /> Career Objective
              </div>
              <p className="text-slate-200 text-sm italic">
                &quot;{PERSONAL_INFO.careerObjective}&quot;
              </p>
            </div>

            {/* Core Competencies List */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider font-semibold">
                Core Strengths & Commitments
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Clean Object-Oriented Java Programming",
                  "Algorithmic Efficiency & Problem Solving",
                  "Modern Responsive Full-Stack Web Apps",
                  "Cloud Infrastructure & AI Integration",
                  "Database Design (Relational & NoSQL)",
                  "Continuous Learning & Industry Best Practices"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            </div>
            </div>
            
            {/* Interests & Hobbies Box */}
            <div
              className="rounded-3xl p-[2px] mt-6"
              style={{
                background: "linear-gradient(135deg, #f472b6, #fb923c, #facc15, #34d399)",
                boxShadow: "0 8px 30px -8px rgba(251,146,60,0.3)",
              }}
            >
              <div className="rounded-[22px] p-5 space-y-4" style={{ background: "rgba(5,8,22,0.95)", backdropFilter: "blur(16px)" }}>
                <div className="flex items-center gap-2 font-bold text-sm uppercase tracking-widest">
                  <span className="text-xl">🎮</span>
                  <span style={{ background: "linear-gradient(90deg, #fb923c, #facc15)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Interests & Hobbies</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: "Gaming", emoji: "🎮", color: "rgba(139,92,246,0.15)", border: "rgba(139,92,246,0.4)", text: "#a78bfa" },
                    { label: "Painting", emoji: "🎨", color: "rgba(251,146,60,0.15)", border: "rgba(251,146,60,0.4)", text: "#fb923c" },
                    { label: "Cooking", emoji: "🍳", color: "rgba(52,211,153,0.15)", border: "rgba(52,211,153,0.4)", text: "#34d399" },
                    { label: "Motivational Songs", emoji: "🎵", color: "rgba(6,182,212,0.15)", border: "rgba(6,182,212,0.4)", text: "#22d3ee" },
                    { label: "Gym Workouts", emoji: "💪", color: "rgba(244,114,182,0.15)", border: "rgba(244,114,182,0.4)", text: "#f472b6" },
                  ].map((hobby) => (
                    <span
                      key={hobby.label}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all hover:scale-105 cursor-default"
                      style={{ background: hobby.color, border: `1px solid ${hobby.border}`, color: hobby.text }}
                    >
                      <span>{hobby.emoji}</span> {hobby.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Education & Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Education Card - colorful gradient border */}
            <div
              className="rounded-3xl p-[2px] space-y-0"
              style={{
                background: "linear-gradient(135deg, #60a5fa, #a78bfa, #34d399)",
                boxShadow: "0 8px 30px -8px rgba(96,165,250,0.3)",
              }}
            >
            <div className="rounded-[22px] p-6 space-y-4" style={{ background: "rgba(5,8,22,0.95)", backdropFilter: "blur(16px)" }}>
              <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: "rgba(96,165,250,0.2)" }}>
                <div className="flex items-center gap-2 font-bold text-base" style={{ background: "linear-gradient(90deg, #60a5fa, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  <GraduationCap className="w-6 h-6 text-blue-400" />
                  <span>Education Profile</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono" style={{ background: "rgba(96,165,250,0.1)", color: "#60a5fa", border: "1px solid rgba(96,165,250,0.3)" }}>
                  {PERSONAL_INFO.education.duration}
                </span>
              </div>

              {/* Full Education Timeline */}
              <div className="pt-2 space-y-6 relative">
                {/* Connecting Line */}
                <div className="absolute left-[15px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-emerald-500/50 via-blue-500/50 to-transparent"></div>
                
                {/* B.Tech */}
                <div className="relative pl-8 group">
                  <div className="absolute left-0 top-1 w-8 h-8 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)] border-[3px] border-[#0b1120] group-hover:scale-125 transition-transform duration-300"></div>
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {PERSONAL_INFO.education.degree}
                  </h4>
                  <p className="text-sm text-cyan-300 font-medium mt-0.5">
                    {PERSONAL_INFO.education.institution}
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    Status: {PERSONAL_INFO.education.status} | Academic CGPA: <strong className="text-emerald-400">{PERSONAL_INFO.education.gpa}</strong>
                  </p>
                  
                  {/* Coursework List */}
                  <div className="space-y-2 pt-3 mt-3 border-t border-slate-800/80">
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono font-semibold uppercase">
                      <BookOpen className="w-6 h-6 text-emerald-400" /> Core Subjects
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {PERSONAL_INFO.education.coursework.map((course) => (
                        <span
                          key={course}
                          className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-[10px] font-mono"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 12th Standard */}
                <div className="relative pl-8 group">
                  <div className="absolute left-0 top-1 w-8 h-8 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.8)] border-[3px] border-[#0b1120] group-hover:scale-125 transition-transform duration-300"></div>
                  </div>
                  <h4 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">Intermediate (12th) - BSEB</h4>
                  <p className="text-xs text-cyan-300/80 mt-0.5">Shree Lakshmi Sr. Sec. School (2021-2023)</p>
                  <div className="flex items-center gap-2 mt-1 text-[11px] font-mono">
                    <span className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-slate-400">Science (PCM)</span>
                    <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold">Score: 71.4%</span>
                  </div>
                </div>

                {/* 10th Standard */}
                <div className="relative pl-8 group">
                  <div className="absolute left-0 top-1 w-8 h-8 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-purple-400 shadow-[0_0_12px_rgba(192,132,252,0.8)] border-[3px] border-[#0b1120] group-hover:scale-125 transition-transform duration-300"></div>
                  </div>
                  <h4 className="text-sm font-bold text-white group-hover:text-purple-400 transition-colors">Matriculation (10th) - BSEB</h4>
                  <p className="text-xs text-purple-300/80 mt-0.5">S L High School, Sitamarhi (2020-2021)</p>
                  <div className="flex items-center gap-2 mt-1 text-[11px] font-mono">
                    <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold">Score: 87.2%</span>
                  </div>
                </div>
              </div>
            </div>
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* DSA Problems box - cyan/blue gradient */}
              <div
                className="rounded-2xl p-5 text-center relative overflow-hidden group cursor-default transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "linear-gradient(135deg, rgba(6,182,212,0.15), rgba(59,130,246,0.12))",
                  border: "1px solid rgba(6,182,212,0.35)",
                  boxShadow: "0 4px 20px -5px rgba(6,182,212,0.2)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-400/5 rounded-2xl" />
                <Code className="w-6 h-6 text-cyan-400 mx-auto mb-2 relative z-10 group-hover:scale-110 transition-transform" />
                <div className="text-2xl font-bold font-mono relative z-10" style={{ background: "linear-gradient(90deg, #22d3ee, #60a5fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>100+</div>
                <div className="text-xs text-cyan-300/70 font-medium relative z-10 mt-0.5">LeetCode & GFG Solved</div>
              </div>

              {/* CGPA box - violet/purple gradient */}
              <div
                className="rounded-2xl p-5 text-center relative overflow-hidden group cursor-default transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "linear-gradient(135deg, rgba(139,92,246,0.15), rgba(168,85,247,0.12))",
                  border: "1px solid rgba(139,92,246,0.35)",
                  boxShadow: "0 4px 20px -5px rgba(139,92,246,0.2)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-400/5 to-purple-400/5 rounded-2xl" />
                <Award className="w-6 h-6 text-violet-400 mx-auto mb-2 relative z-10 group-hover:scale-110 transition-transform" />
                <div className="text-2xl font-bold font-mono relative z-10" style={{ background: "linear-gradient(90deg, #a78bfa, #c084fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>7.13</div>
                <div className="text-xs text-violet-300/70 font-medium relative z-10 mt-0.5">CGPA (Current)</div>
              </div>
            </div>



          </motion.div>

        </div>
      </div>
    </section>
  );
}
