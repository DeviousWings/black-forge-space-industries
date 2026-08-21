import React, { useState } from 'react'

export default function About({ setActiveTab }) {
  const [loreTab, setLoreTab] = useState('company')

  return (
    <div className="space-y-12 py-8 text-left max-w-3xl mx-auto font-mono">
      
      {/* Header */}
      <div>
        <div className="inline-block border border-[#ff6600]/40 bg-[#ff6600]/10 text-[#ff6600] text-xs px-3 py-1 mb-4 rounded tracking-widest uppercase">
          Workshop Operations & Lore Database
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#e0e0e0] mb-3">
          ABOUT THE <span className="text-[#ff6600]">FORGE</span>
        </h1>
        <p className="text-[#888888] text-xs md:text-sm leading-relaxed">
          Precision high-detail SLA fabrication and desktop simulation gear, operated independently out of a dedicated home workshop.
        </p>
      </div>

      {/* The Workshop & Maker Reality */}
      <div className="border border-[#222222] bg-[#121212] p-6 sm:p-8 rounded-sm space-y-4">
        <h2 className="text-xs uppercase tracking-widest text-[#ff6600] font-bold border-b border-[#222222] pb-3">
          // Operational Reality & Ethos
        </h2>
        <p className="text-[#888888] text-xs sm:text-sm leading-relaxed">
          Black Forge Space Industries is proudly an independent, home-workshop-based enterprise. Utilizing high-resolution SLA resin printing (Anycubic Photon Mono), every physical asset is crafted hands-on with sharp geometric fidelity and strict tolerances.
        </p>
        <p className="text-[#888888] text-xs sm:text-sm leading-relaxed">
          Operating in alignment with Steele Tech infrastructure, the mission is to deliver durable, tactical-grade hardware and custom prototyping solutions without corporate pretense—just solid materials and direct maker communication.
        </p>
      </div>

      {/* Embedded BSI Lore Archive */}
      <div className="border border-[#ff6600]/30 bg-[#0f0f0f] p-6 sm:p-8 rounded-sm space-y-6 relative">
        <div className="absolute top-0 left-0 w-1 h-full bg-[#ff6600]"></div>
        
        {/* Terminal Header */}
        <div className="border-b border-[#222222] pb-4">
          <h2 className="text-sm font-bold tracking-widest text-[#e0e0e0] mb-1">
            CLASSIFIED OPERATIONAL ARCHIVE — FRONTIER DIVISION
          </h2>
          <p className="text-[10px] text-[#ff6600] tracking-widest">
            BSI DATABASE INTERFACE // ACTIVE LORE MANIFEST
          </p>
        </div>

        {/* Sub-Tabs for Lore Sections */}
        <div className="flex flex-wrap gap-2 pt-2">
          {['company', 'blackstar', 'stations', 'founding crew', 'clearance'].map((tab) => (
            <button
              key={tab}
              onClick={() => setLoreTab(tab)}
              className={`px-3 py-1.5 text-[11px] uppercase tracking-wider border transition-all ${
                loreTab === tab 
                  ? 'border-[#ff6600] text-[#ff6600] bg-[#ff6600]/10 font-bold' 
                  : 'border-[#222222] text-[#888888] bg-[#121212] hover:border-[#888888]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Sub-Tab Content Area */}
        <div className="space-y-4 pt-4 text-xs sm:text-sm text-[#888888]">
          
          {loreTab === 'company' && (
            <div className="space-y-4">
              <div className="border border-[#222222] bg-black p-4 rounded-sm space-y-3">
                <h3 className="text-xs uppercase tracking-widest text-[#ff6600] font-bold">// Company Overview</h3>
                <p className="leading-relaxed">
                  Blackforge Space Industries is a frontier corporation specializing in the design, construction, and deployment of deep space habitats and exploration vessels. Where governments plant flags, BSI builds the infrastructure that lets humanity actually live and work there.
                </p>
                <p className="leading-relaxed">
                  Every colony, every outpost, every research station on the edge of known space has BSI hardware in its walls. Their crews are not just builders — they are explorers, researchers, and specialists operating in the most hostile environments humanity has ever faced.
                </p>
                <p className="text-[#e0e0e0] font-bold pt-2">
                  BSI does not just make the frontier possible. They push it further.
                </p>
              </div>

              <div className="border border-[#222222] bg-black p-4 rounded-sm space-y-3">
                <h3 className="text-xs uppercase tracking-widest text-[#ff6600] font-bold">// Mission Statement</h3>
                <div className="inline-block border border-[#ff6600]/40 bg-[#ff6600]/10 text-[#ff6600] text-[10px] px-2 py-0.5 tracking-widest uppercase">
                  Habitat Systems for the Frontier
                </div>
                <p className="leading-relaxed">
                  To design, build, and deploy the infrastructure humanity needs to become a truly spacefaring species. From the first desk module to a full command deck — BSI builds the frontier one system at a time.
                </p>
              </div>

              {/* Operational Specs Grid */}
              <div className="grid grid-cols-2 gap-2 text-[11px] border border-[#222222] bg-black p-4">
                <div><span className="text-[#888888]">Designation:</span> <span className="text-[#e0e0e0]">Blackforge Space Industries</span></div>
                <div><span className="text-[#888888]">Callsign:</span> <span className="text-[#e0e0e0]">BSI</span></div>
                <div><span className="text-[#888888]">Flagship:</span> <span className="text-[#e0e0e0]">BSI Blackstar</span></div>
                <div><span className="text-[#888888]">Shipyard:</span> <span className="text-[#e0e0e0]">Darkforge Station</span></div>
                <div><span className="text-[#888888]">Future Base:</span> <span className="text-[#e0e0e0]">Hephaestus Station</span></div>
                <div><span className="text-[#888888]">Status:</span> <span className="text-[#ff6600]">● Active</span></div>
              </div>
            </div>
          )}

          {loreTab === 'blackstar' && (
            <div className="space-y-4">
              <div className="border border-[#222222] bg-black p-4 rounded-sm space-y-3">
                <h3 className="text-xs uppercase tracking-widest text-[#ff6600] font-bold">// BSI Blackstar — Vessel Profile</h3>
                <p className="leading-relaxed">
                  The Blackstar was not born as a flagship. She was born as a workhorse, hauling cargo and crew between Earth orbit and Mars during humanity's earliest steps into becoming a spacefaring species.
                </p>
                <p className="leading-relaxed">
                  She was the proving ground for two technologies that changed everything — antigravity systems and integrated magnetic field generation. Every habitat and exploration vessel that came after her borrowed from what BSI learned building and operating the Blackstar.
                </p>
                <p className="text-[#e0e0e0] font-bold">
                  She earned her flagship status. She was not given it.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[11px] border border-[#222222] bg-black p-4">
                <div><span className="text-[#888888]">Classification:</span> <span className="text-[#e0e0e0]">Exploration & Research</span></div>
                <div><span className="text-[#888888]">Length:</span> <span className="text-[#e0e0e0]">400-600 Meters</span></div>
                <div><span className="text-[#888888]">Crew Complement:</span> <span className="text-[#e0e0e0]">200-400</span></div>
                <div><span className="text-[#888888]">Docking Bays:</span> <span className="text-[#e0e0e0]">2 Primary (Chine Mounted)</span></div>
                <div><span className="text-[#888888]">Propulsion:</span> <span className="text-[#e0e0e0]">Multi-Drive Array</span></div>
                <div><span className="text-[#888888]">Status:</span> <span className="text-[#ff6600]">● Active</span></div>
              </div>
            </div>
          )}

          {loreTab === 'stations' && (
            <div className="space-y-4">
              <div className="border border-[#222222] bg-black p-4 rounded-sm space-y-2">
                <h3 className="text-xs uppercase tracking-widest text-[#ff6600] font-bold">Darkforge Station</h3>
                <p className="leading-relaxed text-xs">
                  The beginning. Where humanity took its first steps into the dark. BSI's home, the Blackstar's birthplace. Named for the darkness of deep space and the forge that built everything that followed.
                </p>
                <div className="text-[11px] pt-1 text-[#888888]">Location: Earth-Mars Transit Corridor | Status: <span className="text-[#ff6600]">Active</span></div>
              </div>

              <div className="border border-[#222222] bg-black p-4 rounded-sm space-y-2">
                <h3 className="text-xs uppercase tracking-widest text-[#ff6600] font-bold">Hephaestus Station</h3>
                <p className="leading-relaxed text-xs">
                  The next frontier. Named for the god of the forge, fire, and craftsmen. To be built when BSI has pushed far enough to need a forward operating base beyond our solar system. At that point BSI will be literally forging humanity's path to the stars.
                </p>
                <div className="text-[11px] pt-1 text-[#888888]">Location: Beyond Solar System (TBD) | Status: <span className="text-[#ff6600]">Planned</span></div>
              </div>
            </div>
          )}

          {loreTab === 'founding crew' && (
            <div className="border border-[#222222] bg-black p-4 rounded-sm space-y-2">
              <h3 className="text-xs uppercase tracking-widest text-[#ff6600] font-bold">// Founding Crew Manifest</h3>
              <p className="text-xs">Archive records for primary expedition command staff are currently restricted to authorized security clearances.</p>
            </div>
          )}

          {loreTab === 'clearance' && (
            <div className="space-y-6">
              {/* Clearance System Table */}
              <div className="border border-[#222222] bg-black p-4 rounded-sm space-y-4">
                <h3 className="text-xs uppercase tracking-widest text-[#ff6600] font-bold">BSI CLEARANCE SYSTEM</h3>
                <p className="text-xs text-[#888888] leading-relaxed">
                  Blackforge Space Industries operates frontier installations far from conventional authority. The clearance system exists because in isolated frontier environments, information and access control is critical to mission survival.
                </p>
                
                <div className="overflow-x-auto pt-2">
                  <table className="w-full text-left text-[11px] border-collapse">
                    <thead>
                      <tr className="border-b border-[#222222] text-[#ff6600] uppercase tracking-wider">
                        <th className="py-2 pr-4 font-normal">Level</th>
                        <th className="py-2 pr-4 font-normal">Color</th>
                        <th className="py-2 pr-4 font-normal">Designation</th>
                        <th className="py-2 font-normal">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#222222]/50 text-[#888888]">
                      <tr>
                        <td className="py-2.5 pr-4 text-[#e0e0e0]">1</td>
                        <td className="py-2.5 pr-4 text-white">WHITE</td>
                        <td className="py-2.5 pr-4 text-[#e0e0e0]">CIVILIAN / VISITOR</td>
                        <td className="py-2.5">Non crew personnel</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 pr-4 text-[#e0e0e0]">2</td>
                        <td className="py-2.5 pr-4 text-green-500">GREEN</td>
                        <td className="py-2.5 pr-4 text-[#e0e0e0]">GENERAL CREW</td>
                        <td className="py-2.5">Standard crew members</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 pr-4 text-[#e0e0e0]">3</td>
                        <td className="py-2.5 pr-4 text-blue-500">BLUE</td>
                        <td className="py-2.5 pr-4 text-[#e0e0e0]">SPECIALIST</td>
                        <td className="py-2.5">Technical and medical staff</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 pr-4 text-[#e0e0e0]">4</td>
                        <td className="py-2.5 pr-4 text-yellow-500">YELLOW</td>
                        <td className="py-2.5 pr-4 text-[#e0e0e0]">SENIOR STAFF</td>
                        <td className="py-2.5">Department heads</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 pr-4 text-[#e0e0e0]">5</td>
                        <td className="py-2.5 pr-4 text-orange-500">ORANGE</td>
                        <td className="py-2.5 pr-4 text-[#e0e0e0]">COMMAND</td>
                        <td className="py-2.5">Command level officers</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 pr-4 text-[#e0e0e0]">6</td>
                        <td className="py-2.5 pr-4 text-red-500">RED</td>
                        <td className="py-2.5 pr-4 text-[#e0e0e0]">BLACK OPERATIONS</td>
                        <td className="py-2.5">Restricted — founder level</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Access System Table */}
              <div className="border border-[#222222] bg-black p-4 rounded-sm space-y-4">
                <h3 className="text-xs uppercase tracking-widest text-[#ff6600] font-bold">BSI ACCESS SYSTEM</h3>
                
                <div className="overflow-x-auto pt-2">
                  <table className="w-full text-left text-[11px] border-collapse">
                    <thead>
                      <tr className="border-b border-[#222222] text-[#ff6600] uppercase tracking-wider">
                        <th className="py-2 pr-8 font-normal">Access Level</th>
                        <th className="py-2 font-normal">Areas</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#222222]/50 text-[#888888]">
                      <tr>
                        <td className="py-2.5 pr-8 text-[#e0e0e0]">GENERAL</td>
                        <td className="py-2.5">Common areas, crew quarters</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 pr-8 text-[#e0e0e0]">OPERATIONAL</td>
                        <td className="py-2.5">Work areas, labs, engineering</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 pr-8 text-[#e0e0e0]">RESTRICTED</td>
                        <td className="py-2.5">Sensitive systems, armory, data cores</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 pr-8 text-[#e0e0e0]">AUTHORIZED</td>
                        <td className="py-2.5">Command deck, mission critical systems</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 pr-8 text-[#e0e0e0]">CLASSIFIED</td>
                        <td className="py-2.5">Eyes only — no physical access markers</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

        </div>

        <div className="pt-2">
          <button 
            onClick={() => setActiveTab('catalog')}
            className="text-[#ff6600] text-xs tracking-widest uppercase font-bold hover:underline"
          >
            View Physical Hardware Manifest →
          </button>
        </div>
      </div>

    </div>
  )
}
