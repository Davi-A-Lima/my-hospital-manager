const express = require('express');
const router = express.Router();
const manutencaoController = require('../controllers/manutencaoController');

router.post('/', manutencaoController.adicionarManutencao);
router.get('/', manutencaoController.listarManutencoes);

module.exports = router;