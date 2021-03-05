import { webpack } from 'webpack';

import DevServer from 'webpack-dev-server';

export default (options) => async (ctx, next) => {
  const { app } = ctx;

  if (!app.devServer) {
    await new Promise((resolve) => {
      app.devServer = new DevServer(
        webpack(options.webpack || { mode: 'development' }),
        options.devServer || {}
      ).listen(0);

      app.devServer.on('listening', () => {
        resolve(true);
      });
    });
  }

  await next();
};
