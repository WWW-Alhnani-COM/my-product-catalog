import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/my-product-catalog', // استخدم هذا عند النشر على GitHub Pages، علّمه للتطوير المحلي
})