import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";
import { dependencies } from './package.json';


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
  tools: {
    rspack: (config, { appendPlugins }) => {
      appendPlugins([
        new ModuleFederationPlugin({
          name: "host",
          remotes: {
            producer: "producer@http://localhost:3001/mf-manifest.json",
          },
          shared: dependencies
        }),
      ]);
    },
  },
  plugins: [pluginReact()],
});
