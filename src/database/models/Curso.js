module.exports = (sequelize, DataTypes) => {
  const tableDefinitions = {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
    },
    professor: {
      type: DataTypes.STRING,
    },
    materia: {
      type: DataTypes.STRING,
    },
    conteudo: {
      type: DataTypes.STRING,
    },
    comentarios: {
      type: DataTypes.STRING,
    },
    periodo: {
      type: DataTypes.STRING,
    },
    horarioInicioFim: {
      type: DataTypes.TIME,
      field: 'horario_inicio_fim'
    },
    areaId: {
      type: DataTypes.STRING,
      field: 'area_id'
    },
  }

  const tableConfiguration = {
    tableName: 'cursos',
    timestamps: false,
  }

  const CursoModel = sequelize.define('Curso', tableDefinitions, tableConfiguration);

  CursoModel.associate = (models) => {
  }

  return CursoModel;
}