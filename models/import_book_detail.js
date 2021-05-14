'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class import_book_detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  import_book_detail.init({
    book_id: DataTypes.INTEGER,
    export_id: DataTypes.INTEGER,
    price: DataTypes.DOUBLE,
    expired_date: DataTypes.DATE,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'import_book_detail',
  });
  return import_book_detail;
};