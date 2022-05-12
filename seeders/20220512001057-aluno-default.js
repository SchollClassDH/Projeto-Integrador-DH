'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.sequelize.query(`
      INSERT INTO alunos (id, nome, email, senha) VALUES(
        '9efd4dbd-329a-44bf-8021-54b0a526f579', 
        'teste',
        'teste@teste.com',
        '$2a$10$rS05U/26MtBlyCtF61vrdeTHCQ6V2PXHtTU1ljDYhrftW/k5gzF4S'
      );
    `)
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.sequelize.query(`
      DELETE FROM alunos WHERE id = '9efd4dbd-329a-44bf-8021-54b0a526f579';
    `);
  }
};
