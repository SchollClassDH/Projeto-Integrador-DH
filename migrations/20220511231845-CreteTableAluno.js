'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.sequelize.query(`
      CREATE TABLE alunos(
        id varchar(36) NOT NULL,
        nome varchar(200) NOT NULL,
        email varchar(200) NOT NULL,
        senha varchar(200) NOT NULL,
        PRIMARY KEY(id)
      );
    `);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.sequelize.query(`
      DROP TABLE alunos
    `)
  }
};
