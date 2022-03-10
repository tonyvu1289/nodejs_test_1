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