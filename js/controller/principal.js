var rankJson = {};

var jsonUsuario;
var userLogado = false;

function showLoad() {
    $('.overlay').removeClass('hidden');
}

function hideLoad() {
    $('.overlay').addClass('hidden');
}

function verificarLogin(){
    if(userLogado === true){
        $("#btnPerfil").removeClass('hidden');
        $("#btnLogin").addClass('hidden');
    }else{
        $("#btnLogin").removeClass('hidden');
        $("#btnPerfil").addClass('hidden');
        verificarSessao();
    };
}

function verificarSessao() {
    
    if(localStorage.getItem('user') != null){
        let txjsonUser = localStorage.getItem('user');   
        jsonUsuario = JSON.parse(txjsonUser);
        userLogado = true;
        verificarLogin();
    }else{
        return false
    }
    
}


function primeiraVisita(){
    if(localStorage.getItem('profile') != null){
        return true
    }else{
        window.location.href = '#/ladding'
    }
}
window.addEventListener('load', primeiraVisita, false);


ngapp.controller("principalCTRL", function ($scope, $route) {
    $scope.$route = $route;
    $('.d-link').removeClass('active');
    if($route.current.activetab == 'home'){
        $('#homeLink').addClass('active');
    }
    verificarLogin();

    $('.carrousel-home').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    $('.carrousel-webserie').slick({
        infinite: false,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        arrows: false
    });
    
});