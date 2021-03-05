import cheerio from 'cheerio';
import * as path from 'path';
import { getServerAddress } from '../utils/helper';

const context: any = {
  get webpack() {
    return {
      render: async (name, data) => {
        if (this.app.devServer) {
          const address = getServerAddress(this.app.devServer);

          const html = (
            await this.curl(`${this.protocol}://${path.join(address, name)}`)
          ).data.toString();

          const $ = cheerio.load(html, {});

          $('script').each((_idx, elm) => {
            const child = $(elm);
            const src = child.attr('src');
            if (
              src &&
              !src.startsWith('http:') &&
              !src.startsWith('https:') &&
              !src.startsWith('//')
            ) {
              child.attr('src', `//${path.join(address, src)}`);
            }
          });

          this.body = await this.renderString($.html({}), data);
        } else {
          return await this.render(name, data);
        }
      },
    };
  },
};

export default context;
