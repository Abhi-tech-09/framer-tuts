import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  base:'/framer-tuts',
  plugins: [react()],
  server: {
    open: true,
    port: 5173,
  },
});
