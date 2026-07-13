# Rosana Rosa · Site institucional

Site institucional da psicóloga **Rosana Rosa P. Marinho** (CRP 05/81019), feito em
**React + Vite** e publicado automaticamente no **GitHub Pages**.

🔗 **Site:** https://mlutegar.github.io/rosanarosa-psi/

## Rodar localmente

```bash
npm install
npm run dev
```

Abra o endereço mostrado no terminal (ex.: `http://localhost:5173/rosanarosa-psi/`).

## Build de produção

```bash
npm run build     # gera a pasta dist/
npm run preview   # pré-visualiza o build
```

## Como editar os textos

Quase todo o conteúdo do site fica em **`src/content.js`**:

- Nome, CRP, frase, cidade, número de WhatsApp e Instagram → objeto `info`
- Texto "Sobre mim" e formação → objeto `sobre`
- Cards de abordagem → lista `abordagem`
- Passos de "Como funciona" → lista `passos`
- Perguntas frequentes → lista `faq`

A foto do topo fica em `src/assets/rosana.png` (basta substituir por outra com o mesmo nome).

## Publicação (GitHub Pages)

O deploy é automático via GitHub Actions a cada `git push` para a branch `main`.

**Configuração única (só na primeira vez):**
1. No GitHub, vá em **Settings → Pages**.
2. Em **Build and deployment → Source**, selecione **GitHub Actions**.

Pronto. A cada push, o site é reconstruído e publicado.
