import { merge } from 'webpack-merge';
import baseConfig from './webpack.config.base';
import { joinPath } from './utils';

export default merge(baseConfig, {
  mode: 'production',
  output: {
    publicPath: '/assets/',
    path: joinPath(process.cwd(), './dist'),
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].chunk.js',
    libraryTarget: 'umd',
  },
  optimization: {
    // extracting-boilerplate
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        defaultVendors: {
          name: 'chunk-vendors',
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          chunks: 'initial',
        },
        common: {
          name: 'chunk-common',
          minChunks: 2,
          priority: -20,
          chunks: 'initial',
          reuseExistingChunk: true,
        },
      },
    },
  },
});
