import React from 'react'
import { Apple, Play } from 'lucide-react'

const AppSection = () => {
  return (
    <section className="py-16" id="app">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden border border-white/30 bg-white/60 backdrop-blur-xl shadow-[0_8px_30px_rgba(2,8,23,0.06)] p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900">The app</h3>
              <p className="mt-2 text-slate-600">Invest, monitor, and manage your portfolio on the go.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#224F56] text-white hover:brightness-110 transition shadow-[0_8px_30px_rgba(34,79,86,0.35)]">
                  <Apple className="h-5 w-5" /> Download the app
                </button>
                <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white/70 text-slate-800 hover:bg-white transition">
                  <Play className="h-5 w-5" /> hesitant?
                </button>
              </div>
            </div>
            <div className="h-56 md:h-72 rounded-2xl border border-slate-200 bg-gradient-to-br from-[#224F56]/10 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppSection
