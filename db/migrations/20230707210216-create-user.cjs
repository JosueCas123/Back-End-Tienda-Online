'use strict';

module.exports = {
  up: async (queryInterface) => {
    const { USER_TABLE, UserSchema, User } = await import('../models/user.model.js');

    await queryInterface.createTable(USER_TABLE, UserSchema);
    User.associate(); // Llama al método de asociación si es necesario

    // Realiza cualquier operación adicional si es necesario
    // Por ejemplo, puedes modificar columnas existentes o agregar datos iniciales

    return Promise.resolve();
  },

  down: async (queryInterface) => {
    const { USER_TABLE } = await import('../models/user.model.js');

    // Realiza cualquier operación adicional de rollback si es necesario
    // Por ejemplo, puedes eliminar columnas adicionales o revertir los datos iniciales

    await queryInterface.dropTable(USER_TABLE);

    return Promise.resolve();
  }
};
