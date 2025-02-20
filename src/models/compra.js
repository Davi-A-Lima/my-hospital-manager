const mongoose = require('mongoose');

const compraSchema = new mongoose.Schema({
  fornecedor: { type: String, required: true },
  itens: [{ nome: String, quantidade: Number }],
  dataCompra: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Compra', compraSchema);