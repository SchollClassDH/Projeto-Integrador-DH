const { Aluno } = require('../database/models');

const perfilController = {
  index: async (request, response) => {
    const alunoPerfil = await Aluno.findByPk(request.session.idUsuario)

    // console.log(alunoPerfil);

    response.render('perfilDoUsuario', { title: 'Express', alunoPerfil });
  }
}

module.exports = perfilController
