import { defineConfig } from "vite";
import viteReact, { reactCompilerPreset } from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { devtools } from "@tanstack/devtools-vite";
import { resolve } from "node:path";
import { nitro } from "nitro/vite";
import babel from "@rolldown/plugin-babel";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    devtools({
      removeDevtoolsOnBuild: true,
    }),
    nitro(),
    tanstackStart({
      prerender: {
        enabled: true,
      },
    }),
    viteReact(),
    babel({
      presets: [reactCompilerPreset()],
    }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "~": resolve(__dirname, "./src"),
    },
  },
});
