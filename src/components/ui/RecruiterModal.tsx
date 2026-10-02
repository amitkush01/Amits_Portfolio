"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Briefcase, Award, CheckCircle2, Mail, Phone, ExternalLink, Code2, GraduationCap } from "lucide-react";
import { PERSONAL_INFO, PROJECTS, CERTIFICATES } from "@/data/portfolioData";

interface RecruiterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RecruiterModal({ isOpen, onClose }: RecruiterModalProps) {
  if (!isOpen) return null;

  const handleDownloadResume = () => {
    // Trigger Resume PDF Download
    const element = document.createElement("a");
    element.href = "/Amit_Kumar_Resume.pdf";
    element.download = "Amit_Kumar_Resume.pdf";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-panel rounded-2xl p-6 sm:p-8 border border-blue-500/30 shadow-2xl bg-[#0b1120]/95"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white hover:bg-slate-800/60 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2">
                <Briefcase className="w-3.5 h-3.5" />
                ATS & Recruiter Fast-Skim Summary
              </div>
              <h2 className="text-2xl font-bold text-white">{PERSONAL_INFO.name}</h2>
              <p className="text-sm text-slate-400 font-medium">{PERSONAL_INFO.roleTagline}</p>
            </div>

            <button
              onClick={handleDownloadResume}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </button>
          </div>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
              <div className="text-xl font-bold text-blue-400">2023-2027</div>
              <div className="text-[11px] text-slate-400 uppercase font-medium">B.Tech CSE</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
              <div className="text-xl font-bold text-purple-400">100+</div>
              <div className="text-[11px] text-slate-400 uppercase font-medium">DSA Problems</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
              <div className="text-xl font-bold text-cyan-400">4 Global</div>
              <div className="text-[11px] text-slate-400 uppercase font-medium">Certifications</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
              <div className="text-xl font-bold text-emerald-400">Immediate</div>
              <div className="text-[11px] text-slate-400 uppercase font-medium">Intern/SDE Availability</div>
            </div>
          </div>

          {/* Core Highlights */}
          <div className="space-y-6 text-sm text-slate-300">
            {/* Education & Status */}
            <div>
              <h3 className="text-xs uppercase font-bold text-slate-400 tracking-wider flex items-center gap-2 mb-2">
                <GraduationCap className="w-4 h-4 text-blue-400" /> Education & Specialization
              </h3>
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 space-y-1">
                <div className="font-semibold text-white">{PERSONAL_INFO.education.degree}</div>
                <div className="text-slate-400 text-xs">{PERSONAL_INFO.education.institution} ({PERSONAL_INFO.education.duration})</div>
                <div className="text-xs text-blue-300 pt-1">
                  Core Focus: Data Structures & Algorithms, Object-Oriented Programming (Java/C++), Operating Systems, DBMS, Networks.
                </div>
              </div>
            </div>

            {/* Technical Skill Badges */}
            <div>
              <h3 className="text-xs uppercase font-bold text-slate-400 tracking-wider flex items-center gap-2 mb-2">
                <Code2 className="w-4 h-4 text-purple-400" /> Core Tech Stack & Competencies
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Java", "C++", "Python", "JavaScript", "SQL", "React.js", "Next.js", "Node.js", "Express.js", "Tailwind CSS", "MongoDB", "MySQL", "Firebase", "AWS", "Git"].map((tech) => (
                  <span key={tech} className="px-2.5 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Certifications Quick List */}
            <div>
              <h3 className="text-xs uppercase font-bold text-slate-400 tracking-wider flex items-center gap-2 mb-2">
                <Award className="w-4 h-4 text-amber-400" /> Key Global Certifications
              </h3>
              <ul className="space-y-1.5 text-xs">
                {CERTIFICATES.map(c => (
                  <li key={c.id} className="flex items-center gap-2 text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="font-semibold text-white">{c.title}</span>
                    <span className="text-slate-500">({c.issuer})</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Contact Bar */}
            <div className="p-4 rounded-xl bg-blue-600/10 border border-blue-500/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-4">
                <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-1.5 text-blue-300 hover:text-white transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                  {PERSONAL_INFO.email}
                </a>
                <a href={`tel:${PERSONAL_INFO.phone}`} className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                  {PERSONAL_INFO.phone}
                </a>
              </div>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-cyan-400 hover:underline font-semibold"
              >
                LinkedIn Profile <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
