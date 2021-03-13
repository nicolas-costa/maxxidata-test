'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class profissional extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      profissional.belongsTo(models.tipoDeProfissional);
    }
  };
  profissional.init({
    nome: DataTypes.STRING,
    telefone: DataTypes.STRING,
    email: DataTypes.STRING,
    tipoDeProfissional: DataTypes.INTEGER,
    situacao: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'profissional',
    tableName: 'profissional'
  });
  return profissional;
};
