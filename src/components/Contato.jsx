import { info } from '../content.js'
import { linkWhatsapp } from '../utils.js'

export default function Contato() {
  return (
    <section className="secao contato" id="contato">
      <div className="container contato__card">
        <span className="rotulo">Vamos conversar</span>
        <h2 className="titulo-secao">Pronta para te acolher</h2>
        <p className="subtitulo-secao contato__texto">
          Se você sente que é hora de cuidar de si, me chame. Respondo pessoalmente e
          combinamos o melhor horário para começar — online ou presencial no RJ.
        </p>

        <div className="contato__botoes">
          <a
            href={linkWhatsapp()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primario"
          >
            <span aria-hidden="true">💬</span> Falar no WhatsApp
          </a>
          <a
            href={info.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secundario"
          >
            <span aria-hidden="true">📷</span> {info.instagramUser}
          </a>
        </div>

        <p className="contato__local">📍 {info.cidade} · Atendimento online e presencial</p>
      </div>
    </section>
  )
}
