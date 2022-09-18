// Models
const User = require('../models/User');

const usersController = {
  index: (_request, response) => {
    response.status(200).json({ msg: 'Bem vindo a nova API.' });
  },
  showUser: async (request, response) => {
    const id = request.params.id;

    // verificar o comprimento do id
    if (id.length !== 24) {
      return response.status(422).json({ msg: 'Informe um id válido, deve conter 24 caracteres.' });
    }

    // verificar se o usuário existe
    const user = await User.findById(id, '-password');
    if (!user) {
      return response.status(404).json({ msg: 'Usuário não encontrado.' });
    }

    return response.status(200).json({ user });
  },
  showAllUsers: async (request, response) => {
    const user = await User.find({}, '-password');

    return response.status(200).json({ user });
  }
}

module.exports = usersController;