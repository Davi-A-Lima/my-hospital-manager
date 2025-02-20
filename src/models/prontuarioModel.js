const mongoose = require('mongoose');

const prontuarioSchema = new mongoose.Schema({
  paciente: { type: String, required: true },
  descricao: { type: String, required: true },
  dataAtendimento: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Prontuario', prontuarioSchema);