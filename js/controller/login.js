
ngapp.controller("loginCTRL", function ($scope, $http) {
    
    $('#btnRegistrar').click(function () {
        showLoad();
        var txNome = $('#txLoginC').val();
        var txEmail = $('#txEmailC').val();
        var txSenha = $('#txSenhaC').val(); 

        $.ajax({
                // "async": true,      
                "url":  "php/include.php",
                "method": "POST", 
                "data":{
                    'nome': txNome,
                    'email': txEmail,
                    'senha': txSenha
                }
        })
        .done(function(data){
            if(data == 'erro'){
                alert('Erro ao realizar cadastro! Usuário Já existente.');
            }else{
                userID = data;
                console.log(userID);
                window.location.href='#/perfil';
            }
            hideLoad();
        })
        .fail(function(jqXHR, textStatus){
            console.log(jqXHR);
            hideLoad();
        });
        
    });
    
    $('#btnLogar').click(function () {
        showLoad();
        var txNome = $('#txLogin').val();
        var txSenha = $('#txSenha').val(); 

        $.ajax({
                // "async": true,      
                "url":  "php/autentica.php",
                "method": "POST", 
                "data":{
                    'nome': txNome,
                    'senha': txSenha
                }
        })
        .done(function(data){
            if(data == 'erro'){
                alert('Dados Incorretos.');
            }else{
                userID = data;
                console.log(userID);
                window.location.href='#/perfil';
            }
            hideLoad();
        })
        .fail(function(jqXHR, textStatus){
            console.log(jqXHR);
            hideLoad();
        });
        
    });

});