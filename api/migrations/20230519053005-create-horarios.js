"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("horarios", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      diaSemana: {
        type: Sequelize.STRING(100),
      },
      horaIni: {
        type: Sequelize.TIME,
      },
      interIni: {
        type: Sequelize.TIME,
      },
      interFim: {
        type: Sequelize.TIME,
      },
      horaFim: {
        type: Sequelize.TIME,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("horarios");
  },
};
