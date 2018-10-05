<?php
      
    //conexão com o servidor
    $conect = mysqli_connect("localhost", "root", "usbw","usuarios");
    
    // Caso a conexão seja reprovada, exibe na tela uma mensagem de erro
    if (!$conect) die ("<h1>Falha na conexão com o Banco de Dados!</h1>");
    
    /*Configurando este arquivo, depois é só você dar um include em suas paginas php,
    isto facilita muito, pois caso haja necessidade de mudar seu Banco de Dados
    você altera somente um arquivo*/

?>