import React from 'react'
import { BarChart3 } from 'lucide-react'

const Transparency = () => {
  return (
    <section className="py-16" id="transparency">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden border border-white/30 bg-white/50 backdrop-blur-xl shadow-[0_8px_30px_rgba(2,8,23,0.06)]">
          <div className="p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Complete transparency in our due diligence</h2>
              <p className="mt-3 text-slate-600">We apply robust financial models and credit scoring tailored for SMEs. Each sukuk opportunity includes a clear breakdown of assumptions, stress testing, and repayment scenarios.</p>
              <ul className="mt-6 space-y-2 text-slate-700 text-sm list-disc list-inside">
                <li>Credit scoring calibrated for local market dynamics</li>
                <li>Cashflow-based analysis and risk grading</li>
                <li>Ongoing performance monitoring and disclosures</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#224F56]/10 to-transparent rounded-2xl p-6 border border-slate-200">
              <div className="flex items-center justify-between text-slate-700 text-sm">
                <span>Sample credit model</span>
                <BarChart3 className="h-4 w-4 text-[#224F56]" />
              </div>
              <div className="mt-4 h-40 rounded-xl bg-white/70 border border-slate-200 grid grid-cols-12 overflow-hidden">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="flex items-end justify-center">
                    <div className="w-4 rounded-t bg-[#224F56]" style={{ height: `${20 + (i%6)*12}px` }} />
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs text-slate-500">Illustrative only. Actual models are shared per opportunity.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Transparency
