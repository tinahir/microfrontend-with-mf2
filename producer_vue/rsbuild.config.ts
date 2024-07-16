import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';
import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";

export default defineConfig({
  server: {
    port: 3001,
  },
  tools: {
    rspack: (config, { appendPlugins }) => {
      appendPlugins([
        new ModuleFederationPlugin({
          name: 'producerVue',
          exposes: {
            "./vue-app": "./src/App",
          },
          shared: ['vue', 'vue-router'],
        }),
      ]);
    },
  },
  plugins: [pluginVue()],
});
