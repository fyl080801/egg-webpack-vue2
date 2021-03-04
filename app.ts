import { Application } from 'egg';
import devServer from './app/middleware/devServer';

export default (app: Application) => {
  if (app.config.webpack) {
    app.use(devServer);
  }
};
