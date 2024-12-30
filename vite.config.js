import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Output directory for the build
    emptyOutDir: true, // Clears the output directory before building
  },
  server: {
    port: 3000, // Optional: Specify a port for local dev server
    open: true, // Optional: Automatically open in the browser
  },
  resolve: {
    alias: {
      "@": "/src", // Optional: Simplify imports with an alias
    },
  },
  base: "./", // Ensures correct base path for relative links
});
