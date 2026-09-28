import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import linaria from "@linaria/vite";

export default defineConfig({
  base: "",
  plugins: [react(), linaria()],
  resolve: {
    tsconfigPaths: true,
  },
  server: {
    open: true,
    port: 3000,
  },
});
