const Book = require('../models/Book')
class SiteController{
    // [GET] /news
    index(req,res){

        Book.find({},function(err,book){
            if(!err) res.json(book)
            else res.status(400).json({error:'ERROR!!!'})
        })
    }
    search(req,res){
        res.render('search')
    }
}

module.exports = new SiteController