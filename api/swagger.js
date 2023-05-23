const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Docs dos Restaurante",
      version: "1.0.0",
      description: "CRUD dos Restaurantes",
    },
  },
  apis: ["./routes/publico.js"], // Insira o caminho dos seus arquivos de rotas aqui
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
