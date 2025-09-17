import Footer from '@/components/footer'
import Header from '@/components/header/header'
import Hero from '@/components/hero'
import Slider from '@/components/slider'
import Contact from '@/components/contact'
import Ventures from '@/components/ventures'

import { getRealStates } from './services/real-states'
import { getVentures } from './services/ventures'

export default async function Home() {
  const images = await getRealStates()
  const ventures = await getVentures()
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
      <Ventures ventures={ventures} />
      <Footer menuItems={menuItems} />
    </div>
  )
}
