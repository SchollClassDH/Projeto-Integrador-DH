const fs = require('fs');
const { v4: uuid } = require('uuid');


const formAulasController = {
  create: (request, response) => {
    const aulas = 'formAulas.json';
    console.log(request.body);

    const aulasArquivo = fs.readFileSync(aulas);
    const formAulasJSON = JSON.parse(aulasArquivo);

    const novas = {
      id: uuid(),
      ...request.body
    }

    formAulasJSON.push(novas)

    fs.writeFileSync(aulas, JSON.stringify(formAulasJSON))

    response.render('aulas', { title: 'Express', tarefas: formAulasJSON });
  }
}

module.exports = formAulasController
