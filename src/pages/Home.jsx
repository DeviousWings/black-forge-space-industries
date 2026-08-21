import React from 'react'

export default function Home({ onNavigate }) {
  return (
    <div>
      {/* Hero Badge */}
      <div className="inline-block border border-[#ff6600]/40 bg-[#ff6600]/10 text-[#ff6600] text-xs px-3 py-1 mb-6 rounded tracking-widest uppercase">
        Industrial 3D Printing & Hardware
      </div>

      {/* Main Headline */}
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-[#e0e0e0]">
        TACTICAL HARDWARE <span className="text-[#ff6600]">ONLINE.</span>
      </h1>

      {/* Sub-headline */}
      <p className="text-[#888888] max-w-xl mx-auto text-sm md:text-base mb-10 leading-relaxed">
        Welcome to the operational hub for custom physical builds, simulation peripherals, and high-durability prototyping. 
      </p>

      {/* Call to Action Button */}
      <button 
        onClick={() => onNavigate('Contact')}
        className="bg-[#ff6600] hover:bg-[#e05b00] text-black font-bold px-8 py-3 rounded-sm transition-all shadow-[0_0_15px_rgba(255,102,0,0.15)] uppercase tracking-wider text-xs"
      >
        Initialize Contact
      </button>
    </div>
  )
}
