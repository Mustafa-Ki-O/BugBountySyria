import { defineConfig } from "vitest/config";
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/BugBountySyria/",
  server: {
    port: 3000,
    strictPort: true,
  },
  test: {
    environment: "jsdom",
    setupFiles: "./src/test/setup.js",
  },
});
