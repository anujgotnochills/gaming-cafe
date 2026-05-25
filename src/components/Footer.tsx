"use client";
import React from 'react';
import { Gamepad2 } from 'lucide-react';
import Link from 'next/link';
import { useClient } from "@/components/ClientProvider";

export default function Footer() {
  const client = useClient();
  return (
    <footer className="w-full bg-[#050505] text-white flex flex-col relative z-10 font-sans overflow-hidden">
      
      {/* Giant Brand Text */}
      <div className="relative px-6 md:px-12 lg:px-16 pt-20 md:pt-28 pb-16 md:pb-24">
        {/* Subtle top gradient line fsdfsdf*/}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#b167ff]/30 to-transparent" />
        
        {/* Logo icon top-right */}
        <div className="absolute top-8 right-8 md:right-12 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-black/50 shadow-[0_0_20px_rgba(177,103,255,0.15)]">
          <Gamepad2 className="text-[#b167ff] w-6 h-6" />
        </div>

        {/* Giant stylized text */}
        <h2 className="text-[clamp(3rem,13vw,11.5rem)] font-black italic leading-[0.85] tracking-tighter uppercase select-none whitespace-nowrap overflow-hidden text-ellipsis text-center">
          <span className="bg-gradient-to-b from-white via-white/90 to-white/60 bg-clip-text text-transparent">{client.name}</span>
        </h2>
      </div>

      {/* Links Grid */}
      <div className="px-6 md:px-12 lg:px-16 pb-16 md:pb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          
          {/* Column 1 - Navigate */}
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#b167ff]">Navigate</span>
            <div className="flex flex-col gap-3">
              <Link href="/#home" className="text-sm text-white/60 hover:text-white transition-colors uppercase tracking-widest font-medium">Home</Link>
              <Link href="/#tournaments" className="text-sm text-white/60 hover:text-white transition-colors uppercase tracking-widest font-medium">Tournaments</Link>
              <Link href="/#zones" className="text-sm text-white/60 hover:text-white transition-colors uppercase tracking-widest font-medium">Zones</Link>
            </div>
          </div>

          {/* Column 2 - Socials */}
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#b167ff]">Socials</span>
            <div className="flex flex-col gap-3">
              <a href="/" className="text-sm text-white/60 hover:text-white transition-colors uppercase tracking-widest font-medium">Discord</a>
              <a href="/" className="text-sm text-white/60 hover:text-white transition-colors uppercase tracking-widest font-medium">Twitter</a>
              <a href="/" className="text-sm text-white/60 hover:text-white transition-colors uppercase tracking-widest font-medium">LinkedIn</a>
              <a href="/" className="text-sm text-white/60 hover:text-white transition-colors uppercase tracking-widest font-medium">YouTube</a>
            </div>
          </div>

          {/* Column 3 - Studio */}
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#b167ff]">Studio</span>
            <div className="flex flex-col gap-3">
              <a href={`mailto:${client.email}`} className="text-sm text-white/60 hover:text-white transition-colors font-medium">{client.email}</a>
              <span className="text-sm text-white/60 font-medium">{client.phone}</span>
              <span className="text-sm text-white/60 font-medium leading-relaxed">{client.address}</span>
            </div>
          </div>

          {/* Column 4 - Map Embed */}
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#b167ff]">Location</span>
            <div className="relative w-full h-36 rounded-[1rem] overflow-hidden border border-white/10 hover:border-[#b167ff]/30 transition-all duration-300 group shadow-[0_0_20px_rgba(0,0,0,0.5)]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100000!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjYiTiAxMjLCsDI1JzEwLjEiVw!5e0!3m2!1sen!2sus!4v1631234567890!5m2!1sen!2sus" 
                className="absolute inset-0 w-full h-full opacity-60 group-hover:opacity-90 transition-opacity duration-300 filter grayscale contrast-125 invert"
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="Location Map"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 px-6 md:px-12 lg:px-16 py-6 flex justify-between items-center">
        <span className="text-xs text-white/40 uppercase tracking-widest font-medium">Copyright © 2025</span>
        <span className="text-xs text-white/40 uppercase tracking-widest font-medium flex items-center gap-2">
          <Gamepad2 className="w-3 h-3 text-[#b167ff]" />
          We are <span className="font-bold text-white/60">{client.name}</span>
        </span>
      </div>
    </footer>
  );
}
