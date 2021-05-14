"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class renting_book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  renting_book.init(
    {
      book_id: DataTypes.INTEGER,
      staff_id: DataTypes.INTEGER,
      student_id: DataTypes.INTEGER,
      actual_return_date: DataTypes.DATE,
      return_date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "renting_book",
    }
  );
  return renting_book;
};
