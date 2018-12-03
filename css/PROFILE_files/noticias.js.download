ngapp.controller("noticiasCTRL", function ($scope, $route) {
    $scope.$route = $route;
    $('.d-link').removeClass('active');
    if($route.current.activetab == 'explorar'){
        $('#explorarLink').addClass('active');
    }
    verificarLogin();
    
    $scope.btnVoltar = function () {
        window.location.href = "#/explorar"
    }

});