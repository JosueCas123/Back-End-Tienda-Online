import { Boom } from "@hapi/boom";
import sequelize from "../libs/sequelize.js";
import bcrypt from 'bcrypt';

export class CustomerService {

  constructor() {}

  async find() {
    const rta = await sequelize.models.Customer.findAll({
      include:['user']
    });
    return rta;
  }

  async findOne(id) {
    const user = await sequelize.models.Customer.findByPk(id);
    if (!user) {
      throw Boom.notFound('customer not found');
    }
    return user;
  }

  async create(data) {
    // lo que has este codigo es al momento de crear el cliente tambien le pasamos el usuario
    const hash = await bcrypt.hash(data.user.password, 10);
    const newData = {
      ...data,
      user:{
        ...data.user,
        password:hash
      }
    }
    //const newUser = await sequelize.models.User.create(data.user)
    const newCustomer = await sequelize.models.Customer.create(newData,{
      include:['user']
    });
    return newCustomer;
  }

  async update(id, changes) {
    const model = await this.findOne(id);
    const rta = await model.update(changes);
    return rta;
  }

  async delete(id) {
    const model = await this.findOne(id);
    await model.destroy();
    return { rta: true };
  }

}
