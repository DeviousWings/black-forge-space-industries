import React from 'react'

export default function Navbar({ activeTab, setActiveTab }) {
  return (
    <header className="border-b border-[#222222] bg-[#0a0a0a]/90 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Brand Logo & Telemetry Indicator */}
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('home')}>
          <div className="w-3 h-3 bg-[#ff6600] rounded-full animate-pulse shadow-[0_0_10px_#ff6600]"></div>
          <span className="font-mono font-bold tracking-wider text-[#e0e0e0] text-sm sm:text-base">
            BLACK FORGE // SPACE INDUSTRIES
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-6 sm:space-x-8 font-mono text-xs tracking-widest text-[#888888]">
          <button 
            onClick={() => setActiveTab('home')}
            className={`transition-colors hover:text-[#ff6600] ${activeTab === 'home' ? 'text-[#ff6600] border-b border-[#ff6600] pb-1' : ''}`}
          >
            Home
          </button>
          <button 
            onClick={() => setActiveTab('catalog')}
            className={`transition-colors hover:text-[#ff6600] ${activeTab === 'catalog' ? 'text-[#ff6600] border-b border-[#ff6600] pb-1' : ''}`}
          >
            Catalog
          </button>
          <button 
            onClick={() => setActiveTab('about')}
            className={`transition-colors hover:text-[#ff6600] ${activeTab === 'about' ? 'text-[#ff6600] border-b border-[#ff6600] pb-1' : ''}`}
          >
            About Me
          </button>
          <button 
            onClick={() => setActiveTab('contact')}
            className={`transition-colors hover:text-[#ff6600] ${activeTab === 'contact' ? 'text-[#ff6600] border-b border-[#ff6600] pb-1' : ''}`}
          >
            Contact
          </button>
        </nav>

      </div>
    </header>
  )
}
