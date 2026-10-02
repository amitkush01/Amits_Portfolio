"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Layers, X, CheckCircle2, ArrowUpRight } from "lucide-react";
import { GitHubIcon } from "@/components/ui/Icons";
import TiltCard from "@/components/ui/TiltCard";
import MouseParticles from "@/components/ui/MouseParticles";
import { PROJECTS, Project } from "@/data/portfolioData";

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ["All", "Full Stack", "AI / Smart Systems", "Systems & C++"];

  const filteredProjects = activeCategory === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-transparent">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-lg font-mono font-extrabold tracking-widest uppercase tracking-wider">
            <Layers className="w-6 h-6" /> Featured Work
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Projects & <span className="gradient-text">Software Applications</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Production-grade web systems, AI agricultural applications, and OOP C++ software engineered with modern architectures.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/25 scale-105"
                  : "glass-panel text-slate-400 hover:text-white hover:bg-slate-800/80 border-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid with 3D Tilt Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.15 }}
              >
                <TiltCard className="h-full">
                  <div className="glass-panel rounded-3xl overflow-hidden border border-slate-800 hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between h-full group">
                    
                    {/* Project Image Header */}
                    <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-transparent to-transparent opacity-90" />

                      {/* Category Pill */}
                      <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-cyan-300 text-lg font-mono font-extrabold tracking-widest">
                        {project.category}
                      </span>
                    </div>

                    {/* Card Body */}
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        <h3 
                          onClick={() => setSelectedProject(project)}
                          className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors cursor-pointer flex items-center justify-between"
                        >
                          <span>{project.title}</span>
                          <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                        </h3>
                        <p className="text-xs font-semibold text-purple-300 font-mono">
                          {project.subtitle}
                        </p>
                        <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-300 text-[11px] font-mono"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Card Actions */}
                      <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                        {project.demoUrl ? (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="flex-1 py-2 px-3 rounded-xl bg-blue-600/20 hover:bg-blue-600 text-blue-300 hover:text-white border border-blue-500/30 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
                          >
                            <ExternalLink className="w-6 h-6" /> Live Demo
                          </a>
                        ) : (
                          <button
                            onClick={() => setSelectedProject(project)}
                            className="flex-1 py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                          >
                            View Details
                          </button>
                        )}

                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                            title="View GitHub Repository"
                          >
                            <GitHubIcon className="w-6 h-6" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Detailed Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-panel rounded-3xl p-6 sm:p-8 border border-blue-500/30 bg-[#0b1120] space-y-6"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Modal Title */}
                <div>
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-lg font-mono font-extrabold tracking-widest">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-2">
                    {selectedProject.title}
                  </h3>
                  <p className="text-sm font-mono text-cyan-300">
                    {selectedProject.subtitle}
                  </p>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedProject.longDescription}
                </p>

                {/* Key Features & Highlights */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider font-semibold">
                    Key Features & Technical Architecture
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider font-semibold">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="pt-4 border-t border-slate-800 flex items-center gap-4">
                  {selectedProject.demoUrl && (
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-semibold flex items-center gap-2"
                    >
                      <ExternalLink className="w-6 h-6" /> Live Demo
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs font-semibold flex items-center gap-2"
                    >
                      <GitHubIcon className="w-6 h-6" /> GitHub Repository
                    </a>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
