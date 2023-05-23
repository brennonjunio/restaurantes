"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert(
      "horarios",
      [
        {
          diaSemana: "Domingo",
          horaIni: null,
          interIni: null,
          interFim: null,
          horaFim: null,
        },
        {
          diaSemana: "Segunda",
          horaIni: "12:00",
          interIni: null,
          interFim: null,
          horaFim: "22:00",
        },
        {
          diaSemana: "Terça",
          horaIni: "08:00",
          interIni: "12:00",
          interFim: "14:00",
          horaFim: "20:00",
        },
        {
          diaSemana: "Quarta",
          horaIni: "08:00",
          interIni: "12:00",
          interFim: "14:00",
          horaFim: "20:00",
        },
        {
          diaSemana: "Quinta",
          horaIni: "08:00",
          interIni: "12:00",
          interFim: "14:00",
          horaFim: "20:00",
        },
        {
          diaSemana: "Sexta",
          horaIni: "08:00",
          interIni: null,
          interFim: null,
          horaFim: "23:00",
        },
        {
          diaSemana: "Sabado",
          horaIni: "08:00",
          interIni: null,
          interFim: null,
          horaFim: "23:00",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("horarios", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
