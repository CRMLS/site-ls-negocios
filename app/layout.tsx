import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'LS Negócios | Hub de Inteligência Financeira',
  description: 'Conectamos empresas às melhores soluções financeiras. FIDC, Seguros, Financiamentos, Consórcios. 25 anos de experiência em Mossoró-RN.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
