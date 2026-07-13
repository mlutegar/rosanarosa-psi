import { useEffect } from 'react'

// Adiciona a classe "revelado" aos elementos [data-reveal] quando entram na tela.
export function useReveal() {
  useEffect(() => {
    const alvos = document.querySelectorAll('[data-reveal]')

    if (!('IntersectionObserver' in window)) {
      alvos.forEach((el) => el.classList.add('revelado'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revelado')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    alvos.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
