import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dotenv from 'dotenv'
dotenv.config()

const base = process.env.BASE_PATH;

// https://vitejs.dev/config/
export default defineConfig({
  base: base,
  plugins: [vue()],
})
