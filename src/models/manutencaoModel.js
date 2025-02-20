const mongoose = require('mongoose');

const manutencaoSchema = new mongoose.Schema({
  equipamento: { type: String, required: true },
  descricao: { type: String, required: true },
  dataManutencao: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Manutencao', manutencaoSchema);