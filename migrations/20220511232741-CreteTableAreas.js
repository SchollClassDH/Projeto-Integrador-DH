'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.sequelize.query(`
      CREATE TABLE areas (
        id varchar(36) NOT NULL,
        tipo varchar(255) DEFAULT NULL
      )
    `);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.sequelize.query(`
      DROP TABLE areas
    `)
  }
};
