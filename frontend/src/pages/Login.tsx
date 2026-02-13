// Importa o hook useState do React
import { useState } from 'react';
import api from '../api';

// Componente de login
function Login() {
  // Estado para armazenar o email
  const [email, setEmail] = useState('');

  // Estado para armazenar a senha
  const [password, setPassword] = useState('');

  // Função executada ao enviar o formulário
  const handleSubmit = async (event) => {
    // Evita o reload da página
    event.preventDefault();

    // Envia os dados para o backend
    await api.post('/login/search', {
      email: email,
      password: password,
    });

    // Limpa o formulário após enviar
    setEmail('');
    setPassword('');
  };

  // JSX da tela
  return (
    <div style={{ width: '300px', margin: '50px auto' }}>
      <h2>Login</h2>

      {/* Formulário */}
      <form onSubmit={handleSubmit}>

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
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

// Exporta o componente
export default Login;