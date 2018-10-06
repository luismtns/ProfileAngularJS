ngapp.config(function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'view/principal.html',
        controller: 'principalCTRL'
    })
    .when('/perfil', {
        templateUrl: 'view/perfil.html',
        controller: 'perfilCTRL'
    })
    .when('/login', {
        templateUrl: 'view/login.html',
        controller: 'loginCTRL'
    })
    // .when('/path', {
    //     templateUrl: 'view/name.html',
    //     controller: 'nameCTRL'
    // })
    .otherwise({
        redirectTo: '/'
    });

});