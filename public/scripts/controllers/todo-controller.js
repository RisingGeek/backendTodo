app.controller("todoController",($scope,todoFactory)=> {
    $scope.task='';
    $scope.addTask='';
    $scope.$on('fillTask',(e,data)=> {
        $scope.task=data.data.task;
        localStorage.setItem("todo",JSON.stringify({task:$scope.task,todoId:data.data.id}));
    })
    if(localStorage.length>1) {
        $scope.task=JSON.parse(localStorage.todo).task;
    }
    $scope.addTodo=()=> {
        todoFactory.addTodo($scope.addTask);
    }
    $scope.updateTodo=()=> {
        todoFactory.updateTodo($scope.task);
    }
})