var ngapp = angular.module("ngProfile", ['ngRoute']);

ngapp.controller('mainCTRL', function($rootScope,$scope, $timeout) {
    $rootScope.showSpin = true;


    $rootScope.$on('$routeChangeStart', function(){
        // console.log('$routeChangeStart');
        // $timeout(function(){
            $rootScope.showSpin = true;
            $scope.showSpin = true;
        // }, 1000);
    });
    $rootScope.$on('$routeChangeSuccess', function () {
        // console.log('$routeChangeSuccess');
        // //hide loading gif
        $timeout(function(){
          $rootScope.showSpin = false;
          $scope.showSpin = false;
        }, 500);
    });
})