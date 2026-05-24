"use client";
import React, { useState } from 'react';
import { useClient } from "@/components/ClientProvider";

const GAMES = [
  { 
    name: 'VALORANT', 
    src: '/valorant.jpg',
    thumb: '/valorant.jpg',
    desc: 'JOIN THE 5V5 TACTICAL SHOOTER. MASTER YOUR AGENT, CLUTCH THE ROUND, AND DOMINATE THE LOBBY IN OUR HIGH-REFRESH RATE ZONES.',
    accent: '#ff4655'
  },
  { 
    name: 'FORTNITE', 
    src: '/fortnite.avif',
    thumb: '/fortnite.avif',
    desc: 'DROP IN, BUILD, AND SURVIVE IN THE ULTIMATE BATTLE ROYALE EXPERIENCE. PLAY WITH FRIENDS ON OUR PREMIUM SETUPS.',
    accent: '#eaff0b'
  },
  { 
    name: 'FORZA HORIZON', 
    src: '/forza.jpg',
    thumb: '/forza.jpg',
    desc: 'EXPERIENCE HIGH-OCTANE RACING IN STUNNING 4K. FEEL EVERY TURN ON OUR HYDRAULIC RACING SIMULATORS.',
    accent: '#ff005d'
  },
  { 
    name: 'CS2', 
    src: '/cs2.png',
    thumb: '/cs2.png',
    desc: 'THE NEXT EVOLUTION OF COUNTER-STRIKE. ZERO LATENCY. 360HZ MONITORS. PURE COMPETITIVE PERFECTION.',
    accent: '#f89f1b'
  }
];

export default function FeaturedGames() {
  const [activeGame, setActiveGame] = useState(GAMES[0]);
  const client = useClient();

  return (
    <section id="tournaments" className="relative min-h-[85vh] md:h-screen w-full overflow-hidden flex flex-col justify-center transition-colors duration-1000">
      <div className="absolute inset-0 z-0 bg-[#050505]">
        {/* We map over all games and absolutely position them so we can fade them in and out gracefully */}
        {GAMES.map((game) => (
          <img 
            key={game.name}
            alt={game.name} 
            className={`absolute inset-0 w-full h-full object-cover object-[30%_center] md:object-center transition-opacity duration-1000 ${activeGame.name === game.name ? 'opacity-100' : 'opacity-0'}`} 
            src={game.src}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-transparent"></div>
        <div className="absolute inset-0 bg-black/50 md:bg-black/40"></div>
      </div>

      <div className="relative z-10 px-6 md:px-24 w-full flex flex-col items-start pt-10 md:pt-20">
        <div className="flex flex-col mb-8 md:mb-10 transition-all duration-500">
          <span 
            className="text-[9px] font-bold uppercase tracking-[0.3em] mb-2 drop-shadow-md transition-colors duration-500"
            style={{ color: activeGame.accent }}
          >
            PLAY IN OUR ZONES
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tight text-white drop-shadow-lg">
            {activeGame.name.split(' ').map((word, i) => (
               <React.Fragment key={i}>
                 {word}<br/>
               </React.Fragment>
            ))}
          </h2>
        </div>

        <p className="text-[10px] text-white/90 max-w-[320px] mb-8 leading-relaxed font-bold tracking-widest uppercase drop-shadow-md">
          {activeGame.desc}
        </p>

        <button 
          onClick={() => window.open(`https://wa.me/${client.phone}?text=${encodeURIComponent(client.whatsappMessage)}`, '_blank')}
          className="border text-white px-8 py-4 md:py-3 rounded-full text-[10px] font-bold uppercase tracking-widest bg-black/40 backdrop-blur-sm transition-all flex items-center gap-3 group"
          style={{ borderColor: `${activeGame.accent}80` }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = `${activeGame.accent}33`)}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.4)')}
        >
          JOIN TOURNAMENT <span className="group-hover:translate-x-1 transition-transform">-&gt;</span>
        </button>
      </div>

      {/* Thumbnails of other games at the bottom */}
      <div className="absolute bottom-6 right-6 md:bottom-10 md:right-24 z-10 flex flex-col gap-3">
        <span className="text-[8px] font-bold tracking-widest text-white/50 uppercase text-right">SELECT GAME</span>
        <div className="grid grid-cols-2 md:flex gap-3 md:gap-4">
          {GAMES.map((game) => (
            <div 
              key={game.name} 
              onClick={() => setActiveGame(game)}
              className={`group relative w-full h-16 md:w-32 md:h-20 rounded-lg overflow-hidden border cursor-pointer transition-all ${
                activeGame.name === game.name ? 'opacity-100 scale-105 border-white' : 'opacity-50 hover:opacity-100 hover:scale-105 border-white/10'
              }`}
              style={{ borderColor: activeGame.name === game.name ? game.accent : undefined }}
            >
              <img src={game.thumb} alt={game.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors"></div>
              <div className="absolute bottom-2 left-2 right-2">
                <span className="text-[7px] md:text-[8px] font-bold tracking-widest text-white uppercase drop-shadow-md break-words leading-tight">{game.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
