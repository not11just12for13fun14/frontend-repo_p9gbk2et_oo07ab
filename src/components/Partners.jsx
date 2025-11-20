import React from 'react'

const logos = [
  { name: 'CreditBureau', color: '#0ea5e9' },
  { name: 'FraudShield', color: '#f59e0b' },
  { name: 'OpenBank', color: '#10b981' },
  { name: 'KYCPro', color: '#8b5cf6' },
  { name: 'RiskIntel', color: '#ef4444' },
]

const Partners = () => {
  return (
    <section className="py-16" id="partners">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/30 bg-white/50 backdrop-blur-xl p-8 shadow-[0_8px_30px_rgba(2,8,23,0.06)]">
          <div className="flex items-center justify-between flex-wrap gap-6">
            {logos.map((l) => (
              <div key={l.name} className="h-16 w-40 rounded-2xl border border-slate-200 bg-white/70 grid place-items-center text-slate-700 font-medium" style={{ boxShadow: '0 8px 30px rgba(2,8,23,0.06)' }}>
                <span className="tracking-wide" style={{ color: l.color }}>{l.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partners
