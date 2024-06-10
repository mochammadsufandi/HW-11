'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('ToDos', [
    {
      title : 'Get Up',
      description : 'Get Up',
      duration_minute : 30,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      title : 'Take a Bath',
      description : 'Mandi Pagi',
      duration_minute : 20,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      title : 'Learn FSWD',
      description : 'Meraih mimpi',
      duration_minute : 120,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      title : 'Do Week Homework',
      description : 'Mengerjakan PR',
      duration_minute : 120,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      title : 'Refreshing',
      description : 'Kopi Senja',
      duration_minute : 60,
      createdAt : new Date(),
      updatedAt : new Date()
    },
   ],{})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('ToDos', null, {});
  }
};
