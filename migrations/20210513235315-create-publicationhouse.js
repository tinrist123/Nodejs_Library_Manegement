"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable("publication_house", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      house_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      address: Sequelize.STRING,
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      representative_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable("users");
  },
};
