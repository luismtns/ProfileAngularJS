<?php
    include 'connect.php';
    

    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $senha = $_POST['senha'];

    $sql0 = "SELECT * FROM `usuario` WHERE NOME = '$nome' OR EMAIL = '$email' ";
    $verifica = mysqli_query($conect, $sql0) or die("erro");

    if (mysqli_num_rows($verifica)>0){
        die("erro");
    }

    $sql = "INSERT INTO usuario (NOME, EMAIL, SENHA) VALUES ('$nome', '$email', '$senha')";
    mysqli_query($conect, $sql) or die('erro');
    echo mysqli_insert_id($conect);
    mysqli_close($conect);
?>