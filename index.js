const express = require('express');
const app = express();
const bodyParser=require('body-parser');
const userCrud=require('./db/userCrud');
const toDoCrud=require('./db/toDoCrud');
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
app.post('/getTodos',(req,res)=> {
    toDoCrud.getTodos(req.body.email,(docs)=> {
        res.send(docs);
    });
})
app.delete('/deleteTodo',(req,res)=> {
    toDoCrud.delete(req.body);
    res.send();
})
app.post('/addTodo',(req,res)=> {
    toDoCrud.addTask(req.body);
    res.send();
})
app.listen(port,()=>console.log('server started on port ',port));