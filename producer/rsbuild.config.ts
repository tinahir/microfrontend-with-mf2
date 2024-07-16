import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  html: {
    template: "./index.html",
  },
  server: {
    port: 3001,
  },
  dev: {
    assetPrefix: "http://localhost:3001",
  },
  plugins: [pluginReact()],
});
