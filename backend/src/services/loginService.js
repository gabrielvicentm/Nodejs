// Importa a conexão com o banco
const db = require('../utils/db');

// Função para criar usuário
exports.searchUser = async (name, email, password) => {
  // Query SQL pura
  const query = `
    SELECT * FROM users WHERE name, email, password = $1, $2, $3;
  `;

  // Executa no banco
  await db.query(query, [name, email, password]);
};