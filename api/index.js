const express = require("express");
const routerPublico = require("./routes/publico");

const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/", routerPublico);

app.listen(process.env.PORT, () => {
  console.log(`Servidor foi iniciado,api na porta:` + process.env.PORT);
});
