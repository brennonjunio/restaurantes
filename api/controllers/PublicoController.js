module.exports = class PublicoController {
  static index(req, res) {
    const moment = require("moment-timezone");
    const data = moment().tz("America/Manaus");
    const dia = data.format("DD");
    const mes = data.format("MM");
    const ano = data.format("YYYY");
    const hora = data.format("HH");
    const minuto = data.format("mm");

    const dataFormatada = `${dia}/${mes}/${ano} ${hora}:${minuto}`;

    res.json("Api Rodando");
    console.log(dataFormatada);
  }
};
