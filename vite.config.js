import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss';
// import {FaBackspace} from 'react-icons/fa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
