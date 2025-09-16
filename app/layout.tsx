import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import './globals.css'

const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-urbanist',
})

export const metadata: Metadata = {
  title: 'liva',
  description: 'Contruimos confiança, e realizamos sonhos!'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={urbanist.variable}>{children}</body>
    </html>
  )
}
