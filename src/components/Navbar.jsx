import React, { useState } from 'react'
import { Menu, X, Shield, LogIn } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded bg-blue-500/20 text-blue-400 ring-1 ring-inset ring-white/10 flex items-center justify-center">
            <Shield className="h-4 w-4" />
          </div>
          <span className="text-sm font-medium text-slate-200">Support Assistant</span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a className="text-slate-300 hover:text-white transition-colors" href="#features">Funktionen</a>
          <a className="text-slate-300 hover:text-white transition-colors" href="#usage">Nutzung</a>
          <a className="text-slate-300 hover:text-white transition-colors" href="#privacy">Datenschutz</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button className="px-3 py-2 text-xs text-slate-300 hover:text-white inline-flex items-center gap-2"><LogIn className="h-4 w-4"/>Anmelden</button>
        </div>

        <button aria-label="Menü" onClick={() => setOpen(v => !v)} className="md:hidden text-slate-300 hover:text-white">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/5 bg-slate-950/95">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3 flex flex-col gap-2 text-sm">
            <a onClick={() => setOpen(false)} className="py-2 text-slate-300 hover:text-white" href="#features">Funktionen</a>
            <a onClick={() => setOpen(false)} className="py-2 text-slate-300 hover:text-white" href="#usage">Nutzung</a>
            <a onClick={() => setOpen(false)} className="py-2 text-slate-300 hover:text-white" href="#privacy">Datenschutz</a>
            <button className="mt-2 inline-flex items-center gap-2 rounded border border-white/10 px-3 py-2 text-left text-slate-200 hover:bg-white/5">
              <LogIn className="h-4 w-4"/> Anmelden
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
