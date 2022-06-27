const { v4: uuid } = require('uuid');

const { Aulas, Curso } = require('../database/models');

const aulasController = {
  index: async (request, response) => {
    const tarefasAulas = await Aulas.findAll({ where: { alunoId: request.session.idUsuario } })

    response.render('aulas', {
      title: 'Express',
      tarefasAulas
    });
  },
  create: async (request, response) => {


    const aula = {
      id: uuid(),
      ...request.body,
      alunoId: request.session.idUsuario
    }

    await Aulas.create(aula);

    response.redirect('/aulas');
  },
  registerScreen: async (_, response) => {
    const cursos = await Curso.findAll();

    response.render('formulario', { cursos });
  }
}

module.exports = aulasController
