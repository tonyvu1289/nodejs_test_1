<<<<<<< HEAD
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
=======
const db = require('../database')
const LoaiPhong = function(loaiphong){
    this.loaiphong = loaiphong.Loaiphong;
    this.dongia = loaiphong.DonGia;
}

LoaiPhong.get_all = (result)=>{
    db.query("SELECT * from LoaiPhong",(err, res)=> {
        console.log(res)
        if (err) {
            result(err);
        }
        else {
            result(res);
        }

    });
}
module.exports = LoaiPhong
>>>>>>> mysql_lib
