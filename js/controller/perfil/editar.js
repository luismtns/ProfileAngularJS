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

    $('#txPais').mask('AA');
    $('#txEstado').mask('AA');
    $('#txIdioma1').mask('AA-AA');
    $('#txIdioma2').mask('AA-AA');
    $('#txPlayersTime').mask('9');
    $('#txRegiaoTime').mask('AA');
    $('#txIdiomaTime').mask('AA-AA');


    $('.videos-carousel').slick({
        infinite: false,
        slidesToShow: 1.5,
        slidesToScroll: 1,
        arrows: false
    });

    $scope.btnVoltar = function () {
        window.location.href = '#/perfil'        
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
        showLoad();
        var target = 0;
        var form_data = new FormData(); 
        var userSession = JSON.parse(localStorage.getItem('user'))['userSession'];
        form_data.append('userSession', userSession);

        $('.form-control').each(function() {
            if($(this).val().length > 0){
                form_data.append(this.id, $(this).val());
                target ++
            }
        });

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
        console.log(target);
        if(target < 1){
            aviso('Nenhuma alteraçõs aplicada.<br>Voltando ao perfil!', 'Tudo Bem!', 'Entendi');
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
        hideLoad();

        aviso('Dados Alterados com Sucesso!', 'Muito Bem!');
        window.location.href = '#/perfil';
        console.log(resposta);

    }).fail(function (res, textStatus) {
        hideLoad();

        console.log("Request failed: " + JSON.stringify(res));
        aviso('Erro Interno no Servidor.');
        window.location.href = '#/perfil';
    });

    
    }

});