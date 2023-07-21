import {faker} from '@faker-js/faker';
import boom from '@hapi/boom';
import sequelize from '../libs/sequelize.js';




export class ProductsServise {

  constructor(){
    this.products = [];
    this.generate();
    // this.pool = pool;
    // //error
    // this.pool.on('error', (err) => console.error(err))
  }
  generate(){

    const limit = 100
    for (let index = 0; index < limit ; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
        isBlock: faker.datatype.boolean()
      })

    }
  }

  async create(data){

    const newProduct = await sequelize.models.Product.create(data)
    return newProduct

  }
  async find(query){

    const option = {
      include:['category'],
    }
    const {offset, limit} = query;
    if (offset && limit) {
      option.limit = limit,
      option.offset = offset
    }
    const product = await sequelize.models.Product.findAll(option)
    return product;
  }
  async finOne(id){

    const produc =  await sequelize.models.Product.find(items => items.id === id)
    if (!produc) {
      throw boom.notFound('product not found')
    }

    if(produc.isBlock){
      throw boom.conflict('Esta bloqueado')
    }

    return produc
  }
  async update(id, changes){
    const index = await sequelize.models.Product.findIndex(item => item.id === id)
    if (index === -1) {
      throw boom.notFound('no se encontro el producto')
    }

    const products =  this.Product[index]
    this.Product[index] = {
      ...products,
      ...changes
    }
    return this.Product[index]
  }
  async delete(id){
    const index = await sequelize.models.Product.findIndex(item => item.id === id)
    if (index === -1) {
      throw boom.notFound('product not fount')
    }

    this.Product.slice(index, 1)

    return {id}

  }
}
