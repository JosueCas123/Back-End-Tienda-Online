import { User } from '../db/models/user.model.js';
import boom from '@hapi/boom';

export class UserServise {

  async create(data) {
    const newUser = await User.create(data);
    return newUser;
  }

  async find() {
    const rta = await User.findAll({
      include:'costomer'
    });
    return rta;
  }

  async findOne(id) {
    const user = await User.findByPk(id);
    if (!user) {
      throw boom.notFound('User not found');
    }
    return user;
  }

  async update(id, changes) {
    const user = await this.findOne(id);
    const rta = await user.update(changes);
    return rta;
  }

  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();
    return { id };
  }
}
