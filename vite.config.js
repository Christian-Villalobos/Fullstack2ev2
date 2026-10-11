// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// Importa el plugin de Tailwind que acabas de instalar
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    // Activa Tailwind dentro de Vite
    tailwindcss(),
  ],
})
