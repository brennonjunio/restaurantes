const { tipos } = require("../models");
("use strict");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("tipos", [
      {
        descricao: "Restaurante",
      },
      {
        descricao: "Sorveteria",
      },
      {
        descricao: "Lanchonete",
      },
      {
        descricao: "Pizzaria",
      },
      {
        descricao: "Soparia",
      },
      {
        descricao: "Peixaria",
      },
      {
        descricao: "Pastelaria",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("tipos", null, {});
  },
};
