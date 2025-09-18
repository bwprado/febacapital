import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import './globals.css'
import StructuredData from './components/structured-data'

const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-urbanist',
})

export const metadata: Metadata = {
  title: {
    default: 'Liva - Construímos confiança e realizamos sonhos!',
    template: '%s | Liva'
  },
  description: 'Na Liva, cada projeto é planejado para facilitar a vida dos moradores, trazendo uma sensação máxima de bem-estar. Conheça nossos empreendimentos imobiliários.',
  keywords: [
    'imóveis',
    'empreendimentos',
    'construção civil',
    'loteamento',
    'apartamentos',
    'casas',
    'real estate',
    'Liva',
    'investimento imobiliário',
    'imóveis de luxo'
  ],
  authors: [{ name: 'Liva' }],
  creator: 'Liva',
  publisher: 'Liva',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://liva.com.br'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://liva.com.br',
    title: 'Liva - Construímos confiança e realizamos sonhos!',
    description: 'Na Liva, cada projeto é planejado para facilitar a vida dos moradores, trazendo uma sensação máxima de bem-estar. Conheça nossos empreendimentos imobiliários.',
    siteName: 'Liva',
    images: [
      {
        url: '/images/hero-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Liva - Empreendimentos Imobiliários',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Liva - Construímos confiança e realizamos sonhos!',
    description: 'Na Liva, cada projeto é planejado para facilitar a vida dos moradores, trazendo uma sensação máxima de bem-estar.',
    images: ['/images/hero-image.jpg'],
    creator: '@liva',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <StructuredData />
      </head>
      <body className={urbanist.variable}>{children}</body>
    </html>
  )
}
