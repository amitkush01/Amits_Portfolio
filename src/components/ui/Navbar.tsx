"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Briefcase, Download, Cpu } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface NavbarProps {
  onOpenRecruiterModal: () => void;
}

export default function Navbar({ onOpenRecruiterModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState<string>("about");
  const [isRouting, setIsRouting] = useState(false);
  const [routeTarget, setRouteTarget] = useState("");

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, name: string) => {
    e.preventDefault();
    if (activeSection === href.replace("#", "")) return;
    
    setMobileMenuOpen(false);
    setRouteTarget(name);
    setIsRouting(true);

    setTimeout(() => {
      setIsRouting(false);
      const elem = document.getElementById(href.replace("#", ""));
      if (elem) {
        window.scrollTo({
          top: elem.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    }, 200);
  };

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About Me", href: "#about", id: "about" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Certificates", href: "#certificates", id: "certificates" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section Observer
      const sections = navLinks.map((l) => document.getElementById(l.id)).filter(Boolean);
      const scrollPosition = window.scrollY + 250;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    }
  };

  const handleDownloadResume = () => {
    const element = document.createElement("a");
    element.href = "/Amit_Kumar_Resume.pdf";
    element.download = "Amit_Kumar_Resume.pdf";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-[#050816]/85 backdrop-blur-2xl border-b border-slate-800/80 shadow-2xl shadow-black/40"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-12 h-12 sm:w-[50px] sm:h-[50px] rounded-xl overflow-hidden border border-blue-500/30 shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform bg-[#0b1120] flex items-center justify-center shrink-0">
            <img src="/images/logo.jpg" alt="Amit Logo" className="w-full h-full object-cover" />
          </div>
          <div className="hidden sm:block">
            <div className="font-bold text-white text-base tracking-tight leading-none group-hover:text-blue-400 transition-colors">
              {PERSONAL_INFO.name}
            </div>
            <div className="text-[11px] text-slate-400 font-mono leading-tight mt-0.5">
              CSE &apos;27
            </div>
          </div>
        </a>

        {/* Desktop Nav Links with Active Pill Animation */}
        <nav className="hidden md:flex items-center gap-1 glass-pill px-4 py-1.5 rounded-full border border-slate-800 relative">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.name)}
                className={`relative px-3.5 py-1.5 text-xs font-medium transition-colors z-10 ${
                  isActive ? "text-white font-bold" : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavBackground"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600/40 via-purple-600/40 to-cyan-500/40 border border-blue-400/40 rounded-full z-[-1]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden md:flex items-center gap-3">
          {/* Recruiter Mode Button */}
          <button
            onClick={onOpenRecruiterModal}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 hover:bg-blue-500/20 hover:border-blue-400 text-xs font-semibold transition-all hover:scale-105 shadow-md shadow-blue-500/10"
            title="ATS & Recruiter Fast Summary"
          >
            <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
            <span>Recruiter View</span>
          </button>

          {/* Removed Theme Toggle - Enforcing Premium Dark Mode for better visual consistency */}

          {/* Hire Me / Resume Button */}
          <button
            onClick={handleDownloadResume}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-white text-xs font-bold shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all transform hover:-translate-y-0.5 border border-emerald-400/50"
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Hire Me</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenRecruiterModal}
            className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium"
          >
            <Briefcase className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 text-slate-300 hover:text-white bg-slate-800/40 hover:bg-blue-500/20 backdrop-blur-md rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 shadow-lg shadow-black/20"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5 text-blue-400" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0b1120]/95 backdrop-blur-2xl border-b border-slate-800 px-4 py-6 space-y-4"
          >
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.name)}
                  className={`px-4 py-2 text-sm font-medium rounded-xl transition-colors ${
                    activeSection === link.id
                      ? "bg-blue-600/20 text-blue-300 font-bold border border-blue-500/30"
                      : "text-slate-300 hover:bg-slate-800/60"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRecruiterModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-semibold"
              >
                <Briefcase className="w-4 h-4" /> Recruiter ATS Fast View
              </button>
              <button
                onClick={handleDownloadResume}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-white text-sm font-bold shadow-lg shadow-emerald-500/20 border border-emerald-400/50"
              >
                <Briefcase className="w-4 h-4" /> Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Butterfly Routing Overlay */}
      <AnimatePresence>
        {isRouting && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050816]/70 backdrop-blur-sm pointer-events-none"
          >
            {/* Spinning Butterfly container */}
            <div className="relative flex items-center justify-center w-32 h-32">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 0.2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-blue-500/10"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]">
                  {/* Butterfly SVG */}
                  <svg width="40" height="40" viewBox="0 0 100 100" className="overflow-visible rotate-90">
                <defs>
                  <linearGradient id="wingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.9" />
                    <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.9" />
                  </linearGradient>
                  <linearGradient id="wingGradRight" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.9" />
                    <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.9" />
                  </linearGradient>
                </defs>

                {/* Left Wing */}
                <motion.path
                  d="M50 50 C 5 10, -10 80, 48 85 Z"
                  fill="url(#wingGrad)"
                  animate={{ scaleX: [1, 0.1, 1] }}
                  transition={{ duration: 0.05, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: "50px 50px" }}
                />
                
                {/* Right Wing */}
                <motion.path
                  d="M50 50 C 95 10, 110 80, 52 85 Z"
                  fill="url(#wingGradRight)"
                  animate={{ scaleX: [1, 0.1, 1] }}
                  transition={{ duration: 0.05, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: "50px 50px" }}
                />
                
                {/* Body */}
                <ellipse cx="50" cy="50" rx="3" ry="22" fill="#1e3a8a" />
                <circle cx="50" cy="22" r="4" fill="#3b82f6" />
                
                {/* Antennae */}
                <path d="M48 20 Q 35 5 30 10" stroke="#60a5fa" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                <path d="M52 20 Q 65 5 70 10" stroke="#60a5fa" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              </svg>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
