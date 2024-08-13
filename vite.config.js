import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import ViteCapacitor from "vite-plugin-capacitor";

export default defineConfig({
  plugins: [
    react(),
    ViteCapacitor({
      webDir: "dist",
    }),
  ],
  server: {
    host: true,
    port: 5173,
  },
});
