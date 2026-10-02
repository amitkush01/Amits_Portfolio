"use client";

import { useState } from "react";
import Preloader from "@/components/ui/Preloader";
import ScrollProgress from "@/components/ui/ScrollProgress";
import MouseFollower from "@/components/ui/MouseFollower";
import ParticleCanvas from "@/components/ui/ParticleCanvas";
import Navbar from "@/components/ui/Navbar";
import RecruiterModal from "@/components/ui/RecruiterModal";

import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import TechStackMarquee from "@/components/sections/TechStackMarquee";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";
import DiagonalMarquee from "@/components/sections/DiagonalMarquee";
import ProjectsSection from "@/components/sections/ProjectsSection";
import FloatingOrbsDivider from "@/components/sections/FloatingOrbsDivider";
import CertificatesSection from "@/components/sections/CertificatesSection";
import GallerySection from "@/components/sections/GallerySection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CyberGridDivider from "@/components/sections/CyberGridDivider";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  const [recruiterModalOpen, setRecruiterModalOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-transparent text-slate-100 overflow-x-hidden selection:bg-purple-500/30">
      {/* Interactive Background & Utilities */}
      <ParticleCanvas />
      <Preloader />
      <ScrollProgress />
      <MouseFollower />

      {/* Recruiter Fast ATS View Modal */}
      <RecruiterModal
        isOpen={recruiterModalOpen}
        onClose={() => setRecruiterModalOpen(false)}
      />

      {/* Floating Glass Navigation */}
      <Navbar onOpenRecruiterModal={() => setRecruiterModalOpen(true)} />

      {/* Portfolio Sections */}
      <HeroSection onOpenRecruiterModal={() => setRecruiterModalOpen(true)} />
      <AboutSection />
      <ProjectsSection />
      <TechStackMarquee />
      <SkillsSection />
      <DiagonalMarquee />
      <ExperienceTimeline />
      <FloatingOrbsDivider />
      <CertificatesSection />
      <GallerySection />
      <TestimonialsSection />
      <CyberGridDivider />
      <ContactSection />

      {/* Footer */}
      <Footer onOpenRecruiterModal={() => setRecruiterModalOpen(true)} />
    </main>
  );
}
