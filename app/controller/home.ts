import { Controller } from 'egg';
import { Route, HttpGet } from 'egg-decorator-router';

@Route()
class HomeController extends Controller {
  @HttpGet('/')
  @HttpGet('*')
  public async index() {
    const { ctx } = this;

    await ctx.webpack.render('index.html');
  }

  @HttpGet('/api/hello')
  public async api() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi('egg');
  }
}

export default HomeController;
