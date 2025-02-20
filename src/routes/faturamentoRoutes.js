const express = require('express');
const router = express.Router();
const faturamentoController = require('../controllers/faturamentoController');

router.post('/', faturamentoController.adicionarFatura);
router.get('/', faturamentoController.listarFaturas);

module.exports = router;