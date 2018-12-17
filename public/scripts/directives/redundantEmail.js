app.directive('redundantEmail',function() {
    return {
        require: 'ngModel',
        link: function(scope,element,attr,mCtrl) {
            function myValidation(value) {
                let flag=0;
                scope.allUsers.forEach(function(user) {
                    if(user.email===value) {
                        flag=1;
                    }
                })
                if(flag===1) {
                    scope.redundantEmail=true;
                    mCtrl.$setValidity('redundantEmail',false);
                }
                else {
                    scope.redundantEmail=false;
                    mCtrl.$setValidity('redundantEmail',true);
                }
                return value;
            }
            mCtrl.$parsers.push(myValidation);
        }
    }
})