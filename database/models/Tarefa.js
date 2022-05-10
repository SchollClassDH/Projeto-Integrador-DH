module.exports = (sequelize, DataTypes) => {
    const tableDefinitions = {

        // colocar as informações que ficam dentro da pasta tarefas.json (exemplo: id - descrição - valor - filename)
        // apos colocar as informações aqui, dentro de cada "item", devemos colocar a seguinte informação abaixo

        // id: {
        // type: DataTypes.STRING,
        // primaryKey: true,
        // }

    }

    // const tableConfiguration = {
    //     tableName: 'nome da tabela do banco de dados'
    //     timestamp: false,
     
    }

    const Tarefa = sequelize.define('Tarefa', tableDefinitions, tableConfiguration);
