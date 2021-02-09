'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Food",
      [
        {
          name: "drink",
          dineTableId: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "appetizer",
          dineTableId: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "entree",
          dineTableId: "3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "dessert",
          dineTableId: "2",
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
