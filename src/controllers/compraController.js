const Compra = require('../models/compra');

exports.adicionarCompra = async (req, res) => {
  try {
    const novaCompra = new Compra(req.body);
    await novaCompra.save();
    res.status(201).json(novaCompra);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao adicionar compra', error });
  }
};

exports.listarCompras = async (req, res) => {
  try {
    const compras = await Compra.find();
    res.status(200).json(compras);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar compras', error });
  }
};