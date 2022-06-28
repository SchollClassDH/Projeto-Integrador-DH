'use strict';

module.exports = {
  async up(queryInterface) {
    return queryInterface.sequelize.query(`
      INSERT INTO cursos VALUES
      (
        'b15c5f29-a127-4d65-a739-120013b3a06e', 
        'Tsunode',
        'Full Stack',
        'Programação',
        'Programação',
        'Programação',
        'Noturno',
        '19:30',
        NULL
      ),
      (
        '67d359dc-c3ab-4d37-95d5-9a78091c7f85', 
        'Tsunode',
        'Linkedin',
        'Programação',
        'Programação',
        'Programação',
        'Noturno',
        '19:30',
        NULL
      ),
      (
        'f3df1587-e3ae-4373-ba0f-ca1d730e0a91', 
        'Tsunode',
        'HTML/CSS Avançado',
        'Programação',
        'Programação',
        'Programação',
        'Noturno',
        '19:30',
        NULL
      );
    `)
  },

  async down(queryInterface) {
    return queryInterface.sequelize.query(`
      DELETE FROM cursos;
    `);
  }
};
