import Footer from '@/components/footer'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Slider from '@/components/slider'

import { getRealStates } from './services/real-states'

export default async function Home() {
  const images = await getRealStates()
  return (
    <div className="page">
      <Header />
      <Slider images={images} autoPlay={false} />
      <Hero />
      <Footer />
    </div>
  )
}
