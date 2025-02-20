const mongoose = require('mongoose');

const faturamentoSchema = new mongoose.Schema({
  cliente: { type: String, required: true },
  valor: { type: Number, required: true },
  dataFatura: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Faturamento', faturamentoSchema);