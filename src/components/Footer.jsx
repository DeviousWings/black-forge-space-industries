import React from 'react'

export default function Footer({ setActiveTab }) {
  return (
    <footer className="border-t border-[#222222] bg-[#121212] py-8 text-center text-xs font-mono text-[#888888]">
      <div className="max-w-7xl mx-auto px-6 space-y-2">
        <p>© {new Date().getFullYear()} Black Forge Space Industries. A brand of Steele Co. All rights reserved.</p>
        <p>
          Sister Enterprise Infrastructure: <span className="text-[#ff6600] cursor-pointer hover:underline" onClick={() => setActiveTab('home')}>Steele Tech Operations</span>
        </p>
      </div>
    </footer>
  )
}
