import { mergeConfig, type UserConfig } from 'vite';

export default (config: UserConfig) => {
  // Important: always return the modified config
  return mergeConfig(config, {
    server: {
      allowedHosts: ['localhost', 'cms.quick-offer.ru'],
      fs: {
        strict: false,
      },
    },
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    optimizeDeps: {
      disabled: true,
    },
  });
};
