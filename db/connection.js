const mongoose=require('mongoose');
const db=require('./config');
mongoose.connect(db.url,{useNewUrlParser:true},()=> {
    console.log('connected to database');
})