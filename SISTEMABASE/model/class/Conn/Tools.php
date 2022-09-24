<?php
class Tools{
    function conectar(){
        $conexion = mysqli_connect(SERVER, USERBD, PASSDB, DATABASE);
        if($conexion){
            mysqli_query($conexion, "SET NAMES `utf8`")
            mysqli_set_charset($conexion, "utf8");
        }else{
            echo"ERROR DE CONEXION DEBIDO SI <br> ".mysqli_conect_error();
        }
        return $conexion;
    } 
    function desconectar($conexion){
        $close = mysqli_close($conexion);

        if($close){
            echo "Ocurrio un error al cerrar la conexion debido a: <br> ", mysqli_connect_error();
        }
    }
}
?>