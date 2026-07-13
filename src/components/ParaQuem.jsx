import { temas } from '../content.js'
import { linkWhatsapp } from '../utils.js'

export default function ParaQuem() {
  return (
    <section className="secao" id="para-quem">
      <div className="container">
        <div className="abordagem__cabecalho" data-reveal>
          <span className="rotulo">Como posso te ajudar</span>
          <h2 className="titulo-secao">Este espaço pode ser para você</h2>
          <p className="subtitulo-secao">
            Se você se identifica com algum destes momentos, a terapia pode ser um bom
            caminho. E se o seu tema não estiver na lista, podemos conversar mesmo assim.
          </p>
        </div>

        <ul className="temas__grid" data-reveal>
          {temas.map((t, i) => (
            <li key={i} className="tema">
              <span className="tema__marca" aria-hidden="true">✦</span>
              {t}
            </li>
          ))}
        </ul>

        <div className="temas__cta" data-reveal>
          <a
            href={linkWhatsapp()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primario"
          >
            <span aria-hidden="true">💬</span> Quero conversar
          </a>
        </div>
      </div>
    </section>
  )
}
