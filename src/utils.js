import { info } from './content.js'

export function linkWhatsapp() {
  const msg = encodeURIComponent(info.whatsappMsg)
  return `https://wa.me/${info.whatsapp}?text=${msg}`
}
