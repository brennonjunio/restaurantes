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
      horaFim: DataTypes.TIME,
      loja_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "horarios",
    }
  );
  return horarios;
};
