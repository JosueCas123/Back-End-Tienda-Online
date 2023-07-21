'use strict';

module.exports = {
  up: async (queryInterface) => {

    const { CUSTOMER_TABLE, CustomerSchema } = await import('../models/costomer.model.js');

    await queryInterface.createTable(CUSTOMER_TABLE, CustomerSchema);
    //Customer.associate(); // Llama al método de asociación si es necesario

    // Realiza cualquier operación adicional si es necesario
    // Por ejemplo, puedes modificar columnas existentes o agregar datos iniciales

    return Promise.resolve();
  },

  down: async (queryInterface) => {
    const { CUSTOMER_TABLE } = await import('../models/costomer.model.js');

    // Realiza cualquier operación adicional de rollback si es necesario
    // Por ejemplo, puedes eliminar columnas adicionales o revertir los datos iniciales

    await queryInterface.dropTable(CUSTOMER_TABLE);

    return Promise.resolve();
  }
};
