var rankJson = {};


ngapp.controller("principalCTRL", function ($scope) {

    function showLoad() {
        $('.overlay').removeClass('hidden');
    }

    function hideLoad() {
        $('.overlay').addClass('hidden');
    }

    var input = '';
    
    $('#btnConsultar').click(function () {
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