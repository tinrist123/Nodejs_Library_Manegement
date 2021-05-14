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
        staff_id: faker.datatype.number({
          min: 1,
          max: 150,
        }),
        student_id: faker.datatype.number({
          min: 1,
          max: 150,
        }),
        actual_return_date: faker.date.future(),
        return_date: faker.date.future(),
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      list.push(data);
    }
    await queryInterface.bulkInsert("renting_books", list, {});
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
