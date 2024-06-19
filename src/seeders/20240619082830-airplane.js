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
    await queryInterface.bulkInsert('Airplanes', [
       {
         modelNumber : 'Airbus A320neo',
         capacity : 370,
         createdAt : new Date(),
         updatedAt : new Date()
       },
       {
        modelNumber : 'Boeing 777-300ER',
        capacity : 370,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        modelNumber : 'Airbus A350-900',
        capacity : 370,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        modelNumber : 'Bombardier CRJ900',
        capacity : 370,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        modelNumber : 'Embraer E190',
        capacity : 370,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        modelNumber : 'Boeing 767-300ER',
        capacity : 370,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        modelNumber : 'Bombardier Dash 8 Q400',
        capacity : 370,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        modelNumber : 'Embraer E175',
        capacity : 370,
        createdAt : new Date(),
        updatedAt : new Date()
      }
      ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
