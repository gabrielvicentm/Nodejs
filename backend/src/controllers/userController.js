const userService = require('../services/userService');

const register = async (req, res) => {
  const { name, email, password } = req.body;
  await userService.createUser(name, email, password);
  res.send('Usuário registrado');
};

module.exports = {
  register,
};
