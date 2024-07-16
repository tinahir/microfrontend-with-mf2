import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";

export default defineConfig({
  server: {
    port: 3001,
  },
  tools: {
    rspack: (config, { appendPlugins }) => {
      appendPlugins([
        new ModuleFederationPlugin({
          name: "producer",
          exposes: {
            "./app": "./src/App",
            "./VideoJSPlayer": "./src/components/watch/VideoJSPlayer",
          },
          shared: ['react', 'react-dom'],
        }),
      ]);
    },
  },
  plugins: [pluginReact()],
});
