import { User } from '../db/models/user.model.js';
import bcrypt from 'bcrypt';
import boom from '@hapi/boom';
import sequelize from '../libs/sequelize.js';

export class UserServise {

  async create(data) {
    const hash = await bcrypt.hash(data.password, 10)
    const newUser = await sequelize.models.User.create({
      //clonamos el objeto y cambiamos el password
      ...data,
      password:hash
    });
    // codigo para no enviar el password
    delete newUser.dataValues.password
    return newUser;
  }

  async find() {
    const rta = await sequelize.models.User.findAll({
      include:'costomer'
    });
    return rta;
  }

  async findByEmail(email) {
    const rta = await sequelize.models.User.findOne({
    where:{email}
    });
    return rta;
  }

  async findOne(id) {
    const user = await sequelize.models.User.findByPk(id);
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
