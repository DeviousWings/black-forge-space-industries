import { useState } from 'react'

// Layout Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Pages
import Home from './pages/Home'
import Catalog from './pages/Catalog'

export default function App() {
  const [activeTab, setActiveTab] = useState('home')

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0] flex flex-col font-mono selection:bg-[#ff6600] selection:text-black">
      
      {/* Top Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Page Router */}
      <main className="flex-1 max-w-4xl mx-auto px-6 py-24 w-full text-center">
        {activeTab === 'home' && <Home setActiveTab={setActiveTab} />}
        {activeTab === 'catalog' && <Catalog setActiveTab={setActiveTab} />}
        {activeTab === 'about' && <div className="text-left max-w-2xl mx-auto border border-[#222222] bg-[#121212] p-8 rounded-sm">About page placeholder</div>}
        {activeTab === 'contact' && <div className="text-left max-w-md mx-auto border border-[#222222] bg-[#121212] p-8 rounded-sm">Contact page placeholder</div>}
      </main>

      {/* Footer */}
      <Footer 
        setActiveTab={setActiveTab} 
      />

    </div>
  )
}
