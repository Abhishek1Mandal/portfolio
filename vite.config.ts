import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  mode: 'production',
  plugins: [react()],
  base: "/vite deploy",
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})