import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Liva - Empreendimentos Imobiliários',
    short_name: 'Liva',
    description: 'Construímos confiança e realizamos sonhos! Na Liva, cada projeto é planejado para facilitar a vida dos moradores.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1aa584',
    icons: [
      {
        src: '/liva.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}
