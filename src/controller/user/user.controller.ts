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

  // @Get('/find')
  // async find (ctx: Context, next: any) {
  //   const name: string = ctx.body.name;
  //   const data = await this.userService.find(name);
  //   ctx.body = data;
  //   await next();
  // }
}
