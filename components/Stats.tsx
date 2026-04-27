'use client'
import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 25, suffix: '+', label: 'Anos de Mercado', desc: 'FIDC e soluções financeiras' },
  { value: 40, suffix: '+', label: 'Seguradoras', desc: 'Parceiras ativas' },
  { value: 500, suffix: '+', label: 'Clientes', desc: 'Empresas atendidas' },
  { value: 8, suffix, label: 'Soluções', desc: 'Linhas de produto' },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const duration = 2000
        const steps = 60
        let step = 0
        const timer = setInterval(() => {
          step++
          const progress = step / steps
          const eased = 1 - Math.pow(1 - progress, 3)
          setCount(Math.floor(eased * value))
          if (step >= steps) { setCount(value); clearInterval(timer) }
        }, duration / steps)
      }
    }, { threshold: 0.3 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [value])

  return (
    <div ref={ref} className="counter" style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(32px,4vw,48px)', fontWeight: 800, color: '#4a9eff' }}>
      {count}{suffix}
    </div>
  )
}

export default function Stats() {
  return (
    <section style={{ background: 'rgba(7,11,20,0.8)', borderBottom: '1px solid rgba(74,158,255,0.08)', position: 'relative', zIndex: 2 }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={i}
              className="reveal"
              style={{
                padding: '40px 32px',
                borderRight: i < 3 ? '1px solid rgba(74,158,255,0.08)' : 'none',
                transitionDelay: `${i * 0.1}s`,
              }}
            >
              <Counter value={s.value} suffix={s.suffix} />
              <div style={{ fontSize: 12, fontWeight: 600, color: '#e2e8f4', marginTop: 8, letterSpacing: '0.5px' }}>{s.label}</div>
              <div style={{ fontSize: 11, color: 'rgba(226,232,244,0.25)', marginTop: 4 }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
