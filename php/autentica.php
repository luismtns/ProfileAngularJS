<?php
    include 'connect.php';

    $nome = $_POST['nome'];
    $senha = $_POST['senha'];
    $sql = "SELECT * FROM usuario WHERE NOME = '$nome' AND SENHA = '$senha'";
    $verifica = mysqli_query($conect, $sql) or die("erro");
        if (mysqli_num_rows($verifica)<=0){
          echo 'error';
          die();
        }else{
            while ($row=mysqli_fetch_row($verifica)){
                printf ($row[0]);
            }
        };
        
    mysqli_close($conect);

?>