
ngapp.controller("perfilCTRL", function ($scope, $route) {
    $scope.$route = $route;
    $('.d-link').removeClass('active');
    if($route.current.activetab == 'perfil'){
        $('#perfilLogin').addClass('active');
    }

    verificarLogin();
    if(userLogado == false){
        window.location.href = '#/login'
    }

    $scope.nome = userName; 

    function logout() {
        
        userID = null;            
        userLogado = false;
        localStorage.removeItem('user');
        window.location.href = '#/';
    }

    $('#btnSair').click(function () {
        logout();
    })

});