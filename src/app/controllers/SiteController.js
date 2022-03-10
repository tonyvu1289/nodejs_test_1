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

module.exports = new SiteController