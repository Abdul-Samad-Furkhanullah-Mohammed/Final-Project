import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Set a custom server configuration
  server: {
    host: true,               // Enable external access (e.g., via local network)
    port: 5173,               // Custom port (you can change it)
    open: true,               // Open the browser automatically on server start
    proxy: {                  // Proxy API requests to the backend server
      '/api': {
        target: 'http://localhost:3000/api/', // Backend API server
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },

  // Build configuration
  build: {
    outDir: 'dist',           // Output directory for build files
    sourcemap: true,          // Generate source maps for easier debugging
  },

  // Alias for cleaner imports
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),  // Use '@' for src directory
    },
  },

  // Enable environment variables from .env file
  define: {
    'process.env': {}
  },
})
