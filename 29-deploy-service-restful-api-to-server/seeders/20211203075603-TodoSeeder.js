'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    
    await queryInterface.bulkInsert('Todos', [
      {
        title: "Watching Movie",
        description: "You can do watching movie for 2 hours",
        startTime: new Date(),
        status: "Not finished",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        title: "Doing Technical Assignment",
        description: "Do Technical Assignment MySQL-Lanjutan",
        startTime: new Date(),
        status: "Finished",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Todos', null, {});
  }
};
