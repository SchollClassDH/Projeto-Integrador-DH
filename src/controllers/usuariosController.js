const fs = require('fs');
const {uuid}= require('uuidv4');
const bcrypt=require('bcryptjs')

const usuariosController = {
  create: (request, response) => {
    const nomeArquivosUsuarios = 'usuarios.json';
    console.log(request.body)

    const usuariosArquivo= fs.readFileSync(nomeArquivosUsuarios)
    const usuariosJSON = JSON.parse(usuariosArquivo);

    console.log(request.body.senha)
    const hash = bcrypt.hashSync(request.body.senha)

    const novoUsuario = {
      id: uuid(),
      ...request.body, 
      senha:hash
    }

    // console.log(usuariosJSON.push(novoUsuario))
    usuariosJSON.push(novoUsuario)

    fs.writeFileSync(nomeArquivosUsuarios, JSON.stringify(usuariosJSON))

    response.render('login', {
      title: 'Express',
    });
  },
}

module.exports = usuariosController