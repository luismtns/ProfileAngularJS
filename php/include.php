<?php
    include 'connect.php';
    

    if(empty($_POST['login']) && strlen($_POST['login']) < 3){
        $error[] = utf8_encode('Falta Login');
    }else{
        $login = $_POST['login'];
        
        if(empty($_POST['email'])){
            $error[] = 'Falta E-mail';
        }else{
            if(!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)){
                $error[] = utf8_encode('E-mail Invalido');
            }else{            
                $email = $_POST['email'];
            }
        }
    }

    if(!empty($login) && !empty($email)){

        $sql0 = "SELECT * FROM `usuario` WHERE USER = '$login' OR EMAIL = '$email' ";
        $verifica = mysqli_query($conect, $sql0) or die($bd_error);

        if (mysqli_num_rows($verifica)>0){
            $error[] = 'Usuario ou Email ja constam na Base de Dados.';
        }
    }

    if(empty($error)){
        $senha = password_hash($_POST['senha'], PASSWORD_DEFAULT);
        $sql = "INSERT INTO usuario (USER, EMAIL, SENHA) VALUES ('$login', '$email', '$senha')";
        mysqli_query($conect, $sql) or die($bd_error);
        $userSession = base64_encode($login) . '&' . base64_encode($email); 
        $userinfo = array(
            'userSession' => $userSession
        );
        $validation_error = '';
    }else{
        $validation_error = implode(", ", $error);
        $userinfo = '';
    }


    $output = array(
        'error'  => $validation_error,
        'user' => $userinfo
        );
    
    echo json_encode($output);

    mysqli_close($conect);


// if(empty($form_data->password))
// {
//  $error[] = 'Password is Required';
// }
// else
// {
//  $data[':password'] = password_hash($form_data->password, PASSWORD_DEFAULT);
// }

// if(empty($error))
// {
//  $query = "
//  INSERT INTO register (name, email, password) VALUES (:name, :email, :password)
//  ";
//  $statement = $connect->prepare($query);
//  if($statement->execute($data))
//  {
//   $message = 'Registration Completed';
//  }
// }
// else
// {
//  $validation_error = implode(", ", $error);
// }

// $output = array(
//  'error'  => $validation_error,
//  'message' => $message
// );

// echo json_encode($output);

?>