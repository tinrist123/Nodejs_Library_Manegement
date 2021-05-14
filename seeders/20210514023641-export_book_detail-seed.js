"use strict";
const faker = require("faker");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let list = [];
    for (let i = 0; i < 150; i++) {
      let data = {
        book_id: faker.datatype.number({
          min: 1,
          max: 150,
        }),
        export_id: faker.datatype.number({
          min: 1,
          max: 150,
        }),
        quantity: faker.datatype.number(10),
        price: faker.finance.amount(),
        expired_date: faker.date.future(),
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      list.push(data);
    }
    await queryInterface.bulkInsert("export_book_details", list, {});
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
