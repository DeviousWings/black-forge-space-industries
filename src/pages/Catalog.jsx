import React from 'react'

export default function Catalog({ setActiveTab }) {
  const products = [
    {
      id: 'BF-ID-01',
      name: 'Serialized Nameplate',
      category: 'Desktop Hardware ID',
      desc: 'Heavy-duty industrial identification plate with high-precision resin relief engraving for your rig or desk area.',
      status: 'Active Prototyping'
    },
    {
      id: 'BF-DATA-01',
      name: 'Command Data Core',
      category: 'Telemetry Housing',
      desc: 'High-detail enclosure engineered for localized data nodes, monitoring displays, and desktop peripheral infrastructure.',
      status: 'Engineering Phase'
    },
    {
      id: 'BF-PWR-01',
      name: 'Executive Power Relay',
      category: 'Power Management',
      desc: 'Modular switch housing and power distribution mounting designed for desktop combat rigs and flight sim stations.',
      status: 'Fabrication Ready'
    },
    {
      id: 'BF-CLK-01',
      name: 'Bulkhead Chronometer',
      category: 'Cockpit Decor',
      desc: 'Industrial-styled clock and mission-timer chassis built with reinforced panel walls and physical tactical bezels.',
      status: 'Design Draft'
    }
  ]

  return (
    <div className="space-y-12 py-8 text-left">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <div className="inline-block border border-[#ff6600]/40 bg-[#ff6600]/10 text-[#ff6600] text-xs px-3 py-1 mb-4 rounded tracking-widest uppercase">
          Hardware Manifest & Services
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#e0e0e0] mb-3">
          PRODUCTION <span className="text-[#ff6600]">CATALOG</span>
        </h1>
        <p className="text-[#888888] font-mono text-xs md:text-sm leading-relaxed">
          Engineered via Anycubic Photon Mono SLA high-detail resin printing. Built for desktop simulation environments and custom industrial requirements.
        </p>
      </div>

      {/* Products Grid */}
      <div>
        <h2 className="text-sm font-bold tracking-widest uppercase text-[#ff6600] mb-6 border-b border-[#222222] pb-2">
          // Standard Hardware Line
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((item) => (
            <div 
              key={item.id} 
              className="border border-[#222222] bg-[#121212] p-6 rounded-sm relative group hover:border-[#ff6600]/60 transition-all shadow-md"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#ff6600]"></div>
              <div className="flex justify-between items-start mb-3 pl-2">
                <span className="text-[#ff6600] text-xs font-bold tracking-widest">{item.id}</span>
                <span className="text-[10px] uppercase border border-[#222222] px-2 py-0.5 text-[#888888] rounded bg-[#0a0a0a]">
                  {item.status}
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#e0e0e0] pl-2 mb-2 tracking-wide">{item.name}</h3>
              <p className="text-[#888888] text-xs pl-2 mb-6 font-mono leading-relaxed">{item.desc}</p>
              <div className="pl-2 flex items-center justify-between pt-4 border-t border-[#222222]/50 text-xs">
                <span className="text-[#888888]">Category: <span className="text-[#e0e0e0]">{item.category}</span></span>
                <button 
                  onClick={() => setActiveTab('contact')}
                  className="text-[#ff6600] tracking-wider uppercase font-bold hover:underline cursor-pointer"
                >
                  Inquire Spec →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Prototyping Services */}
      <div className="border border-[#222222] bg-[#121212] p-8 rounded-sm">
        <h2 className="text-sm font-bold tracking-widest uppercase text-[#ff6600] mb-3">
          // Custom SLA Prototyping & Fabrication Services
        </h2>
        <p className="text-[#888888] text-xs leading-relaxed mb-6">
          Have a specific concept, custom bracket, or unique desktop setup requirement? Leveraging high-resolution SLA resin printing, we can bring custom geometries and detailed models from digital draft to physical prototype.
        </p>
        <button 
          onClick={() => setActiveTab('contact')}
          className="bg-[#ff6600] hover:bg-[#e05b00] text-black font-bold px-6 py-2.5 rounded-sm uppercase tracking-wider text-xs transition-all"
        >
          Request Custom Fabrication
        </button>
      </div>

    </div>
  )
}
