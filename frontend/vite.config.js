import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 9001,
    watch: {
      usePolling: true, // Required for Docker volume hot-reload on Windows/macOS
    },
    proxy: {
      "/api": {
        // Dentro del contenedor Docker, 'backend' es el nombre del servicio.
        // Vite reenvía la petición server-side → sin CORS en el browser.
        target: "http://backend:9000",
        changeOrigin: true,
      },
    },
  },
});
