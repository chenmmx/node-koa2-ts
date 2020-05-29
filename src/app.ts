import * as Koa from 'koa';
import * as Router from 'koa-router';
import { errorHander } from './middleware/error.middleware';
import { connection } from './database/index';
import { User } from './entities/user/user.entity';
import { UserModel } from './entities/user/user.model';

const app = new Koa();
const router = new Router();

router.get('/name', async (ctx, next) => {
  ctx.body = '13213';
  await next();
});
router.get('/age', async (ctx, next) => {
  const user = new User();
  user.username = '123';
  user.password = '123456';
  const result = await new UserModel().create(user);
  console.log(result);
  ctx.body = 'Hello World!';
  await next();
});

app.use(errorHander)
   .use(router.routes())
   .use(router.allowedMethods());

app.listen(3000, () => {
  connection();
});

console.log('Server running on port 3000');
