import { User } from './user.entity';
import { getRepository, Repository } from 'typeorm';
import { Injectable } from 'koa-route-decors';

@Injectable()
export class UserModel {
  private respository: Repository<User>;
  private select: (keyof User)[] = ['id', 'username'];
  constructor () {
    this.respository = getRepository(User);
  }

  async create (user: User) {
    const result = await this.respository.save(user);
    return result;
  }

  async findById (id: number) {
    const user = await this.respository.findOne(id, { select: this.select });
    return user;
  }

  async findByUsername (username: string) {
    const user = await this.respository.findOne({ username }, { select: this.select });
    return user;
  }
}
