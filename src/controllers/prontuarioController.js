const Prontuario = require('../models/prontuarioModel');

exports.adicionarProntuario = async (req, res) => {
  try {
    const novoProntuario = new Prontuario(req.body);
    await novoProntuario.save();
    res.status(201).json(novoProntuario);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao adicionar prontuário', error });
  }
};

exports.listarProntuarios = async (req, res) => {
  try {
    const prontuarios = await Prontuario.find();
    res.status(200).json(prontuarios);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar prontuários', error });
  }
};