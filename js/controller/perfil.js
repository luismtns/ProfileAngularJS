
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

    function logout() {
        
        userID = null;            
        userLogado = false;
        localStorage.removeItem('user');
        window.location.href = '#/';
    }

    $('#btnSair').click(function () {
        logout();
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
            
            if(data['FOTO'] != ""){
                var imageUrl = data['FOTO'];
                $('#imgShape').css('background-image', 'url( "profile_pics/' + imageUrl + '")');
            }
            // HEADER
            if(data['NOME'] != ""){
                $('#nomeUsuario').append(data['NOME']);
            }
            if(data['NICK']){              
                $('#nomeUsuario').append(' "' + data['NICK'] + '" ');
            }
            if(data['SOBRENOME']){              
                $('#nomeUsuario').append(data['SOBRENOME']);
            }
            $('#txIdade').text(data['IDADE'] + " anos");
            $('#txPais').text(data['PAIS'].toUpperCase() + " - " + data['ESTADO'].toUpperCase());

            // SETUP
            
            if(data['CPU'] != ""){
                $('#txCPU').text(data['CPU']);
            }
            if(data['HD'] != ""){
                $('#txHD').text(data['HD']);
            }
            if(data['RAM'] != ""){
                $('#txRAM').text(data['RAM']);
            }
            if(data['RAM'] != ""){
                $('#txGPU').text(data['RAM']);
            }
            if(data['PLACAMAE'] != ""){
                $('#txPLACAMAE').text(data['PLACAMAE']);
            }
            if(data['MOUSE'] != ""){
                $('#txMOUSE').text(data['MOUSE']);
            }
            if(data['TECLADO'] != ""){
                $('#txTECLADO').text(data['TECLADO']);
            }
            if(data['TECLADO'] != ""){
                $('#txFONE').text(data['TECLADO']);
            }
            if(data['MONITOR'] != ""){
                $('#txMONITOR').text(data['MONITOR']);
            }

            // Links
            if(data['TWITCH'] != ""){
                $('#txRegiãoTime').attr("href", "https://www.twitch.tv/"+data['TWITCH']);
            }
            if(data['TWITTER'] != ""){
                $('#linkTwitter').attr("href", "https://twitter.com/"+data['TWITTER']);
            }
            if(data['YOUTUBE'] != ""){
                $('#linkYoutube').attr("href", "https://www.youtube.com/user/"+data['YOUTUBE']);
            }
            if(data['DISCORD'] != ""){
                $('#linkDiscord').attr("href", data['DISCORD']);
            }

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

            // LOLZINHO
            
            if(data['USER_LOL'] != ""){
                $('#txNickLol').text(data['USER_LOL']);
                var userLOL = data['USER_LOL'] ; 
                showLoad();
                $.ajax({
                    // "async": true,      
                    "url":  "php/getSummonerElo.php",
                    "method": "POST", 
                    "data":{
                        'SummonerName': encodeURIComponent(data['USER_LOL'])
                    }
                })
                .done(function(data){
                    data = JSON.parse(data);
                    rankJson = data;
                    console.log(data);
                    if(data['error']){
                        aviso('Não foi possível encontrar seus dados da sua conta do League of Legends.<br><br>User atual: <strong>' + userLOL + '</strong>', 'Algo esta errado!')
                    }else{
                        var index;
                        if(rankJson[0]["queueType"] == "RANKED_SOLO_5x5"){
                            index = 0;
                        }else{
                            index = 1;
                        }
                        
                        $('#txLigaLol').text(rankJson[index]['tier'] + rankJson[index]['rank']);
                        $('#txLP').text(rankJson[index]['leaguePoints']);
                        $('#txVitorias').text(rankJson[index]['wins']);
                        $('#txDerrotas').text(rankJson[index]['losses']);

                        // Taxa Vitorias
                        var totalJogos = rankJson[index]['wins'] + rankJson[index]['losses'];
                        $('#txPartidasJogadas').text(totalJogos);

                        var vitorias = rankJson[index]['wins'];
                        var taxaVitorias = Math.round((vitorias * 100) / totalJogos);
                        $('#txTaxaVitoria').text( taxaVitorias+'%');

                        // GET MATCHES
                        showLoad();
                        $.ajax({
                            // "async": true,      
                            "url":  "php/getMatches.php",
                            "method": "POST", 
                            "data":{
                                'SummonerName': encodeURIComponent(data['USER_LOL'])
                            }
                        })
                        .done(function(data){
                            data = JSON.parse(data);
                            if(data['error']){
                                aviso('Não foi possível encontrar seus dados da sua conta do League of Legends.<br><br>User atual: <strong>' + userLOL + '</strong>', 'Algo esta errado!')
                            }else{
                                data = data['matches'];
                                console.log(data);
                                var mid = 0;
                                var top = 0;
                                var jungle = 0;
                                var adc = 0;
                                var suport = 0;
                                for (let i = 0; i < data.length; i++) {
                                    var lane = data[i]['lane'];
                                    var role = data[i]['role'];
                                    if(lane == 'MID'){
                                        mid ++;
                                    }
                                    if(lane == 'TOP'){
                                        top ++;
                                    }
                                    if(lane == 'JUNGLE'){
                                        jungle ++;
                                    }
                                    if(lane == 'BOTTOM'){
                                        if(role == 'DUO_SUPPORT'){
                                            suport ++;
                                        }
                                        if(role == 'DUO_CARRY'){
                                            adc ++;
                                        }
                                        if(role == 'DUO'){
                                            suport ++;
                                        }
                                    }
                                    if(lane == 'NONE'){
                                        if(role == 'DUO_SUPPORT'){
                                            suport ++;
                                        }
                                        if(role == 'DUO_CARRY'){
                                            adc ++;
                                        }
                                    }                                    
                                }
                                var totalPartidas = mid+top+jungle+adc+suport;

                                var arrayJogosLenght = [top, jungle, mid, adc, suport];
                                arrayJogosLenght.sort(function(a, b){return b-a});
                                
                                var maisJogado = arrayJogosLenght[0];
                                var segundoMaisJogado = arrayJogosLenght[1];
                                
                                var imgLane1 = '';
                                if(maisJogado == top){
                                    imgLane1 = 'top';
                                }else if(maisJogado == jungle){
                                    imgLane1 = 'jungle';               
                                }else if(maisJogado == mid){
                                    imgLane1 = 'id';                                    
                                }else if(maisJogado == adc){
                                    imgLane1 = 'bot';                                    
                                }else if(maisJogado == suport){
                                    imgLane1 = 'sup';
                                    
                                }
                                porcentagemMaisJogado = Math.round((100 * maisJogado) / totalPartidas);
                                
                                var valPosicao1 = porcentagemMaisJogado;

                                var graphP1 = new ProgressBar.Circle('#graphPosicao1', {
                                    color: '#39d3f7',
                                    strokeWidth: 8,
                                    trailWidth: 4,
                                    trailColor: '#242642',
                                    text: {
                                        value: '<img src="images/svg-icons/'+imgLane1+'_lane.svg" alt=""><br>' + valPosicao1 + '%'
                                    }
                                });
                                graphP1.animate(valPosicao1 / 100.0, {
                                    duration: 1000
                                });
                                
                                
                                var imgLane2 = '';
                                if(segundoMaisJogado == top){
                                    imgLane2 = 'top';
                                }else if(segundoMaisJogado == jungle){
                                    imgLane2 = 'jungle';               
                                }else if(segundoMaisJogado == mid){
                                    imgLane2 = 'id';                                    
                                }else if(segundoMaisJogado == adc){
                                    imgLane2 = 'bot';                                    
                                }else if(segundoMaisJogado == suport){
                                    imgLane2 = 'sup';
                                    
                                }
                                porcentagemsegundoMaisJogado = Math.round((100 * segundoMaisJogado) / totalPartidas);
                                var valPosicao2 = porcentagemsegundoMaisJogado;

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
                                console.log(location);
                                
                            }
                            hideLoad();
                        })
                        .fail(function(jqXHR, textStatus){
                            console.log(textStatus);
                            hideLoad();
                        });

                        
                    }
                    hideLoad();
                })
                .fail(function(jqXHR, textStatus){
                    console.log(textStatus);
                    hideLoad();
                });
            };


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