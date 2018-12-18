app.controller("user-controller",($scope,$http,userFactory)=> {
    $scope.user={};
    $scope.allUsers=[];
    $scope.redundantEmail=false;
    $scope.correctCredentials=true;
    $scope.inputType='password';
    $scope.showPassword=false;
    $scope.message='';
    $scope.backendNotValid=false;
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
        userFactory.register($scope.user,(res)=> {
            if(res.data==='true') {
                $scope.$emit("loadRoutes",$scope.user.name);
            }
            else {
                $scope.message='Old trick. Backend validation applied.';
                $scope.backendNotValid=true;
            }
        })
    }
    $scope.login=()=> {
        userFactory.login($scope.user,(res)=> {
            if(res.data.result) {
                $scope.$emit("loadRoutes",res.data.userName);
                $scope.correctCredentials=true;
            }
            else {
                $scope.correctCredentials=false;
            }
        })
    }
})