import { info } from '../content.js'

export default function Footer({ onAbrirPrivacidade }) {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <strong>{info.nome}</strong>
          <p>{info.titulo} · {info.crp}</p>
        </div>
        <p className="footer__aviso">
          Atendimento sigiloso conforme o Código de Ética Profissional do Psicólogo.
        </p>
        <button className="footer__link" onClick={onAbrirPrivacidade}>
          Política de Privacidade · LGPD
        </button>
        <p className="footer__creditos">
          © {info.nome} · {info.cidade}
        </p>
      </div>
    </footer>
  )
}
