import React from 'react'
import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="pricing" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-10">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(600px_circle_at_80%_20%,rgba(59,130,246,0.25),transparent)]" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Bereit für den nächsten Schritt?</h3>
            <p className="mt-3 text-blue-100/85">Starte heute mit Aether Chat und erlebe dialogorientierte Erlebnisse, die begeistern.</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button className="px-5 py-3 rounded-lg bg-blue-500 hover:bg-blue-400 text-white font-medium shadow-[0_8px_30px_rgba(59,130,246,0.45)] transition-colors">Kostenlos testen</button>
              <button className="px-5 py-3 rounded-lg bg-white/5 hover:bg-white/10 text-white/90 font-medium ring-1 ring-white/10 transition-colors">Mit Vertrieb sprechen</button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
