const team = [
  { initials: 'SC', name: 'Sérgio Costa', role: 'Sócio Fundador', bio: '25 anos de experiência em FIDC e mercado financeiro.', phone: '5584996570880' },
  { initials: 'LP', name: 'Leonardo Pereira', role: 'Sócio Fundador', bio: '10 anos em soluções financeiras e benefícios corporativos.', phone: '5584994095409' },
  { initials: 'PM', name: 'Paulo Mesquita', role: 'Consultor Especialista', bio: 'Especialista em seguros, financiamentos e consórcios.', phone: '5584987458834' },
]

export default function Team() {
  return (
    <section id="equipe" style={{ position: 'relative', zIndex: 2, padding: '100px 0' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <div className="reveal" style={{ marginBottom: 56 }}>
          <div className="section-tag">Nossa Equipe</div>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(28px,4vw,44px)', fontWeight: 800, color: '#fff' }}>
            Quem somos
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 1, background: 'rgba(74,158,255,0.06)' }}>
          {team.map((member, i) => (
            <div
              key={i}
              className="card-hover reveal"
              style={{
                background: '#04070f',
                padding: '40px 32px',
                transitionDelay: `${i * 0.12}s`,
              }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect()
                e.currentTarget.style.setProperty('--mouse-x', (e.clientX - rect.left) + 'px')
                e.currentTarget.style.setProperty('--mouse-y', (e.clientY - rect.top) + 'px')
              }}
            >
              {/* Avatar */}
              <div
                style={{
                  width: 52, height: 52,
                  border: '1px solid rgba(74,158,255,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 24,
                  fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 16, color: '#4a9eff',
                  transition: 'border-color 0.3s, background 0.3s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(74,158,255,0.6)'; e.currentTarget.style.background = 'rgba(74,158,255,0.06)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(74,158,255,0.2)'; e.currentTarget.style.background = 'transparent' }}
              >
                {member.initials}
              </div>

              <div style={{ fontFamily: 'Syne, sans-serif', fontSize: 17, fontWeight: 700, color: '#fff', marginBottom: 4 }}>{member.name}</div>
              <div style={{ fontSize: 10, letterSpacing: '2px', textTransform: 'uppercase', color: '#4a9eff', marginBottom: 16 }}>{member.role}</div>
              <p style={{ fontSize: 13, color: 'rgba(226,232,244,0.35)', lineHeight: 1.7, marginBottom: 28 }}>{member.bio}</p>

              <a
                href={`https://wa.me/${member.phone}?text=Olá, ${member.name}. Vim pelo site da LS Negócios.`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 10, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(74,158,255,0.45)', textDecoration: 'none', transition: 'color 0.3s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#4a9eff'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(74,158,255,0.45)'}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 14, height: 14 }}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
