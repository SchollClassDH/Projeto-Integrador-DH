const { Aluno } = require('../database/models');

const perfilController = {
  index: async (request, response) => {
    const alunoPerfil = await Aluno.findByPk(request.session.idUsuario);
    const alunoEmail = await Aluno.findByPk(request.session.idUsuario);

    console.log(request.session.idUsuario)

    response.render('perfilDoUsuario', {
      title: 'Express',
      alunoPerfil,
      alunoEmail
    });
  }
}

module.exports = perfilController
