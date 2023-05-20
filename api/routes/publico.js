const express = require("express");
const PublicoController = require("../controllers/PublicoController");
const LojasController = require("../controllers/LojasController");
const router = express.Router();

router.get("/", PublicoController.index);
router.post("/registrar", LojasController.store);
router.get("/lojas", LojasController.index);
router.delete("/lojas/:id", LojasController.delete);
router.put("/lojas/:id", LojasController.update);

module.exports = router;
