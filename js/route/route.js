ngapp.config(function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'view/principal.html',
        controller: 'principalCTRL'
    })
    // .when('/path', {
    //     templateUrl: 'view/name.html',
    //     controller: 'nameCTRL'
    // })
    .otherwise({
        redirectTo: '/'
    });

});