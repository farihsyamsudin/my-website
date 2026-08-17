import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react(), tailwindcss()],
    server: {
      proxy: {
        '/.netlify/functions/google': {
          target: env.GOOGLE_SCRIPT_URL,
          changeOrigin: true,
          rewrite: () => '', // This drops the path and just hits the base URL
          followRedirects: true
        }
      }
    }
  }
})
