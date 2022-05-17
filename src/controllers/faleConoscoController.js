const faleConoscoController = {
    index: (request, response) => {
      response.render('faleConosco', { title: 'Express'});
    },
}
module.exports = faleConoscoController
