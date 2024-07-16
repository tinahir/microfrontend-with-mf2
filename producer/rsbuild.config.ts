import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";

import { dependencies } from './package.json';

export default defineConfig({
  server: {
    port: 3001,
  },
  dev: {
    assetPrefix: "http://localhost:3001",
  },
  tools: {
    rspack: (config, { appendPlugins }) => {
      config.output!.uniqueName = 'producer';
      appendPlugins([
        new ModuleFederationPlugin({
          name: "producer",
          exposes: {
            "./App": "./src/App",
          },
          shared: dependencies,
        }),
      ]);
    },
  },
  plugins: [pluginReact()],
});
