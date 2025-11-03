import mongoose from 'mongoose'

const servicoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  descricao: String,
  preco: Number,
  status: { type: String, enum: ['pendente', 'em andamento', 'concluído'], default: 'pendente' }
}, { timestamps: true })

export default mongoose.model('Servico', servicoSchema)
