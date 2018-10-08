
ngapp.controller("perfilCTRL", function ($scope) {
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