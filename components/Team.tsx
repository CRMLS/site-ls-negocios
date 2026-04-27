const team = [
  {
    name: 'Sérgio Costa',
    role: 'Sócio Fundador',
    experience: '25 anos em FIDC e mercado financeiro',
    initials: 'SC',
    whatsapp: '5584996570880',
  },
  {
    name: 'Leonardo Pereira',
    role: 'Sócio Fundador',
    experience: '10 anos em soluções financeiras',
    initials: 'LP',
    whatsapp: '5584994095409',
  },
  {
    name: 'Paulo Mesquita',
    role: 'Consultor Especialista',
    experience: 'Especialista em seguros e financiamentos',
    initials: 'PM',
    whatsapp: '5584987458834',
  },
]

export default function Team() {
  return (
    <section id="equipe" className="py-28 px-6 bg-ls-deep">
      <div className="max-w-7xl mx-auto">

        <div className="mb-16 reveal">
          <div className="text-xs uppercase tracking-[4px] text-ls-beige/40 mb-4">Quem somos</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Nossa Equipe
          </h2>
          <div className="section-divider"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <div key={i} className="reveal group" style={{ transitionDelay: `${i * 0.15}s` }}>
              <div className="border border-ls-beige/10 p-8 hover:border-ls-beige/30 transition-all duration-400 hover:-translate-y-1.5 bg-ls-dark/40">

                {/* Avatar */}
                <div className="w-20 h-20 rounded-full border border-ls-beige/20 flex items-center justify-center mb-6 group-hover:border-ls-beige/40 transition-colors duration-300">
                  <span className="font-display text-2xl font-bold text-ls-beige/70 group-hover:text-ls-beige transition-colors duration-300">
                    {member.initials}
                  </span>
                </div>

                <h3 className="font-bold text-white text-lg mb-1">{member.name}</h3>
                <div className="text-xs uppercase tracking-widest text-ls-beige/40 mb-3">{member.role}</div>
                <p className="text-ls-beige/50 text-sm leading-relaxed mb-6">{member.experience}</p>

                <a
                  href={`https://wa.me/${member.whatsapp}?text=Olá, ${member.name}. Vim pelo site da LS Negócios.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ls-beige/40 hover:text-ls-beige transition-colors duration-300 group/btn"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Falar no WhatsApp
                  <span className="group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
