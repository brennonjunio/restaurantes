"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class horarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  horarios.init(
    {
      diaSemana: DataTypes.STRING(100),
      horaIni: DataTypes.TIME,
      interIni: DataTypes.TIME,
      interFim: DataTypes.TIME,
      horaFim: DataTypes.TIME,
    },
    {
      sequelize,
      modelName: "horarios",
    }
  );
  return horarios;
};
