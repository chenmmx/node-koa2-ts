import { Injectable } from 'koa-route-decors';
@Injectable()
export class UserService {
  async getListByPage (pageIndex: number, pageSize: number) {
    const list = [{ id: 1, name: 123 }, { id: 2, name: 222 }];
    return list;
  }
}
