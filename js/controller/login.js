
ngapp.controller("loginCTRL", function ($scope) {
    
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
            console.log(data);
            hideLoad();
        })
        .fail(function(jqXHR, textStatus){
            console.log(jqXHR);
            hideLoad();
        });
        
    });
});