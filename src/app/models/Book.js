const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Book = new Schema({
  name: {type:String,default:'None',maxlength: 255},
  desciption: {type:String,default:'None',maxlength: 600},
  image: {type:String,default:'No name',maxlength: 255},
  createAt : {type:Date,default:Date.now},
  updateAt : {type:Date,default:Date.now}
});

module.exports = mongoose.model('Book',Book)