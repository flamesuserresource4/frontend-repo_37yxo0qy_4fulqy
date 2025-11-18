import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        {/* Background gradient + glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute -top-1/3 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute top-1/2 -right-40 h-80 w-80 rounded-full bg-blue-400/10 blur-2xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-20 pb-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white"
            >
              Der Chatbot, der sich wie Magie anfühlt
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-lg text-blue-100/90 max-w-xl"
            >
              Aether Chat verbindet elegantes Design mit fortschrittlicher KI. Schlank, schnell und zuverlässig – für Support, Beratung oder Automatisierung.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <button className="px-5 py-3 rounded-lg bg-blue-500 hover:bg-blue-400 text-white font-medium shadow-[0_8px_30px_rgba(59,130,246,0.45)] transition-colors">Jetzt starten</button>
              <button className="px-5 py-3 rounded-lg bg-white/5 hover:bg-white/10 text-white/90 font-medium ring-1 ring-white/10 transition-colors">Live-Demo ansehen</button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-10 flex items-center gap-6 text-sm text-blue-100/70"
            >
              <div className="flex -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 ring-2 ring-slate-900" />
                ))}
              </div>
              <span>Vertraut von Teams auf der ganzen Welt</span>
            </motion.div>
          </div>

          {/* Mocked chat panel */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative"
          >
            <div className="mx-auto lg:ml-auto lg:mr-0 max-w-md rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  <span className="text-xs text-blue-100/80">Online</span>
                </div>
                <span className="text-xs text-blue-100/60">Aether Chat</span>
              </div>

              <div className="p-4 space-y-3">
                <div className="max-w-[80%] rounded-2xl bg-white/5 ring-1 ring-white/10 px-4 py-3 text-sm text-blue-50">
                  Hallo! Wie kann ich heute helfen?
                </div>
                <div className="flex justify-end">
                  <div className="max-w-[80%] rounded-2xl bg-blue-500/20 ring-1 ring-blue-300/30 px-4 py-3 text-sm text-blue-50">
                    Erstelle mir eine Produktempfehlung für neue Kund:innen.
                  </div>
                </div>
                <div className="max-w-[85%] rounded-2xl bg-white/5 ring-1 ring-white/10 px-4 py-3 text-sm text-blue-50">
                  Natürlich! Ich stelle ein kurzes Profil zusammen und präsentiere passende Optionen.
                </div>
              </div>

              <div className="px-4 py-3 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <input className="flex-1 bg-white/5 text-blue-50 placeholder:text-blue-200/40 rounded-lg px-3 py-2 text-sm ring-1 ring-white/10 outline-none focus:ring-blue-400/50 transition" placeholder="Nachricht schreiben..." />
                  <button className="px-3 py-2 rounded-lg bg-blue-500 hover:bg-blue-400 text-white text-sm transition">Senden</button>
                </div>
              </div>
            </div>

            {/* Floating glow accents */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="absolute -z-10 -bottom-6 -right-6 h-40 w-40 rounded-full bg-blue-400/20 blur-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
