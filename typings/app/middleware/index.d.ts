// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportDevServer from '../../../app/middleware/devServer';

declare module 'egg' {
  interface IMiddleware {
    devServer: typeof ExportDevServer;
  }
}
