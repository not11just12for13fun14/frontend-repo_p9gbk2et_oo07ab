import React from 'react'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/60 via-white/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-block px-3 py-1 rounded-full bg-[#224F56]/10 text-[#224F56] text-sm font-medium mb-4">Fintech Sukuk Platform</span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
            We pick from the best emerging companies
          </h1>
          <p className="mt-4 text-slate-600 text-lg">
            Invest with confidence in Sharia-compliant opportunities. Our platform sources top companies and structures sukuk that balance growth and ethics.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#get-started" className="px-5 py-3 rounded-full bg-[#224F56] text-white hover:brightness-110 transition shadow-[0_8px_30px_rgba(34,79,86,0.35)]">Start investing</a>
            <a href="#borrow" className="px-5 py-3 rounded-full border border-slate-200 bg-white/70 text-slate-800 hover:bg-white transition">Request a loan</a>
          </div>
        </div>
        <div className="relative h-[420px] md:h-[540px] rounded-3xl overflow-hidden border border-white/20 shadow-[0_8px_30px_rgba(2,8,23,0.06)] bg-white/40 backdrop-blur-xl">
          <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  )
}

export default Hero
