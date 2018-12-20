app.factory("todoFactory",($http,$location)=> {
    return {
        addTodo(task) {
            $http({
                url: 'http://localhost:3000/addTodo',
                method:"POST",
                headers: {
                    "Content-Type": "application/json"
                },
                data: {task:task,email:JSON.parse(localStorage.user).email,date:new Date()}
            }).then((res)=> {
                $location.path('/');
            })
        },
        updateTodo(task) {
            $http({
                url: 'http://localhost:3000/updateTodo',
                method:"POST",
                headers: {
                    "Content-Type": "application/json"
                },
                data: {todo:{task:task,todoId:JSON.parse(localStorage.todo).todoId}}
            }).then((res)=> {
                $location.path('/');
                localStorage.removeItem("todo");
            })
        }
    }
})