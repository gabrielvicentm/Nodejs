const loginService = require('../services/loginService');

const search = async (req, res) => {
  const { name, email, password } = req.body;
  await loginService.searchUser(name, email, password);
   console.log('Login funcionou');
};

module.exports = {
  search,
};