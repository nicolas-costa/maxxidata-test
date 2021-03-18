export default {
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

    await queryInterface.bulkInsert(
      "profissionais",
      [
        {
          nome: "John Doe",
          telefone: "",
          email: "(50) 99190-5050",
          tipoDeProfissional: 1,
          situacao: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Jane Doe",
          telefone: "",
          email: "(50) 99190-5050",
          tipoDeProfissional: 2,
          situacao: true,
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
    await queryInterface.bulkDelete("profissionais", null, {});
  },
};
