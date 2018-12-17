app.directive('passwordLength',function() {
    return {
        require: 'ngModel',
        link: function(scope,element,attr,mCtrl) {
            function mypasswordValidation(value) {
                if(value.length<8) {
                    mCtrl.$setValidity('passwordLength',false);
                }
                else {
                    mCtrl.$setValidity('passwordLength',true);
                }
                return value;
            }
            mCtrl.$parsers.push(mypasswordValidation);
        }
    }
})