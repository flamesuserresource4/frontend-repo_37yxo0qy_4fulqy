import React from 'react'
import { Menu, MessageSquare, Sparkles } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="relative z-20">
      <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-blue-400 ring-1 ring-inset ring-white/10 shadow-[0_8px_30px_rgba(59,130,246,0.35)] flex items-center justify-center">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <span className="text-white/90 font-semibold tracking-tight">Aether Chat</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a className="text-blue-100/80 hover:text-white transition-colors" href="#feature">Funktionen</a>
          <a className="text-blue-100/80 hover:text-white transition-colors" href="#pricing">Preise</a>
          <a className="text-blue-100/80 hover:text-white transition-colors" href="#faq">FAQ</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button className="px-4 py-2 text-sm text-blue-100/90 hover:text-white transition-colors">Anmelden</button>
          <button className="px-4 py-2 text-sm font-medium rounded-lg bg-blue-500 hover:bg-blue-400 text-white shadow-[0_8px_24px_rgba(59,130,246,0.45)] transition-colors inline-flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            Jetzt testen
          </button>
        </div>

        <button className="md:hidden text-blue-100/80 hover:text-white"><Menu /></button>
      </div>
    </header>
  )
}
