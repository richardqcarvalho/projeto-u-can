import client from '../database/connection';
import Sequelize from 'sequelize';

export type UserProps = {
  code?: number;
  name: string;
  birthDate: string;
  photo?: string;
};

export const UserModel = client.define('User', {
  code: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  birthDate: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  photo: {
    type: Sequelize.BLOB('long'),
    allowNull: true,
  },
});
