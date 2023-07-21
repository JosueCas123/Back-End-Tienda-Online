'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface) => {
    const {OrderSchema, ORDER_TABLE} = await import('../models/orders.model.js');
    await queryInterface.createTable(ORDER_TABLE, OrderSchema)
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface) => {

    const { ORDER_TABLE} = await import('../models/orders.model.js');
    await queryInterface.dropTable(ORDER_TABLE)

  }
};
