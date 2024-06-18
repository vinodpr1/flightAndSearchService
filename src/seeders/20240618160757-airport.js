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
    await queryInterface.bulkInsert('Airports',[
        
      {
         name: 'Indira Gandhi International Airport',
         address:'New Udaan Bhawan, Opp. Terminal-3',
         cityId: 21,
         createdAt:new Date(),
         updatedAt:new Date()
      },
      {
          name: 'Chhatrapati Shivaji Maharaj International Airport',
          address:'Mumbai, Maharashtra 400099',
          cityId: 20,
          createdAt:new Date(),
          updatedAt:new Date()
      },
      {
          name: 'Kempegowda International Airport',
          address:'Devanahalli, Bengaluru, Karnataka 560300',
          cityId: 23,
          createdAt:new Date(),
          updatedAt:new Date()
      },
      {
          name: 'Rajiv Gandhi International Airport',
          address:'Shamshabad, Hyderabad, Telangana 500409',
          cityId: 24,
          createdAt:new Date(),
          updatedAt:new Date()
      },
      {
          name: 'Pune Airport',
          address:'New Airport Rd, Pune, Maharashtra 411032',
          cityId: 25,
          createdAt:new Date(),
          updatedAt:new Date()
      }
    ]
 ,{});

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
