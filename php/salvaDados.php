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
        if(isset($_POST['txNick'])){
            $nick = $_POST['txNick'];
            $sql_code = "UPDATE usuario SET NICK = '$nick' WHERE EMAIL = '$emailDe'";

            if (mysqli_query($conect, $sql_code)){
                $res[] = true;
            } else {
                $error[] =  'Nick falhou.';
                $validation_error = implode(", ", $error);
            }
        }
        if(isset($_POST['txSobrenome'])){
            $sobrenome = $_POST['txSobrenome'];
            $sql_code = "UPDATE usuario SET SOBRENOME = '$sobrenome' WHERE EMAIL = '$emailDe'";

            if (mysqli_query($conect, $sql_code)){
                $res[] = true;
            } else {
                $error[] =  'Sobrenome falhou.';
                $validation_error = implode(", ", $error);
            }
        }
        if(isset($_POST['txIdade'])){
            $idade = $_POST['txIdade'];
            $sql_code = "UPDATE usuario SET IDADE = '$idade' WHERE EMAIL = '$emailDe'";

            if (mysqli_query($conect, $sql_code)){
                $res[] = true;
            } else {
                $error[] =  'Idade falhou.';
                $validation_error = implode(", ", $error);
            }
        }
        if(isset($_POST['txPais'])){
            $pais = $_POST['txPais'];
            $sql_code = "UPDATE usuario SET PAIS = '$pais' WHERE EMAIL = '$emailDe'";

            if (mysqli_query($conect, $sql_code)){
                $res[] = true;
            } else {
                $error[] =  'Pais falhou.';
                $validation_error = implode(", ", $error);
            }
        }
        if(isset($_POST['txEstado'])){
            $estado = $_POST['txEstado'];
            $sql_code = "UPDATE usuario SET ESTADO = '$estado' WHERE EMAIL = '$emailDe'";

            if (mysqli_query($conect, $sql_code)){
                $res[] = true;
            } else {
                $error[] =  'Pais falhou.';
                $validation_error = implode(", ", $error);
            }
        }
        if(isset($_POST['txIdioma1'])){
            $idioma1 = $_POST['txIdioma1'];
            $sql_code = "UPDATE usuario SET IDIOMA1 = '$idioma1' WHERE EMAIL = '$emailDe'";

            if (mysqli_query($conect, $sql_code)){
                $res[] = true;
            } else {
                $error[] =  'Idioma1 falhou.';
                $validation_error = implode(", ", $error);
            }
        }
        if(isset($_POST['txIdioma2'])){
            $idioma2 = $_POST['txIdioma2'];
            $sql_code = "UPDATE usuario SET IDIOMA2 = '$idioma2' WHERE EMAIL = '$emailDe'";

            if (mysqli_query($conect, $sql_code)){
                $res[] = true;
            } else {
                $error[] =  'Idioma2 falhou.';
                $validation_error = implode(", ", $error);
            }
        }
        if(isset($_POST['txLOL'])){
            $loluser = $_POST['txLOL'];
            $sql_code = "UPDATE usuario SET USER_LOL = '$loluser' WHERE EMAIL = '$emailDe'";

            if (mysqli_query($conect, $sql_code)){
                $res[] = true;
            } else {
                $error[] =  'Usuário do League of Legends falhou.';
                $validation_error = implode(", ", $error);
            }
        }
        if(isset($_POST['txTwitch'])){
            $twitch = $_POST['txTwitch'];
            $sql_code = "UPDATE usuario SET TWITCH = '$twitch' WHERE EMAIL = '$emailDe'";

            if (mysqli_query($conect, $sql_code)){
                $res[] = true;
            } else {
                $error[] =  'Twitch falhou.';
                $validation_error = implode(", ", $error);
            }
        }
        if(isset($_POST['txTwitter'])){
            $twitter = $_POST['txTwitter'];
            $sql_code = "UPDATE usuario SET TWITTER = '$twitter' WHERE EMAIL = '$emailDe'";

            if (mysqli_query($conect, $sql_code)){
                $res[] = true;
            } else {
                $error[] =  'Twitter falhou.';
                $validation_error = implode(", ", $error);
            }
        }
        if(isset($_POST['txDiscord'])){
            $discord = $_POST['txDiscord'];
            $sql_code = "UPDATE usuario SET DISCORD = '$discord' WHERE EMAIL = '$emailDe'";

            if (mysqli_query($conect, $sql_code)){
                $res[] = true;
            } else {
                $error[] =  'Discord falhou.';
                $validation_error = implode(", ", $error);
            }
        }
        if(isset($_POST['txYoutube'])){
            $youtube = $_POST['txYoutube'];
            $sql_code = "UPDATE usuario SET YOUTUBE = '$youtube' WHERE EMAIL = '$emailDe'";

            if (mysqli_query($conect, $sql_code)){
                $res[] = true;
            } else {
                $error[] =  'Youtube falhou.';
                $validation_error = implode(", ", $error);
            }
        }
        if(isset($_POST['txCPU'])){
            $cpu = $_POST['txCPU'];
            $sql_code = "UPDATE usuario SET CPU = '$cpu' WHERE EMAIL = '$emailDe'";

            if (mysqli_query($conect, $sql_code)){
                $res[] = true;
            } else {
                $error[] =  'CPU falhou.';
                $validation_error = implode(", ", $error);
            }
        }
        if(isset($_POST['txRAM'])){
            $ram = $_POST['txRAM'];
            $sql_code = "UPDATE usuario SET RAM = '$ram' WHERE EMAIL = '$emailDe'";

            if (mysqli_query($conect, $sql_code)){
                $res[] = true;
            } else {
                $error[] =  'RAM falhou.';
                $validation_error = implode(", ", $error);
            }
        }
        if(isset($_POST['txGPU'])){
            $gpu = $_POST['txGPU'];
            $sql_code = "UPDATE usuario SET GPU = '$gpu' WHERE EMAIL = '$emailDe'";

            if (mysqli_query($conect, $sql_code)){
                $res[] = true;
            } else {
                $error[] =  'Placa de Vídeo falhou.';
                $validation_error = implode(", ", $error);
            }
        }
        if(isset($_POST['txHD'])){
            $hd = $_POST['txHD'];
            $sql_code = "UPDATE usuario SET HD = '$hd' WHERE EMAIL = '$emailDe'";

            if (mysqli_query($conect, $sql_code)){
                $res[] = true;
            } else {
                $error[] =  'Placa Mãe falhou.';
                $validation_error = implode(", ", $error);
            }
        }
        if(isset($_POST['txPlacaMae'])){
            $placamae = $_POST['txPlacaMae'];
            $sql_code = "UPDATE usuario SET PLACAMAE = '$placamae' WHERE EMAIL = '$emailDe'";

            if (mysqli_query($conect, $sql_code)){
                $res[] = true;
            } else {
                $error[] =  'Placa Mãe falhou.';
                $validation_error = implode(", ", $error);
            }
        }
        if(isset($_POST['txMouse'])){
            $mouse = $_POST['txMouse'];
            $sql_code = "UPDATE usuario SET MOUSE = '$mouse' WHERE EMAIL = '$emailDe'";

            if (mysqli_query($conect, $sql_code)){
                $res[] = true;
            } else {
                $error[] =  'Mouse falhou.';
                $validation_error = implode(", ", $error);
            }
        }
        if(isset($_POST['txTeclado'])){
            $teclado = $_POST['txTeclado'];
            $sql_code = "UPDATE usuario SET TECLADO = '$teclado' WHERE EMAIL = '$emailDe'";

            if (mysqli_query($conect, $sql_code)){
                $res[] = true;
            } else {
                $error[] =  'Teclado falhou.';
                $validation_error = implode(", ", $error);
            }
        }
        if(isset($_POST['txMonitor'])){
            $monitor = $_POST['txMonitor'];
            $sql_code = "UPDATE usuario SET MONITOR = '$monitor' WHERE EMAIL = '$emailDe'";

            if (mysqli_query($conect, $sql_code)){
                $res[] = true;
            } else {
                $error[] =  'Monitor falhou.';
                $validation_error = implode(", ", $error);
            }
        }
        if(isset($_POST['txFone'])){
            $Fone = $_POST['txFone'];
            $sql_code = "UPDATE usuario SET FONE = '$Fone' WHERE EMAIL = '$emailDe'";

            if (mysqli_query($conect, $sql_code)){
                $res[] = true;
            } else {
                $error[] =  'Fone falhou.';
                $validation_error = implode(", ", $error);
            }
        }
        if(isset($_POST['txNomeTime'])){
            $NomeTime = $_POST['txNomeTime'];
            $sql_code = "UPDATE usuario SET NOME_TIME = '$NomeTime' WHERE EMAIL = '$emailDe'";

            if (mysqli_query($conect, $sql_code)){
                $res[] = true;
            } else {
                $error[] =  'Nome time falhou.';
                $validation_error = implode(", ", $error);
            }
        }
        if(isset($_POST['txRegiaoTime'])){
            $RegiaoTime = $_POST['txRegiaoTime'];
            $sql_code = "UPDATE usuario SET REGIAO_TIME = '$RegiaoTime' WHERE EMAIL = '$emailDe'";

            if (mysqli_query($conect, $sql_code)){
                $res[] = true;
            } else {
                $error[] =  'Regiao time falhou.';
                $validation_error = implode(", ", $error);
            }
        }
        if(isset($_POST['txPosicaoTime'])){
            $PosicaoTime = $_POST['txPosicaoTime'];
            $sql_code = "UPDATE usuario SET REGIAO_TIME = '$PosicaoTime' WHERE EMAIL = '$emailDe'";

            if (mysqli_query($conect, $sql_code)){
                $res[] = true;
            } else {
                $error[] =  'Posição time falhou.';
                $validation_error = implode(", ", $error);
            }
        }
        if(isset($_POST['txPlayersTime'])){
            $PlayersTime = $_POST['txPlayersTime'];
            $sql_code = "UPDATE usuario SET REGIAO_TIME = '$PlayersTime' WHERE EMAIL = '$emailDe'";

            if (mysqli_query($conect, $sql_code)){
                $res[] = true;
            } else {
                $error[] =  'Players time falhou.';
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