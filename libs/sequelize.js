
import { Sequelize } from 'sequelize';
import { config } from '../config/config.js';
import { setupModel } from '../db/models/index.js';

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
  dialect:'postgres',
  logging:true
})


setupModel(sequelize);

export default sequelize;
