// Importa a conexão com o banco
const db = require('../utils/db');

// Função para buscar usuário
exports.searchUser = async (email, password) => {
  // Query SQL pura
  const query = `
    SELECT * FROM users WHERE email = $1 AND password = $2
  `;
 

  // Executa no banco
  return await db.query(query, [email, password ]) ;
};
