'use client'
import { useEffect, useState } from 'react'

const words = ['Financeira', 'Estratégica', 'Empresarial', 'Inovadora']

export default function Hero({ onOpenModal }: { onOpenModal: () => void }) {
  const [wordIndex, setWordIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setWordIndex(i => (i + 1) % words.length)
        setVisible(true)
      }, 400)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ls-dark/90 via-ls-dark/75 to-ls-dark" />

      {/* Decorative lines */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-ls-beige/20 to-transparent hidden lg:block" style={{left: '8%'}} />
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-ls-beige/20 to-transparent hidden lg:block" style={{right: '8%'}} />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div
          className="inline-flex items-center gap-2 border border-ls-beige/20 px-4 py-2 text-xs uppercase tracking-[4px] text-ls-beige/60 mb-10 animate-fade-in"
          style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-ls-beige/60 animate-pulse-slow"></span>
          Mossoró · RN · Brasil
        </div>

        <h1
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight animate-slide-up"
          style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}
        >
          Hub de Inteligência
        </h1>

        <div
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-8 animate-slide-up"
          style={{ animationDelay: '0.6s', opacity: 0, animationFillMode: 'forwards' }}
        >
          <span
            className="text-ls-beige transition-all duration-400"
            style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(10px)', display: 'inline-block', transition: 'opacity 0.4s, transform 0.4s' }}
          >
            {words[wordIndex]}
          </span>
          <span className="text-white">.</span>
        </div>

        <p
          className="text-ls-beige/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed animate-slide-up"
          style={{ animationDelay: '0.8s', opacity: 0, animationFillMode: 'forwards' }}
        >
          Conectamos empresas às melhores soluções do mercado financeiro.
          25 anos de experiência, resultados reais.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up"
          style={{ animationDelay: '1s', opacity: 0, animationFillMode: 'forwards' }}
        >
          <button
            onClick={onOpenModal}
            className="bg-ls-beige text-ls-dark px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-white transition-all duration-300 group"
          >
            Falar com Especialista
            <span className="ml-2 group-hover:ml-3 transition-all duration-300">→</span>
          </button>
          <a
            href="#solucoes"
            className="border border-ls-beige/30 text-ls-beige px-8 py-4 font-semibold text-sm uppercase tracking-widest hover:border-ls-beige hover:bg-ls-beige/5 transition-all duration-300"
          >
            Ver Soluções
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: '1.5s', opacity: 0, animationFillMode: 'forwards' }}>
        <span className="text-ls-beige/30 text-xs uppercase tracking-widest">scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-ls-beige/30 to-transparent"></div>
      </div>
    </section>
  )
}
