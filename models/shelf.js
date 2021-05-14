'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class shelf extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  shelf.init({
    shelf: DataTypes.STRING,
    floor: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'shelf',
  });
  return shelf;
};