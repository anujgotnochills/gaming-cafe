"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HERO_IMAGES = [
  '/hero-bg.png',
  '/cafe-hero.jpeg',
  '/arc-hero.webp',
  '/cs2-hero.jpeg',
  '/cyberpunk-hero.jpg.jpeg',
  '/forza-hero.jpeg',
  '/gta-hero.jpeg',
  '/valo-hero.jpeg'
];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex flex-col justify-center">
      {/* Background Image Layer (Slideshow) */}
      <div className="absolute inset-0 z-0 bg-[#050505]">
        <AnimatePresence mode="popLayout">
          <motion.img 
            key={currentImageIndex}
            src={HERO_IMAGES[currentImageIndex]}
            alt="Hero Background" 
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        {/* Subtle overlay to make text readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-black/40 md:bg-black/20 z-10"></div>
      </div>

      <div className="relative z-20 px-6 md:px-12 lg:px-24 w-full flex flex-col items-start text-left pt-20">
        {/* Icon Row */}
        <div className="flex items-center gap-4 mb-8 md:mb-10">
          <div className="w-10 h-10 flex items-center justify-center bg-[#1a1520] rounded-lg border border-white/10 shadow-lg overflow-hidden shrink-0">
            <img src="/creeper-head.png" alt="Creeper" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">BUILT FOR CREATORS</span>
            <span className="text-[11px] font-bold text-white tracking-[0.1em] mt-0.5">LOVED BY GENERATIONS</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-8xl font-black uppercase flex flex-col leading-[0.9] mb-6 md:mb-8 tracking-tight">
          <span className="text-white drop-shadow-lg">IMAGINE</span>
          <span className="text-white drop-shadow-lg">BUILD</span>
          <span className="text-[#b167ff] drop-shadow-[0_0_15px_rgba(177,103,255,0.6)]">BEYOND</span>
        </h1>

        <p className="text-[10px] text-white/90 max-w-[280px] md:max-w-[240px] mb-8 leading-relaxed font-bold tracking-widest uppercase drop-shadow-md">
          MINECRAFT ISN'T JUST A GAME. IT'S A CANVAS. A TOOLKIT. A UNIVERSE WHERE THE ONLY LIMIT IS YOUR IDEAS.
        </p>

        <button className="border border-[#b167ff]/50 text-white px-8 py-4 md:py-3 rounded-full text-[10px] font-bold uppercase tracking-widest bg-black/40 md:bg-black/20 backdrop-blur-sm hover:bg-[#b167ff]/20 transition-all flex items-center gap-3 group">
          ENTER THE WORLD <span className="group-hover:translate-x-1 transition-transform">-&gt;</span>
        </button>
      </div>

      {/* Bottom Right Text */}
      <div className="absolute bottom-6 right-6 md:bottom-10 md:right-24 z-20 hidden md:block">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/80 drop-shadow-md">
          CREATE &middot; CONNECT &middot; INSPIRE
        </span>
      </div>
    </section>
  );
}
