'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface) => {
    const { ORDER_PRODUCT_TABLE, OrderProductSchema } = await import('../models/order.product.model.js');

    await queryInterface.createTable(ORDER_PRODUCT_TABLE, OrderProductSchema);
  // Llama al método de asociación si es necesario

    // Realiza cualquier operación adicional si es necesario
    // Por ejemplo, puedes modificar columnas existentes o agregar datos iniciales

    return Promise.resolve();
  },

  down: async (queryInterface) => {
    const { ORDER_PRODUCT_TABLE} = await import('../models/order.product.model.js');

    await queryInterface.dropTable(ORDER_PRODUCT_TABLE);

    return Promise.resolve();
  }
};
