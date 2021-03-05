// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportDevServer from '../../../app/middleware/devServer';
import ExportProxy from '../../../app/middleware/proxy';
import ExportWebpack from '../../../app/middleware/webpack';

declare module 'egg' {
  interface IMiddleware {
    devServer: typeof ExportDevServer;
    proxy: typeof ExportProxy;
    webpack: typeof ExportWebpack;
  }
}
