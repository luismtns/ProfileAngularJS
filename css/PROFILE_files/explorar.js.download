ngapp.controller("explorarCTRL", function ($scope, $route) {
    $scope.$route = $route;
    $('.d-link').removeClass('active');
    if($route.current.activetab == 'explorar'){
        $('#explorarLink').addClass('active');
    }
    verificarLogin();

    $scope.participe = function () {
        window.location.href = '#/explorar/participe'
    }

    $scope.noticias = function () {
        window.location.href = '#/explorar/noticias'
    }
    
    $scope.reviews = function () {
        window.location.href = '#/explorar/reviews'
    }

});