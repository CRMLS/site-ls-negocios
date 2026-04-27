'use client'
import { useState, useRef } from 'react'

const solutions = [
  { num: '01', title: 'Escritório Inteligente', sub: 'IA + Automação', items: ['Agentes de IA personalizados', 'Dashboard Power BI integrado', 'Automação com n8n', 'Relatórios em tempo real'], tag: 'Novo' },
  { num: '02', title: 'Operações FIDC', sub: 'Antecipação de Recebíveis', items: ['Sacado Âncora', 'Folha Garantida', 'Operações estruturadas', 'Parceria Confiança FIDC'], tag: '25 anos' },
  { num: '03', title: 'Hub de Benefícios', sub: 'Cartões Corporativos', items: ['Cartão alimentação e refeição', 'Cartão combustível', 'Consignado privado', 'Ponto digital Somapay'], tag: null },
  { num: '04', title: 'Seguros & Proteção', sub: '+40 Seguradoras Parceiras', items: ['Auto, vida e residencial', 'Rural e agrícola', 'Frota e energia solar', 'Cyber Security'], tag: '+40' },
  { num: '05', title: 'Financiamentos', sub: 'Veículos e Imóveis', items: ['Veículos leves e caminhões', 'Home Equity', 'Itaú, BV, PAN, Santander', 'Creditas e mais'], tag: null },
  { num: '06', title: 'Consórcios', sub: 'Planejamento Patrimonial', items: ['Consórcio de imóveis', 'Consórcio de automóveis', 'Cartas contempladas', 'Planejamento patrimonial'], tag: null },
]

function SolutionCard({ sol, index }: { sol: typeof solutions[0]; index: number }) {
  const [open, setOpen] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    cardRef.current?.style.setProperty('--mouse-x', x + 'px')
    cardRef.current?.style.setProperty('--mouse-y', y + 'px')
  }

  return (
    <div
      ref={cardRef}
      className="card-hover reveal"
      onClick={() => setOpen(!open)}
      onMouseMove={handleMouseMove}
      style={{
        background: '#04070f',
        borderRight: (index % 3 !== 2) ? '1px solid rgba(74,158,255,0.06)' : 'none',
        borderBottom: '1px solid rgba(74,158,255,0.06)',
        padding: '32px 28px',
        cursor: 'none',
        transition: 'background 0.3s',
        transitionDelay: `${index * 0.08}s`,
      }}
      onMouseEnter={e => e.currentTarget.style.background = '#070b14'}
      onMouseLeave={e => e.currentTarget.style.background = '#04070f'}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
        <div>
          <div style={{ fontFamily: 'monospace', fontSize: 10, color: 'rgba(74,158,255,0.3)', marginBottom: 10, letterSpacing: '1px' }}>{sol.num}</div>
          {sol.tag && (
            <span style={{ fontSize: 9, letterSpacing: '2px', textTransform: 'uppercase', color: '#4a9eff', border: '1px solid rgba(74,158,255,0.2)', padding: '2px 8px', marginBottom: 10, display: 'inline-block' }}>
              {sol.tag}
            </span>
          )}
          <div style={{ fontFamily: 'Syne, sans-serif', fontSize: 15, fontWeight: 700, color: '#e2e8f4', marginBottom: 4 }}>{sol.title}</div>
          <div style={{ fontSize: 12, color: 'rgba(226,232,244,0.35)' }}>{sol.sub}</div>
        </div>
        <div style={{ fontSize: 20, color: open ? '#4a9eff' : 'rgba(74,158,255,0.2)', transition: 'all 0.3s', transform: open ? 'rotate(45deg)' : 'rotate(0deg)', marginTop: 4, flexShrink: 0 }}>+</div>
      </div>

      <div style={{ maxHeight: open ? '300px' : 0, overflow: 'hidden', transition: 'max-height 0.5s cubic-bezier(0.25,0.46,0.45,0.94)' }}>
        <div style={{ borderTop: '1px solid rgba(74,158,255,0.08)', paddingTop: 16 }}>
          <ul style={{ listStyle: 'none' }}>
            {sol.items.map((item, j) => (
              <li key={j} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10, fontSize: 12, color: 'rgba(226,232,244,0.5)' }}>
                <span style={{ color: 'rgba(74,158,255,0.4)', fontSize: 10 }}>→</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: 24, right: 24, fontSize: 16, color: 'rgba(74,158,255,0.15)', transition: 'all 0.3s' }}
        onMouseEnter={e => e.currentTarget.style.color = 'rgba(74,158,255,0.5)'}
        onMouseLeave={e => e.currentTarget.style.color = 'rgba(74,158,255,0.15)'}>
        ↗
      </div>
    </div>
  )
}

export default function Solutions() {
  return (
    <section id="solucoes" style={{ position: 'relative', zIndex: 2, paddingTop: 100, paddingBottom: 40 }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="reveal" style={{ marginBottom: 56 }}>
          <div className="section-tag">Portfólio de Soluções</div>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(28px,4vw,44px)', fontWeight: 800, color: '#fff', marginBottom: 12 }}>
            O que fazemos
          </h2>
          <p style={{ color: 'rgba(226,232,244,0.35)', fontSize: 14, maxWidth: 440 }}>
            Clique em cada solução para ver os detalhes.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            border: '1px solid rgba(74,158,255,0.06)',
            position: 'relative',
          }}
        >
          {solutions.map((sol, i) => (
            <SolutionCard key={i} sol={sol} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
