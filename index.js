const express = require("express");
const app = express();

const faker = require("faker");

const mysql = require("mysql2");

const db = require("./models");

db.sequelize.sync().then((req) => {
  app.listen(3001, () => {
    console.log("Server running at" + `http://localhost:3001`);
  });
});
