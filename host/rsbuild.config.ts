import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  html: {
    template: "./index.html",
  },
  server: {
    port: 3000,
  },
  dev: {
    assetPrefix: "http://localhost:3000",
  },
  plugins: [pluginReact()],
});
