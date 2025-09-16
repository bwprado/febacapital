import Button from '@/components/button'
import Footer from '@/components/footer'
import Header from '@/components/header'

export default function Home() {
  return (
    <div className="page">
      <Header />
      <main className="main">
        <Button variant="primary">Primary</Button>
        <Button variant="action">Action</Button>
      </main>
      <Footer />
    </div>
  )
}
