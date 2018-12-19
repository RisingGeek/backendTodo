const mongoose=require('mongoose');
const connection=require('../connection');
var toDoSchema=new mongoose.Schema({task:String,email:String,date:Date});
var ToDo=mongoose.model('todo',toDoSchema);
module.exports=ToDo;