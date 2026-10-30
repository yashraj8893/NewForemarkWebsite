import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    cors: true,
    // Allow the Arena preview domain (and its subdomains)
    allowedHosts: ['.e2b.app'],
  },
  build: {
    rollupOptions: {
      output: {
        // Split heavy vendors out of the main bundle so first load stays small
        manualChunks(id: string) {
          if (!id.includes('node_modules')) return;
          // three.js/R3F/drei ecosystem → its own chunk, reachable ONLY from the
          // dynamically imported /services 3D stage (never pulled by other pages)
          const threeDeps = [
            'node_modules/three/', 'node_modules/three-stdlib/', 'node_modules/three-mesh-bvh/',
            'node_modules/troika-three', 'node_modules/maath/', 'node_modules/camera-controls/',
            'node_modules/@react-three/', 'node_modules/suspend-react/', 'node_modules/zustand/',
            'node_modules/tunnel-rat/', 'node_modules/stats.js/', 'node_modules/stats-gl/',
            'node_modules/meshline/', 'node_modules/detect-gpu/', 'node_modules/glsl-noise/',
            'node_modules/@monogrid/', 'node_modules/@mediapipe/', 'node_modules/@use-gesture/',
          ];
          if (threeDeps.some((d) => id.includes(d))) return 'three';
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
