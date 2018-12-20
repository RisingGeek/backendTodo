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
    delete(todo) {
        ToDo.find({email:todo.email},(err,docs)=> {
            var todoItem=docs[todo.todoIndex];
            ToDo.deleteOne({_id:todoItem._id}).then(()=> {
                console.log('todo removed');
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