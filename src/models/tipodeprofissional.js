'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tipoDeProfissional extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tipoDeProfissional.hasMany(models.profissional);
    }
  };
  tipoDeProfissional.init({
    nome: DataTypes.STRING,
    telefone: DataTypes.STRING,
    email: DataTypes.STRING,
    tipoDeProfissional: DataTypes.INTEGER,
    situacao: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'tipoDeProfissional',
  });
  return tipoDeProfissional;
};
