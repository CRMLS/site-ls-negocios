'use client'
import { useState, useEffect } from 'react'

export default function Navbar({ onOpenModal }: { onOpenModal: () => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(4,7,15,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(74,158,255,0.08)' : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group nav-link">
          <div
            className="w-9 h-9 flex items-center justify-center transition-all duration-300 group-hover:bg-blue-500/10"
            style={{ border: '1px solid rgba(74,158,255,0.3)', fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 13, color: '#4a9eff' }}
          >
            LS
          </div>
          <div>
            <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 15, color: '#fff', letterSpacing: '1px' }}>LS NEGÓCIOS</div>
            <div style={{ fontSize: 9, letterSpacing: '3px', color: 'rgba(74,158,255,0.5)', textTransform: 'uppercase' }}>Soluções Financeiras</div>
          </div>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {['Soluções', 'Equipe', 'Contato'].map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="nav-link"
              style={{ fontSize: 11, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(226,232,244,0.45)', transition: 'color 0.3s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#e2e8f4')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(226,232,244,0.45)')}
            >
              {item}
            </a>
          ))}
          <button
            onClick={onOpenModal}
            className="nav-link"
            style={{
              background: 'transparent',
              border: '1px solid rgba(74,158,255,0.35)',
              color: '#4a9eff',
              padding: '9px 20px',
              fontSize: 10,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              fontWeight: 600,
              transition: 'all 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(74,158,255,0.1)'; e.currentTarget.style.borderColor = 'rgba(74,158,255,0.7)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(74,158,255,0.35)' }}
          >
            Falar com Especialista
          </button>
        </div>

        {/* Mobile button */}
        <button className="md:hidden flex flex-col gap-1.5 p-2 nav-link" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="block w-5 h-px transition-all duration-300" style={{ background: '#4a9eff', transform: menuOpen ? 'rotate(45deg) translate(4px,4px)' : '' }} />
          <span className="block w-5 h-px transition-all duration-300" style={{ background: '#4a9eff', opacity: menuOpen ? 0 : 1 }} />
          <span className="block w-5 h-px transition-all duration-300" style={{ background: '#4a9eff', transform: menuOpen ? 'rotate(-45deg) translate(4px,-4px)' : '' }} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-400"
        style={{ maxHeight: menuOpen ? '300px' : '0', borderTop: menuOpen ? '1px solid rgba(74,158,255,0.08)' : 'none' }}
      >
        <div className="px-6 py-6 flex flex-col gap-5" style={{ background: 'rgba(4,7,15,0.98)' }}>
          {['Soluções', 'Equipe', 'Contato'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}
              style={{ fontSize: 11, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(226,232,244,0.5)' }}>
              {item}
            </a>
          ))}
          <button onClick={() => { onOpenModal(); setMenuOpen(false) }}
            style={{ border: '1px solid rgba(74,158,255,0.3)', color: '#4a9eff', padding: '12px', fontSize: 10, letterSpacing: '2px', textTransform: 'uppercase', background: 'transparent', marginTop: 8 }}>
            Falar com Especialista
          </button>
        </div>
      </div>
    </nav>
  )
}
