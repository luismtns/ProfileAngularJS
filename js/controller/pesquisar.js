
ngapp.controller("pesquisarCTRL", function ($scope, $route) {
    AOS.refresh();
    verificarLogin();

    $('.filtros-pesquisar').slick({
        infinite: false,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        arrows: false
      });
});