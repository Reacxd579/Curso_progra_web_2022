<?php

function conexion(){
    # VARIABLES PARA CONEXION
    $host = "localhost";
    $usuario = "root";
    $password = "Reacxd579@";
    $database = "prueba";

    $conexion = mysqli_connect($host, $usuario, $password, $database);

    if($conexion){
        echo "CONEXION EXITOSA";
        mysqli_query($conexion, "set names `utf8`");
    }else{
        echo "CONEXION FALLIDA".mysqli_error();
    }
    return $conexion;
}

$resultado = conexion();

mysqli_close($resultado);

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>prueba php</title>
</head>
<body>
    
</body>
</html>