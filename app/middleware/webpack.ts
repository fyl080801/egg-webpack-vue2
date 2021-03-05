import { Context } from 'egg';
import { webpack } from 'webpack';
import middleware from 'webpack-dev-middleware';

export default () => {
  return async (ctx: Context<any>, next) => {
    await new Promise((resolve) => {
      (ctx as any).send = function (content) {
        console.log(content);
        ctx.body = content + '';
        resolve(next());
      };

      middleware(
        webpack({
          mode: 'development',
          entry: './src/main.js',
        }),
        { serverSideRender: true }
      )(ctx as any, ctx as any, function () {
        resolve(next());
      });
    });
  };
};
