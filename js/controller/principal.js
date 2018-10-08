var rankJson = {};

var userID;
var userLogado = false;
var userName = '';

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
        userID = localStorage.getItem('user');         
        userLogado = true;
        verificarLogin();
        window.location.href = '#/perfil'
    }else{
        return false
    }
    
}



ngapp.controller("principalCTRL", function ($scope) {
    verificarLogin();
    
});