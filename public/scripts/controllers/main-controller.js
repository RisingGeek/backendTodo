app.controller("main-controller",($scope,$location,$timeout,mainFactory) => {
    $scope.message='';
    $scope.isLoggedIn=false;
    $scope.username='';
    $scope.todos=[];
    if(mainFactory.checkLocalStorage()) {
         $scope.isLoggedIn=true;
         $scope.message='Hey '+JSON.parse(localStorage.user).name;
    }
    $scope.onLoadFunction=()=> {
        mainFactory.onLoadFunction(res=> {
            $scope.todos=[];
            res.data.forEach((todo)=> {
                $scope.todos.push({task:todo.task,date:new Date(todo.date).toDateString(),id:todo._id});
            })
        })
    }
    $scope.delete=(index)=> {
        mainFactory.delete(index,()=> {
            $scope.todos.splice(index,1);
        });
    }
    $scope.edit=(todo)=> {
        $location.path('/edit');
        $timeout(()=> {
            $scope.$broadcast('fillTask',{data:todo})
        },100)
    }
    $scope.$on("loadRoutes",(e,data)=> {
        $timeout(()=> {
            $scope.isLoggedIn=true;
            $scope.message='Hey '+data.name;
            localStorage.setItem("user",JSON.stringify({name:data.name,email: data.email}));
            $location.path('/');
        },1000)
    })
    $scope.logout=()=> {
        $timeout(()=> {
            $scope.isLoggedIn=false;
            localStorage.clear();
            $scope.message='Logout Successful';
        },1000)
    }
})