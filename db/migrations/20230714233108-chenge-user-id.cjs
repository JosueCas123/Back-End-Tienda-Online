'use strict';



module.exports = {
  up: async (queryInterface) => {

    const { CUSTOMER_TABLE } = await import('../models/costomer.model.js');
    const { DataTypes } = await import('sequelize');

    await queryInterface.changeColumn(CUSTOMER_TABLE, 'user_id',{
      field: 'user_id',
      allowNull: false,
      type: DataTypes.INTEGER,
      unique: true,
    });
    //Customer.associate(); // Llama al método de asociación si es necesario

    // Realiza cualquier operación adicional si es necesario
    // Por ejemplo, puedes modificar columnas existentes o agregar datos iniciales

    return Promise.resolve();
  },

  down: async () => {


    return Promise.resolve();
  }
};
