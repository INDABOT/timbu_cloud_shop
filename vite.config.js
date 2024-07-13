import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    server: {
      proxy: mode === 'development' ? {
        '/api': {
          target: 'https://api.timbu.cloud', // Your backend server
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, ''),
        }
      } : {}
    }
  };
});






