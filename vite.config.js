import { defineConfig } from 'vite'

export default defineConfig({
    base: '/clochette-cars/',
    root: '.',
    publicDir: 'public',
    build: {
          outDir: 'dist',
    },
})
