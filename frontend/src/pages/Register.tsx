// Importa o hook useState do React
import { useState } from 'react';
import api from '../api';

// Componente de cadastro
function Register() {
  // Estado para armazenar o nome
  const [name, setName] = useState('');

  // Estado para armazenar o email
  const [email, setEmail] = useState('');

  // Estado para armazenar a senha
  const [password, setPassword] = useState('');

  // Função executada ao enviar o formulário
  const handleSubmit = async (event) => {
    // Evita o reload da página
    event.preventDefault();

    // Envia os dados para o backend
    await api.post('/users/register', {
      name: name,
      email: email,
      password: password,
    });

    // Limpa o formulário após enviar
    setName('');
    setEmail('');
    setPassword('');
  };

  // JSX da tela
  return (
    <div style={{ width: '300px', margin: '50px auto' }}>
      <h2>Cadastro de Usuário</h2>

      {/* Formulário */}
      <form onSubmit={handleSubmit}>
        
        {/* Input de nome */}
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

        {/* Input de email */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        {/* Input de senha */}
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br /><br />

        {/* Botão de envio */}
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

// Exporta o componente
export default Register;
