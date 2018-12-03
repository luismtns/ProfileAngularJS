
ngapp.controller("loginCTRL", function ($scope, $http, $route, $rootScope) {
    $scope.$route = $route;
    $('.d-link').removeClass('active');
    if($route.current.activetab == 'login'){
        $('#perfilLogin').addClass('active');
    }
    
    verificarLogin();

    
    $scope.btnRegistrar = function () {
        showLoad();
        var txLogin = $('#txLoginC').val();
        var txEmail = $('#txEmailC').val();
        var txSenha = $('#txSenhaC').val(); 

        var reEmail = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");
        var reSenha = new RegExp("(?!^[0-9]*$)(?!^[a-zA-Z!@#$%^&*()_+=<>?]*$)^([a-zA-Z!@#$%^&*()_+=<>?0-9]{8,})$");

        // console.log(reEmail.test(txEmail));
        if(txLogin.length < 3){
            alert("Verifique o campo do Login.");
            return
        }
        else if(txEmail < 4){
            alert("Verifique o campo do E-mail.");
            return
        }
        else if(!reEmail.test(txEmail)){
            alert("E-mail inválido!");
            return
        }
        else if(txSenha.length < 8){
            alert("Verifique o campo da Senha.\nSua senha deve conter pelo menos 8 caracteres sendo uma letra maiuscula, uma minuscula e um numero.");
            return
        }
        else if(!reSenha.test(txSenha)){
            alert("Senha inválida!\nSua senha deve conter pelo menos 8 caracteres sendo uma letra maiuscula, uma minuscula e um numero.");
            return
        }
        else{
            registrarUsuario(txLogin, txEmail, txSenha);
        }

        
    }
    
    $scope.btnLogar = function () {
        showLoad();
        var txLogin = $('#txLogin').val();
        var txSenha = $('#txSenha').val(); 
        userName = txLogin;

        logarUsuario(txLogin, txSenha);
        
    }

    
    function registrarUsuario(txLogin, txEmail, txSenha){
        
        $.ajax({
            // "async": true,      
            "url":  "php/include.php",
            "dataType": "json",
            "method": "POST", 
            "data":{
                'login': txLogin,
                'email': txEmail,
                'senha': txSenha
            }
        })
        .done(function(data){

            if(data.error != ''){
                aviso(data['error'], 'Tente outro usuário.');
                // console.log(data);
            }else{
                salvarSessao(data);
                // console.log(data);
                window.location.href='#/perfil/editar';
                aviso('<center>Seja muito bem a plataforma PROFILE, vamos começar?<br>Insira seus dados e depois salve, não se preocupe em deixar algo em branco.</center>', 'Bem Vindo!', 'Entendi');
            }
            hideLoad();
        })
        .fail(function(jqXHR, textStatus){
            console.log(jqXHR);
            hideLoad();
        });
    };

    function logarUsuario(txLogin, txSenha) {
        
        $.ajax({
            "url":  "php/autentica.php",
            "dataType": "json",
            "method": "POST", 
            "data":{
                'login': txLogin,
                'senha': txSenha
            }
        })
        .done(function(data){         
                if(data.error != ''){
                    aviso(data['error'], 'OPS!')
                    console.log(data);
                }else{
                    salvarSessao(data);
                    console.log(data['user']);
                    window.location.href='#/perfil';
                }
            hideLoad();
        })
        .fail(function(jqXHR, textStatus){
            console.log(jqXHR);
            hideLoad();
        });
    }

    function salvarSessao(userJson){
            localStorage.setItem('user', JSON.stringify(userJson['user']));
            jsonUsuario = userJson['user'];          
            userLogado = true;
    }

    $('#close-btn').click(function () {
        window.history.back();
    })


    $('#btnEntrarTela').click(function () {
        $('#mainLogin').addClass('hidden');
        $('#telaLogin').removeClass('hidden');

    })

    $('#voltarMain1').click(function () {
        $('#telaLogin').addClass('hidden');  
        $('#mainLogin').removeClass('hidden');      
    })
    
    $('#btnRegistrarTela').click(function () {
        $('#mainLogin').addClass('hidden');
        $('#telaRegistrar').removeClass('hidden');

    })


    $('#voltarMain2').click(function () {
        $('#telaRegistrar').addClass('hidden');  
        $('#mainLogin').removeClass('hidden');      
    })

});

