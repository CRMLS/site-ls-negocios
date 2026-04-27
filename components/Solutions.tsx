'use client'
import { useState } from 'react'

const solutions = [
  {
    title: 'Escritório Inteligente',
    icon: '◈',
    short: 'IA + Automação para sua empresa',
    items: ['Agentes de IA personalizados', 'Dashboard Power BI integrado', 'Automação de processos com n8n', 'Relatórios em tempo real'],
    tag: 'Novo',
  },
  {
    title: 'Operações FIDC',
    icon: '◉',
    short: 'Antecipação de recebíveis',
    items: ['Sacado Âncora', 'Folha Garantida', 'Operações estruturadas', 'Parceria com Confiança FIDC'],
    tag: '25 anos',
  },
  {
    title: 'Hub de Benefícios',
    icon: '◎',
    short: 'Cartões e benefícios corporativos',
    items: ['Cartão alimentação e refeição', 'Cartão combustível', 'Consignado privado', 'Ponto digital Somapay'],
    tag: null,
  },
  {
    title: 'Seguros & Proteção',
    icon: '◫',
    short: '+40 seguradoras parceiras',
    items: ['Auto, vida e residencial', 'Rural e agrícola', 'Frota e energia solar', 'Cyber Security'],
    tag: '+40 parceiras',
  },
  {
    title: 'Financiamentos',
    icon: '◬',
    short: 'Veículos, imóveis e mais',
    items: ['Veículos leves e caminhões', 'Home Equity', 'Parceiros: Itaú, BV, PAN, Santander', 'Creditas e mais'],
    tag: null,
  },
  {
    title: 'Consórcios',
    icon: '◭',
    short: 'Imóveis e automóveis',
    items: ['Consórcio de imóveis', 'Consórcio de automóveis', 'Cartas contempladas', 'Planejamento patrimonial'],
    tag: null,
  },
]

export default function Solutions() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section id="solucoes" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="mb-16 reveal">
          <div className="text-xs uppercase tracking-[4px] text-ls-beige/40 mb-4">O que fazemos</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Nosso Portfólio
          </h2>
          <div className="section-divider"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {solutions.map((sol, i) => (
            <div
              key={i}
              className="solution-card bg-ls-deep border border-ls-beige/10 cursor-pointer reveal"
              style={{ animationDelay: `${i * 0.1}s` }}
              onClick={() => setActive(active === i ? null : i)}
            >
              {/* Card Header */}
              <div className="p-6 flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-ls-beige text-xl">{sol.icon}</span>
                    {sol.tag && (
                      <span className="text-[10px] uppercase tracking-wider border border-ls-beige/20 text-ls-beige/50 px-2 py-0.5">
                        {sol.tag}
                      </span>
                    )}
                  </div>
                  <h3 className="text-white font-bold text-lg uppercase tracking-wide mb-1">{sol.title}</h3>
                  <p className="text-ls-beige/40 text-sm">{sol.short}</p>
                </div>
                <span className={`text-ls-beige/30 transition-transform duration-300 text-lg mt-1 ${active === i ? 'rotate-45' : ''}`}>+</span>
              </div>

              {/* Expandable Content */}
              <div
                className="overflow-hidden transition-all duration-500 ease-in-out"
                style={{ maxHeight: active === i ? '300px' : '0' }}
              >
                <div className="px-6 pb-6 border-t border-ls-beige/5">
                  <ul className="mt-4 space-y-2.5">
                    {sol.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm text-ls-beige/60">
                        <span className="text-ls-beige/40 text-xs">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
