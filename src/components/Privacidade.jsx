import { useEffect } from 'react'
import { privacidade } from '../content.js'

export default function Privacidade({ onFechar }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onFechar()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onFechar])

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label="Política de Privacidade">
      <div className="modal__fundo" onClick={onFechar} />
      <div className="modal__caixa">
        <button className="modal__fechar" onClick={onFechar} aria-label="Fechar">
          ✕
        </button>
        <span className="rotulo">Privacidade e LGPD</span>
        <h2 className="titulo-secao">Política de Privacidade</h2>
        <p className="modal__meta">Última atualização: {privacidade.atualizado}</p>

        <div className="modal__conteudo">
          {privacidade.blocos.map((b, i) => (
            <div key={i} className="modal__bloco">
              <h3>{b.titulo}</h3>
              <p>{b.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
