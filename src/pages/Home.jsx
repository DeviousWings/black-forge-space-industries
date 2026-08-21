import React from 'react'

export default function Home({ setActiveTab }) {
  return (
    <div className="space-y-16 py-8">
      
      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto">
        <div className="inline-block border border-[#ff6600]/40 bg-[#ff6600]/10 text-[#ff6600] text-xs px-3 py-1 mb-6 rounded tracking-widest uppercase">
          SLA Resin Printing & High-Detail Prototyping
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-[#e0e0e0] leading-tight">
          TACTICAL HARDWARE <span className="text-[#ff6600]">FORGED FOR THE VOID.</span>
        </h1>
        <p className="text-[#888888] text-sm md:text-base mb-10 leading-relaxed font-mono">
          Welcome to Black Forge Space Industries. We engineer high-detail resin models, precision components, and immersive simulation gear designed to upgrade your desktop space setup.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={() => setActiveTab('contact')}
            className="bg-[#ff6600] hover:bg-[#e05b00] text-black font-bold px-8 py-3 rounded-sm transition-all shadow-[0_0_15px_rgba(255,102,0,0.15)] uppercase tracking-wider text-xs"
          >
            Request Custom Build
          </button>
          <button 
            onClick={() => setActiveTab('about')}
            className="border border-[#333333] hover:border-[#ff6600] text-[#e0e0e0] font-bold px-8 py-3 rounded-sm transition-all uppercase tracking-wider text-xs bg-[#121212]"
          >
            Read Workshop Specs
          </button>
        </div>
      </section>

      {/* Core Capabilities Grid (Updated) */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        <div className="border border-[#222222] bg-[#121212] p-6 rounded-sm relative group hover:border-[#ff6600]/50 transition-all">
          <div className="absolute top-0 left-0 w-1 h-full bg-[#ff6600]"></div>
          <span className="text-[#ff6600] text-xs font-bold tracking-widest">01 // SLA FABRICATION</span>
          <h3 className="text-lg font-bold text-[#e0e0e0] mt-2 mb-3">High-Detail Resin</h3>
          <p className="text-[#888888] text-xs leading-relaxed">
            Utilizing the Anycubic Photon Mono 4K printer to produce exceptional geometric fidelity, smooth surface finishes, and crisp custom prototypes.
          </p>
        </div>

        <div className="border border-[#222222] bg-[#121212] p-6 rounded-sm relative group hover:border-[#ff6600]/50 transition-all">
          <div className="absolute top-0 left-0 w-1 h-full bg-[#ff6600]"></div>
          <span className="text-[#ff6600] text-xs font-bold tracking-widest">02 // DESKTOP SIMULATION</span>
          <h3 className="text-lg font-bold text-[#e0e0e0] mt-2 mb-3">Simulation Area Gear</h3>
          <p className="text-[#888888] text-xs leading-relaxed">
            Focused on specialized hardware built specifically to outfit and elevate your immersive desktop flight and space-sim environment.
          </p>
        </div>

        <div className="border border-[#222222] bg-[#121212] p-6 rounded-sm relative group hover:border-[#ff6600]/50 transition-all">
          <div className="absolute top-0 left-0 w-1 h-full bg-[#ff6600]"></div>
          <span className="text-[#ff6600] text-xs font-bold tracking-widest">03 // CUSTOM BUILDS</span>
          <h3 className="text-lg font-bold text-[#e0e0e0] mt-2 mb-3">Serialized Identification</h3>
          <p className="text-[#888888] text-xs leading-relaxed">
            Integrating custom serialized nameplates and tailored physical details into your setup for that authentic, industrial command-deck feel.
          </p>
        </div>
      </section>

      {/* Featured Hardware Callout */}
      <section className="border border-[#222222] bg-[#0f0f0f] p-8 rounded-sm text-center">
        <h2 className="text-xl font-bold text-[#e0e0e0] mb-2">ACTIVE PRODUCTION MANIFEST</h2>
        <p className="text-[#888888] text-xs mb-6 max-w-lg mx-auto">
          Currently processing custom runs for BF-ID-01 nameplates, BF-DATA-01 command data cores, and specialized desktop hardware.
        </p>
        <button 
          onClick={() => setActiveTab('contact')}
          className="text-[#ff6600] text-xs tracking-widest uppercase font-bold hover:underline"
        >
          Submit Specification Inquiry →
        </button>
      </section>

    </div>
  )
}
