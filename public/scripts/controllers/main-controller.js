app.controller("main-controller",($scope,userFactory,$location,$timeout) => {
    $scope.message='';
    $scope.isLoggedIn=false;
    $scope.username='';
    $scope.$on("loadRoutes",(e,data)=> {
        $timeout(()=> {
            $scope.isLoggedIn=true;
            $scope.message='Hey '+data;
            localStorage.setItem("user",data);
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