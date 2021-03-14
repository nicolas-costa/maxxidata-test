import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Profissional extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Profissional.belongsTo(models.TipoDeProfissional, {foreignKey:'tipoDeProfissional'});
    }
  };
  Profissional.init({
    nome: DataTypes.STRING,
    telefone: DataTypes.STRING,
    email: DataTypes.STRING,
    tipoDeProfissional: DataTypes.INTEGER,
    situacao: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Profissional',
    tableName: 'profissionais'
  });
  return Profissional;
};

