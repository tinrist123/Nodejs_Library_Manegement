'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class export_book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  export_book.init({
    staff_id: DataTypes.INTEGER,
    supplier_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'export_book',
  });
  return export_book;
};