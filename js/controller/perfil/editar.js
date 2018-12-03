ngapp.controller("editarCTRL", function ($scope, $route) {
    
    verificarLogin();
    
    if(userLogado == false){
        window.location.href = '#/login'
    }

    $('#txPlayersTime').mask('Z', {
        translation: {
          'Z': {
            pattern: /^[1-5][0-5]?$|^1$/
          }
        }
    });

    $('#txIdade').mask('ZZ', {
        translation: {
          'Z': {
            pattern: /^[0-9][0-9]?$|^2$/
          }
        }
    });

    $('#txPais').mask('ZZ', {
        translation: {
          'Z': {
            pattern: /^[A-Z]{2}$/
          }
        }
    });

    $('#txEstado').mask('ZZ', {
        translation: {
          'Z': {
            pattern: /^[A-Z]{2}$/
          }
        }
    });

    $('.videos-carousel').slick({
        infinite: false,
        slidesToShow: 1.5,
        slidesToScroll: 1,
        arrows: false
    });

    $scope.btnVoltar = function () {
        window.location.href = '#/perfil'        
    }

    function pegarDados() {
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
            console.log(data);

            var data = data['response'];

            if(data['NOME'] != ""){
                $('#txNome').val(data['NOME']);
            }
            if(data['SOBRENOME'] != ""){
                $('#txSobrenome').val(data['SOBRENOME']);
            }
            if(data['NICK'] != ""){
                $('#txNick').val(data['NICK']);
            }
            if(data['IDADE'] != ""){
                $('#txIdade').val(data['IDADE']);
            }
            if(data['PAIS'] != ""){
                $('#txPais').val(data['PAIS']);
            }
            if(data['ESTADO'] != ""){
                $('#txEstado').val(data['ESTADO']);
            }
            if(data['IDIOMA1'] != ""){
                $('#txIdioma1').val(data['IDIOMA1']);
            }
            if(data['IDIOMA2'] != ""){
                $('#txIdioma2').val(data['IDIOMA2']);
            }
            hideLoad();
        })
        .fail(function(jqXHR, textStatus){
            console.log(jqXHR);
            hideLoad();
        });

    }


    $scope.abrirSetup = function () {
    $('#setup').removeClass('hidden');
    }
    

    $scope.fecharSetup = function () {
    $('#setup').addClass('hidden');
    }

    // setTimeout(()=>{
    //     pegarDados();
    // }, 50)

    $scope.editarPerfil = function () {
        window.location.href = "#/perfil"
    }

    $scope.salvarAlteracoes = function () {
        var target = 0;
        var form_data = new FormData(); 
        var userSession = JSON.parse(localStorage.getItem('user'))['userSession'];
        form_data.append('userSession', userSession)

        var fotoPerfil = $('#fotoPerfil')[0].files[0];
        if(fotoPerfil != undefined){
            form_data.append('file', fotoPerfil);
            target ++
        }

        var fotoTime = $('#fotoTime')[0].files[0];
        if(fotoTime != undefined){
            form_data.append('file2', fotoTime);
            target ++
        }
        var txNome = $('#txNome').val();
        if(txNome != ""){
            form_data.append('txNome', txNome);
            target ++;
        }
        var txNick = $('#txNick').val();
        if(txNick != ""){
            form_data.append('txNick', txNick);
            target ++;
        }
        var txSobrenome = $('#txSobrenome').val();
        if(txSobrenome != ""){
            form_data.append('txSobrenome', txSobrenome);
            target ++;
        }
        var txIdade = $('#txIdade').val();
        if(txIdade != ""){
            form_data.append('txIdade', txIdade);
            target ++;
        }
        var txPais = $('#txPais').val();
        if(txPais != ""){
            form_data.append('txPais', txPais);
            target ++;
        }
        var txEstado = $('#txEstado').val();
        if(txEstado != ""){
            form_data.append('txEstado', txEstado);
            target ++;
        }
        var txIdioma1 = $('#txIdioma1').val();
        if(txIdioma1 != ""){
            form_data.append('txIdioma1', txIdioma1);
            target ++;
        }
        var txIdioma2 = $('#txIdioma2').val();
        if(txIdioma2 != ""){
            form_data.append('txIdioma2', txIdioma2);
            target ++;
        }
        var txLOL = $('#txLOL').val();
        if(txLOL != ""){
            form_data.append('txLOL', txLOL);
            target ++;
        }
        var txTwitch = $('#txTwitch').val();
        if(txTwitch != ""){
            form_data.append('txTwitch', txTwitch);
            target ++;
        }
        var txTwitter = $('#txTwitter').val();
        if(txTwitter != ""){
            form_data.append('txTwitter', txTwitch);
            target ++;
        }
        var txYoutube = $('#txYoutube').val();
        if(txYoutube != ""){
            form_data.append('txYoutube', txYoutube);
            target ++;
        }
        var txDiscord = $('#txDiscord').val();
        if(txDiscord != ""){
            form_data.append('txDiscord', txDiscord);
            target ++;
        }
        var txCPU = $('#txCPU').val();
        if(txCPU != ""){
            form_data.append('txCPU', txCPU);
            target ++;
        }
        var txHD = $('#txHD').val();
        if(txHD != ""){
            form_data.append('txHD', txHD);
            target ++;
        }
        var txRAM = $('#txRAM').val();
        if(txRAM != ""){
            form_data.append('txRAM', txRAM);
            target ++;
        }
        var txGPU = $('#txGPU').val();
        if(txGPU != ""){
            form_data.append('txGPU', txGPU);
            target ++;
        }
        var txPlacaMae = $('#txPlacaMae').val();
        if(txPlacaMae != ""){
            form_data.append('txPlacaMae', txPlacaMae);
            target ++;
        }
        var txMouse = $('#txMouse').val();
        if(txMouse != ""){
            form_data.append('txMouse', txMouse);
            target ++;
        }
        var txTeclado = $('#txTeclado').val();
        if(txTeclado != ""){
            form_data.append('txTeclado', txTeclado);
            target ++;
        }
        var txMonitor = $('#txMonitor').val();
        if(txMonitor != ""){
            form_data.append('txMonitor', txMonitor);
            target ++;
        }
        var txFone = $('#txFone').val();
        if(txFone != ""){
            form_data.append('txFone', txFone);
            target ++;
        }
        var txNomeTime = $('#txNomeTime').val();
        if(txNomeTime != ""){
            form_data.append('txNomeTime', txNomeTime);
            target ++;
        }
        var txRegiaoTime = $('#txRegiaoTime').val();
        if(txRegiaoTime != ""){
            form_data.append('txRegiaoTime', txRegiaoTime);
            target ++;
        }
        var txPosicaoTime = $('#txPosicaoTime').val();
        if(txPosicaoTime != ""){
            form_data.append('txPosicaoTime', txPosicaoTime);
            target ++;
        }
        var txPlayersTime = $('#txPlayersTime').val();
        if(txPlayersTime != ""){
            form_data.append('txPlayersTime', txPlayersTime);
            target ++;
        }
        console.log(target);
        if(target < 1){
            aviso('Nenhuma alterações aplicada.<br>Voltando ao perfil!', 'Tudo Bem!', 'Entendi');
            return window.location.href = '#/perfil';
        }

    $.ajax({
        url: "php/salvaDados.php",
        dataType: 'text',
        cache: false,
        contentType: false,
        processData: false,
        type: "POST",
        data: form_data

    }).done(function (resposta) {

        console.log(resposta);
        aviso(resposta);

    }).fail(function (res, textStatus) {
        console.log("Request failed: " + JSON.stringify(res));

    });

    
    }

});