"use strict";
const faker = require("faker");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let list = [];
    for (let i = 0; i < 150; i++) {
      let data = {
        shelf: faker.datatype.number(),
        floor: faker.datatype.number(),
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      list.push(data);
    }
    await queryInterface.bulkInsert("shelves", list, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
