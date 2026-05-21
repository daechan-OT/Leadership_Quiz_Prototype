import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Env-driven base so the same dist/ works at any host URL:
  //   - GitHub Pages CI sets VITE_BASE_PATH=/Leadership_Quiz_Prototype/
  //   - Iframe / local dev fall back to './' (relative assets)
  base: process.env.VITE_BASE_PATH ?? './',
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './tests/setup.js',
  }
})
