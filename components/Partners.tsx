const partners = [
  { name: 'Somapay', url: 'https://logodownload.org/wp-content/uploads/2019/06/somapay-logo.png' },
  { name: 'Itaú', url: 'https://logodownload.org/wp-content/uploads/2014/05/itau-logo-7.png' },
  { name: 'Porto Seguro', url: 'https://logodownload.org/wp-content/uploads/2018/01/porto-seguro-logo.png' },
  { name: 'Rodobens', url: 'https://logodownload.org/wp-content/uploads/2018/05/rodobens-logo.png' },
  { name: 'Creditas', url: 'https://logodownload.org/wp-content/uploads/2019/07/creditas-logo.png' },
  { name: 'Safra', url: 'https://logodownload.org/wp-content/uploads/2014/09/banco-safra-logo.png' },
  { name: 'BV', url: 'https://logodownload.org/wp-content/uploads/2020/11/banco-bv-logo.png' },
  { name: 'Santander', url: 'https://logodownload.org/wp-content/uploads/2016/09/santander-logo-4.png' },
]

export default function Partners() {
  const doubled = [...partners, ...partners]

  return (
    <div className="bg-white py-8 border-b-2 border-ls-beige overflow-hidden">
      <div className="relative">
        <div
          className="flex animate-scroll-track"
          style={{ width: `${doubled.length * 200}px` }}
        >
          {doubled.map((p, i) => (
            <div key={i} className="flex items-center justify-center px-8" style={{ width: 200 }}>
              <img
                src={p.url}
                alt={p.name}
                className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
