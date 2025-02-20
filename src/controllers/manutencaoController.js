const Manutencao = require('../models/manutencaoModel');

// Função para adicionar uma nova manutenção
exports.adicionarManutencao = async (req, res) => {
  try {
    // Criar uma nova instância de Manutencao com os dados do corpo da requisição
    const novaManutencao = new Manutencao(req.body);
    
    // Salvar a nova manutenção no banco de dados
    await novaManutencao.save();
    
    // Enviar a resposta com status 201 (Criado) e o objeto de manutenção criado
    res.status(201).json(novaManutencao);
  } catch (error) {
    // Em caso de erro, enviar uma resposta com status 400 (Erro de requisição) e a mensagem de erro
    res.status(400).json({ message: 'Erro ao adicionar manutenção', error });
  }
};

// Função para listar todas as manutenções
exports.listarManutencoes = async (req, res) => {
  try {
    // Buscar todas as manutenções no banco de dados
    const manutencoes = await Manutencao.find();
    
    // Enviar a resposta com status 200 (OK) e o array de manutenções
    res.status(200).json(manutencoes);
  } catch (error) {
    // Em caso de erro, enviar uma resposta com status 500 (Erro do servidor) e a mensagem de erro
    res.status(500).json({ message: 'Erro ao buscar manutenções', error });
  }
};