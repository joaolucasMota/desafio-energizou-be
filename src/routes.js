const express = require('express');
const router = express.Router();

const DataController = require('./controllers/DataController');

router.get('/clientes', DataController.buscarTodos);
router.get('/cliente/:id', DataController.buscarUm);
router.post('/cliente', DataController.inserir);
router.put('/cliente/:id', DataController.alterar);
router.delete('/cliente/:id', DataController.excluir);

module.exports = router;