import React from 'react'
import { ShieldCheck, SearchCheck, Star } from 'lucide-react'

const items = [
  {
    icon: ShieldCheck,
    title: 'Complete transparency',
    desc: 'Clear fees, clear risks, and full visibility on how each sukuk is structured.'
  },
  {
    icon: SearchCheck,
    title: 'Detailed project analysis',
    desc: 'In-depth financial and qualitative assessments on every company we finance.'
  },
  {
    icon: Star,
    title: 'Cherry-picked from the top',
    desc: 'We hand-select high-potential, Sharia-compliant opportunities.'
  },
]

const HowItWorks = () => {
  return (
    <section className="py-16" id="how">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900">How do we work?</h2>
        <p className="mt-2 text-slate-600">Our process puts clarity and trust first.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <div key={idx} className="group rounded-2xl border border-white/30 bg-white/50 backdrop-blur-xl p-6 shadow-[0_8px_30px_rgba(2,8,23,0.06)] hover:shadow-[0_12px_40px_rgba(2,8,23,0.1)] transition">
              <div className="h-11 w-11 rounded-xl bg-[#224F56]/10 text-[#224F56] grid place-items-center mb-4">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{it.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
