
const fs = require('fs');
const aulasController = {
  index: (request, response) => {
    const nomeArquivosTarefas = 'formAulas.json';
    const tarefasArquivo = fs.readFileSync(nomeArquivosTarefas);

    console.log(tarefasArquivo);

    const tarefas = JSON.parse(tarefasArquivo);
    response.render('aulas', {
      title: 'Express',
      tarefas,
    });
  }
}

module.exports = aulasController
