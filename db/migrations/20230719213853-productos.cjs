'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface) => {
   const {CategorySchema, CATEGORY_TABLE} = await import('../models/category.model.js');
   const {ProductSchema, PRODUCT_TABLE} = await import('../models/product.model.js');

   await queryInterface.createTable(CATEGORY_TABLE, CategorySchema)
   await queryInterface.createTable(PRODUCT_TABLE, ProductSchema)

  },

  down: async (queryInterface) => {
    const {CategorySchema, CATEGORY_TABLE} = await import('../models/category.model.js');
    const {ProductSchema, PRODUCT_TABLE} = await import('../models/product.model.js');

    await queryInterface.dropTable(CATEGORY_TABLE, CategorySchema);
    await queryInterface.dropTable(PRODUCT_TABLE, ProductSchema);
  }
};
