// Importa o Express
const express = require('express');

// Importa o CORS
const cors = require('cors');

// Cria a aplicação
const app = express();

// Permite receber JSON no body
app.use(express.json());

// Libera CORS para o frontend
app.use(cors());

// Importa as rotas de usuário
const userRoutes = require('./src/routes/userRoutes');

// Define o prefixo das rotas
app.use('/users', userRoutes);

// Porta do servidor
const PORT = 3000;

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
