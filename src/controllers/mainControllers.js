const mainControllers = {



}; 

const db = require ('../../database/models')

let todasTarefas = db.Tarefa.findAll();
console.log(todasTarefas);



module.export = mainControllers;