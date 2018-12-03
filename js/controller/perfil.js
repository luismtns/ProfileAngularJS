
ngapp.controller("perfilCTRL", function ($scope, $route) {
    $scope.$route = $route;
    $('.d-link').removeClass('active');
    if($route.current.activetab == 'perfil'){
        $('#perfilLogin').addClass('active');
    }

    verificarLogin();
    
    if(userLogado == false){
        window.location.href = '#/login'
    }else{
        $scope.editarPerfil = function () {
            window.location.href = '#/perfil/editar'
        }
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

    $('.videos-carousel').slick({
        infinite: false,
        slidesToShow: 1.5,
        slidesToScroll: 1,
        arrows: false
      });

      $scope.abrirPesquisar = function () {
          window.location.href = "#/pesquisar";
      }

      $scope.abrirSetup = function () {
        $('#setup').removeClass('hidden');
      }

      $scope.fecharSetup = function () {
        $('#setup').addClass('hidden');
      }

      
    function montarPerfil() {
        var userSession = JSON.parse(localStorage.getItem('user'))['userSession'];
        showLoad();
        $.ajax({
            // "async": true,      
            "url":  "php/consultaUsuario.php",
            "dataType": "json",
            "method": "POST", 
            "data":{
                'userSession': userSession
            }
        })
        .done(function(data){

            var data = data['response'];
            console.log(JSON.stringify(data));
            // FOTO
            var imageUrl = data['FOTO'];
            $('#imgShape').css('background-image', 'url( "profile_pics/' + imageUrl + '")');
            // HEADER
            $('#nomeUsuario').text(data['NOME'] + ' "' + data['NICK'] + '" ' + data['SOBRENOME']);
            $('#txIdade').text(data['IDADE'] + " anos");
            $('#txPais').text(data['PAIS'].toUpperCase() + " - " + data['ESTADO'].toUpperCase());

            // SETUP
            $('#txCPU').text(data['CPU']);
            $('#txHD').text(data['HD']);
            $('#txRAM').text(data['RAM']);
            $('#txGPU').text(data['GPU']);
            $('#txPLACAMAE').text(data['PLACAMAE']);
            $('#txMOUSE').text(data['MOUSE']);
            $('#txTECLADO').text(data['TECLADO']);
            $('#txFONE').text(data['FONE']);
            $('#txMONITOR').text(data['MONITOR']);

            // Links
            $('#linkTwitch').attr("href", "https://www.twitch.tv/"+data['TWITCH']);
            $('#linkTwitter').attr("href", "https://twitter.com/"+data['TWITTER']);
            $('#linkYoutube').attr("href", "https://www.youtube.com/user/"+data['YOUTUBE']);
            $('#linkDiscord').attr("href", data['DISCORD']);

            // Time
            $('#txRegiãoTime').attr("href", "https://www.twitch.tv/"+data['TWITCH']);
            $('#linkTwitter').attr("href", "https://twitter.com/"+data['TWITTER']);
            $('#linkYoutube').attr("href", "https://www.youtube.com/user/"+data['YOUTUBE']);
            $('#linkDiscord').attr("href", data['DISCORD']);

            // Time
            
            if(data['FOTO_TIME'] != ""){
                var timeimgUrl = data['FOTO_TIME'];
                $('#imgTimeShape').css('background-image', 'url( "profile_pics/times/' + timeimgUrl + '")');
            }
            if(data['NOME_TIME'] != ""){
                $('#txNomeTime').text(data['NOME_TIME']);
            }            
            if(data['REGIAO_TIME'] != ""){
                $('#txRegiãoTime').text(data['REGIAO_TIME'].toUpperCase());
            }
            if(data['POSICAO_TIME'] != ""){
                $('#txPosicaoTime').attr("src", "images/svg-icons/" + data['POSICAO_TIME'].toLowerCase() + '_lane.svg');
            }
            if(data['IDIOMA_TIME'] != ""){
                $('#txIdiomaTime').text(data['IDIOMA_TIME'].toUpperCase());
            }
            if(data['PLAYERS_TIME'] != ""){
                $('#txPlayersTime').text(data['PLAYERS_TIME'] + ' de 5');
            }


            hideLoad();            
        })
        .fail(function(jqXHR, textStatus){
            console.log(jqXHR);
            hideLoad();
            return false
        });

    }

    montarPerfil();


});