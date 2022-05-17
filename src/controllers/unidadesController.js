const unidadesController = {
    index: (request, response) => {
      response.render('unidades', { title: 'Express'});
    },
}
module.exports = unidadesController
