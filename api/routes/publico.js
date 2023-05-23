// const express = require("express");
// const PublicoController = require("../controllers/PublicoController");
// const LojasController = require("../controllers/LojasController");
// const router = express.Router();

// router.get("/", PublicoController.index);
// router.post("/registrar", LojasController.store);
// router.get("/lojas", LojasController.index);
// router.delete("/lojas/:id", LojasController.delete);
// router.put("/lojas/:id", LojasController.update);

// module.exports = router;
const express = require("express");
const LojasController = require("../controllers/LojasController");
const PublicoController = require("../controllers/PublicoController");

const router = express.Router();

/**
 * @swagger
 * /:
 *   get:
 *     summary: Rota inicial
 *     description: Retorna a página inicial da API
 *     responses:
 *       200:
 *         description: Sucesso
 *
 * /registrar:
 *   post:
 *     summary: Rota de registro
 *     description: Registra uma nova loja
 *     parameters:
 *       - in: path
 *         name: loja
 *         description: Dados da loja a ser registrada
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             descricao:
 *               type: string
 *               description: Descrição da loja
 *             tipo_id:
 *               type: integer
 *               description: ID do tipo da loja
 *             cpf_cnpj:
 *               type: string
 *               description: CPF ou CNPJ da loja
 *     responses:
 *       200:
 *         description: Sucesso
 *
 * /lojas:
 *   get:
 *     summary: Rota de listagem de lojas
 *     description: Retorna uma lista de lojas
 *     responses:
 *       200:
 *         description: Sucesso
 *
 * /lojas/{id}:
 *   delete:
 *     summary: Rota de exclusão de loja
 *     description: Exclui uma loja pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID da loja a ser excluída
 *     responses:
 *       200:
 *         description: Sucesso
 *
 *   put:
 *     summary: Rota de atualização de loja
 *     description: Atualiza uma loja pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID da loja a ser atualizada
 *       - in: body
 *         name: lojal
 *         description: Dados da loja a ser atualizada
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             descricao:
 *               type: string
 *               description: Descrição da loja
 *             tipo_id:
 *               type: integer
 *               description: ID do tipo da loja
 *             cpf_cnpj:
 *               type: string
 *               description: CPF ou CNPJ da loja
 *     responses:
 *       200:
 *         description: Sucesso
 */

router.get("/", PublicoController.index);
router.post("/registrar", LojasController.store);
router.get("/lojas", LojasController.index);
router.delete("/lojas/:id", LojasController.delete);
router.put("/lojas/:id", LojasController.update);

module.exports = router;
