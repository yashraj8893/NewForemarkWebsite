import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Allow the Arena preview domain (and its subdomains)
    allowedHosts: ['.e2b.app'],
  },
  build: {
    rollupOptions: {
      output: {
        // Split heavy vendors out of the main bundle so first load stays small
        manualChunks(id: string) {
          if (!id.includes('node_modules')) return;
          if (id.includes('framer-motion') || id.includes('motion-dom') || id.includes('motion-utils')) return 'motion';
          if (id.includes('gsap')) return 'gsap';
          if (id.includes('lenis')) return 'lenis';
          if (id.includes('lucide-react')) return 'icons';
          // Everything else (React, router, helmet, utilities) in one vendor
          // chunk — kept together to avoid circular chunk warnings
          return 'vendor';
        },
      },
    },
  },
})
