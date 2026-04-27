'use client'
import { useEffect } from 'react'

const specialists = [
  { initials: 'SC', name: 'Sérgio Costa', role: 'Sócio Fundador', phone: '5584996570880' },
  { initials: 'LP', name: 'Leonardo Pereira', role: 'Sócio Fundador', phone: '5584994095409' },
  { initials: 'PM', name: 'Paulo Mesquita', role: 'Consultor', phone: '5584987458834' },
]

export function Modal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', fn)
    return () => window.removeEventListener('keydown', fn)
  }, [onClose])

  if (!open) return null

  return (
    <div
      style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24, background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(12px)' }}
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
    >
      <div style={{ background: '#070b14', border: '1px solid rgba(74,158,255,0.2)', padding: '40px 36px', maxWidth: 420, width: '100%', position: 'relative' }}>
        <button onClick={onClose} style={{ position: 'absolute', top: 16, right: 16, background: 'none', border: 'none', color: 'rgba(226,232,244,0.3)', fontSize: 18, cursor: 'none', transition: 'color 0.3s' }}
          onMouseEnter={e => e.currentTarget.style.color = '#e2e8f4'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(226,232,244,0.3)'}
        >✕</button>

        <div style={{ fontSize: 10, letterSpacing: '3px', textTransform: 'uppercase', color: '#4a9eff', marginBottom: 8 }}>Fale conosco</div>
        <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: 22, fontWeight: 700, color: '#fff', marginBottom: 6 }}>Escolha um Especialista</h3>
        <p style={{ fontSize: 13, color: 'rgba(226,232,244,0.35)', marginBottom: 28 }}>Clique para abrir o WhatsApp diretamente.</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {specialists.map((s, i) => (
            <a key={i}
              href={`https://wa.me/${s.phone}?text=Olá, ${s.name}. Vim pelo site da LS Negócios.`}
              target="_blank" rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: 14, border: '1px solid rgba(74,158,255,0.1)', padding: '16px 18px', textDecoration: 'none', transition: 'all 0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(74,158,255,0.4)'; e.currentTarget.style.background = 'rgba(74,158,255,0.04)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(74,158,255,0.1)'; e.currentTarget.style.background = 'transparent' }}
            >
              <div style={{ width: 38, height: 38, border: '1px solid rgba(74,158,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 12, color: '#4a9eff', flexShrink: 0 }}>{s.initials}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: 14, color: '#e2e8f4' }}>{s.name}</div>
                <div style={{ fontSize: 11, color: 'rgba(226,232,244,0.35)' }}>{s.role}</div>
              </div>
              <svg viewBox="0 0 24 24" fill="#25d366" style={{ width: 18, height: 18, flexShrink: 0 }}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export function WhatsAppFloat({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} aria-label="WhatsApp"
      style={{ position: 'fixed', bottom: 32, right: 32, zIndex: 40, width: 52, height: 52, borderRadius: '50%', background: '#25d366', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'none', transition: 'transform 0.3s, box-shadow 0.3s', boxShadow: '0 4px 20px rgba(37,211,102,0.25)' }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.1)'; e.currentTarget.style.boxShadow = '0 6px 28px rgba(37,211,102,0.4)' }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,211,102,0.25)' }}
    >
      <svg viewBox="0 0 24 24" fill="white" style={{ width: 26, height: 26 }}>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </button>
  )
}

export function Footer() {
  return (
    <footer style={{ position: 'relative', zIndex: 2, background: '#070b14', borderTop: '1px solid rgba(74,158,255,0.06)', padding: '60px 0 32px' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 40, marginBottom: 48 }}>
          <div style={{ gridColumn: 'span 2' }}>
            <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 18, color: '#fff', letterSpacing: '1px', marginBottom: 4 }}>LS NEGÓCIOS</div>
            <div style={{ fontSize: 9, letterSpacing: '3px', color: 'rgba(74,158,255,0.4)', textTransform: 'uppercase', marginBottom: 16 }}>Soluções Financeiras</div>
            <p style={{ fontSize: 13, color: 'rgba(226,232,244,0.25)', lineHeight: 1.7, maxWidth: 280 }}>25 anos conectando empresas às melhores soluções financeiras do mercado. Mossoró — RN.</p>
          </div>
          <div>
            <div style={{ fontSize: 10, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(74,158,255,0.5)', marginBottom: 20 }}>Navegação</div>
            {['Soluções', 'Equipe', 'Contato'].map(link => (
              <a key={link} href={`#${link.toLowerCase()}`}
                style={{ display: 'block', fontSize: 13, color: 'rgba(226,232,244,0.25)', textDecoration: 'none', marginBottom: 10, transition: 'color 0.3s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'rgba(226,232,244,0.7)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(226,232,244,0.25)'}
              >{link}</a>
            ))}
          </div>
          <div>
            <div style={{ fontSize: 10, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(74,158,255,0.5)', marginBottom: 20 }}>Contato</div>
            <p style={{ fontSize: 13, color: 'rgba(226,232,244,0.25)', marginBottom: 8 }}>lsnegocio@lsnegocio.com.br</p>
            <p style={{ fontSize: 13, color: 'rgba(226,232,244,0.25)', marginBottom: 8 }}>Mossoró · RN · Brasil</p>
            <p style={{ fontSize: 13, color: 'rgba(226,232,244,0.25)' }}>Seg–Sex, 8h–18h</p>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(74,158,255,0.06)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ fontSize: 11, color: 'rgba(226,232,244,0.15)' }}>© 2026 LS Negócios. Todos os direitos reservados.</p>
          <p style={{ fontFamily: 'monospace', fontSize: 10, color: 'rgba(74,158,255,0.25)' }}>v2.0.0</p>
        </div>
      </div>
    </footer>
  )
}
