import { defineConfig } from "vite";
import ViteCapacitor from "vite-plugin-capacitor";

export default defineConfig({
  plugins: [
    ViteCapacitor({
      // This is the directory where Capacitor will look for web assets
      webDir: "dist", // This should match the output directory of your Vite build
    }),
  ],
  server: {
    // This allows you to access the app on your local network
    host: true,
    port: 5173, // Default Vite port
  },
});
