app.config(($routeProvider,$locationProvider,HOME,REGISTER,LOGIN,ADDTODO,EDIT)=> {
    $locationProvider.hashPrefix('');
    $routeProvider.when(REGISTER, {
        templateUrl: './public/views/register.html' 
    }).when(HOME, {
        templateUrl: './public/views/home.html'
    }).when(LOGIN, {
        templateUrl: './public/views/login.html'
    }).when(ADDTODO, {
        templateUrl: './public/views/addTodo.html'
    }).when(EDIT, {
        templateUrl: './public/views/editTodo.html'
    })
    .otherwise({
        template: 'invalid URL'
    })
})