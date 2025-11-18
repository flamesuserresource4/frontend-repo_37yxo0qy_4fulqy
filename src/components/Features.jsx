import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Zap, Sparkles, Globe, Cpu, Lock } from 'lucide-react'

const features = [
  { icon: Zap, title: 'Blitzschnell', desc: 'Reaktionszeiten unter 100ms für ein natürliches Gesprächsgefühl.' },
  { icon: Shield, title: 'Unternehmenssicher', desc: 'Datenschutz, Zugriffskontrollen und Audit-Logs inklusive.' },
  { icon: Cpu, title: 'State-of-the-art KI', desc: 'Verbessert Antworten durch Kontext, Tools und Wissen.' },
  { icon: Globe, title: 'Mehrsprachig', desc: 'Automatische Übersetzung und Lokalisierung für globale Teams.' },
  { icon: Lock, title: 'Kontrolliert', desc: 'Feingranulare Richtlinien und Moderation auf Knopfdruck.' },
  { icon: Sparkles, title: 'Erweiterbar', desc: 'Plugins, Webhooks und API für nahtlose Integrationen.' },
]

export default function Features() {
  return (
    <section id="feature" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">Warum Aether Chat?</h2>
          <p className="mt-3 text-blue-100/80">Schlanke Architektur, moderne Sicherheit und ein UI, das begeistert.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.03 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg hover:bg-white/7 hover:translate-y-[-2px] transition-all"
            >
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-400 ring-1 ring-inset ring-white/10 flex items-center justify-center shadow-[0_8px_24px_rgba(59,130,246,0.35)]">
                <f.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-4 text-white font-medium">{f.title}</h3>
              <p className="mt-2 text-sm text-blue-100/80">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
