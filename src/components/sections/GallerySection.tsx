"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Award, Users, Image as ImageIcon, X, ChevronLeft, ChevronRight } from "lucide-react";
import TiltCard from "@/components/ui/TiltCard";

export default function GallerySection() {
  const [lightboxData, setLightboxData] = useState<{ isOpen: boolean; item: any; initialIndex: number }>({ isOpen: false, item: null, initialIndex: 0 });

  const galleryItems = [
    {
      id: 1,
      title: "SIH 2025 (Smart India Hackathon)",
      category: "Hackathon",
      icon: <Users className="w-6 h-6 text-emerald-400" />,
      color: "from-emerald-500/20 to-teal-500/20",
      border: "border-emerald-500/30",
      images: [
        "/images/gallery/media__1784889064267.jpg",
        "/images/gallery/media__1784889106971.jpg",
        "/images/gallery/media__1784889124962.jpg",
        "/images/gallery/media__1784889157207.jpg"
      ]
    },
    {
      id: 2,
      title: "Global Certification",
      category: "Achievement",
      icon: <Award className="w-6 h-6 text-amber-400" />,
      color: "from-amber-500/20 to-orange-500/20",
      border: "border-amber-500/30",
      images: [
        "/images/certificates/aincat.png",
        "/images/certificates/cisco.png",
        "/images/certificates/nasscom.png",
        "/images/certificates/oracle.png"
      ]
    },
    {
      id: 3,
      title: "Tech Meetup",
      category: "Event",
      icon: <Camera className="w-6 h-6 text-blue-400" />,
      color: "from-blue-500/20 to-cyan-500/20",
      border: "border-blue-500/30",
      images: [
        "/images/tech-meetup/meetup1.jpg",
        "/images/tech-meetup/meetup2.png",
        "/images/tech-meetup/meetup3.jpg",
        "/images/tech-meetup/meetup4.jpg",
        "/images/tech-meetup/meetup5.jpg"
      ]
    }
  ];

  return (
    <section id="gallery" className="py-24 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-lg font-mono font-extrabold tracking-widest uppercase tracking-wider">
            <Camera className="w-6 h-6" /> Moments & Achievements
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Gallery & <span className="gradient-text">Highlights</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Memories from hackathons like SIH, events, and my journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-10">
          {galleryItems.map((item, index) => (
            <GalleryCard 
              key={item.id} 
              item={item} 
              index={index} 
              onOpenLightbox={(idx) => setLightboxData({ isOpen: true, item, initialIndex: idx })} 
            />
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxData.isOpen && (
          <Lightbox 
            item={lightboxData.item} 
            initialIndex={lightboxData.initialIndex} 
            onClose={() => setLightboxData({ ...lightboxData, isOpen: false })} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function GalleryCard({ item, index, onOpenLightbox }: { item: any, index: number, onOpenLightbox: (idx: number) => void }) {
  const currentIdx = 0; // Show first image as cover
  const hasMultipleImages = item.images && item.images.length > 0;
  const isMultiple = item.images && item.images.length > 1;

  const handleClick = () => {
    if (hasMultipleImages) {
      onOpenLightbox(currentIdx);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      {/* Stacked effect background cards */}
      {isMultiple && (
        <>
          <div className="absolute top-2 left-2 right-[-8px] bottom-[-8px] rounded-[24px] bg-slate-800/40 border border-slate-700/50 z-0 transform rotate-2"></div>
          <div className="absolute top-4 left-4 right-[-16px] bottom-[-16px] rounded-[24px] bg-slate-900/40 border border-slate-700/30 z-0 transform rotate-4"></div>
        </>
      )}

      <div className={`relative z-10 w-full h-72 ${hasMultipleImages ? 'cursor-pointer' : ''}`} onClick={handleClick}>
        <TiltCard className="w-full h-full">
          <div className={`w-full h-full rounded-[24px] p-[2px] bg-gradient-to-tr ${item.color} ${item.border} shadow-xl shadow-slate-900/50 group`}>
            <div className="w-full h-full bg-[#0b1120] rounded-[22px] flex flex-col items-center justify-center p-6 relative overflow-hidden glass-panel group">
              
              {/* Photo Content */}
              {hasMultipleImages ? (
                <div className="absolute inset-0 z-0 bg-slate-950">
                  <img 
                    src={item.images[currentIdx]} 
                    alt={`${item.title} cover`} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                  />
                </div>
              ) : (
                <div className="absolute inset-0 bg-slate-900/50 flex items-center justify-center group-hover:bg-slate-900/30 transition-colors z-0">
                  <div className="w-20 h-20 rounded-full bg-slate-800/80 flex items-center justify-center border border-slate-700 backdrop-blur-md">
                    <Camera className="w-8 h-8 text-slate-500" />
                  </div>
                  <span className="absolute bottom-20 text-xs text-slate-500 font-mono">Click to upload</span>
                </div>
              )}

              {/* Stack indicator badges */}
              {isMultiple && (
                <div className="absolute top-4 right-4 z-30 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 shadow-lg">
                  <ImageIcon className="w-3.5 h-3.5 text-white/80" />
                  <span className="text-xs font-bold text-white tracking-widest">+{item.images.length}</span>
                </div>
              )}
              
              {/* Overlay Details */}
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-[#0b1120] via-[#0b1120]/90 to-transparent pt-12 z-20">
                <div className="flex items-center gap-2 mb-1">
                  {item.icon}
                  <span className="text-xs font-mono text-slate-300 uppercase tracking-wider">{item.category}</span>
                </div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                {hasMultipleImages && (
                  <p className="text-xs text-blue-300 mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                    <span className="animate-pulse">🔎</span> Click to enlarge
                  </p>
                )}
              </div>

            </div>
          </div>
        </TiltCard>
      </div>
    </motion.div>
  );
}

function Lightbox({ item, initialIndex, onClose }: { item: any, initialIndex: number, onClose: () => void }) {
  const [currentIdx, setCurrentIdx] = useState(initialIndex);
  
  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev + 1) % item.images.length);
  };
  
  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev - 1 + item.images.length) % item.images.length);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
      onClick={onClose}
    >
      <button className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50" onClick={onClose}>
        <X className="w-6 h-6" />
      </button>

      {item.images.length > 1 && (
        <>
          <button className="absolute left-4 sm:left-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50" onClick={handlePrev}>
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button className="absolute right-4 sm:right-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50" onClick={handleNext}>
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      <div className="relative max-w-5xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
        <AnimatePresence mode="wait">
          <motion.img 
            key={currentIdx}
            src={item.images[currentIdx]}
            alt={item.title}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
          />
        </AnimatePresence>
        
        <div className="mt-6 text-center">
          <h3 className="text-xl font-bold text-white">{item.title}</h3>
          {item.images.length > 1 && (
            <p className="text-slate-400 mt-2 font-mono text-sm">{currentIdx + 1} / {item.images.length}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
