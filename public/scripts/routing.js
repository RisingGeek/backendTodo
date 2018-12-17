app.config(($routeProvider,$locationProvider,HOME,REGISTER,LOGIN)=> {
    $locationProvider.hashPrefix('');
    $routeProvider.when(REGISTER, {
        templateUrl: './public/views/register.html' 
    }).when(HOME, {
        templateUrl: './public/views/home.html'
    }).when(LOGIN, {
        templateUrl: './public/views/login.html'
    })
    .otherwise({
        template: 'invalid URL'
    })
})