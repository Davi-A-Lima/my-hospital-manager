const Faturamento = require('../models/faturamentoModel');

exports.adicionarFatura = async (req, res) => {
  try {
    const novaFatura = new Faturamento(req.body);
    await novaFatura.save();
    res.status(201).json(novaFatura);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao adicionar fatura', error });
  }
};

exports.listarFaturas = async (req, res) => {
  try {
    const faturas = await Faturamento.find();
    res.status(200).json(faturas);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar faturas', error });
  }
};