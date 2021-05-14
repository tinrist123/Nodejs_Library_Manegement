"use strict";
const faker = require("faker");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let list = [];
    for (let i = 0; i < 150; i++) {
      let data = {
        staff_id: faker.datatype.number({
          min: 1,
          max: 150,
        }),
        supplier_id: faker.datatype.number({
          min: 1,
          max: 150,
        }),
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      list.push(data);
    }

    await queryInterface.bulkInsert("import_books", list, {});
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
