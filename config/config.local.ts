import { EggAppConfig, PowerPartial } from 'egg';
import { Configuration } from 'webpack';
// import * as path from 'path';
// import HtmlWebpackPlugin from 'html-webpack-plugin';

export default () => {
  const config: PowerPartial<EggAppConfig> = {};

  config.webpack = {
    mode: 'development',
    entry: { app: ['./src/main.js'] },
    // output: {
    //   publicPath: '/',
    //   filename: 'js/[name].js',
    //   chunkFilename: 'js/[name].js',
    // },
    // extensions: ['.tsx', '.ts', '.js', '.jsx', '.vue', '.json', '.wasm'],
    // plugins: [new HtmlWebpackPlugin({})],
  } as Configuration;

  return config;
};
