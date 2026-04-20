import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react()],
  // Point to root-level public/ so /fpt.png is accessible
  publicDir: path.resolve(__dirname, '../public'),
})
