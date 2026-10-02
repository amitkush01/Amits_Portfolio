"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Layout, Server, Database, Cpu, Sparkles, CheckCircle } from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", ...SKILL_CATEGORIES.map((c) => c.title)];

  const getIcon = (title: string) => {
    switch (title) {
      case "Programming Languages": return <Code2 className="w-6 h-6 text-blue-400" />;
      case "Frontend Development": return <Layout className="w-6 h-6 text-cyan-400" />;
      case "Backend & Cloud": return <Server className="w-6 h-6 text-purple-400" />;
      case "Databases & Tools": return <Database className="w-6 h-6 text-emerald-400" />;
      case "Core Computer Science": return <Cpu className="w-6 h-6 text-amber-400" />;
      default: return <Sparkles className="w-6 h-6 text-blue-400" />;
    }
  };

  const filteredCategories = activeCategory === "All"
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter((c) => c.title === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-transparent">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-lg font-mono font-extrabold tracking-widest uppercase tracking-wider">
            <Code2 className="w-6 h-6" /> Technical Expertise
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Skills & <span className="gradient-text">Core Competencies</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A comprehensive breakdown of programming languages, frameworks, cloud services, and computer science fundamentals.
          </p>
        </div>

        {/* Filter Tab Bar */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25 scale-105"
                  : "glass-panel text-slate-400 hover:text-white hover:bg-slate-800/80 border-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Cards Grid */}
        <div className="space-y-10">
          <AnimatePresence mode="wait">
            {filteredCategories.map((category) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-4"
              >
                {/* Category Header */}
                <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
                  {getIcon(category.title)}
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {category.title}
                  </h3>
                  <span className="text-xs font-mono text-slate-500 ml-auto">
                    {category.skills.length} Skills
                  </span>
                </div>

                {/* Skills Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.02, translateY: -4 }}
                      className="glass-panel rounded-2xl p-5 border border-slate-800 hover:border-blue-500/40 transition-all duration-300 relative group overflow-hidden"
                    >
                      {/* Subtle Top Border Highlight */}
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />

                      <div className="flex items-center justify-between mb-2">
                        <span className="text-base font-bold text-white group-hover:text-blue-400 transition-colors flex items-center gap-2">
                          <CheckCircle className="w-6 h-6 text-emerald-400" />
                          {skill.name}
                        </span>
                        <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-md border border-cyan-500/20">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden my-3 p-[1px]">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 rounded-full"
                        />
                      </div>

                      {/* Description */}
                      {skill.description && (
                        <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                          {skill.description}
                        </p>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
