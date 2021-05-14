"use strict";
const faker = require("faker");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let list = [];
    for (let i = 0; i < 150; i++) {
      let data = {
        supplier_name: faker.vehicle.manufacturer(),
        address:
          faker.address.streetAddress() +
          " " +
          faker.address.city() +
          " " +
          faker.address.country(),
        cell_phone: faker.phone.phoneNumber(),
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      list.push(data);
    }
    await queryInterface.bulkInsert("suppliers", list, {});
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
