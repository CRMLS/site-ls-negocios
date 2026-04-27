'use client'
import { useState, useEffect } from 'react'

export default function Navbar({ onOpenModal }: { onOpenModal: () => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-ls-deep/98 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <img
            src="/logo.png"
            alt="LS Negócios"
            className="h-14 w-auto"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
          />
          <div className="leading-none">
            <div className="font-display font-bold text-2xl text-white tracking-tight">LS NEGÓCIOS</div>
            <div className="text-[10px] uppercase tracking-[3px] text-ls-beige/70 mt-0.5">Soluções Financeiras</div>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#solucoes" className="nav-link text-ls-beige/80 hover:text-ls-beige text-sm font-semibold uppercase tracking-wider transition-colors">
            Soluções
          </a>
          <a href="#equipe" className="nav-link text-ls-beige/80 hover:text-ls-beige text-sm font-semibold uppercase tracking-wider transition-colors">
            Equipe
          </a>
          <a href="#contato" className="nav-link text-ls-beige/80 hover:text-ls-beige text-sm font-semibold uppercase tracking-wider transition-colors">
            Contato
          </a>
          <button
            onClick={onOpenModal}
            className="border border-ls-beige text-ls-beige px-5 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-ls-beige hover:text-ls-dark transition-all duration-300"
          >
            Falar com Especialista
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-ls-beige p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <div className={`w-6 h-px bg-ls-beige transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></div>
          <div className={`w-6 h-px bg-ls-beige my-1.5 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-px bg-ls-beige transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-ls-deep border-t border-ls-beige/10 transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-80' : 'max-h-0'}`}>
        <div className="px-6 py-4 flex flex-col gap-4">
          <a href="#solucoes" className="text-ls-beige/80 text-sm font-semibold uppercase tracking-wider" onClick={() => setMenuOpen(false)}>Soluções</a>
          <a href="#equipe" className="text-ls-beige/80 text-sm font-semibold uppercase tracking-wider" onClick={() => setMenuOpen(false)}>Equipe</a>
          <a href="#contato" className="text-ls-beige/80 text-sm font-semibold uppercase tracking-wider" onClick={() => setMenuOpen(false)}>Contato</a>
          <button onClick={() => { onOpenModal(); setMenuOpen(false) }} className="border border-ls-beige text-ls-beige py-3 text-xs font-bold uppercase tracking-widest mt-2">
            Falar com Especialista
          </button>
        </div>
      </div>
    </nav>
  )
}
