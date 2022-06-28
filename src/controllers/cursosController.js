const cursosController = {
  index: (request, response) => {
    response.render('cursos', { title: 'Express' });
  },
}
module.exports = cursosController
