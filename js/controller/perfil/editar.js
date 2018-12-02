ngapp.controller("editarCTRL", function ($scope, $route) {
    $('.videos-carousel').slick({
        infinite: false,
        slidesToShow: 1.5,
        slidesToScroll: 1,
        arrows: false
    });

    $scope.editarPerfil = function () {
        window.location.href = "#/perfil"
    }

});