import config from '../config/db.config';
import { Dialect, Sequelize } from 'sequelize';

const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect as Dialect,
});

export default sequelize;
