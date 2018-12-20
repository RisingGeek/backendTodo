const ToDo=require('./models/toDoSchema');
const toDoOperation={
    addTask(todo) {
        ToDo({task:todo.task,email:todo.email,date:todo.date}).save((err)=> {
            if(err) throw err;
            console.log('todo saved');
        })
    },
    getTodos(email,callback) {
        ToDo.find({email:email},(err,docs)=> {
            if(err) throw err;
            callback(docs);
        })
    },
    deleteTask(data,callback) {
        ToDo.deleteOne({_id:data.todo.id}).then(()=> {
            console.log('todo removed');
            ToDo.find({email:data.email},(err,docs)=> {
                callback(docs);
            })
        })
    },
    updateTask(todo,callback) {
        ToDo.findOne({_id:todo.todoId},(err,doc)=> {
            if(err) throw err;
            doc.task=todo.task;
            ToDo(doc).save((err)=> {
                if(err) throw err;
                console.log('todo updated');
                callback();
            })
        })
    }
};
module.exports=toDoOperation;