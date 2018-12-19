app.controller("todoController",($scope,$http,$location)=> {
    $scope.task='';
    $scope.addTodo=()=> {
        $http({
            url: 'http://localhost:3000/addTodo',
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            data: {task:$scope.task,email:JSON.parse(localStorage.user).email,date:new Date()}
        }).then((res)=> {
            $location.path('/');
        })
    }
})