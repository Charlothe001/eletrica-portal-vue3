import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

import servicoRoutes from './routes/servicos.js'
import equipamentoRoutes from './routes/equipamentos.js'
import manutencaoRoutes from './routes/manutencoes.js'
import projetoRoutes from './routes/projetos.js'

dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())

// Rotas principais
app.use('/api/servicos', servicoRoutes)
app.use('/api/equipamentos', equipamentoRoutes)
app.use('/api/manutencoes', manutencaoRoutes)
app.use('/api/projetos', projetoRoutes)

// Conexão com MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/sentrys')
  .then(() => console.log('✅ Conectado ao MongoDB'))
  .catch(err => console.error('❌ Erro ao conectar ao banco:', err))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`))
