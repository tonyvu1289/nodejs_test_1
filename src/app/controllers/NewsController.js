class NewsController{
    // [GET] /news
    index(req,res){
        res.render('news')
    }
    show(req,res){
        res.send('dit me JS!')
    }
}

module.exports = new NewsController