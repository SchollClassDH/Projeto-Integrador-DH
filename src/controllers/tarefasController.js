// const fs = require('fs'); 
// const { v4: uuid } = require('uuid');

// const tarefasController = {
//     create: (request, response) => {
//         const tarefaUsuario = 'tarefas.json';        
//         console.log(request.body)
//         const tarefaArquivo = fs.readFileSync(tarefaUsuario);
//         const tarefasJSON = JSON.parse(tarefaArquivo);

//         const novaTarefa = {
//             id:uuid(),
//             ...request.body
//         }

//         tarefasJSON.push(novaTarefa);

//         fs.writeFileSync(tarefaUsuario, JSON.stringify(tarefasJSON))

//         response.render('formulario', {title: 'Express',});
//     }
// }

// module.exports = tarefasController