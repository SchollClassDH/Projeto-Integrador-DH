'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.sequelize.query(`
      CREATE TABLE aulas (
        id varchar(36) NOT NULL,
        curso_id varchar(36) NOT NULL,
        aluno_id varchar(36) NOT NULL,
        materia varchar(100) NOT NULL,
        semana varchar(100) NOT NULL,
        status varchar(100) NOT NULL,
        periodo varchar(100) NOT NULL,
        observacao varchar(100) NOT NULL,
        PRIMARY KEY (id),
        FOREIGN KEY curso_foreign(curso_id) REFERENCES cursos(id),
        FOREIGN KEY aluno_foreign(aluno_id) REFERENCES alunos(id)
      )
    `);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.sequelize.query(`
      DROP TABLE aulas
    `)
  }
};
