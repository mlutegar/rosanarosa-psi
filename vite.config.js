import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base precisa ser o nome do repositorio para o GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: '/rosanarosa-psi/',
})
