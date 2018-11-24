
ngapp.controller("perfilCTRL", function ($scope, $route) {
    $scope.$route = $route;
    $('.d-link').removeClass('active');
    if($route.current.activetab == 'perfil'){
        $('#perfilLogin').addClass('active');
    }

    verificarLogin();
    var linkHash = window.location.hash.split('?')[1];
    
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
    });

    var valPosicao1 = 73;

    var graphP1 = new ProgressBar.Circle('#graphPosicao1', {
        color: '#39d3f7',
        strokeWidth: 8,
        trailWidth: 4,
        trailColor: '#242642',
        text: {
            value: '<img src="images/svg-icons/mid_lane.svg" alt=""><br>' + valPosicao1 + '%'
        }
    });
    graphP1.animate(valPosicao1 / 100.0, {
        duration: 1000
    });

    var valPosicao2 = 30;

    var graphP2 = new ProgressBar.Circle('#graphPosicao2', {
        color: '#ee61f2',
        strokeWidth: 8,
        trailWidth: 4,
        trailColor: '#242642',
        text: {
            value: '<img src="images/svg-icons/sup_lane.svg" alt=""><br>' + valPosicao2 + '%'
        }
    });
    graphP2.animate(valPosicao2 / 100.0, {
        duration: 1000
    });

});