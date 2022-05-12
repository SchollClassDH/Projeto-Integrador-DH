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
  }

  const tableConfiguration = {
    tableName: 'alunos_cursos',
    timestamps: false,
  }

  const AreaModel = sequelize.define('AlunoCurso', tableDefinitions, tableConfiguration);

  return AreaModel;
}