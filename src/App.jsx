import React, { useState } from 'react'

export default function App() {
  const [activeTab, setActiveTab] = useState('Home')

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0] font-mono flex flex-col justify-between selection:bg-[#ff6600] selection:text-black">
      
      {/* Navbar */}
      <header className="border-b border-[#222222] bg-[#0a0a0a]/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('Home')}>
            <div className="w-3 h-3 bg-[#ff6600] rounded-full animate-pulse shadow-[0_0_10px_#ff6600]"></div>
            <span className="font-bold tracking-wider text-[#e0e0e0] text-sm sm:text-base">
              BLACK FORGE
            </span>
          </div>

          <nav className="flex items-center space-x-8 text-xs tracking-widest text-[#888888]">
            <button 
              onClick={() => setActiveTab('Home')}
              className={`transition-colors hover:text-[#ff6600] ${activeTab === 'Home' ? 'text-[#ff6600] border-b border-[#ff6600] pb-1' : ''}`}
            >
              Home
            </button>
            <button 
              onClick={() => setActiveTab('About Me')}
              className={`transition-colors hover:text-[#ff6600] ${activeTab === 'About Me' ? 'text-[#ff6600] border-b border-[#ff6600] pb-1' : ''}`}
            >
              About Me
            </button>
            <button 
              onClick={() => setActiveTab('Contact')}
              className={`transition-colors hover:text-[#ff6600] ${activeTab === 'Contact' ? 'text-[#ff6600] border-b border-[#ff6600] pb-1' : ''}`}
            >
              Contact
            </button>
          </nav>

        </div>
      </header>

      {/* Main Content Area based on active tab */}
      <main className="max-w-4xl mx-auto px-6 py-24 flex-grow w-full text-center">
        {activeTab === 'Home' && (
          <div>
            <div className="inline-block border border-[#ff6600]/40 bg-[#ff6600]/10 text-[#ff6600] text-xs px-3 py-1 mb-6 rounded tracking-widest uppercase">
              Industrial 3D Printing & Hardware
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-[#e0e0e0]">
              TACTICAL HARDWARE <span className="text-[#ff6600]">ONLINE.</span>
            </h1>
            <p className="text-[#888888] max-w-xl mx-auto text-sm md:text-base mb-10 leading-relaxed">
              Welcome to the operational hub for custom physical builds, simulation peripherals, and high-durability prototyping.
            </p>
            <button 
              onClick={() => setActiveTab('Contact')}
              className="bg-[#ff6600] hover:bg-[#e05b00] text-black font-bold px-8 py-3 rounded-sm transition-all shadow-[0_0_15px_rgba(255,102,0,0.15)] uppercase tracking-wider text-xs"
            >
              Initialize Contact
            </button>
          </div>
        )}

        {activeTab === 'About Me' && (
          <div className="text-left max-w-2xl mx-auto border border-[#222222] bg-[#121212] p-8 rounded-sm">
            <h2 className="text-2xl font-bold text-[#e0e0e0] mb-4 tracking-wide">About Me</h2>
            <p className="text-[#888888] text-sm leading-relaxed mb-4">
              Specializing in precision 3D printing, ruggedized electronics housing, and custom mechanical fabrication. Built to bridge industrial standards with functional desktop infrastructure.
            </p>
            <p className="text-[#888888] text-sm leading-relaxed">
              Operating in collaboration with Steele Tech infrastructure to deliver reliable, heavy-duty components and custom prototyping solutions.
            </p>
          </div>
        )}

        {activeTab === 'Contact' && (
          <div className="text-left max-w-md mx-auto border border-[#222222] bg-[#121212] p-8 rounded-sm">
            <h2 className="text-2xl font-bold text-[#e0e0e0] mb-4 tracking-wide">Secure Transmission</h2>
            <p className="text-[#888888] text-sm mb-6">
              Submit your project specifications or custom hardware requests below.
            </p>
            <div className="space-y-4">
              <div>
                <label className="block text-xs uppercase text-[#888888] mb-2">Design Codename</label>
                <input type="text" placeholder="e.g., BF-ID-01" className="w-full bg-black border border-[#222222] p-3 text-sm text-[#e0e0e0] rounded-sm focus:border-[#ff6600] outline-none" />
              </div>
              <div>
                <label className="block text-xs uppercase text-[#888888] mb-2">Transmission Notes</label>
                <textarea rows="3" placeholder="Describe requirements..." className="w-full bg-black border border-[#222222] p-3 text-sm text-[#e0e0e0] rounded-sm focus:border-[#ff6600] outline-none"></textarea>
              </div>
              <button className="w-full bg-[#ff6600] hover:bg-[#e05b00] text-black font-bold py-3 rounded-sm uppercase tracking-wider text-xs transition-all">
                Send Transmission
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-[#222222] bg-[#121212] py-8 text-center text-xs text-[#888888]">
        <div className="max-w-7xl mx-auto px-6 space-y-2">
          <p>© {new Date().getFullYear()} Black Forge Space Industries. A brand of Steele Co. All rights reserved.</p>
          <p>
            Sister Enterprise Infrastructure: <span className="text-[#ff6600]">Steele Tech</span>
          </p>
        </div>
      </footer>

    </div>
  )
}
