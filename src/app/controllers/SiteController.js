<<<<<<< HEAD
const db = require('../../models')
class SiteController{
    // [GET] /news
    async index(req,res){
        try{
        let data = await db.LoaiPhong.findAll()
        console.log(data)
        }
        catch(e){
            console.log(e)
        }
        res.render('home',data)
    }
    search(req,res){
        res.render('search')
    }
}

=======
const loaiphong = require('../../models/loaiphong')
const db = require('../../database')
class SiteController{
    // [GET] /news
    async index(req,res){
        await loaiphong.get_all((data)=>{
        console.log(data)
        res.send(data)
        })
    }
    search(req,res){
        res.render('search')
    }
}

>>>>>>> mysql_lib
module.exports = new SiteController