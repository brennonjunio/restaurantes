const express = require("express");
const PublicoController = require("../controllers/PublicoController");
const LojasController = require("../controllers/LojasController");
const router = express.Router();

router.get("/", PublicoController.index);
router.get("/registrar", LojasController.store);

module.exports = router;
