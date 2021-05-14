"use strict";
const faker = require("faker");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let list = [];
    for (let i = 0; i < 150; i++) {
      let data = {
        author_id: faker.datatype.number({
          min: 1,
          max: 150,
        }),
        book_cate_id: faker.datatype.number({
          min: 1,
          max: 150,
        }),
        publication_house_id: faker.datatype.number({
          min: 1,
          max: 150,
        }),
        shelf_id: faker.datatype.number({
          min: 1,
          max: 150,
        }),
        book_name: faker.name.title(),
        publication_year: faker.date.past(2021).getFullYear() + "",
        status: faker.datatype.number(3) + "",
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      list.push(data);
    }
    await queryInterface.bulkInsert("books", list, {});
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
