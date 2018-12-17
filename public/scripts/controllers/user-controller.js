app.controller("user-controller",($scope,$http)=> {
    $scope.user={};
    $scope.allUsers=[];
    $scope.redundantEmail=false;
    $scope.onLoadFunction=()=> {
        $http.get('http://localhost:3000/getAllUsers').then((res)=> {
            $scope.allUsers=res.data;
            console.log(res.data);
        })
    }
    $scope.register=()=> {
        /*fetch('http://localhost:3000/registerUser', {
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify($scope.user)
        }).then(res=>{     
            $scope.$emit("loadRoutes",$scope.user.name);
        });*/
        $http({
            url:'http://localhost:3000/registerUser',
            method:"POST",
            data:{user:JSON.stringify($scope.user)},
            headers: {"Content-Type": "application/json"}
        }).then(res=> {
            $scope.$emit("loadRoutes",$scope.user.name);
        })
    }
    $scope.login=()=> {
        fetch('http://localhost:3000/loginUser', {
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify($scope.user)
        }).then(res=> {
            console.log(res);
            $scope.$emit("loadRoutes",$scope.user.name);
        })
    }
})