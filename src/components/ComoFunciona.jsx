import { passos } from '../content.js'

export default function ComoFunciona() {
  return (
    <section className="secao" id="como-funciona">
      <div className="container">
        <div className="abordagem__cabecalho" data-reveal>
          <span className="rotulo">Primeiros passos</span>
          <h2 className="titulo-secao">Começar é simples</h2>
          <p className="subtitulo-secao">
            Dar o primeiro passo já é um ato de cuidado. Veja como funciona:
          </p>
        </div>

        <div className="passos__grid" data-reveal>
          {passos.map((p, i) => (
            <div key={i} className="passo">
              <span className="passo__numero">{p.numero}</span>
              <h3>{p.titulo}</h3>
              <p>{p.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
