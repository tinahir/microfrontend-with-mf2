import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";
import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { dependencies } from './package.json';

export default defineConfig({
  html: {
    template: './index.html',
  },
  source: {
    entry: {
      index: './src/main.tsx',
    },
  },
  tools: {
    rspack: (config, { appendPlugins }) => {
      appendPlugins([
        new ModuleFederationPlugin({
          name: 'federation_consumer',
          remotes: {
            remote:
              'remote@http://localhost:3001/mf-manifest.json',
          },
          shared: {
            react: {
              singleton: true,
              requiredVersion: dependencies['react'],
            },
            'react-dom': {
              singleton: true,
              requiredVersion: dependencies['react-dom'],
            },
            '@mui/material': {
              singleton: true,
              requiredVersion: dependencies['@mui/material'],
            },
            '@mui/icons-material': {
              singleton: true,
              requiredVersion: dependencies['@mui/icons-material'],
            },
            '@mui/system': {
              singleton: true,
              requiredVersion: dependencies['@mui/system'],
            },
            '@mui/base': {
              singleton: true,
              requiredVersion: dependencies['@mui/base'],
            },
            
          },
        }),
      ]);
    },
  },
  plugins: [pluginReact()],
});
