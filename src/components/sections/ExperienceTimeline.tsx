"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Calendar, MapPin, CheckCircle2, Sparkles, BookOpen } from "lucide-react";
import { EXPERIENCES } from "@/data/portfolioData";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-transparent">

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-lg font-mono font-extrabold tracking-widest uppercase tracking-wider">
            <Briefcase className="w-6 h-6" /> Educational & Development Journey
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Experience & <span className="gradient-text">Academic Timeline</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            My academic progression, technical training, project development milestones, and learning journey.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 space-y-12 pl-6 sm:pl-10">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="relative group"
            >
              {/* Timeline Node Icon */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-0 w-10 h-10 rounded-full bg-[#0b1120] border-2 border-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                {exp.type === "Education" ? (
                  <GraduationCap className="w-6 h-6 text-blue-400" />
                ) : (
                  <Briefcase className="w-6 h-6 text-purple-400" />
                )}
              </div>

              {/* Glass Card */}
              <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 hover:border-blue-500/40 transition-all duration-300 space-y-4">
                
                {/* Header info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-4">
                  <div>
                    <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-lg font-mono font-extrabold tracking-widest">
                      {exp.type}
                    </span>
                    <h3 className="text-xl font-bold text-white tracking-tight mt-2">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold text-cyan-300">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs text-slate-400 space-y-1 font-mono">
                    <div className="flex items-center gap-1.5 text-slate-300">
                      <Calendar className="w-6 h-6 text-purple-400" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-6 h-6 text-blue-400" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed">
                  {exp.description}
                </p>

                {/* Key Achievements */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider font-semibold flex items-center gap-1.5">
                    <Sparkles className="w-6 h-6 text-amber-400" /> Key Highlights
                  </h4>
                  <ul className="space-y-1.5">
                    {exp.keyAchievements.map((ach, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-800/60">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
