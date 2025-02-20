const express = require('express');
const router = express.Router();
const prontuarioController = require('../controllers/prontuarioController');

router.post('/', prontuarioController.adicionarProntuario);
router.get('/', prontuarioController.listarProntuarios);

module.exports = router;