
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
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Setting base path for subdirectory GitHub Pages deployment
  base: "/merobaja-plugin-locale-39/",
  build: {
    // Output directory - this should match your GitHub Pages deployment settings
    outDir: "dist",
    // Generate sourcemaps for better debugging
    sourcemap: true,
  }
}));
