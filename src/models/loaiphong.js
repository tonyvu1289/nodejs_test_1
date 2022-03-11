'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LoaiPhong extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  LoaiPhong.init({
    DonGia: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'LoaiPhong',
  });
  return LoaiPhong;
};