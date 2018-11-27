ngapp.config(function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'view/principal.html',
        controller: 'principalCTRL',
        activetab: 'home'
    })
    .when('/perfil', {
        templateUrl: 'view/perfil.html',
        controller: 'perfilCTRL',
        activetab: 'perfil'
    })
    .when('/login', {
        templateUrl: 'view/login.html',
        controller: 'loginCTRL',
        activetab: 'login'
    })
    .when('/videos', {
        templateUrl: 'view/videos.html',
        controller: 'videosCTRL',
        activetab: 'videos'
    })
    .when('/explorar', {
        templateUrl: 'view/explorar.html',
        controller: 'explorarCTRL',
        activetab: 'explorar'
    })
    .when('/explorar/noticias', {
        templateUrl: 'view/explorar/noticias.html',
        controller: 'noticiasCTRL',
        activetab: 'explorar'
    })
    .when('/explorar/participe', {
        templateUrl: 'view/explorar/participe.html',
        controller: 'participeCTRL',
        activetab: 'explorar'
    })
    .when('/explorar/reviews', {
        templateUrl: 'view/explorar/reviews.html',
        controller: 'reviewsCTRL',
        activetab: 'explorar'
    })
    .when('/explorar', {
        templateUrl: 'view/explorar.html',
        controller: 'explorarCTRL',
        activetab: 'explorar'
    })
    .when('/pesquisar', {
        templateUrl: 'view/pesquisar.html',
        controller: 'pesquisarCTRL',
        activetab: 'pesquisar'
    })
    // .when('/path', {
    //     templateUrl: 'view/name.html',
    //     controller: 'nameCTRL'
    // })
    .otherwise({
        redirectTo: '/'
    });

});