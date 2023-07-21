import { Model, DataTypes, Sequelize } from 'sequelize';

export const USER_TABLE = 'users';

export const UserSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  role:{
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue:"costomer"
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
};

export class User extends Model {
  //asociacion bidirecional
  static associate(models) {
    // Asociaciones de modelos (si es necesario)
    // hasOne quiere desir que la relacion esta del lado de Costomer
    this.hasOne(models.Customer,{
      //alias
      as: 'costomer',
      // tambien mandamos la forenket
      foreignKey:'userId'

    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false,
    };
  }
}
