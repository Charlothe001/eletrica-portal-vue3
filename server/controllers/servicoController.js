import Servico from '../models/servicoModel.js'

export const listarServicos = async (req, res) => {
  try {
    const servicos = await Servico.find()
    res.json(servicos)
  } catch (err) {
    res.status(500).json({ error: 'Erro ao listar serviços' })
  }
}

export const criarServico = async (req, res) => {
  try {
    const novoServico = await Servico.create(req.body)
    res.status(201).json(novoServico)
  } catch (err) {
    res.status(400).json({ error: 'Erro ao criar serviço' })
  }
}
