const { lojas } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = class LojasController {
  static async store(req, res) {
    try {
      const salt = await bcrypt.genSalt(12);
      const senha = await bcrypt.hash(req.body.senha, salt);
      const loja = await lojas.create({
        descricao: req.body.descricao,
        cpf_cnpj: req.body.cpf_cnpj,
        tipo_id: req.body.tipo_id,
        senha: senha,
      });
      res.json({
        id: loja.id,
        descricao: loja.descricao,
        cpf_cnpj: loja.cpf_cnpj,
        tipo_id: loja.tipo_id,
        senha: loja.senha,
      });
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
      console.log(error);
    }
  }
};
