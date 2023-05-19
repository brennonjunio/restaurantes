"use strict";
const { Model } = require("sequelize");
const horarios = require("./horarios");
module.exports = (sequelize, DataTypes) => {
  class lojas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  lojas.init(
    {
      descricao: DataTypes.STRING(250),
      cpf_cnpj: DataTypes.STRING(14),
      tipo_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "lojas",
    }
  );
  return lojas;
};
