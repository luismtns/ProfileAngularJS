<?php
    include 'connect.php';

    $login = $_POST['login'];
    $senha = $_POST['senha'];
    $sql = "SELECT * FROM usuario WHERE USER = '$login' ";
    $verifica = mysqli_query($conect, $sql) or die("erro");
    if (mysqli_num_rows($verifica)<=0){
        $error[] = 'Usuario nao encontrado.';
    }else{
        while($row = mysqli_fetch_array($verifica)){
            if(password_verify($senha, $row['SENHA'])){

                $loginVerificado = $row['USER'];
                $emailVerificado = $row['EMAIL'];

            }else{
                $error[] = 'Senha Incorreta.';
            };
        };
    };

        if(empty($error)){
        $userSession = base64_encode($loginVerificado) . '&' . base64_encode($emailVerificado);
        $userinfo = array(
            'userSession' => $userSession
        );
        $validation_error = '';
        }else{
            $validation_error = implode(", ", $error);
            $userinfo = '';
        };

        $output = array(
            'error'  => $validation_error,
            'user' => $userinfo
            );
    
    echo json_encode($output);
        
    mysqli_close($conect);

?>