import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@ui-base": path.resolve(__dirname, "./src/components/ui-base"),
      "@ui-group": path.resolve(__dirname, "./src/components/ui-group"),
      "@utils": path.resolve(__dirname, "./src/lib/utils"),
    },
  },
});
