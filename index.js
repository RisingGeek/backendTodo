const express = require('express');
const app = express();
const bodyParser=require('body-parser');
const userCrud=require('./db/userCrud');
var path = require('path');
const port=3000;
app.use(express.static(path.join(__dirname)));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.get('/getAllUsers',(req,res)=> {
    userCrud.getAllUsers(function(docs) {
        res.data=docs;
        res.send(docs);
    });
})
app.post('/registerUser',(req,res)=> {
    userCrud.register(JSON.parse(req.body.user));
    res.send();
})
app.post('/loginUser',(req,res)=> {
    console.log(userCrud.login(req.body));
})
app.listen(port,()=>console.log('server started on port ',port));