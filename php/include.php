<?php
    include 'connect.php';

    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $senha = $_POST['senha'];
    $sql = "INSERT INTO usuario (NOME, EMAIL, SENHA) VALUES ('$nome', '$email', '$senha')";
    mysqli_query($conect, $sql) or die(print_r('erro'));
    echo mysqli_insert_id($conect);
    mysqli_close($conect);
?>