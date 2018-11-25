ngapp.controller("explorarCTRL", function ($scope, $route) {
    $scope.$route = $route;
    $('.d-link').removeClass('active');
    if($route.current.activetab == 'explorar'){
        $('#explorarLink').addClass('active');
    }
    verificarLogin();

});