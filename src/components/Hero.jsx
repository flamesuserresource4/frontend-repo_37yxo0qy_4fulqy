import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-12 pb-16">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="text-3xl sm:text-4xl font-semibold tracking-tight text-white"
            >
              Interner First-Level Support-Assistent
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.05 }}
              className="mt-4 text-base text-slate-300 max-w-xl"
            >
              Schnelle Antworten auf wiederkehrende Fragen. Klar. Zuverlässig. Ohne Show.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.1 }}
              className="mt-6 space-y-2 text-sm text-slate-300"
            >
              <li>• Standardfragen zu Accounts, Zugängen und Tools</li>
              <li>• Schritt-für-Schritt-Lösungen und Shortcuts</li>
              <li>• Übergabe an den menschlichen Support bei Bedarf</li>
            </motion.ul>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-400 text-white text-sm">Jetzt nutzen</button>
              <span className="text-xs text-slate-400">Nur intern. Kein Marketing.</span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="relative"
          >
            <div className="mx-auto lg:ml-auto lg:mr-0 max-w-md rounded-xl border border-white/10 bg-slate-900 p-4">
              <div className="text-xs text-slate-400 mb-3">Beispiel-Dialog</div>
              <div className="space-y-2">
                <div className="max-w-[80%] rounded-lg bg-white/5 px-3 py-2 text-sm text-slate-100">Wie setze ich mein Passwort zurück?</div>
                <div className="flex justify-end">
                  <div className="max-w-[80%] rounded-lg bg-blue-500/20 px-3 py-2 text-sm text-slate-100">Gehe zu Konto > Sicherheit und klicke auf "Passwort ändern". Du erhältst eine E-Mail-Bestätigung.</div>
                </div>
                <div className="max-w-[85%] rounded-lg bg-white/5 px-3 py-2 text-sm text-slate-100">Ich kann mich nicht bei VPN anmelden.</div>
                <div className="flex justify-end">
                  <div className="max-w-[80%] rounded-lg bg-blue-500/20 px-3 py-2 text-sm text-slate-100">Bitte prüfe: Internet aktiv, richtige Gruppe, aktueller Client. Sonst Ticket an Netzwerk-Team.</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
