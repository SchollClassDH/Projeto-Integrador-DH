const { Aluno } = require('../database/models')

const {uuid} = require('uuidv4');
const bcrypt = require('bcryptjs');

const usuariosController = {
  create: async (request, response) => {
    const hash = bcrypt.hashSync(request.body.senha)

    const novoUsuario = {
      id: uuid(),
      ...request.body, 
      senha:hash
    }

    await Aluno.create(novoUsuario);
 
    response.render('login', {
      title: 'Express',
    });
  },
}

module.exports = usuariosController
