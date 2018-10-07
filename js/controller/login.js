
ngapp.controller("loginCTRL", function ($scope, $http) {
    
    $('#btnLogar').click(function () {
        showLoad();
        var txNome = $('#txLogin').val();
        var txEmail = $('#txEmail').val();
        var txSenha = $('#txSenha').val(); 

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
                aviso('Erro ao realizar cadastro, tente novamente.');
            }else{
                userID = data;
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