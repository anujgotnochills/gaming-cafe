import React from 'react';
import { Trophy } from 'lucide-react';

export default function Tournaments() {
  return (
    <section className="py-32 bg-background reveal relative z-10">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div>
            <h2 className="text-5xl font-black italic tracking-tighter mb-4">LIVE <span className="text-primary neon-text-glow">TOURNEY</span></h2>
            <p className="text-on-surface-variant">Join the weekly brackets and win pool prizes up to $5,000.</p>
          </div>
          <button className="bg-primary/20 text-primary border border-primary/40 px-10 py-4 rounded-full font-black tracking-widest uppercase text-xs cinematic-glow hover:bg-primary/30 transition-all">
            VIEW ALL BRACKETS
          </button>
        </div>
        {/* Tournament Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Leaderboard */}
          <div className="lg:col-span-1 bg-surface-container border border-outline-variant/30 rounded-2xl overflow-hidden">
            <div className="p-6 border-b border-outline-variant/30 flex justify-between items-center bg-surface-container-high">
              <h4 className="font-black tracking-widest uppercase text-sm">GLOBAL RANKINGS</h4>
              <span className="text-xs text-primary font-bold">MONTHLY</span>
            </div>
            <div className="p-4 space-y-4">
              <div className="flex items-center justify-between p-3 rounded-lg bg-surface-variant/20 hover:bg-surface-variant/40 transition-all">
                <div className="flex items-center gap-4">
                  <span className="text-primary font-black">01</span>
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold">Z</div>
                  <span className="font-bold">ZERO_COOL</span>
                </div>
                <span className="text-xs font-bold text-outline">15,400 XP</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-variant/40 transition-all">
                <div className="flex items-center gap-4">
                  <span className="text-outline font-black">02</span>
                  <div className="w-10 h-10 rounded-full bg-surface-container-high border border-outline-variant/30 flex items-center justify-center font-bold">N</div>
                  <span className="font-bold">NEO_GEN</span>
                </div>
                <span className="text-xs font-bold text-outline">14,820 XP</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-variant/40 transition-all">
                <div className="flex items-center gap-4">
                  <span className="text-outline font-black">03</span>
                  <div className="w-10 h-10 rounded-full bg-surface-container-high border border-outline-variant/30 flex items-center justify-center font-bold">A</div>
                  <span className="font-bold">ALPHA_6</span>
                </div>
                <span className="text-xs font-bold text-outline">13,100 XP</span>
              </div>
            </div>
          </div>
          {/* Animated Brackets Visualization */}
          <div className="lg:col-span-2 bg-surface-container border border-outline-variant/30 rounded-2xl p-8 flex flex-col justify-center">
            <div className="flex justify-between items-center mb-12">
              <div className="text-xs font-black tracking-[0.3em] text-outline">VALORANT SEASON OPENER</div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                <span className="text-[10px] font-black tracking-widest text-on-surface uppercase">LIVE BROADCAST</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 items-center">
              {/* Round 1 */}
              <div className="space-y-8">
                <div className="border border-outline-variant/50 p-4 rounded bg-surface-container-low relative">
                  <div className="text-[10px] text-outline font-bold mb-2">TEAM ALPHA</div>
                  <div className="text-[10px] text-primary font-black">WINNER (2-0)</div>
                  <div className="absolute -right-4 top-1/2 w-4 h-[1px] bracket-line"></div>
                </div>
                <div className="border border-outline-variant/50 p-4 rounded bg-surface-container-low opacity-50 relative">
                  <div className="text-[10px] text-outline font-bold mb-2">TEAM BRAVO</div>
                  <div className="text-[10px] font-black">ELIMINATED</div>
                </div>
              </div>
              {/* Semi-Finals */}
              <div className="space-y-4">
                <div className="border-2 border-primary p-6 rounded bg-surface-container-high shadow-[0_0_15px_rgba(168,85,247,0.2)] relative">
                  <div className="text-[10px] text-outline font-bold mb-2 uppercase tracking-widest">SEMI FINAL A</div>
                  <div className="text-lg font-black text-on-surface italic">TEAM ALPHA</div>
                  <div className="text-xs text-primary font-bold">VS</div>
                  <div className="text-lg font-black text-on-surface italic opacity-50">TEAM DELTA</div>
                  <div className="absolute -left-4 top-1/4 w-4 h-[1px] bracket-line"></div>
                  <div className="absolute -left-4 top-3/4 w-4 h-[1px] bg-outline-variant"></div>
                </div>
              </div>
              {/* Finals */}
              <div className="flex justify-center">
                <div className="text-center group cursor-pointer flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full border-4 border-dashed border-primary/30 flex items-center justify-center mb-4 group-hover:rotate-45 transition-transform duration-1000">
                    <Trophy className="text-primary drop-shadow-[0_0_10px_#A855F7]" size={40} />
                  </div>
                  <div className="text-[10px] font-black tracking-widest text-primary uppercase">GRAND FINALS</div>
                  <div className="text-xs text-outline mt-2">WAITING FOR SEED...</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
