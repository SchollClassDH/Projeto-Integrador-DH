module.exports = (sequelize, DataTypes) => {
  const tableDefinitions = {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    senha: {
      type: DataTypes.STRING,
    },
  }

  const tableConfiguration = {
    tableName: 'alunos',
    timestamps: false,
  }

  const AlunoModel = sequelize.define('Aluno', tableDefinitions, tableConfiguration);

  AlunoModel.associate = (models) => {
  }

  return AlunoModel;
}