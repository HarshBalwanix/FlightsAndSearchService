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
    name:'Chaudhary Charan Singh International Airport',
    cityId:5,
    address:'Amausi, Lucknow, Uttar Pradesh 226009',
    createdAt:new Date(),
    updatedAt:new Date()
  },
  {
    name:'Indira Gandhi International Airport',
  cityId:1,
  address:'Indira Gandhi International Airport, New Delhi, Delhi 110037',
  createdAt:new Date(),
  updatedAt:new Date()},
  {
    name:'Chhatrapati Shivaji Maharaj International Airport',
  cityId:6,
  address:'Chhatrapati Shivaji Maharaj International Airport, Terminal 2, Navpada, Vile Parle East, Vile Parle, Mumbai, Maharashtra 400099',
  createdAt:new Date(),
  updatedAt:new Date()},
  {
    name:'Pune International Airport',
  cityId:9,
  address:'New Airport Rd, Pune International Airport Area, Lohegaon, Pune, Maharashtra 411032',
  createdAt:new Date(),
  updatedAt:new Date()
  }],{});
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
