'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.sequelize.query(`
      CREATE TABLE alunos_cursos (
        id varchar(36) NOT NULL,
        aluno_id varchar(36) DEFAULT NULL,
        curso_id varchar(36) DEFAULT NULL,
        PRIMARY KEY (id),
        KEY aluno_id (aluno_id),
        CONSTRAINT alunoscursos_ibfk_1 FOREIGN KEY (curso_id) REFERENCES cursos (id),
        CONSTRAINT alunoscursos_ibfk_2 FOREIGN KEY (aluno_id) REFERENCES alunos (id)
      )
    `);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.sequelize.query(`
      DROP TABLE alunos_cursos
    `)
  }
};
