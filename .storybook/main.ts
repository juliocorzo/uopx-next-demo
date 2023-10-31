import type { StorybookConfig } from '@storybook/nextjs';
import * as path from 'path';

const config: StorybookConfig = {
  framework: {
    name: '@storybook/nextjs',
    options: {
      nextConfigPath: path.resolve(__dirname, '../next.config.js'),
    },
  },
  addons: ['@storybook/addon-essentials', '@storybook/addon-styling'],
  stories: ['../components/**/*.stories.tsx'],
  staticDirs: ['../public'],
  core: {
    disableTelemetry: true,
  },
  features: {
    storyStoreV7: true,
  },
};

export default config;