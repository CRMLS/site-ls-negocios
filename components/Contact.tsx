'use client'
import { useState } from 'react'

const interests = [
  'Escritório Inteligente (IA)',
  'Operações FIDC',
  'Hub de Benefícios',
  'Seguros & Proteção',
  'Financiamentos',
  'Consórcios',
  'Outro assunto',
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', interest: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = `Olá! Me chamo *${form.name}*.\n\nTenho interesse em: *${form.interest}*\nTelefone: ${form.phone}${form.message ? `\n\nMensagem: ${form.message}` : ''}\n\n_Vim pelo site da LS Negócios._`
    const encoded = encodeURIComponent(text)
    window.open(`https://wa.me/5584996570880?text=${encoded}`, '_blank')
    setSent(true)
    setTimeout(() => setSent(false), 5000)
  }

  const inputClass = "ls-input w-full bg-ls-deep border border-ls-beige/15 text-ls-beige placeholder-ls-beige/25 px-4 py-3.5 text-sm transition-all duration-300 focus:border-ls-beige/60"

  return (
    <section id="contato" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div className="reveal">
            <div className="text-xs uppercase tracking-[4px] text-ls-beige/40 mb-4">Vamos conversar</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Entre em<br />Contato
            </h2>
            <div className="section-divider mb-8"></div>
            <p className="text-ls-beige/50 leading-relaxed mb-10">
              Preencha o formulário e um dos nossos especialistas vai entrar em contato via WhatsApp com a melhor solução para o seu negócio.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4 text-ls-beige/40 text-sm">
                <span className="text-lg">✉</span>
                <span>lsnegocio@lsnegocio.com.br</span>
              </div>
              <div className="flex items-center gap-4 text-ls-beige/40 text-sm">
                <span className="text-lg">◎</span>
                <span>Mossoró · RN · Brasil</span>
              </div>
              <div className="flex items-center gap-4 text-ls-beige/40 text-sm">
                <span className="text-lg">◈</span>
                <span>Atendimento de segunda a sexta, 8h–18h</span>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="reveal">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Seu nome completo *"
                required
                className={inputClass}
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
              />
              <input
                type="tel"
                placeholder="Seu telefone / WhatsApp *"
                required
                className={inputClass}
                value={form.phone}
                onChange={e => setForm({ ...form, phone: e.target.value })}
              />
              <select
                required
                className={`${inputClass} cursor-pointer`}
                value={form.interest}
                onChange={e => setForm({ ...form, interest: e.target.value })}
              >
                <option value="" disabled>Qual solução te interessa? *</option>
                {interests.map(i => (
                  <option key={i} value={i} className="bg-ls-deep">{i}</option>
                ))}
              </select>
              <textarea
                placeholder="Mensagem (opcional)"
                rows={4}
                className={`${inputClass} resize-none`}
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
              />

              <button
                type="submit"
                className="w-full bg-ls-beige text-ls-dark py-4 font-bold text-sm uppercase tracking-widest hover:bg-white transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {sent ? 'WhatsApp aberto! ✓' : 'Enviar pelo WhatsApp'}
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>

              <p className="text-center text-ls-beige/25 text-xs">
                Ao enviar, você abre o WhatsApp com sua mensagem já formatada.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
