const { v4: uuid } = require('uuid');
const bcrypt = require('bcryptjs');

const { Aluno } = require('../database/models')

const usuariosController = {
  create: async (request, response) => {
    const hash = bcrypt.hashSync(request.body.senha)

    const novoUsuario = {
      id: uuid(),
      ...request.body,
      senha: hash
    }

    await Aluno.create(novoUsuario);

    response.render('login', {
      title: 'Express',
    });
  },
  update: async (request, response) => {
    console.log(request)
    await Aluno.update(request.body, {
      where: {
        id: request.session.idUsuario
      }
    });

    response.redirect('/perfil');
  },
  registerScreen: (_, response) => {
    response.render('cadastro');
  }
}

module.exports = usuariosController
