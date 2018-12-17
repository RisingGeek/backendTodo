const mongoose=require('mongoose');
const connection=require('./connection');
var Schema=mongoose.Schema;
var userSchema=new Schema({name:String,password:String,email:String});
var User=mongoose.model('user',userSchema);
module.exports=User;