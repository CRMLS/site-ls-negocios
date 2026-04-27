'use client'
import { useState, useEffect } from 'react'

export default function Navbar({ onModal }: { onModal: () => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const navStyle: React.CSSProperties = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
    background: scrolled ? 'rgba(4,7,15,0.96)' : 'transparent',
    backdropFilter: scrolled ? 'blur(20px)' : 'none',
    borderBottom: scrolled ? '1px solid rgba(74,158,255,0.08)' : '1px solid transparent',
    transition: 'all 0.4s',
  }

  return (
    <nav style={navStyle}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '18px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo */}
        <a href="#" style={{ display:'flex', alignItems:'center', gap:12, textDecoration:'none' }}>
          <div style={{ width:36, height:36, border:'1px solid rgba(74,158,255,0.35)', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'Syne,sans-serif', fontWeight:800, fontSize:13, color:'#4a9eff' }}>
            LS
          </div>
          <div>
            <div style={{ fontFamily:'Syne,sans-serif', fontWeight:700, fontSize:15, color:'#fff', letterSpacing:1 }}>LS NEGÓCIOS</div>
            <div style={{ fontSize:9, letterSpacing:3, color:'rgba(74,158,255,0.5)', textTransform:'uppercase' }}>Soluções Financeiras</div>
          </div>
        </a>

        {/* Desktop links */}
        <div style={{ display:'flex', alignItems:'center', gap:32 }} className="desktop-nav">
          {['Soluções:#solucoes','Equipe:#equipe','Contato:#contato'].map(item => {
            const [label, href] = item.split(':')
            return (
              <a key={label} href={href} style={{ fontSize:11, letterSpacing:2, textTransform:'uppercase', color:'rgba(226,232,244,0.45)', textDecoration:'none', transition:'color 0.3s' }}
                onMouseEnter={e=>e.currentTarget.style.color='#e2e8f4'}
                onMouseLeave={e=>e.currentTarget.style.color='rgba(226,232,244,0.45)'}
              >{label}</a>
            )
          })}
          <button onClick={onModal} style={{ background:'transparent', border:'1px solid rgba(74,158,255,0.35)', color:'#4a9eff', padding:'9px 20px', fontSize:10, letterSpacing:2, textTransform:'uppercase', fontWeight:600, transition:'all 0.3s' }}
            onMouseEnter={e=>{e.currentTarget.style.background='rgba(74,158,255,0.1)';e.currentTarget.style.borderColor='rgba(74,158,255,0.7)'}}
            onMouseLeave={e=>{e.currentTarget.style.background='transparent';e.currentTarget.style.borderColor='rgba(74,158,255,0.35)'}}
          >Falar com Especialista</button>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} style={{ display:'none', flexDirection:'column', gap:5, padding:8, background:'transparent', border:'none' }} className="mobile-toggle">
          {[0,1,2].map(i => <span key={i} style={{ display:'block', width:22, height:1, background:'#4a9eff', transition:'all 0.3s', transform: open && i===0 ? 'rotate(45deg) translate(4px,4px)' : open && i===2 ? 'rotate(-45deg) translate(4px,-4px)' : 'none', opacity: open && i===1 ? 0 : 1 }} />)}
        </button>
      </div>

      {/* Mobile menu */}
      <div style={{ maxHeight: open ? 300 : 0, overflow:'hidden', transition:'max-height 0.4s', background:'rgba(4,7,15,0.98)', borderTop: open ? '1px solid rgba(74,158,255,0.08)' : 'none' }}>
        <div style={{ padding:'24px 40px', display:'flex', flexDirection:'column', gap:20 }}>
          {['Soluções:#solucoes','Equipe:#equipe','Contato:#contato'].map(item => {
            const [label, href] = item.split(':')
            return <a key={label} href={href} onClick={()=>setOpen(false)} style={{ fontSize:11, letterSpacing:2, textTransform:'uppercase', color:'rgba(226,232,244,0.5)', textDecoration:'none' }}>{label}</a>
          })}
          <button onClick={()=>{onModal();setOpen(false)}} style={{ background:'transparent', border:'1px solid rgba(74,158,255,0.3)', color:'#4a9eff', padding:12, fontSize:10, letterSpacing:2, textTransform:'uppercase', marginTop:8 }}>
            Falar com Especialista
          </button>
        </div>
      </div>

      <style>{`
        @media(max-width:768px){
          .desktop-nav{display:none!important}
          .mobile-toggle{display:flex!important}
        }
      `}</style>
    </nav>
  )
}
