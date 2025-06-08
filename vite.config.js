import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
base: '/portfolio-devs/' // Notez la majuscule pour correspondre au nom du dépôt
})