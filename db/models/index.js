import { Category, CategorySchema } from "./category.model.js";
import { Customer, CustomerSchema } from "./costomer.model.js";
import { OrderProduct, OrderProductSchema } from "./order.product.model.js";
import { Order, OrderSchema } from "./orders.model.js";
import { Product, ProductSchema } from "./product.model.js";
import { User, UserSchema } from "./user.model.js";

export function setupModel(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize))
  Order.init(OrderSchema, Order.config(sequelize))
  OrderProduct.init(OrderProductSchema, OrderProduct.config(sequelize));

  //asociacis
  User.associate(sequelize.models)
  Customer.associate(sequelize.models);
  Category.associate(sequelize.models);
  Product.associate(sequelize.models)
  Order.associate(sequelize.models)
  //OrderProduct.associate(sequelize.models)

}
