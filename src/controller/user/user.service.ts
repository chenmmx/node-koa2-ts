import { Injectable } from 'koa-route-decors';
import { UserModel } from '../../entities/user/user.model';
@Injectable()
export class UserService {
//   constructor (private userModel: UserModel) {}
  async getListByPage (pageIndex: number, pageSize: number) {
    const list = [{ id: 1, name: 123 }, { id: 2, name: 222 }];
    return list;
  }

  async find (name: string) {
    const res = await new UserModel().findByUsername(name);
    return res;
  }
}
