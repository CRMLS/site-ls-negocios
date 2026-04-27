'use client'
import { useState } from 'react'

const interests = ['Escritório Inteligente (IA)', 'Operações FIDC', 'Hub de Benefícios', 'Seguros & Proteção', 'Financiamentos', 'Consórcios', 'Outro assunto']

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', interest: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = `Olá! Me chamo *${form.name}*.\n\nTenho interesse em: *${form.interest}*\nTelefone: ${form.phone}${form.message ? `\n\nMensagem: ${form.message}` : ''}\n\n_Vim pelo site da LS Negócios._`
    window.open(`https://wa.me/5584996570880?text=${encodeURIComponent(text)}`, '_blank')
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'rgba(74,158,255,0.03)',
    border: '1px solid rgba(74,158,255,0.12)',
    color: '#e2e8f4',
    padding: '14px 16px',
    fontSize: 13,
    outline: 'none',
    transition: 'border-color 0.3s',
    fontFamily: 'DM Sans, sans-serif',
  }

  return (
    <section id="contato" style={{ position: 'relative', zIndex: 2, padding: '100px 0', borderTop: '1px solid rgba(74,158,255,0.06)' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 80, alignItems: 'start' }}>

          {/* Left */}
          <div className="reveal">
            <div className="section-tag">Vamos conversar</div>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(28px,4vw,44px)', fontWeight: 800, color: '#fff', lineHeight: 1.1, marginBottom: 20 }}>
              Entre em<br />Contato
            </h2>
            <p style={{ color: 'rgba(226,232,244,0.35)', fontSize: 14, lineHeight: 1.8, marginBottom: 40, maxWidth: 340 }}>
              Preencha o formulário e um especialista entra em contato via WhatsApp com a melhor solução para o seu negócio.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                ['✉', 'lsnegocio@lsnegocio.com.br'],
                ['◎', 'Mossoró · RN · Brasil'],
                ['◈', 'Segunda a sexta, 8h–18h'],
              ].map(([icon, text]) => (
                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 13, color: 'rgba(226,232,244,0.35)' }}>
                  <span style={{ color: 'rgba(74,158,255,0.5)', fontSize: 14 }}>{icon}</span>
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="reveal" style={{ transitionDelay: '0.15s' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <input
                type="text" placeholder="Seu nome completo *" required
                style={inputStyle} value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                onFocus={e => e.target.style.borderColor = 'rgba(74,158,255,0.4)'}
                onBlur={e => e.target.style.borderColor = 'rgba(74,158,255,0.12)'}
              />
              <input
                type="tel" placeholder="Telefone / WhatsApp *" required
                style={inputStyle} value={form.phone}
                onChange={e => setForm({ ...form, phone: e.target.value })}
                onFocus={e => e.target.style.borderColor = 'rgba(74,158,255,0.4)'}
                onBlur={e => e.target.style.borderColor = 'rgba(74,158,255,0.12)'}
              />
              <select
                required style={{ ...inputStyle, cursor: 'none' }}
                value={form.interest}
                onChange={e => setForm({ ...form, interest: e.target.value })}
                onFocus={e => e.target.style.borderColor = 'rgba(74,158,255,0.4)'}
                onBlur={e => e.target.style.borderColor = 'rgba(74,158,255,0.12)'}
              >
                <option value="" disabled style={{ background: '#04070f' }}>Qual solução te interessa? *</option>
                {interests.map(i => <option key={i} value={i} style={{ background: '#04070f' }}>{i}</option>)}
              </select>
              <textarea
                placeholder="Mensagem (opcional)" rows={4}
                style={{ ...inputStyle, resize: 'none' }} value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                onFocus={e => e.target.style.borderColor = 'rgba(74,158,255,0.4)'}
                onBlur={e => e.target.style.borderColor = 'rgba(74,158,255,0.12)'}
              />

              <button
                type="submit"
                style={{
                  background: sent ? 'rgba(74,158,255,0.15)' : '#4a9eff',
                  color: sent ? '#4a9eff' : '#04070f',
                  border: sent ? '1px solid rgba(74,158,255,0.3)' : 'none',
                  padding: '16px',
                  fontSize: 11, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase',
                  transition: 'all 0.3s', cursor: 'none', fontFamily: 'DM Sans, sans-serif',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                }}
                onMouseEnter={e => { if (!sent) e.currentTarget.style.background = '#6ab4ff' }}
                onMouseLeave={e => { if (!sent) e.currentTarget.style.background = '#4a9eff' }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 15, height: 15 }}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {sent ? 'WhatsApp aberto! ✓' : 'Enviar pelo WhatsApp →'}
              </button>

              <p style={{ textAlign: 'center', fontSize: 11, color: 'rgba(226,232,244,0.2)' }}>
                Ao enviar, o WhatsApp abre com sua mensagem já formatada.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
