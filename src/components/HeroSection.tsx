import React from 'react';
import { Box } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex flex-col justify-center">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          alt="Background" 
          className="w-full h-full object-cover opacity-60" 
          src="/hero-bg.png"
        />
        {/* Subtle overlay to make text readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="relative z-10 px-12 md:px-24 w-full flex flex-col items-start pt-20">
        {/* Icon Row */}
        <div className="flex items-center gap-4 mb-10">
          <div className="w-10 h-10 flex items-center justify-center bg-[#1a1520] rounded-lg border border-white/10 shadow-lg overflow-hidden">
            <img src="/creeper-head.png" alt="Creeper" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">BUILT FOR CREATORS</span>
            <span className="text-[11px] font-bold text-white tracking-[0.1em] mt-0.5">LOVED BY GENERATIONS</span>
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-black uppercase flex flex-col leading-[0.9] mb-8 tracking-tight">
          <span className="text-white drop-shadow-lg">IMAGINE</span>
          <span className="text-white drop-shadow-lg">BUILD</span>
          <span className="text-[#b167ff] drop-shadow-[0_0_15px_rgba(177,103,255,0.6)]">BEYOND</span>
        </h1>

        <p className="text-[10px] text-white/70 max-w-[240px] mb-8 leading-relaxed font-bold tracking-widest uppercase drop-shadow-md">
          MINECRAFT ISN'T JUST A GAME. IT'S A CANVAS. A TOOLKIT. A UNIVERSE WHERE THE ONLY LIMIT IS YOUR IDEAS.
        </p>

        <button className="border border-[#b167ff]/50 text-white px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest bg-black/20 backdrop-blur-sm hover:bg-[#b167ff]/20 transition-all flex items-center gap-3 group">
          ENTER THE WORLD <span className="group-hover:translate-x-1 transition-transform">-&gt;</span>
        </button>
      </div>

      {/* Bottom Right Text */}
      <div className="absolute bottom-10 right-12 md:right-24 z-10">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/80 drop-shadow-md">
          CREATE &middot; CONNECT &middot; INSPIRE
        </span>
      </div>
    </section>
  );
}
