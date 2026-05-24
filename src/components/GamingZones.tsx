"use client";
import React, { useState, useRef } from 'react';
import { Zap, Car, Gamepad2, Headset, Mic, Joystick, Dice5, Coffee, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

const SMALL_ZONES = [
  { id: 1, icon: Gamepad2, title: 'CONSOLE LOUNGE', desc: 'PS5 & Xbox Series X with 4K OLED screens and luxury seating.' },
  { id: 2, icon: Headset, title: 'VR ROOM', desc: 'Step into the metaverse with Valve Index and full-room tracking.' },
  { id: 3, icon: Mic, title: 'STREAMER BOOTH', desc: 'Professional studio with soundproofing, Shure mics, and Elgato hardware.' },
  { id: 4, icon: Joystick, title: 'RETRO ARCADE', desc: 'Classic arcade cabinets, pinball machines, and CRT retro setups.' },
  { id: 5, icon: Dice5, title: 'TABLETOP LOUNGE', desc: 'Premium wooden tables for D&D, board games, and TCG tournaments.' },
  { id: 6, icon: Coffee, title: 'CAFE & BAR', desc: 'Craft coffee, energy drinks, and gamer-themed signature cocktails.' }
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
};

export default function GamingZones() {
  const [[carouselIndex, direction], setCarouselState] = useState([0, 0]);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax effect: translates image vertically as the user scrolls
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  const nextSlide = () => {
    setCarouselState([carouselIndex + 3 >= SMALL_ZONES.length ? 0 : carouselIndex + 3, 1]);
  };

  const prevSlide = () => {
    setCarouselState([carouselIndex - 3 < 0 ? Math.max(0, SMALL_ZONES.length - 3) : carouselIndex - 3, -1]);
  };

  const visibleZones = SMALL_ZONES.slice(carouselIndex, carouselIndex + 3);

  return (
    <section id="zones" ref={containerRef} className="py-32 bg-[#050505] relative overflow-hidden reveal">
      
      {/* True Parallax Background using Framer Motion */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.img 
          style={{ y: backgroundY }}
          src="/immersive-bg.jpeg" 
          alt="Immersive Background" 
          className="absolute -top-[20%] -left-[10%] w-[120%] h-[140%] object-cover opacity-20"
        />
      </div>

      {/* Grid Overlay */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none z-0">
        <div className="grid grid-cols-12 h-full w-full">
          <div className="border-r border-outline-variant/20"></div>
          <div className="border-r border-outline-variant/20"></div>
          <div className="border-r border-outline-variant/20"></div>
          <div className="border-r border-outline-variant/20"></div>
          <div className="border-r border-outline-variant/20"></div>
          <div className="border-r border-outline-variant/20"></div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="mb-20 text-center">
          <h2 className="text-5xl font-black italic tracking-tighter mb-4 text-on-surface">IMMERSIVE <span className="text-primary">ZONES</span></h2>
          <p className="text-on-surface-variant max-w-xl mx-auto">Explore tailored environments designed for every gaming style.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Zone 1: RTX Arena */}
          <div className="relative group rounded-3xl overflow-hidden shadow-2xl border border-outline-variant/20 h-[500px] parallax-container">
            <img alt="RTX Arena" className="w-full h-full object-cover parallax-image scale-110" src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=2000&q=80"/>
            <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent opacity-90 group-hover:opacity-70 transition-opacity"></div>
            <div className="absolute inset-y-0 left-0 w-full md:w-2/3 flex flex-col justify-center p-12">
              <h3 className="text-4xl font-black italic text-on-surface mb-4">RTX ARENA</h3>
              <p className="text-on-surface-variant mb-8 leading-relaxed font-medium">Ultimate performance. Powered by NVIDIA GeForce RTX 4090s and 360Hz monitors for the smoothest competitive experience.</p>
              <div className="flex items-center gap-4">
                <Zap className="text-primary" size={24} />
                <span className="font-bold tracking-widest text-xs uppercase text-white/80">LOW LATENCY NETWORK</span>
              </div>
            </div>
            <div className="absolute inset-0 border-4 border-primary/0 group-hover:border-primary/40 transition-all duration-500 rounded-3xl"></div>
          </div>
          {/* Zone 2: Racing Simulators */}
          <div className="relative group rounded-3xl overflow-hidden shadow-2xl border border-outline-variant/20 h-[500px] parallax-container">
            <img alt="Racing Simulators" className="w-full h-full object-cover parallax-image scale-110" src="https://images.unsplash.com/photo-1614294149010-950b698f72c0?auto=format&fit=crop&w=2000&q=80"/>
            <div className="absolute inset-0 bg-gradient-to-l from-background via-background/80 to-transparent opacity-90 group-hover:opacity-70 transition-opacity"></div>
            <div className="absolute inset-y-0 right-0 w-full md:w-2/3 flex flex-col justify-center p-12 text-right items-end">
              <h3 className="text-4xl font-black italic text-on-surface mb-4">RACING SIMS</h3>
              <p className="text-on-surface-variant mb-8 leading-relaxed font-medium">Full motion hydraulic rigs, direct-drive steering wheels, and triple 4K displays for total immersion.</p>
              <div className="flex items-center gap-4">
                <span className="font-bold tracking-widest text-xs uppercase text-white/80">FORCE FEEDBACK</span>
                <Car className="text-primary" size={24} />
              </div>
            </div>
            <div className="absolute inset-0 border-4 border-primary/0 group-hover:border-primary/40 transition-all duration-500 rounded-3xl"></div>
          </div>
        </div>
        
        {/* Smaller Zones Framer Motion Carousel */}
        <div className="mt-20">
          <div className="flex justify-center mb-10">
            <h3 className="text-2xl font-black italic text-on-surface">MORE EXPERIENCES</h3>
          </div>
          
          <div className="relative w-full group/carousel px-10 md:px-14">
            {/* Left Button */}
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full border border-outline-variant/30 flex items-center justify-center hover:bg-surface-container-highest hover:border-primary/50 transition-colors z-20 bg-background/80 backdrop-blur shadow-xl"
            >
              <ChevronLeft size={24} />
            </button>
            
            {/* Right Button */}
            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full border border-outline-variant/30 flex items-center justify-center hover:bg-surface-container-highest hover:border-primary/50 transition-colors z-20 bg-background/80 backdrop-blur shadow-xl"
            >
              <ChevronRight size={24} />
            </button>

            <div className="relative overflow-hidden w-full h-[320px] md:h-[280px]">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={carouselIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  className="absolute inset-0 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full h-full"
                >
                  {visibleZones.map((zone) => {
                    const Icon = zone.icon;
                    return (
                      <div key={zone.id} className="bg-surface-container-high p-8 rounded-2xl border border-outline-variant/30 hover:border-primary/50 transition-colors group h-full flex flex-col justify-center shadow-lg">
                        <Icon className="text-primary mb-6 group-hover:scale-110 transition-transform drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" size={48} />
                        <h4 className="text-xl font-bold mb-3 uppercase">{zone.title}</h4>
                        <p className="text-sm text-on-surface-variant leading-relaxed">{zone.desc}</p>
                      </div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          
          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: Math.ceil(SMALL_ZONES.length / 3) }).map((_, i) => (
              <div 
                key={i} 
                className={`h-1.5 rounded-full transition-all duration-300 ${Math.floor(carouselIndex / 3) === i ? 'w-8 bg-primary' : 'w-2 bg-outline-variant/30'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
