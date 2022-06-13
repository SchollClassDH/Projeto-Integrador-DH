const bcrypt = require('bcryptjs');
const { Aluno } = require('../database/models');


const authController = {
  show: (request, response) => {
    response.render('login');
  },
  login: async (request, response) => {

    const { login, senha } = request.body;

    const usuarioEncotrado = await Aluno.findOne({
      where: {
        email: login
      }
    });

    if (!usuarioEncotrado) {
      return response.status(401).render('login');
    }

    const ehSenhaCorreta = bcrypt.compareSync(senha, usuarioEncotrado.senha);

    if (!ehSenhaCorreta) {
      return response.status(401).render('login');
    }

    request.session.autorizado = true;
    request.session.idUsuario = usuarioEncotrado.id;

    return response.redirect('/formulario');
  },
}

module.exports = authController;
