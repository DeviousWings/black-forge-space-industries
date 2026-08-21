import React from 'react'

export default function App() {
  return (
    <div className="min-h-screen bg-black text-text flex flex-col justify-between selection:bg-orange selection:text-black">
      {/* Top Warning Banner / Header */}
      <header className="border-b border-border bg-dark/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-orange rounded-full animate-pulse shadow-[0_0_10px_#ff6600]"></div>
            <span className="font-bold tracking-wider text-silver">BLACK FORGE // SPACE INDUSTRIES</span>
          </div>
          <span className="text-xs text-text-dim border border-border px-3 py-1 rounded-sm uppercase tracking-widest">
            System Status: Initializing
          </span>
        </div>
      </header>

      {/* Main Hero Content */}
      <main className="max-w-4xl mx-auto px-6 py-24 text-center">
        <div className="inline-block border border-orange/40 bg-orange/10 text-orange text-xs px-3 py-1 mb-6 rounded tracking-widest uppercase">
          Industrial 3D Printing & Simulation Hardware
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-silver">
          THE DATA CORE <span className="text-orange">COMMENCES.</span>
        </h1>
        <p className="text-text-dim max-w-2xl mx-auto text-lg mb-10 leading-relaxed font-mono">
          Engineered for localized space-sim telemetry and tactical desktop infrastructure. Hardware storefront is currently spooling up.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-orange hover:bg-orange-dark text-black font-bold px-8 py-3 rounded-sm transition-all shadow-[0_0_15px_rgba(255,102,0,0.15)] uppercase tracking-wider">
            Access Terminal
          </button>
          <button className="border border-border hover:border-silver text-silver px-8 py-3 rounded-sm transition-all uppercase tracking-wider">
            View Directives
          </button>
        </div>
      </main>

      {/* Footer with Steele Co. Parent Disclosure */}
      <footer className="border-t border-border bg-dark py-8 text-center text-xs text-text-dim">
        <div className="max-w-7xl mx-auto px-6 space-y-2">
          <p>© {new Date().getFullYear()} Black Forge Space Industries. A brand of Steele Co. All rights reserved.</p>
          <p>
            Sister Infrastructure: <a href="https://steeletech.example" className="text-orange hover:underline">Steele Tech</a>
          </p>
        </div>
      </footer>
    </div>
  )
}
