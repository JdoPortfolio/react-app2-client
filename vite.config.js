import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import postcss from './postcss.config.js' // make sure to import the CommonJS module

// // https://vitejs.dev/config/
// export default defineConfig({
//   css: {
//     postcss,
//   },
//   plugins: [react()],
// })
