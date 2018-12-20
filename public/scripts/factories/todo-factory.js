app.factory("todoFactory",($http,$location)=> {
    return {
        addTodo(task) {
            $http({
                url: '/addTodo',
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
                url: '/updateTodo',
                method:"POST",
                headers: {
                    "Content-Type": "application/json"
                },
                data: {todo:{task:task,todoId:JSON.parse(localStorage.todo).todoId}}
            }).then((res)=> {
                $location.path('/');
            })
        }
    }
})