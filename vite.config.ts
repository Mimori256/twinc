import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";
import linaria from "@linaria/vite";

export default defineConfig({
  base: "",
  plugins: [react(), viteTsconfigPaths(), linaria()],
  server: {
    open: true,
    port: 3000,
  },
});
