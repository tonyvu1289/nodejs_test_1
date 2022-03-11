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

module.exports = new SiteController