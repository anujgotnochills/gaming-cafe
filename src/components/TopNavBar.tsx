"use client";
import React, { useState, useEffect } from "react";

export default function TopNavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex justify-center w-full fixed top-0 z-50 pointer-events-none">
      <header className={`pointer-events-auto transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-between ${
        scrolled 
          ? "mt-4 w-[90%] max-w-4xl bg-black/50 backdrop-blur-lg border border-white/10 rounded-full py-4 px-8 shadow-2xl" 
          : "mt-0 w-full max-w-full bg-transparent border border-transparent rounded-none py-8 px-12 shadow-none"
      }`}>
        <div className="text-sm font-bold tracking-widest uppercase text-white flex-shrink-0">
          BRANDCRAFT
        </div>
        
        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-10">
          <a href="#home" className="font-bold text-white/80 tracking-widest uppercase text-[10px] hover:text-white transition-colors">HOME</a>
          <a href="#tournaments" className="font-bold text-white/80 tracking-widest uppercase text-[10px] hover:text-white transition-colors">TOURNAMENT</a>
          <a href="#zones" className="font-bold text-white/80 tracking-widest uppercase text-[10px] hover:text-white transition-colors">IMMERSIVE ZONES</a>
        </nav>
        
        <div className="flex items-center flex-shrink-0">
          <a className="font-bold text-white/80 tracking-widest uppercase text-[10px] hover:text-white transition-colors" href="/contact">
            CONTACT US
          </a>
        </div>
      </header>
    </div>
  );
}
