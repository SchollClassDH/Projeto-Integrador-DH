const {uuid} = require('uuidv4');
const { Aulas } = require('../database/models');

const aulasController = {
  index: async (request, response) => {
    const tarefasAulas = await Aulas.findAll({ where: { alunoId:request.session.idUsuario } })

    console.log(request.session.idUsuario);

    response.render('aulas', {
      title: 'Express',
      tarefasAulas
    });
  },
  create: async (request, response) => {

    const aula = {
      id: uuid(),
      ...request.body
    }

    await Aulas.create(aula);

    response.redirect('/aulas');
  }
}

module.exports = aulasController
