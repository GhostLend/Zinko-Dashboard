import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Increase the warning limit so we don't get noisy warnings while
    // also improving chunking via manualChunks below.
    chunkSizeWarningLimit: 1000, // in KB
    rollupOptions: {
      output: {
        // Split large vendor packages into logical chunks to keep
        // individual chunk sizes smaller and allow better caching.
        manualChunks(id: string) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'react-vendor';
            }
            if (id.includes('@tanstack')) {
              return 'tanstack';
            }
            if (id.includes('@supabase')) {
              return 'supabase';
            }
            if (id.includes('@radix-ui') || id.includes('lucide-react') || id.includes('cmdk') || id.includes('clsx')) {
              return 'ui-vendor';
            }
            if (id.includes('date-fns') || id.includes('chart.js') || id.includes('embla-carousel')) {
              return 'utils-vendor';
            }
            return 'vendor';
          }
        },
      },
    },
  },
}));
