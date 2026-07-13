import { useState } from 'react'
import { faq } from '../content.js'

export default function FAQ() {
  const [aberto, setAberto] = useState(0)

  return (
    <section className="secao secao-alt" id="faq">
      <div className="container faq__inner">
        <div className="abordagem__cabecalho">
          <span className="rotulo">Dúvidas frequentes</span>
          <h2 className="titulo-secao">Perguntas comuns</h2>
        </div>

        <div className="faq__lista">
          {faq.map((item, i) => {
            const ativo = aberto === i
            return (
              <div key={i} className={`faq__item ${ativo ? 'faq__item--ativo' : ''}`}>
                <button
                  className="faq__pergunta"
                  onClick={() => setAberto(ativo ? -1 : i)}
                  aria-expanded={ativo}
                >
                  <span>{item.pergunta}</span>
                  <span className="faq__sinal" aria-hidden="true">{ativo ? '−' : '+'}</span>
                </button>
                <div className="faq__resposta">
                  <p>{item.resposta}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
