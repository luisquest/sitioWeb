import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, // Ajusta el límite de advertencia a 1000 kB
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'], // Ejemplo: agrupa módulos de terceros en un chunk separado
        }
      }
    }
  }
  
})
