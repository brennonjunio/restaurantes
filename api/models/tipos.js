"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tipos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.lojas, {
        foreignKey: "tipo_id",
        as: "lojas",
        // define association here
      });
    }
  }
  tipos.init(
    {
      descricao: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "tipos",
    }
  );
  return tipos;
};
