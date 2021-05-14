"use strict";
const faker = require("faker");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let publicHouseList = [];
    for (let i = 0; i < 150; i++) {
      let publicHouse = {
        house_name: faker.company.companyName(),
        address:
          faker.address.streetAddress() +
          " " +
          faker.address.city() +
          " " +
          faker.address.country(),
        email: faker.internet.email(),
        representative_name: faker.name.findName(),
      };
      publicHouseList.push(publicHouse);
    }

    await queryInterface.bulkInsert("publication_house", publicHouseList, {});
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
