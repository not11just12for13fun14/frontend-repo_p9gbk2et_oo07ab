import React from 'react'
import { Shield, Certificate } from 'lucide-react'

const LegalSharia = () => {
  return (
    <section className="py-16" id="legal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/30 bg-white/50 backdrop-blur-xl p-8 md:p-12 shadow-[0_8px_30px_rgba(2,8,23,0.06)]">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Shield className="h-5 w-5 text-[#224F56]" />
                <h3 className="text-xl font-semibold text-slate-900">Regulatory</h3>
              </div>
              <p className="text-slate-600">Licensed by the Capital Market Authority (CMA). License No. [placeholder]. All investments carry risk; please review our risk disclosure.</p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Certificate className="h-5 w-5 text-[#224F56]" />
                <h3 className="text-xl font-semibold text-slate-900">Sharia Board</h3>
              </div>
              <p className="text-slate-600">Supervised by an independent Sharia board. Members: [Name 1], [Name 2], [Name 3] (placeholders). Formal certifications provided per issuance.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LegalSharia
