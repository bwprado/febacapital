import Footer from '@/components/footer'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Slider from '@/components/slider'
import Contact from '@/components/contact'

import { getRealStates } from './services/real-states'

export default async function Home() {
  const images = await getRealStates()
  const menuItems = [
    'HOME',
    'SOBRE A LIVA',
    'EMPREENDIMENTOS',
    'NOTÍCIAS',
    'CONTATO'
  ]
  return (
    <div className="page">
      <Header menuItems={menuItems} />
      <Slider images={images} autoPlay={false} />
      <Hero />
      <Contact />
      <Footer menuItems={menuItems} />
    </div>
  )
}
