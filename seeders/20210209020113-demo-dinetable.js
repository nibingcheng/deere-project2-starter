'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "DineTables",
      [
        {
          name: "east",
          userId: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "south",
          userId: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "west",
          userId: "2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "north",
          userId: "2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "center",
          userId: "2",
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
