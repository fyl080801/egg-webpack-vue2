import { createProxyMiddleware } from 'http-proxy-middleware';
import k2c = require('koa2-connect');
import { pathToRegexp } from 'path-to-regexp';
import { getServerAddress, isRegexp } from '../utils/helper';

export default (options) => async (ctx, next) => {
  const { app, path, protocol } = ctx;
  const { targets = [] } = options;

  for (const target of targets) {
    if ((isRegexp(target) ? target : pathToRegexp(target)).test(path)) {
      await k2c(
        createProxyMiddleware({
          target: `${protocol}://${getServerAddress(app.devServer)}`,
          changeOrigin: true,
        })
      )(ctx, next);

      break;
    }
  }

  await next();
};
