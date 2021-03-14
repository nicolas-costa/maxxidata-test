import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class TipoDeProfissional extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //TipoDeProfissional.hasMany(models.Profissional);
    }
  };
  TipoDeProfissional.init({
    descricao: DataTypes.STRING,
    situacao: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'TipoDeProfissional',
    tableName: 'tiposDeProfissional'
  });
  return TipoDeProfissional;
};
