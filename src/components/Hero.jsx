import { info } from '../content.js'
import { linkWhatsapp } from '../utils.js'
import foto from '../assets/rosana.png'

export default function Hero() {
  return (
    <section className="hero" id="topo">
      <div className="container hero__inner">
        <div className="hero__texto">
          <span className="rotulo">{info.crp} · {info.cidade}</span>
          <h1 className="hero__titulo">{info.frase}</h1>
          <p className="hero__descricao">
            Atendimento psicológico online e presencial no Rio de Janeiro, com um olhar
            cuidadoso para a relação entre mente e corpo e foco em psicotraumatologia.
          </p>
          <div className="hero__botoes">
            <a
              href={linkWhatsapp()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primario"
            >
              <span aria-hidden="true">💬</span> Agendar pelo WhatsApp
            </a>
            <a href="#sobre" className="btn btn-secundario">
              Conhecer meu trabalho
            </a>
          </div>
        </div>

        <div className="hero__foto">
          <div className="hero__foto-moldura">
            <img src={foto} alt={`Foto de ${info.nome}, psicóloga`} />
          </div>
          <div className="hero__cartao">
            <strong>{info.nome}</strong>
            <span>{info.titulo} · {info.crp}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
