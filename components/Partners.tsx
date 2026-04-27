const partners = [
  { name: 'Somapay', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/320px-Amazon_logo.svg.png' },
  { name: 'Itaú', url: 'https://logodownload.org/wp-content/uploads/2014/05/itau-logo-7.png' },
  { name: 'Porto Seguro', url: 'https://logodownload.org/wp-content/uploads/2018/01/porto-seguro-logo.png' },
  { name: 'Creditas', url: 'https://logodownload.org/wp-content/uploads/2019/07/creditas-logo.png' },
  { name: 'Safra', url: 'https://logodownload.org/wp-content/uploads/2014/09/banco-safra-logo.png' },
  { name: 'Santander', url: 'https://logodownload.org/wp-content/uploads/2016/09/santander-logo-4.png' },
]

export default function Partners() {
  const doubled = [...partners, ...partners, ...partners]

  return (
    <section style={{ position: 'relative', zIndex: 2, padding: '60px 0', borderTop: '1px solid rgba(74,158,255,0.06)', borderBottom: '1px solid rgba(74,158,255,0.06)' }}>
      <div style={{ overflow: 'hidden', position: 'relative' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 120, background: 'linear-gradient(to right, #04070f, transparent)', zIndex: 1, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 120, background: 'linear-gradient(to left, #04070f, transparent)', zIndex: 1, pointerEvents: 'none' }} />
        <div
          className="animate-scroll-track"
          style={{ display: 'flex', width: `${doubled.length * 200}px` }}
        >
          {doubled.map((p, i) => (
            <div key={i} style={{ width: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 32px' }}>
              <img
                src={p.url}
                alt={p.name}
                style={{ height: 28, width: 'auto', objectFit: 'contain', filter: 'grayscale(100%) brightness(0.4)', transition: 'filter 0.3s' }}
                onMouseEnter={e => (e.currentTarget.style.filter = 'grayscale(0%) brightness(0.9)')}
                onMouseLeave={e => (e.currentTarget.style.filter = 'grayscale(100%) brightness(0.4)')}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
