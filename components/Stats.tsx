'use client'
import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 25, suffix: '+', label: 'Anos de Mercado', desc: 'FIDC e soluções financeiras' },
  { value: 40, suffix: '+', label: 'Seguradoras', desc: 'Parceiras ativas' },
  { value: 500, suffix: '+', label: 'Clientes', desc: 'Empresas atendidas' },
  { value: 8, suffix: '+', label: 'Soluções', desc: 'Linhas de produto' },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [n, setN] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const done = useRef(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done.current) {
        done.current = true
        let step = 0
        const timer = setInterval(() => {
          step++
          const progress = 1 - Math.pow(1 - step/60, 3)
          setN(Math.floor(progress * value))
          if (step >= 60) { setN(value); clearInterval(timer) }
        }, 2000/60)
      }
    }, { threshold: 0.3 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [value])

  return (
    <div ref={ref} style={{ fontFamily:'Syne,sans-serif', fontSize:'clamp(32px,4vw,52px)', fontWeight:800, color:'#4a9eff', fontVariantNumeric:'tabular-nums' }}>
      {n}{suffix}
    </div>
  )
}

export default function Stats() {
  return (
    <section style={{ position:'relative', zIndex:2, background:'rgba(7,11,20,0.7)', borderTop:'1px solid rgba(74,158,255,0.06)', borderBottom:'1px solid rgba(74,158,255,0.06)' }}>
      <div style={{ maxWidth:1280, margin:'0 auto', display:'grid', gridTemplateColumns:'repeat(4,1fr)' }}>
        {stats.map((s, i) => (
          <div key={i} className="reveal" style={{ padding:'40px 32px', borderRight: i<3 ? '1px solid rgba(74,158,255,0.06)' : 'none', transitionDelay:`${i*.1}s` }}>
            <Counter value={s.value} suffix={s.suffix} />
            <div style={{ fontSize:13, fontWeight:600, color:'#e2e8f4', marginTop:8 }}>{s.label}</div>
            <div style={{ fontSize:11, color:'rgba(226,232,244,0.25)', marginTop:4 }}>{s.desc}</div>
          </div>
        ))}
      </div>
      <style>{`@media(max-width:640px){.stats-grid{grid-template-columns:repeat(2,1fr)!important}}`}</style>
    </section>
  )
}
