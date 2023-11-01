import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //viktigt att ha med följande för att kunna läsa api
  server: {
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
});
