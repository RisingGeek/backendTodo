app.factory("mainFactory",($http)=> {
    return {
        checkLocalStorage() {
            return localStorage.length>0;
        },
        onLoadFunction(callback) {
            if(localStorage.length>0) {
                $http({
                    url: 'http://localhost:3000/getTodos',
                    method:"POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    data:{email:JSON.parse(localStorage.user).email}
                }).then((res)=> {
                    callback(res);
                })
            }
        },
        delete(index,callback) {
            $http({
                url: 'http://localhost:3000/deleteTodo',
                method:"DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                data:{todoIndex:index,email:JSON.parse(localStorage.user).email}
            }).then(res=>callback());
        },
    };
})