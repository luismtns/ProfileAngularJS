ngapp.controller("participeCTRL", function ($scope, $route) {
    $scope.$route = $route;
    $('.d-link').removeClass('active');
    if($route.current.activetab == 'explorar'){
        $('#explorarLink').addClass('active');
    }
    verificarLogin();

    $scope.btnVoltar = function () {
        window.location.href = "#/explorar"
    }

    $('.enquete-slick').slick({
        infinite: false,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        arrows: false
      });

});