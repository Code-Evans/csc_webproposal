import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention:"camelCase",
    },
  },

  server: {
    host: true, // Allows access from the local network
    port: 5173, // Default port, or change to your preferred port
  },
})
