'use client'
import { useState } from 'react'

const sols = [
  { n:'01', title:'Escritório Inteligente', sub:'IA + Automação', tag:'Novo', items:['Agentes de IA personalizados','Dashboard Power BI','Automação com n8n','Relatórios em tempo real'] },
  { n:'02', title:'Operações FIDC', sub:'Antecipação de Recebíveis', tag:'25 anos', items:['Sacado Âncora','Folha Garantida','Operações estruturadas','Confiança FIDC'] },
  { n:'03', title:'Hub de Benefícios', sub:'Cartões Corporativos', tag:null, items:['Cartão alimentação','Cartão combustível','Consignado privado','Ponto digital'] },
  { n:'04', title:'Seguros & Proteção', sub:'+40 Seguradoras', tag:'+40', items:['Auto, vida e residencial','Rural e agrícola','Frota e energia solar','Cyber Security'] },
  { n:'05', title:'Financiamentos', sub:'Veículos e Imóveis', tag:null, items:['Veículos e caminhões','Home Equity','Itaú, BV, PAN, Santander','Creditas'] },
  { n:'06', title:'Consórcios', sub:'Planejamento Patrimonial', tag:null, items:['Consórcio de imóveis','Consórcio de automóveis','Cartas contempladas','Planejamento patrimonial'] },
]

export default function Solutions() {
  const [active, setActive] = useState<number|null>(null)

  return (
    <section id="solucoes" style={{ position:'relative', zIndex:2, padding:'100px 0 60px' }}>
      <div style={{ maxWidth:1280, margin:'0 auto', padding:'0 40px' }}>
        <div className="reveal" style={{ marginBottom:56 }}>
          <div className="section-label">Portfólio de Soluções</div>
          <h2 style={{ fontFamily:'Syne,sans-serif', fontSize:'clamp(28px,4vw,48px)', fontWeight:800, color:'#fff', marginBottom:12 }}>O que fazemos</h2>
          <p style={{ color:'rgba(226,232,244,0.3)', fontSize:14 }}>Clique em cada solução para ver os detalhes.</p>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', border:'1px solid rgba(74,158,255,0.06)' }}>
          {sols.map((s, i) => (
            <div key={i} className="card-light reveal"
              style={{ background: active===i ? '#070b14' : '#04070f', borderRight:(i%3!==2)?'1px solid rgba(74,158,255,0.06)':'none', borderBottom:'1px solid rgba(74,158,255,0.06)', padding:'32px 28px', position:'relative', transition:'background 0.3s', transitionDelay:`${i*.08}s` }}
              onClick={() => setActive(active===i ? null : i)}
              onMouseMove={e => {
                const r = e.currentTarget.getBoundingClientRect()
                e.currentTarget.style.setProperty('--mx', (e.clientX-r.left)+'px')
                e.currentTarget.style.setProperty('--my', (e.clientY-r.top)+'px')
              }}
              onMouseEnter={e => e.currentTarget.style.background='#070b14'}
              onMouseLeave={e => e.currentTarget.style.background= active===i ? '#070b14' : '#04070f'}
            >
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:18 }}>
                <div>
                  <div style={{ fontFamily:'monospace', fontSize:10, color:'rgba(74,158,255,0.3)', marginBottom:10, letterSpacing:1 }}>{s.n}</div>
                  {s.tag && <span style={{ fontSize:9, letterSpacing:2, textTransform:'uppercase', color:'#4a9eff', border:'1px solid rgba(74,158,255,0.2)', padding:'2px 8px', display:'inline-block', marginBottom:10 }}>{s.tag}</span>}
                  <div style={{ fontFamily:'Syne,sans-serif', fontSize:15, fontWeight:700, color:'#e2e8f4', marginBottom:4 }}>{s.title}</div>
                  <div style={{ fontSize:12, color:'rgba(226,232,244,0.35)' }}>{s.sub}</div>
                </div>
                <div style={{ fontSize:20, color: active===i ? '#4a9eff' : 'rgba(74,158,255,0.2)', transition:'all 0.3s', transform: active===i ? 'rotate(45deg)' : 'none', flexShrink:0, marginTop:4 }}>+</div>
              </div>

              <div style={{ maxHeight: active===i ? 300 : 0, overflow:'hidden', transition:'max-height 0.5s ease' }}>
                <div style={{ borderTop:'1px solid rgba(74,158,255,0.08)', paddingTop:16 }}>
                  {s.items.map((item, j) => (
                    <div key={j} style={{ display:'flex', alignItems:'center', gap:10, marginBottom:10, fontSize:12, color:'rgba(226,232,244,0.45)' }}>
                      <span style={{ color:'rgba(74,158,255,0.4)', fontSize:10 }}>→</span>{item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:900px){.sols-grid{grid-template-columns:repeat(2,1fr)!important}}@media(max-width:600px){.sols-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  )
}
