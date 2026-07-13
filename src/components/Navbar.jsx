import { useEffect, useState } from 'react'
import { info } from '../content.js'
import { linkWhatsapp } from '../utils.js'

const links = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#abordagem', label: 'Abordagem' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#faq', label: 'Dúvidas' },
  { href: '#contato', label: 'Contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [aberto, setAberto] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#topo" className="navbar__marca">
          Rosana Rosa <span>· Psicóloga</span>
        </a>

        <nav className={`navbar__nav ${aberto ? 'navbar__nav--aberto' : ''}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setAberto(false)}>
              {l.label}
            </a>
          ))}
          <a
            href={linkWhatsapp()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primario navbar__cta"
          >
            Agendar
          </a>
        </nav>

        <button
          className="navbar__toggle"
          onClick={() => setAberto((v) => !v)}
          aria-label="Abrir menu"
        >
          {aberto ? '✕' : '☰'}
        </button>
      </div>
    </header>
  )
}
