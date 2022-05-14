'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.sequelize.query(`
      CREATE TABLE cursos (
        id varchar(36) NOT NULL,
        professor varchar(100) NOT NULL,
        nome varchar(255) NOT NULL,
        materia varchar(100) NOT NULL,
        conteudo varchar(100) NOT NULL,
        comentarios varchar(100) NOT NULL,
        periodo varchar(100) NOT NULL,
        horario_inicio_fim time NOT NULL,
        area_id varchar(36) DEFAULT NULL,
        PRIMARY KEY (id),
        FOREIGN KEY area_foreign(area_id) REFERENCES areas(id)	
      )
    `);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.sequelize.query(`
      DROP TABLE cursos
    `)
  }
};
