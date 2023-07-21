import { DataTypes, Model, Sequelize } from 'sequelize';
import {USER_TABLE} from '../models/user.model.js'


export const CUSTOMER_TABLE = 'customers';

export const CustomerSchema =  {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  lastName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'last_name',
  },
  phone: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
  userId: {
    field: 'user_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true,
    // objeto que relaciona la tabla
    references: {
      model:USER_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }

}

export class Customer extends Model {

  static associate(models) {
    //resive el modelo al que sera relacuacuin // alias
    this.belongsTo(models.User, {as: 'user'});
    this.hasMany(models.Order, {
      as: 'order',
      foreignKey: 'customer_id'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CUSTOMER_TABLE,
      modelName: 'Customer',
      timestamps: false
    }
  }
}
