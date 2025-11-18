import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Search, LifeBuoy, BookOpen, Clock3, ArrowRight } from 'lucide-react'

const features = [
  { icon: Search, title: 'Wissenssuche', desc: 'FAQ, Richtlinien und How-Tos schnell auffinden.' },
  { icon: BookOpen, title: 'Playbooks', desc: 'Geführte Schritte für gängige Probleme.' },
  { icon: Clock3, title: 'SLA-Entlastung', desc: 'Entlastet den Support bei wiederkehrenden Themen.' },
  { icon: ShieldCheck, title: 'Zugriff intern', desc: 'Nur für Mitarbeiter:innen im Firmen­netz.' },
  { icon: LifeBuoy, title: 'Handover', desc: 'Saubere Übergabe an Menschen mit Kontext.' },
]

export default function Features() {
  return (
    <section id="features" className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
        <div className="max-w-2xl">
          <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">Zweckmäßig. Verlässlich.</h2>
          <p className="mt-2 text-slate-300">Alles, was für internen First-Level wichtig ist – ohne Schnickschnack.</p>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: i * 0.03 }}
              className="group rounded-lg border border-white/10 bg-slate-900 p-4"
            >
              <div className="h-9 w-9 rounded bg-blue-500/15 text-blue-400 ring-1 ring-inset ring-white/10 flex items-center justify-center">
                <f.icon className="h-4 w-4" />
              </div>
              <h3 className="mt-3 text-white font-medium">{f.title}</h3>
              <p className="mt-1 text-sm text-slate-300">{f.desc}</p>
              <button className="mt-3 inline-flex items-center gap-1 text-xs text-slate-300 hover:text-white">
                Mehr <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
