import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Sobre from './components/Sobre.jsx'
import Abordagem from './components/Abordagem.jsx'
import ComoFunciona from './components/ComoFunciona.jsx'
import FAQ from './components/FAQ.jsx'
import Contato from './components/Contato.jsx'
import Footer from './components/Footer.jsx'
import WhatsappFloat from './components/WhatsappFloat.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Abordagem />
        <ComoFunciona />
        <FAQ />
        <Contato />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  )
}
