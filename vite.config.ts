import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";

export default defineConfig({
  server: {
    watch: {
      ignored: ["**/routeTree.gen.ts"],
    },
  },
  plugins: [
    tanstackRouter({
      enableRouteGeneration: false,
      codeSplittingOptions: { addHmr: false },
    }),
    tanstackStart({ server: { entry: "server" } }),
    react(),
    tsconfigPaths(),
    tailwindcss(),
  ],
});
