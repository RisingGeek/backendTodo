const express = require('express');
const app = express();
const bodyParser=require('body-parser');
const userCrud=require('./db/userCrud');
const toDoCrud=require('./db/toDoCrud');
var path = require('path');
const PORT=process.env.PORT|| 3000;
app.use(express.static(path.join(__dirname)));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.get('/getAllUsers',(req,res)=> {
    console.log(req.session)
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
    toDoCrud.deleteTask(req.body,(docs)=> {
        res.send(docs);
    });
})
app.post('/addTodo',(req,res)=> {
    toDoCrud.addTask(req.body);
    res.send();
})
app.post('/updateTodo',(req,res)=> {
    toDoCrud.updateTask(req.body.todo,function() {
        res.send();
    });
})
app.listen(PORT,()=>console.log('server started on port ',PORT));