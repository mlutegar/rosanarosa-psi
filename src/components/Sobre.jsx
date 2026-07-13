import { sobre, info } from '../content.js'

export default function Sobre() {
  return (
    <section className="secao" id="sobre">
      <div className="container sobre__inner">
        <div className="sobre__texto" data-reveal>
          <span className="rotulo">Sobre mim</span>
          <h2 className="titulo-secao">Um cuidado que escuta você por inteiro</h2>
          {sobre.paragrafos.map((p, i) => (
            <p key={i} className="sobre__paragrafo">{p}</p>
          ))}
        </div>

        <aside className="sobre__formacao" data-reveal>
          <h3>Formação</h3>
          <ul>
            {sobre.formacao.map((f, i) => (
              <li key={i}>
                <span aria-hidden="true">✦</span> {f}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  )
}
