ngapp.controller("reviewsCTRL", function ($scope, $route) {
    $scope.$route = $route;
    $('.d-link').removeClass('active');
    if($route.current.activetab == 'explorar'){
        $('#explorarLink').addClass('active');
    }
    verificarLogin();

    $scope.btnVoltar = function () {
        window.location.href = "#/explorar"
    }
    $('.carrousel-reviews').slick({
        infinite: false,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        arrows: false
      });

      $scope.abrirReview = function () {
          $('#Reviews1').removeClass('hidden');
      }

      $scope.fecharReview = function () {
          $('#Reviews1').addClass('hidden');
      }
});