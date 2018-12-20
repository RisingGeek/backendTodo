app.factory("userFactory",($http)=> {
    const userObject={
        onLoadFunction(callback) {
            $http.get('/getAllUsers').then((res)=> {
                callback(res);
            })
        },
        register(user,callback) {
            $http({
                url:'/registerUser',
                method:"POST",
                data:{user:JSON.stringify(user)},
                headers: {"Content-Type": "application/json"}
            }).then(res=> {
                callback(res);
            })
        },
        login(user,callback) {
            $http({
                url: '/loginUser',
                method:"POST",
                headers: {
                    "Content-Type": "application/json"
                },
                data:JSON.stringify(user)
            }).then((res)=> {
                callback(res);
            })
        }
    }
    return userObject;
})