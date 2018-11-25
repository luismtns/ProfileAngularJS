var ngapp = angular.module("ngProfile", ['ngRoute']);

ngapp.controller('mainCTRL', function($rootScope,$scope, $timeout) {
    $rootScope.showSpin = true;

    $rootScope.$on('$routeChangeStart', function(){
        $timeout(function(){
            $rootScope.showSpin = true;
            $scope.showSpin = true;
        }, 200);
    });
    $rootScope.$on('$routeChangeSuccess', function(){
        $timeout(function(){
            $rootScope.showSpin = false;
            $scope.showSpin = false;
        }, 200);
    });
})