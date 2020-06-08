import { Context } from 'koa';
import { Get, Controller } from 'koa-route-decors';
import { UserService } from './user.service';
import * as jwt from 'jsonwebtoken';
import {JWT_SECRET} from '../../constants';

@Controller('/User')
export class UserController {
  constructor (private userService: UserService) {}

  @Get('/getListByPage')
  async getListByPage (ctx: Context, next: any) {
    const data = await this.userService.getListByPage(1, 10);
    ctx.result = data;
    await next();
  }

  @Get('/find')
  async find (ctx: Context, next: any) {
    console.log(ctx);
    const name: string = ctx.query.name;
    const data: any = await this.userService.find(name);
    ctx.result=data
    await next();
  }

  @Get('/login')
  async login(ctx: Context, next: any) {
    const token=jwt.sign({name:'183000',_id:'admin'},JWT_SECRET,{expiresIn:'2h'})
    ctx.result='Bearer '+token
    await next();
  }
}
