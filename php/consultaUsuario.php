<?php 
    $response = '';
    $validation_error = '';

    include 'connect.php';
    $userSession = $_POST['userSession'];
    $arrayUser = explode('&', $userSession);
    $loginDe = base64_decode($arrayUser[0]);
    $emailDe = base64_decode($arrayUser[1]);

    $sql = "SELECT * FROM usuario WHERE USER = '$loginDe' AND EMAIL = '$emailDe'  ";
    $result = mysqli_query($conect, $sql) or die("erro");
    if (mysqli_num_rows($result)<=0) {
        $error[] = 'Usuario nao encontrado.';
    }else{
        $rs = array();
        while($rs[] = mysqli_fetch_assoc($result)) {
           // you don´t really need to do anything here.
         }
        $response = $rs;
    }

    if(empty($error)){ 
        
    }else{
        $validation_error = implode(", ", $error);
    }
    
    $output = array(
        'error'  => $validation_error,
        'response' => $response[0]
        );
    
    echo json_encode($output);


?>