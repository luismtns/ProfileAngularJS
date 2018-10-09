
ngapp.controller("loginCTRL", function ($scope, $http) {
    verificarLogin();

    
    $('#btnRegistrar').click(function () {
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

        
    });
    
    $('#btnLogar').click(function () {
        showLoad();
        var txLogin = $('#txLogin').val();
        var txSenha = $('#txSenha').val(); 
        userName = txLogin;

        logarUsuario(txLogin, txSenha);
        
    });

    
    function registrarUsuario(txLogin, txEmail, txSenha){
        
        $.ajax({
            // "async": true,      
            "url":  "php/include.php",
            "method": "POST", 
            "data":{
                'login': txLogin,
                'email': txEmail,
                'senha': txSenha
            }
        })
        .done(function(data){
            if(JSON.parse(data)){
                data = JSON.parse(data);
                if(data.error != ''){
                    alert(data['error']);
                    console.log(data);
                    return
                }else{
                    salvarSessao(data);
                    console.log(data);
                    window.location.href='#/perfil';
                }
            }else{
                alert('Erro Interno.')
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
            // "async": true,      
            "url":  "php/autentica.php",
            "method": "POST", 
            "data":{
                'login': txLogin,
                'senha': txSenha
            }
        })
        .done(function(data){
            if(JSON.parse(data)){    
                data = JSON.parse(data);            
                if(data.error != ''){
                    alert(data['error']);
                    console.log(data);
                    return
                }else{
                    salvarSessao(data);
                    console.log(data['user']);
                    window.location.href='#/perfil';
                }
            }else{
                alert('Erro Interno.')
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

});



            // //...
            // // function to get the user, if this.currentUser is not set,
            // // try to load from the local storage
            // function getUser() {
            //     if (this.currentUser) {
            //         return this.currentUser;
            //     }
            //     var storageUser = $window.localStorage.getItem('user');
            //     if (storageUser) {
            //         try {
            //         this.user = JSON.parse(storageUser);
            //         } catch (e) {
            //         $window.localStorage.removeItem('user');
            //         }
            //     }
            //     return this.currentUser;
            //     };
    
            //     // you may also want to remove the user data from storage when he logs out
            //     function logout() {
            //         $window.localStorage.removeItem('user');
            //         this.currentUser = null;
            //     };