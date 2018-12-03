<?php 
    $response = '';
    $validation_error = '';

    include 'connect.php';
    $userSession = $_POST['userSession'];
    $arrayUser = explode('&', $userSession);
    $loginDe = base64_decode($arrayUser[0]);
    $emailDe = base64_decode($arrayUser[1]);

    $sql = "SELECT * FROM usuario WHERE USER = '$loginDe' AND EMAIL = '$emailDe'  ";
    $verifica = mysqli_query($conect, $sql) or die("erro");
    if (mysqli_num_rows($verifica)<=0){
        $error[] = 'Usuario nao encontrado.';
        die();
    }


    if(empty($error)){        

        if(isset($_FILES['file'])){
            $extensao = strtolower(substr($_FILES['file']['name'], -4));
            $novo_nome =  $loginDe . time() . $extensao;
            $diretorio = "../profile_pics/";

            move_uploaded_file($_FILES['file']['tmp_name'], $diretorio.$novo_nome);

            $sql_code = "UPDATE usuario SET FOTO = '$novo_nome' WHERE EMAIL = '$emailDe'";

            if (mysqli_query($conect, $sql_code)){
                $res[] = true;
            } else {
                $error[] = 'Erro ao enviar Foto de Perfil'; 
                $validation_error = implode(", ", $error);
            }
        }

        if(isset($_FILES['file2'])){
            $extensao = strtolower(substr($_FILES['file2']['name'], -4));
            $novo_nome =  $loginDe . time() . $extensao;
            $diretorio = "../profile_pics/times/";

            move_uploaded_file($_FILES['file2']['tmp_name'], $diretorio.$novo_nome);

            $sql_code = "UPDATE usuario SET FOTO_TIME = '$novo_nome' WHERE EMAIL = '$emailDe'";

            if (mysqli_query($conect, $sql_code)){
               $res[] = true;
            } else {
                $error[] = 'Erro ao enviar Foto do Time'; 
                $validation_error = implode(", ", $error);
            }
        }

        if(isset($_POST['txNome'])){
            $nome = $_POST['txNome'];
            $sql_code = "UPDATE usuario SET NOME = '$nome' WHERE EMAIL = '$emailDe'";

            if (mysqli_query($conect, $sql_code)){
                $res[] = true;
            } else {
                $error[] =  'Nome falhou.';
                $validation_error = implode(", ", $error);
            }
        }
        

        $response = implode(", ", $res);

    }else{
        $validation_error = implode(", ", $error);
    }
    
    $output = array(
        'error'  => $validation_error,
        'response' => $response
        );
    
    echo json_encode($output);


?>