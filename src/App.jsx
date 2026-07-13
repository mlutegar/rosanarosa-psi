import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Sobre from './components/Sobre.jsx'
import Abordagem from './components/Abordagem.jsx'
import ParaQuem from './components/ParaQuem.jsx'
import ComoFunciona from './components/ComoFunciona.jsx'
import FAQ from './components/FAQ.jsx'
import Contato from './components/Contato.jsx'
import Footer from './components/Footer.jsx'
import WhatsappFloat from './components/WhatsappFloat.jsx'
import Privacidade from './components/Privacidade.jsx'
import { useReveal } from './useReveal.js'

export default function App() {
  const [privacidadeAberta, setPrivacidadeAberta] = useState(false)
  useReveal()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Abordagem />
        <ParaQuem />
        <ComoFunciona />
        <FAQ />
        <Contato />
      </main>
      <Footer onAbrirPrivacidade={() => setPrivacidadeAberta(true)} />
      <WhatsappFloat />
      {privacidadeAberta && <Privacidade onFechar={() => setPrivacidadeAberta(false)} />}
    </>
  )
}
