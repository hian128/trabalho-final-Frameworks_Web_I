import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");

  return {
    plugins: [react(), tailwindcss()],
    server: {
      proxy: {
        "/football-data": {
          target: "https://api.football-data.org",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/football-data/, ""),
          configure: (proxy) => {
            proxy.on("proxyReq", (proxyReq) => {
              if (env.VITE_API_KEY) {
                proxyReq.setHeader("X-Auth-Token", env.VITE_API_KEY);
              }
            });
          },
        },
      },
    },
  };
});
