import sequelize from '../database/connection';
import Sequelize from 'sequelize';

const ImageType = sequelize.define('image', {
  type: Sequelize.STRING,
  name: Sequelize.STRING,
  data: Sequelize.BLOB('long'),
});

export default ImageType;
