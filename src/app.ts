import * as path from 'path';
import * as Koa from 'koa';
import * as Router from 'koa-router';
import { autoRouter } from 'koa-route-decors';
import * as bodyparser from 'koa-bodyparser';
import * as compress from 'koa-compress';
import { errorHander } from './middleware/error.middleware';
import{ responseHandle } from './middleware/resoponse.middleware';
import { jwt } from './middleware/jwt.middleware';
import { connection } from './database/index';

// tslint:disable-next-line: no-floating-promises
start();

async function start () {
  const app = new Koa();
  const router = new Router();
  const subRouter = await autoRouter(path.resolve(__dirname, './'));
  router.use(subRouter.routes(), jwt); // jwt验证路由
  app.use(errorHander)
  .use(bodyparser())
  .use(compress())
  .use(subRouter.routes())
  .use(router.routes())
  .use(router.allowedMethods())
  .use(responseHandle);

  app.listen(3000, () => {
    connection();
  });

  console.log('Server running on port 3000');
}
