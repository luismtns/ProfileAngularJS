
ngapp.controller("pesquisarCTRL", function ($scope, $route) {
    AOS.refresh();
    verificarLogin();

    setTimeout(function(){
        $('#filtros-pesquisar').removeClass('hidden');
        $('#filtros-pesquisar').slick({
            infinite: false,
            slidesToShow: 2.5,
            slidesToScroll: 1,
            arrows: false
        });

        for (let i = 0; i < 5; i++) {
            var $boxPerfil = $( ".perfil-box").first().clone();
            $boxPerfil.appendTo(".body-pesquisar");
        }
     }, 100);
    
});