module.exports = (sequelize, DataTypes) => {
    const tableDefinitions = {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      cursoId: {
        type: DataTypes.STRING,
        field: 'curso_id'
      },
      alunoId: {
        type: DataTypes.STRING,
        field: 'aluno_id'
      },
      materia: {
        type: DataTypes.STRING,
      },
      semana: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.STRING,
      },
      periodo: {
        type: DataTypes.STRING,
      },
      observacao: {
        type: DataTypes.VARCHAR,
      },
    }
  
    const tableConfiguration = {
      tableName: 'aulas',
      timestamps: false,
    }
  
    const AulasModel = sequelize.define('Aulas', tableDefinitions, tableConfiguration);
  
    return AulasModel;
  }