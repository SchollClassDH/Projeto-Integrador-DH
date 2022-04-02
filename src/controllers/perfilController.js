const perfilController = {
    index: (request, response) => {
        const perfil = [

        ]

        response.render('perfilDoUsuario', { title: 'Express', perfil });
    }
}

module.exports = perfilController
