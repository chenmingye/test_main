import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  publicPath: '/',
  hash: true,
  polyfill: {
    imports: ['core-js/stable'],
  },

  // ssr: {},
  // exportStatic: {},
  dva: {},
  dynamicImport: {},
  // autoprefixer:{},
  cssLoader: {
    localsConvention: 'camelCase',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/c', component: '@/pages/a/as' },
    { path: '/d', component: '@/pages/q/qa' },
  ],
});
