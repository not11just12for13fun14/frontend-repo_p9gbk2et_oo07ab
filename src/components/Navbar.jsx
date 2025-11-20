import React from 'react'
import { Link } from 'react-router-dom'
import { Globe, Menu } from 'lucide-react'

const Navbar = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-white/60 border-b border-white/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-[#224F56] text-white grid place-items-center font-bold shadow-[0_8px_30px_rgba(34,79,86,0.3)]">
              OC
            </div>
            <span className="text-lg font-semibold text-[#224F56]">OC Capital</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <Link to="#" className="text-slate-700 hover:text-[#224F56] transition">About us</Link>
            <Link to="#" className="text-slate-700 hover:text-[#224F56] transition">Invest</Link>
            <Link to="#" className="text-slate-700 hover:text-[#224F56] transition">Borrow</Link>
            <button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 bg-white/70 text-slate-700 hover:bg-white transition">
              <Globe className="h-4 w-4" /> EN
            </button>
            <Link to="#" className="px-4 py-2 rounded-full bg-[#224F56] text-white hover:brightness-110 transition shadow-[0_8px_30px_rgba(34,79,86,0.35)]">Start investing</Link>
          </nav>

          <button className="md:hidden p-2 rounded-lg border border-slate-200 bg-white/70" onClick={() => setOpen(v => !v)}>
            <Menu className="h-5 w-5 text-slate-700" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/30 bg-white/70 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3">
            <Link to="#" className="text-slate-700">About us</Link>
            <Link to="#" className="text-slate-700">Invest</Link>
            <Link to="#" className="text-slate-700">Borrow</Link>
            <div className="flex items-center gap-3 pt-2">
              <button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 bg-white/70 text-slate-700">
                <Globe className="h-4 w-4" /> EN
              </button>
              <Link to="#" className="px-4 py-2 rounded-full bg-[#224F56] text-white">Start investing</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
