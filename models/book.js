"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  book.init(
    {
      author_id: DataTypes.INTEGER,
      book_cate_id: DataTypes.INTEGER,
      publication_house_id: DataTypes.INTEGER,
      shelf_id: DataTypes.INTEGER,
      book_name: DataTypes.STRING,
      publication_year: DataTypes.STRING,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "book",
    }
  );
  return book;
};
