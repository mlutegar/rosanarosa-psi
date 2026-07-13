import { abordagem } from '../content.js'

export default function Abordagem() {
  return (
    <section className="secao secao-alt" id="abordagem">
      <div className="container">
        <div className="abordagem__cabecalho" data-reveal>
          <span className="rotulo">Como eu trabalho</span>
          <h2 className="titulo-secao">Uma abordagem acolhedora e integrada</h2>
          <p className="subtitulo-secao">
            Cada pessoa é única. Meu trabalho une conhecimento em neurociências e
            psicotraumatologia a uma escuta sensível do que o corpo comunica.
          </p>
        </div>

        <div className="abordagem__grid" data-reveal>
          {abordagem.map((item, i) => (
            <article key={i} className="card">
              <div className="card__icone" aria-hidden="true">{item.icone}</div>
              <h3>{item.titulo}</h3>
              <p>{item.texto}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
