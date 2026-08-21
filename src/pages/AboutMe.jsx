import React from 'react'

export default function About({ setActiveTab }) {
  return (
    <div className="space-y-12 py-8 text-left max-w-3xl mx-auto">
      
      {/* Header */}
      <div>
        <div className="inline-block border border-[#ff6600]/40 bg-[#ff6600]/10 text-[#ff6600] text-xs px-3 py-1 mb-4 rounded tracking-widest uppercase">
          Workshop Operations & Lore
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#e0e0e0] mb-3">
          ABOUT THE <span className="text-[#ff6600]">FORGE</span>
        </h1>
        <p className="text-[#888888] font-mono text-xs md:text-sm leading-relaxed">
          Bridging precision high-detail SLA fabrication with immersive desktop simulation environments.
        </p>
      </div>

      {/* Core Background */}
      <div className="border border-[#222222] bg-[#121212] p-6 sm:p-8 rounded-sm space-y-4">
        <h2 className="text-lg font-bold text-[#e0e0e0] tracking-wide border-b border-[#222222] pb-3">
          // Engineering & Fabrication Standards
        </h2>
        <p className="text-[#888888] text-xs sm:text-sm leading-relaxed">
          Black Forge Space Industries operates out of a specialized workshop setup utilizing high-resolution SLA resin printing (Anycubic Photon Mono). Every physical asset—from serialized nameplates to localized command data cores—is crafted with tight tolerances and sharp geometric fidelity.
        </p>
        <p className="text-[#888888] text-xs sm:text-sm leading-relaxed">
          Backed by technical systems background and logistics experience shared with Steele Tech infrastructure, our goal is to deliver rugged, tactical-grade hardware built specifically for custom simulation desk areas.
        </p>
      </div>

      {/* Simulated Lore & Roadmap Section */}
      <div className="border border-[#ff6600]/30 bg-[#0f0f0f] p-6 sm:p-8 rounded-sm space-y-4 relative">
        <div className="absolute top-0 left-0 w-1 h-full bg-[#ff6600]"></div>
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-[#e0e0e0] tracking-wide">
            // Simulated Lore & Roadmap Manifest
          </h2>
          <span className="text-[10px] uppercase border border-[#ff6600]/40 px-2 py-0.5 text-[#ff6600] rounded bg-[#ff6600]/10">
            Active Universe Integration
          </span>
        </div>
        <p className="text-[#888888] text-xs sm:text-sm leading-relaxed">
          Our hardware designs aren't just desktop accessories—they are built around an immersive narrative roadmap. Drawing from deep-space simulation themes, cosmic entities, and rugged industrial survival aesthetics, every product line (like the <span className="text-[#e0e0e0]">BF-ID-01</span> and <span className="text-[#e0e0e0]">BF-DATA-01</span> series) is envisioned as standard-issue equipment for frontier command decks.
        </p>
        <div className="pt-2">
          <button 
            onClick={() => setActiveTab('catalog')}
            className="text-[#ff6600] text-xs tracking-widest uppercase font-bold hover:underline"
          >
            Explore Hardware Manifest →
          </button>
        </div>
      </div>

    </div>
  )
}
