// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 🔧 ध्यान दें: base path में GitHub repo का नाम आएगा
export default defineConfig({
  plugins: [react()],
  base: '/Threads-of-love/', // 👈 यही जरूरी है!
})

