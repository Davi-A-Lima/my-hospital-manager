const express = require('express');
const router = express.Router();
const compraController = require('../controllers/compraController');

router.post('/', compraController.adicionarCompra);
router.get('/', compraController.listarCompras);

module.exports = router;