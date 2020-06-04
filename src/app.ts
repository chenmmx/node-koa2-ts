import * as path from 'path';
import * as Koa from 'koa';
import * as Router from 'koa-router';
import { autoRouter } from 'koa-route-decors';
import { errorHander } from './middleware/error.middleware';
import { connection } from './database/index';

// tslint:disable-next-line: no-floating-promises
start();

async function start () {
  const app = new Koa();
  const router = new Router();
  const subRouter = await autoRouter(path.resolve(__dirname, './'));
  app.use(errorHander)
  .use(subRouter.routes())
  .use(router.routes())
  .use(router.allowedMethods());

  app.listen(3000, () => {
    connection();
  });

  console.log('Server running on port 3000');
}
