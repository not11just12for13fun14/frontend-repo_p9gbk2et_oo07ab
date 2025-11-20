import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Transparency from './components/Transparency'
import LegalSharia from './components/LegalSharia'
import Partners from './components/Partners'
import AppSection from './components/AppSection'

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(34,79,86,0.08),transparent_60%),radial-gradient(800px_400px_at_80%_10%,rgba(34,79,86,0.06),transparent_60%)]">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Transparency />
      <LegalSharia />
      <Partners />
      <AppSection />

      <footer className="py-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} OC Capital. All rights reserved.
      </footer>
    </div>
  )
}

export default App
