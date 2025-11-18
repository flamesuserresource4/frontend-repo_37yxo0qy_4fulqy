import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Soft grid + blueprint vibe */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.035] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:48px_48px]" />

      {/* Ambient gradient */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(800px_circle_at_10%_10%,rgba(59,130,246,0.18),transparent),radial-gradient(600px_circle_at_90%_20%,rgba(59,130,246,0.12),transparent),linear-gradient(180deg,rgba(2,6,23,1),rgba(2,6,23,1))]" />

      <Navbar />
      <Hero />
      <Features />
      <CTA />

      <footer className="py-10 text-center text-xs text-blue-100/60">© {new Date().getFullYear()} Aether Labs. Alle Rechte vorbehalten.</footer>
    </div>
  )
}

export default App
