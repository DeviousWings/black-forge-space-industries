import { useState } from 'react'

// Layout Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Pages
import Home from './pages/Home'

export default function App() {
  const [activeTab, setActiveTab] = useState('home')

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0] flex flex-col font-mono selection:bg-[#ff6600] selection:text-black">
      
      {/* Top Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Page Views */}
      <main className="flex-1 max-w-4xl mx-auto px-6 py-24 w-full text-center">
        {activeTab === 'home' && <Home setActiveTab={setActiveTab} />}
        
        {activeTab === 'about' && (
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

        {activeTab === 'contact' && (
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
      <Footer 
        setActiveTab={setActiveTab} 
      />

    </div>
  )
}
