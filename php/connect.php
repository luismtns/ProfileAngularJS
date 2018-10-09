<?php
      //no início:
    mb_http_output( "iso-8859-1" );  
    ob_start("mb_output_handler");   
    header("Content-Type: text/html; charset=ISO-8859-1",true);

    //conexão com o servidor
    $conect = mysqli_connect("localhost", "root", "","profiledb");
    // $mysqli = new mysqli('localhost','root','','profiledb');

    $bd_error = json_encode(array("error"=>"Falha ao conectar ao banco de dados."));
    
    // Caso a conexão seja reprovada, exibe na tela uma mensagem de erro
    if (!$conect) die ($bd_error);
    
    /*Configurando este arquivo, depois é só você dar um include em suas paginas php,
    isto facilita muito, pois caso haja necessidade de mudar seu Banco de Dados
    você altera somente um arquivo*/

?>
