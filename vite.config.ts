import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// import path from 'path'
// import { fileURLToPath } from 'url'

// 👉 ESM-compatible __dirname
// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)

export default defineConfig({
  // base: '/ProkaiCare/',
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
  },
})
