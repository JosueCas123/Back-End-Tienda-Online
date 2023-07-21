import boom from '@hapi/boom';

import sequelize from '../libs/sequelize.js';



export class OrderService {

  constructor(){
  }

  async create(data) {
    const newOrder = await sequelize.models.Order.create(data);
    return newOrder;
  }
  async addItem(data){
    const newItems = await sequelize.models.OrderProduct.create(data);
    return newItems ;
  }

  async find() {
    return [];
  }

  async findOne(id) {
    const order = await sequelize.models.Order.findByPk(id, {
      //anidacion que se trae al customer y usuario
      include: [
        {
          association: 'customer',
          include: ['user']
        },
        'items'
      ]
    });
    return order;
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }

}

