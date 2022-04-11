const usuarios = require('../../usuarios.json');
const bcrypt = require('bcryptjs');

const authController = {
    show: (request, response) => {
        response.render('login');
    },
    login: (request, response) => {
        
        const { login, senha } = request.body;

        const usuarioEncotrado = usuarios.find((usuario) => usuario.login === login);

        if (!usuarioEncotrado) {
            return response.status(401).render('login');
        }


        const ehSenhaCorreta = bcrypt.compareSync(senha, usuarioEncotrado.senha);

        if (!ehSenhaCorreta) {
            return response.status(401).render('login');
        }

        request.session.autorizado = true;

        return response.redirect('/formulario/');
    },
}

module.exports = authController;
