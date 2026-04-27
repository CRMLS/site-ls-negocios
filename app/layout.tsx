import type { Metadata } from 'next'
import { Barlow, Playfair_Display } from 'next/font/google'
import './globals.css'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-barlow',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'LS Negócios | Hub de Inteligência Financeira',
  description: 'Conectamos empresas às melhores soluções financeiras. FIDC, Seguros, Financiamentos, Consórcios e muito mais. 25 anos de experiência em Mossoró-RN.',
  keywords: 'FIDC, seguros, financiamentos, consórcios, Mossoró, soluções financeiras',
  openGraph: {
    title: 'LS Negócios | Hub de Inteligência Financeira',
    description: 'Conectamos empresas às melhores soluções financeiras.',
    url: 'https://www.lsnegocio.com.br',
    siteName: 'LS Negócios',
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className={`${barlow.variable} ${playfair.variable}`}>
      <body className="bg-ls-dark text-ls-beige font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
