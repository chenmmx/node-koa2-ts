import { Context } from 'koa';
import { logger } from '../core/logger';

export async function errorHander (ctx: Context, next: () => Promise<any>) {
  try {
    await next();
  } catch (err) {
    if (!err.code) {
      logger.error(err.stack);
    }
    ctx.body = {
      code: err.code || -1,
      message: err.message.trim()
    };
    ctx.status = 200;
  }
}
