import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@redux": path.resolve(__dirname, "src/redux"),
      "@root": path.resolve(__dirname, "src/root"),
      "@schema": path.resolve(__dirname, "src/schema"),
      "@utils": path.resolve(__dirname, "src/utils"),
    },
  },
});
