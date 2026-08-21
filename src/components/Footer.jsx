import React from 'react'

export default function Footer({ setActiveTab }) {
  return (
    <footer className="border-t border-[#222222] bg-[#0a0a0a] py-12 px-6 mt-auto font-mono text-xs text-[#888888]">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        
        {/* Column 1: Brand & Status */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-[#ff6600] rounded-full animate-pulse shadow-[0_0_8px_#ff6600]"></div>
            <span className="font-bold text-[#e0e0e0] tracking-wider text-xs">
              BLACK FORGE // BSI
            </span>
          </div>
          <p className="text-[11px] leading-relaxed">
            Operational Home Workshop Node. High-detail SLA resin printing and desktop simulation gear.
          </p>
          <p className="text-[10px] text-[#ff6600]">
            ● SECURE TRANSMISSION ACTIVE
          </p>
        </div>

        {/* Column 2: Internal Sitemap */}
        <div className="space-y-3">
          <h3 className="text-[#e0e0e0] font-bold tracking-widest uppercase text-[11px] border-b border-[#222222] pb-1">
            // Sitemap
          </h3>
          <ul className="space-y-2 text-[11px]">
            <li>
              <button 
                onClick={() => { setActiveTab('home'); window.scrollTo(0, 0); }}
                className="hover:text-[#ff6600] transition-colors"
              >
                Home
              </button>
            </li>
            <li>
              <button 
                onClick={() => { setActiveTab('catalog'); window.scrollTo(0, 0); }}
                className="hover:text-[#ff6600] transition-colors"
              >
                Catalog
              </button>
            </li>
            <li>
              <button 
                onClick={() => { setActiveTab('about'); window.scrollTo(0, 0); }}
                className="hover:text-[#ff6600] transition-colors"
              >
                About & Lore Database
              </button>
            </li>
            <li>
              <button 
                onClick={() => { setActiveTab('contact'); window.scrollTo(0, 0); }}
                className="hover:text-[#ff6600] transition-colors"
              >
                Contact / Transmit
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: Enterprise Network (Steele Tech Link) */}
        <div className="space-y-3">
          <h3 className="text-[#e0e0e0] font-bold tracking-widest uppercase text-[11px] border-b border-[#222222] pb-1">
            // Sister Enterprise
          </h3>
          <ul className="space-y-2 text-[11px]">
            <li>
              <a 
                href="steele-tech.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#ff6600] hover:text-[#ff8833] font-bold transition-colors flex items-center space-x-1"
              >
                <span>Steele Tech Infrastructure</span>
                <span className="text-[10px]">↗</span>
              </a>
              <p className="text-[10px] text-[#666666] mt-0.5">IT systems & technical services</p>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Copyright Bar */}
      <div className="max-w-4xl mx-auto mt-10 pt-6 border-t border-[#222222]/50 text-center text-[10px]">
       <p>© {new Date().getFullYear()} Black Forge Space Industries. A brand of Steele Co. All rights reserved.</p>
      </div>
    </footer>
  )
}
