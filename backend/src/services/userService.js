// Importa a conexão com o banco
const db = require('../utils/db');

// Função para criar usuário
exports.createUser = async (name, email, password) => {
  // Query SQL pura
  const query = `
    INSERT INTO users (name, email, password)
    VALUES ($1, $2, $3)
  `;

  // Executa no banco
  await db.query(query, [name, email, password]);
};
