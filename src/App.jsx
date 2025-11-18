import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <main>
        <Hero />
        <Features />
        <CTA />
      </main>

      <footer className="py-10 text-center text-xs text-slate-400 border-t border-white/5">© {new Date().getFullYear()} Internes Support-Portal</footer>
    </div>
  )
}

export default App
