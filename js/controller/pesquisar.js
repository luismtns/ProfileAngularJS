
ngapp.controller("pesquisarCTRL", function ($scope, $route) {
    verificarLogin();

    setTimeout(function(){
        $('#filtros-pesquisar').removeClass('hidden');
        $('#filtros-pesquisar').slick({
            infinite: false,
            slidesToShow: 2.5,
            slidesToScroll: 1,
            arrows: false
        });

        for (let i = 0; i < 40; i++) {
            var $boxPerfil = $( ".perfil-box").first().clone();
            $boxPerfil.appendTo(".body-pesquisar");
        }
     }, 100);
    
});