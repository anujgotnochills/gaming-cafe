"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, Home, Trophy, Gamepad2, Mail } from "lucide-react";

export default function TopNavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuOpenRef = useRef(isMobileMenuOpen);
  menuOpenRef.current = isMobileMenuOpen;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      if (menuOpenRef.current) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex justify-center w-full fixed top-0 z-50 pointer-events-none">
      <header className={`pointer-events-auto transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-between relative ${
        scrolled 
          ? "mt-4 w-[90%] max-w-4xl bg-black/50 backdrop-blur-lg border border-white/10 rounded-full py-4 px-6 md:px-8 shadow-2xl" 
          : "mt-0 w-full max-w-full bg-transparent border border-transparent rounded-none py-6 px-6 md:py-8 md:px-12 shadow-none"
      }`}>
        <div className="text-sm font-bold tracking-widest uppercase text-white flex-shrink-0">
          BRANDCRAFT
        </div>
        
        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-10">
          <Link href="/#home" className="font-bold text-white/80 tracking-widest uppercase text-[10px] hover:text-white transition-colors">HOME</Link>
          <Link href="/#tournaments" className="font-bold text-white/80 tracking-widest uppercase text-[10px] hover:text-white transition-colors">TOURNAMENT</Link>
          <Link href="/#zones" className="font-bold text-white/80 tracking-widest uppercase text-[10px] hover:text-white transition-colors">IMMERSIVE ZONES</Link>
        </nav>
        
        <div className="hidden md:flex items-center flex-shrink-0">
          <Link className="font-bold text-white/80 tracking-widest uppercase text-[10px] hover:text-white transition-colors" href="/contact">
            CONTACT US
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden relative z-[60]">
          <button 
            className="focus:outline-none w-10 h-10 flex items-center justify-center text-white/80 hover:text-white rounded-full bg-white/5 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Dropdown */}
          <div 
            className={`absolute top-[calc(100%+2rem)] right-0 w-56 rounded-[1.25rem] shadow-[0_20px_60px_rgba(100,40,180,0.4)] origin-top-right transition-all duration-200 ease-out overflow-hidden ${
              isMobileMenuOpen 
                ? 'opacity-100 scale-100 pointer-events-auto' 
                : 'opacity-0 scale-95 pointer-events-none'
            }`}
            style={{ background: 'linear-gradient(160deg, #c084fc 0%, #9854e4 30%, #7c3aed 60%, #4c1d95 100%)' }}
          >
            <div className="p-3 flex flex-col gap-2">
              <Link href="/#home" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/15 backdrop-blur-sm font-semibold text-white text-sm hover:bg-white/25 transition-colors">
                <Home size={16} className="opacity-80" />
                Home
              </Link>
              <Link href="/#tournaments" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/15 backdrop-blur-sm font-semibold text-white text-sm hover:bg-white/25 transition-colors">
                <Trophy size={16} className="opacity-80" />
                Tournament
              </Link>
              <Link href="/#zones" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/15 backdrop-blur-sm font-semibold text-white text-sm hover:bg-white/25 transition-colors">
                <Gamepad2 size={16} className="opacity-80" />
                Immersive Zones
              </Link>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/25 backdrop-blur-sm font-semibold text-white text-sm hover:bg-white/35 transition-colors">
                <Mail size={16} className="opacity-80" />
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
