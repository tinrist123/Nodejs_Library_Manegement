"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("books", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      author_id: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "authors",
          key: "id",
          as: "author_id",
        },
      },
      book_cate_id: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "book_categories",
          key: "id",
          as: "book_cate_id",
        },
      },
      publication_house_id: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "publication_house",
          key: "id",
          as: "publication_house_id",
        },
      },
      shelf_id: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "shelves",
          key: "id",
          as: "shelf_id",
        },
      },
      book_name: {
        type: Sequelize.STRING,
      },
      publication_year: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("books");
  },
};
