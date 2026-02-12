// Importa o Pool do pg
const { Pool } = require('pg');

// Cria a conexão com o banco
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'users',
  password: 'postgrefatec',
  port: 5432,
});

// Exporta a conexão
module.exports = pool;
