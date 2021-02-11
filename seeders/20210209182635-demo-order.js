'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Orders",
      [
        {
          dineTableId: "1",
          foodId: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          dineTableId: "1",
          foodId: "2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          dineTableId: "1",
          foodId: "3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          dineTableId: "1",
          foodId: "4",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          dineTableId: "2",
          foodId: "2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          dineTableId: "2",
          foodId: "3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          dineTableId: "2",
          foodId: "4",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
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
