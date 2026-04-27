'use client'
import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 25, suffix: '+', label: 'Anos de Mercado' },
  { value: 40, suffix: '+', label: 'Seguradoras Parceiras' },
  { value: 500, suffix: '+', label: 'Clientes Atendidos' },
  { value: 8, suffix, label: 'Linhas de Produto' },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const duration = 1800
        const steps = 60
        const increment = value / steps
        let current = 0
        const timer = setInterval(() => {
          current += increment
          if (current >= value) {
            setCount(value)
            clearInterval(timer)
          } else {
            setCount(Math.floor(current))
          }
        }, duration / steps)
      }
    }, { threshold: 0.3 })

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])

  return <span ref={ref} className="counter-value">{count}{suffix}</span>
}

export default function Stats() {
  return (
    <section className="bg-ls-deep border-y border-ls-beige/5 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center reveal group">
              <div className="font-display text-5xl md:text-6xl font-bold text-ls-beige mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-ls-beige/40 text-xs uppercase tracking-widest font-semibold">{stat.label}</div>
              <div className="w-8 h-px bg-ls-beige/20 mx-auto mt-4 group-hover:w-16 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
