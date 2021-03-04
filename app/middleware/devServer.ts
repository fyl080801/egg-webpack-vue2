import { webpack } from 'webpack';

import DevServer from 'webpack-dev-server';

export default async (ctx, next) => {
  const { app } = ctx;

  if (!app.devServer) {
    await new Promise((resolve) => {
      app.devServer = new DevServer(webpack(app.config.webpack)).listen(0);

      app.devServer.on('listening', () => {
        resolve(null);
      });
    });
  }

  await next();
};
