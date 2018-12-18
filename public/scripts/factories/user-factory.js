app.factory("userFactory",($http)=> {
    const userObject={
        onLoadFunction(callback) {
            $http.get('http://localhost:3000/getAllUsers').then((res)=> {
                callback(res);
            })
        },
        register(user,callback) {
            $http({
                url:'http://localhost:3000/registerUser',
                method:"POST",
                data:{user:JSON.stringify(user)},
                headers: {"Content-Type": "application/json"}
            }).then(res=> {
                callback(res);
            })
        },
        login(user,callback) {
            $http({
                url: 'http://localhost:3000/loginUser',
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