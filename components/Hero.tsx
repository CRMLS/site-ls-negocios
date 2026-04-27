'use client'
import { useEffect, useState } from 'react'

const words = ['Financeira', 'Estratégica', 'Empresarial', 'Inovadora']

export default function Hero({ onOpenModal }: { onOpenModal: () => void }) {
  const [displayed, setDisplayed] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    const word = words[wordIdx]
    const speed = deleting ? 45 : 85

    const timer = setTimeout(() => {
      if (!deleting) {
        const next = word.slice(0, displayed.length + 1)
        setDisplayed(next)
        if (next === word) setTimeout(() => setDeleting(true), 1800)
      } else {
        const next = word.slice(0, displayed.length - 1)
        setDisplayed(next)
        if (next === '') {
          setDeleting(false)
          setWordIdx(i => (i + 1) % words.length)
        }
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [displayed, deleting, wordIdx])

  return (
    <section className="relative min-h-screen flex items-center grid-bg" style={{ zIndex: 2 }}>

      {/* Glow orb */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(74,158,255,0.04) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-32 pb-20 w-full">
        <div className="max-w-4xl">

          {/* Badge */}
          <div
            className={`inline-flex items-center gap-3 mb-10 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ border: '1px solid rgba(74,158,255,0.18)', padding: '7px 16px', fontSize: 10, letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(74,158,255,0.7)', transitionDelay: '0.1s' }}
          >
            <span className="pulse-dot" />
            Hub Financeiro · Mossoró · RN · Brasil
          </div>

          {/* Headline */}
          <h1
            className={`mb-8 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(40px, 7vw, 80px)', lineHeight: 1.02, transitionDelay: '0.2s' }}
          >
            <span style={{ color: '#fff', display: 'block' }}>Inteligência</span>
            <span style={{ color: '#4a9eff', display: 'block', minHeight: '1.05em' }}>
              {displayed}<span className="tw-cursor">|</span>
            </span>
            <span style={{ color: 'rgba(226,232,244,0.18)', display: 'block' }}>Estratégica.</span>
          </h1>

          {/* Sub */}
          <p
            className={`mb-12 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ color: 'rgba(226,232,244,0.38)', fontSize: 16, maxWidth: 480, lineHeight: 1.75, transitionDelay: '0.35s' }}
          >
            Conectamos empresas às melhores soluções do mercado financeiro.
            25 anos de expertise, resultados mensuráveis.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-wrap gap-4 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '0.5s' }}
          >
            <button
              onClick={onOpenModal}
              className="nav-link group"
              style={{ background: '#4a9eff', color: '#04070f', padding: '14px 32px', fontSize: 11, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', border: 'none', transition: 'all 0.3s' }}
              onMouseEnter={e => e.currentTarget.style.background = '#6ab4ff'}
              onMouseLeave={e => e.currentTarget.style.background = '#4a9eff'}
            >
              Iniciar Consulta →
            </button>
            <a
              href="#solucoes"
              className="nav-link"
              style={{ border: '1px solid rgba(226,232,244,0.12)', color: 'rgba(226,232,244,0.4)', padding: '14px 32px', fontSize: 11, letterSpacing: '2px', textTransform: 'uppercase', transition: 'all 0.3s', textDecoration: 'none', display: 'inline-block' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(226,232,244,0.3)'; e.currentTarget.style.color = 'rgba(226,232,244,0.8)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(226,232,244,0.12)'; e.currentTarget.style.color = 'rgba(226,232,244,0.4)' }}
            >
              Ver Soluções
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-10 left-10 flex flex-col items-center gap-2 transition-all duration-700 ${mounted ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '1s' }}
        >
          <div style={{ fontSize: 9, letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(74,158,255,0.35)', writingMode: 'vertical-rl' }}>scroll</div>
          <div style={{ width: 1, height: 48, background: 'linear-gradient(to bottom, rgba(74,158,255,0.4), transparent)' }} />
        </div>
      </div>

      <div className="glow-line absolute bottom-0 left-0 right-0" />
    </section>
  )
}
