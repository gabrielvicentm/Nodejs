const loginService = require('../services/loginService');

const search = async (req, res) => {
  const { name, email, password } = req.body;
  await loginService.searchUser(name, email, password);
  res.send('Acho que foi o login');
};

module.exports = {
  search,
};