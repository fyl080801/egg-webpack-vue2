import { EggAppConfig, PowerPartial } from 'egg';
import webpack from '../build/webpack.config.dev';
import { Configuration } from 'webpack-dev-server';

export default () => {
  const config: PowerPartial<EggAppConfig> = {};

  config.middleware = ['devServer', 'proxy'];

  config.devServer = {
    webpack,
    devServer: {
      headers: { 'Access-Control-Allow-Origin': '*' },
    } as Configuration,
  };

  config.proxy = {
    targets: [/^(\/sockjs-node)/g],
  };

  return config;
};
