"use strict";
const faker = require("faker");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let list = [];
    for (let i = 0; i < 150; i++) {
      let data = {
        student_name: faker.name.findName(),
        user_name: faker.internet.userName(),
        password: faker.internet.password(),
        gender: faker.datatype.number(1) === 1,
        dob: faker.datatype.datetime(),
        major: faker.name.jobType(),
        class_name: faker.company.companySuffix(),
        contact_number: faker.phone.phoneNumber(),
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      list.push(data);
    }
    await queryInterface.bulkInsert("students", list, {});
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
