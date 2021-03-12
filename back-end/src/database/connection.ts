import config from '../config/db.config';
import { Dialect, OperatorsAliases, Sequelize } from 'sequelize';

const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect as Dialect,
  operatorsAliases: (false as unknown) as OperatorsAliases,
});

export default sequelize;
