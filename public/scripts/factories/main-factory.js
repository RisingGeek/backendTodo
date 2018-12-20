app.factory("mainFactory",($http)=> {
    return {
        checkLocalStorage() {
            return localStorage.length>0;
        },
        onLoadFunction(callback) {
            window.addEventListener('offline',function(e) { alert('Internet Disconnected!') });
            window.addEventListener('online',function(e) {alert('Internet Connected!')});
            if(localStorage.length>0) {
                $http({
                    url: '/getTodos',
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
        delete(todo,callback) {
            $http({
                url: '/deleteTodo',
                method:"DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                data:{todo:todo,email:JSON.parse(localStorage.user).email}
            }).then(res=>callback(res.data));
        },
    };
})