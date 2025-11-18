import React from 'react'

export default function CTA() {
  return (
    <section id="usage" className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
        <div className="rounded-xl border border-white/10 bg-slate-900 p-6">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">So setzt ihr ihn ein</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>• Direkt im Intranet starten</li>
                <li>• Fragen zu Accounts, Tools, Hardware</li>
                <li>• Tickets mit Kontext übergeben</li>
              </ul>
            </div>

            <div className="rounded-lg border border-white/10 bg-slate-950 p-4 text-sm text-slate-300">
              Hinweis: Dieses System ist nur intern erreichbar. Antworten werden protokolliert, um die Qualität zu verbessern. Bitte keine sensiblen Daten teilen, die nicht notwendig sind.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
