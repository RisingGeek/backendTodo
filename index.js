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
        res.send(docs);
    });
})
app.post('/registerUser',(req,res)=> {
    userCrud.register(JSON.parse(req.body.user), function(result) {
        result?res.send('true'):res.send('false');
    });
})
app.post('/loginUser',(req,res)=> {
    userCrud.login(req.body,function(result,userName) {
        res.send({result:result,userName:userName});
    });
})
app.listen(port,()=>console.log('server started on port ',port));