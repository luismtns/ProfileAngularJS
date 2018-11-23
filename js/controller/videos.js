ngapp.controller("videosCTRL", function ($scope, $route) {
    $scope.$route = $route;
    $('.d-link').removeClass('active');
    if($route.current.activetab == 'videos'){
        $('#videosLink').addClass('active');
    }

});