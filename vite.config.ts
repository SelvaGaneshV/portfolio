import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { devtools } from "@tanstack/devtools-vite";
import { resolve } from "node:path";
import { nitro } from "nitro/vite";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    devtools({
      removeDevtoolsOnBuild: true,
    }),
    nitro(),
    tanstackStart(),
    viteReact({
      babel: {
        plugins: ["babel-plugin-react-compiler"],
      },
    }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "~": resolve(__dirname, "./src"),
    },
  },
});
