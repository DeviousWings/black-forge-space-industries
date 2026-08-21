import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: base must match your GitHub repo name exactly, e.g.
// https://github.com/DeviousWings/black-forge-space-industries -> '/black-forge-space-industries/'
export default defineConfig({
  plugins: [react()],
  // base: '/black-forge-space-industries/',
  base: '/',
})