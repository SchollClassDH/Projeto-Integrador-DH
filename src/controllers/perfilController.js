const { Aluno } = require('../database/models');

const perfilController = {
  index: async (request, response) => {
    const aluno = await Aluno.findByPk(request.session.idUsuario);

    console.log(request.session.idUsuario)

    response.render('perfilDoUsuario', {
      title: 'Express',
      aluno
    });
  }
}

module.exports = perfilController
