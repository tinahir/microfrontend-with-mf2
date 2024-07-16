import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';
import { dependencies } from './package.json';

export default defineConfig({
  server: {
    port: 3001,
  },
  dev: {
    // It is necessary to configure assetPrefix, and in the production environment, you need to configure output.assetPrefix
    assetPrefix: 'http://localhost:3001',
  },
  tools: {
    rspack: (config, { appendPlugins }) => {
      // You need to set a unique value that is not equal to other applications
      config.output!.uniqueName = 'remote';
      appendPlugins([
        new ModuleFederationPlugin({
          name: 'remote',
          exposes: {
            './playButton': './src/components/PlayerControlButton.tsx',
            './exportApp': './src/exportApp.tsx',
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
              requiredVersion: dependencies['@mui/system'],
            }
          },
        }),
      ]);
    },
  },
  plugins: [pluginReact()],
});
