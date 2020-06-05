import { Context } from 'koa';
import { Get, Controller } from 'koa-route-decors';
import { UserService } from './user.service';

@Controller('/User')
export class UserController {
  constructor (private userService: UserService) {}

  @Get('/getListByPage')
  async getListByPage (ctx: Context, next: any) {
    const data = await this.userService.getListByPage(1, 10);
    ctx.body = data;
    await next();
  }

  @Get('/find')
  async find (ctx: Context, next: any) {
    console.log(ctx);
    const name: string = ctx.query.name;
    const data: any = await this.userService.find(name);
    console.log(data);
    ctx.body = data ? {
      code: 0,
      msg: '成功',
      data
    } : {
      code: -1,
      msg: '失败',
      data: []
    };
    await next();
  }
}
