import { Context } from 'koa';
import { Get, Controller } from 'koa-route-decors';
import { UserService } from './user.service';

@Controller('/User')
export class User {
  constructor (private userService: UserService) {}
  @Get('/getListByPage')
  async getListByPage (ctx: Context, next: void) {
    const data = await this.userService.getListByPage(1, 10);
    ctx.body = data;
  }
}
