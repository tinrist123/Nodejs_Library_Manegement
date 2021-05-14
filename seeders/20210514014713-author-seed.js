"use strict";
const faker = require("faker");
const author = require("../models/author");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let authorList = [];
    for (let i = 0; i < 150; i++) {
      let author = {
        author_name: faker.name.findName(),
        personal_website: faker.internet.url(),
        description: faker.lorem.paragraphs(5),
      };
      authorList.push(author);
    }
    await queryInterface.bulkInsert("authors", authorList, {});
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
