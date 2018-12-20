app.controller("user-controller",($scope,$http,userFactory)=> {
    $scope.user={};
    $scope.allUsers=[];
    $scope.redundantEmail=false;
    $scope.correctCredentials=true;
    $scope.inputType='password';
    $scope.showPassword=false;
    $scope.message='';
    $scope.backendNotValid=false;
    $scope.loader=false;
    $scope.onLoadFunction=()=> {
        userFactory.onLoadFunction((res)=> {
            $scope.allUsers=res.data;
        })
    }
    $scope.showHidePassword=()=> {
        $scope.showPassword=!$scope.showPassword;
        if($scope.showPassword) {
            $scope.inputType='text';
        }
        else {
            $scope.inputType='password';
        }
    }
    $scope.register=()=> {
        $scope.loader=true;
        userFactory.register($scope.user,(res)=> {
            $scope.loader=false;
            if(res.data==='true') {
                $scope.$emit("loadRoutes",$scope.user);
            }
            else {
                $scope.message='Old trick. Backend validation applied.';
                $scope.backendNotValid=true;
            }
        })
    }
    $scope.login=()=> {
        $scope.loader=true;
        userFactory.login($scope.user,(res)=> {
            $scope.loader=false;
            if(res.data.result) {
                $scope.$emit("loadRoutes",{name:res.data.userName,email:$scope.user.email});
                $scope.correctCredentials=true;
            }
            else {
                $scope.correctCredentials=false;
            }
        })
    }
})