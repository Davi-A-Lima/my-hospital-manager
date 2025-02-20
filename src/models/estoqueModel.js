const mongoose = require('mongoose');

const estoqueSchema = new mongoose.Schema({
  produto: { type: String, required: true },
  quantidade: { type: Number, required: true },
  dataEntrada: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Estoque', estoqueSchema);