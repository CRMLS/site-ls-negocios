'use client'
import { useEffect, useState } from 'react'

const words = ['Financeira', 'Estratégica', 'Empresarial', 'Inovadora']

export default function Hero({ onModal }: { onModal: () => void }) {
  const [txt, setTxt] = useState('')
  const [wi, setWi] = useState(0)
  const [del, setDel] = useState(false)
  const [show, setShow] = useState(false)

  useEffect(() => { setTimeout(() => setShow(true), 100) }, [])

  useEffect(() => {
    const word = words[wi]
    const speed = del ? 45 : 85
    const timer = setTimeout(() => {
      if (!del) {
        const n = word.slice(0, txt.length + 1)
        setTxt(n)
        if (n === word) setTimeout(() => setDel(true), 1800)
      } else {
        const n = word.slice(0, txt.length - 1)
        setTxt(n)
        if (n === '') { setDel(false); setWi(i => (i+1) % words.length) }
      }
    }, speed)
    return () => clearTimeout(timer)
  }, [txt, del, wi])

  const fade = (delay: number): React.CSSProperties => ({
    opacity: show ? 1 : 0,
    transform: show ? 'translateY(0)' : 'translateY(24px)',
    transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
  })

  return (
    <section style={{ position:'relative', minHeight:'100vh', display:'flex', alignItems:'center', zIndex:2, background:'linear-gradient(rgba(74,158,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(74,158,255,0.02) 1px,transparent 1px)', backgroundSize:'60px 60px' }}>
      <div style={{ maxWidth:1280, margin:'0 auto', padding:'140px 40px 80px', width:'100%' }}>

        {/* Badge */}
        <div style={{ ...fade(0.1), display:'inline-flex', alignItems:'center', gap:10, border:'1px solid rgba(74,158,255,0.18)', padding:'7px 16px', fontSize:10, letterSpacing:3, textTransform:'uppercase', color:'rgba(74,158,255,0.7)', marginBottom:36 }}>
          <span className="pulse-dot" />
          Hub Financeiro · Mossoró · RN · Brasil
        </div>

        {/* Headline */}
        <h1 style={{ ...fade(0.25), fontFamily:'Syne,sans-serif', fontWeight:800, fontSize:'clamp(44px,7vw,88px)', lineHeight:1.02, marginBottom:28 }}>
          <span style={{ display:'block', color:'#fff' }}>Inteligência</span>
          <span style={{ display:'block', color:'#4a9eff', minHeight:'1.05em' }}>
            {txt}<span className="tw-cursor">|</span>
          </span>
          <span style={{ display:'block', color:'rgba(226,232,244,0.15)' }}>Estratégica.</span>
        </h1>

        {/* Sub */}
        <p style={{ ...fade(0.4), color:'rgba(226,232,244,0.38)', fontSize:16, maxWidth:460, lineHeight:1.8, marginBottom:44 }}>
          Conectamos empresas às melhores soluções do mercado financeiro. 25 anos de expertise, resultados mensuráveis.
        </p>

        {/* CTAs */}
        <div style={{ ...fade(0.55), display:'flex', gap:14, flexWrap:'wrap' }}>
          <button onClick={onModal}
            style={{ background:'#4a9eff', color:'#04070f', padding:'14px 32px', fontSize:11, fontWeight:700, letterSpacing:2, textTransform:'uppercase', border:'none', transition:'background 0.3s' }}
            onMouseEnter={e=>e.currentTarget.style.background='#6ab4ff'}
            onMouseLeave={e=>e.currentTarget.style.background='#4a9eff'}
          >Iniciar Consulta →</button>
          <a href="#solucoes"
            style={{ border:'1px solid rgba(226,232,244,0.12)', color:'rgba(226,232,244,0.4)', padding:'14px 32px', fontSize:11, letterSpacing:2, textTransform:'uppercase', textDecoration:'none', transition:'all 0.3s', display:'inline-block' }}
            onMouseEnter={e=>{e.currentTarget.style.borderColor='rgba(226,232,244,0.35)';e.currentTarget.style.color='rgba(226,232,244,0.8)'}}
            onMouseLeave={e=>{e.currentTarget.style.borderColor='rgba(226,232,244,0.12)';e.currentTarget.style.color='rgba(226,232,244,0.4)'}}
          >Ver Soluções</a>
        </div>

        {/* Scroll */}
        <div style={{ ...fade(1.2), position:'absolute', bottom:40, left:40, display:'flex', flexDirection:'column', alignItems:'center', gap:8 }}>
          <span style={{ fontSize:9, letterSpacing:3, textTransform:'uppercase', color:'rgba(74,158,255,0.3)', writingMode:'vertical-rl' }}>scroll</span>
          <div style={{ width:1, height:48, background:'linear-gradient(to bottom,rgba(74,158,255,0.4),transparent)' }} />
        </div>
      </div>
      <div style={{ position:'absolute', bottom:0, left:0, right:0, height:1, background:'linear-gradient(90deg,transparent,#4a9eff,transparent)', opacity:.2 }} />
    </section>
  )
}
