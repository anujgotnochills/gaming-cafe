import React from 'react';
import { Gamepad2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#000000] text-white flex flex-col relative z-10 border-t border-white/10 font-sans">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row border-b border-white/10">
        {/* Column 1 */}
        <div className="flex-1 p-8 md:p-10 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/10">
          <p className="text-sm font-medium leading-relaxed max-w-sm text-white/80">
            we pride ourselves on our extensive experience with leading industry technologies like unreal engine and unity
          </p>
          <p className="text-xs text-white/50 mt-8">
            © brandcraft 2024
          </p>
        </div>
        
        {/* Column 2 - Map Embed */}
        <div className="w-full md:w-80 p-0 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/10 relative h-[200px] md:h-auto">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100000!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjYiTiAxMjLCsDI1JzEwLjEiVw!5e0!3m2!1sen!2sus!4v1631234567890!5m2!1sen!2sus" 
            className="absolute inset-0 w-full h-full opacity-70 hover:opacity-100 transition-opacity"
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
            title="Location Map"
          ></iframe>
        </div>

        {/* Column 3 */}
        <div className="w-full md:w-64 p-8 md:p-10 flex flex-col justify-between">
          <span className="text-xs font-medium text-white/50 mb-8">follow</span>
          <div className="flex flex-col items-end gap-3 text-sm font-medium">
            <a href="/" className="hover:text-[#b167ff] transition-colors">linkedin</a>
            <a href="/" className="hover:text-[#b167ff] transition-colors">discord</a>
            <a href="/" className="hover:text-[#b167ff] transition-colors">twitter</a>
          </div>
        </div>
      </div>

      {/* Main Center Text Area */}
      <div className="py-12 md:py-16 px-4 flex flex-col items-center justify-center relative">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-normal tracking-tight text-center leading-[1.2] max-w-4xl flex flex-col items-center">
          <span>CREATIVE AND</span>
          <span className="flex items-center justify-center gap-2 md:gap-4 my-2">
            RELIABLE 
            <span className="inline-flex items-center justify-center w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-black rounded-full border border-white/20 shadow-[0_0_30px_rgba(177,103,255,0.15)] group">
              <Gamepad2 className="text-[#b167ff] w-5 h-5 md:w-8 md:h-8 lg:w-10 lg:h-10 group-hover:scale-110 transition-transform" />
            </span> 
            GAME
          </span>
          <span>DEVELOPMENT STUDIO</span>
        </h2>
      </div>

      {/* Very Bottom */}
      <div className="flex justify-between items-end px-8 md:px-10 pb-6">
        <div className="text-[#b167ff] text-2xl font-bold tracking-tighter drop-shadow-[0_0_8px_rgba(177,103,255,0.8)]">
          brandcraft
        </div>
        <div className="text-right text-xs text-white/60">
          <span className="block mb-1">contact us</span>
          <a href="mailto:info@brandcraft.com" className="text-white hover:text-[#b167ff] transition-colors font-medium">info@brandcraft.com</a>
        </div>
      </div>
    </footer>
  );
}
