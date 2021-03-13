'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class professionalType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  professionalType.init({
    descricao: DataTypes.STRING,
    situacao: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'professionalType',
  });
  return professionalType;
};