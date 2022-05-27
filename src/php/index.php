<?php
require_once('conexion.php');
require_once('api.php');
require_once('cors.php');
//obteniedo el metodo http
$method = $_SERVER['REQUEST_METHOD'];

if($method == "GET") {

    $api = new Api();
    $vector = $api->getVotos();
    $json = json_encode($vector);
    echo $json; 
   
}

if($method == "POST"){
    $json = null;
    $data = json_decode(file_get_contents("php://input"), true);
    $codigoMesa = $data['codigoMesa'];
    $puntos = $data['puntos'];
    $cuenta = $data['cuenta'];
    $nombre = $data['nombre'];
    $api = new Api();
    $json = $api->addVoto($codigoMesa, $puntos,$cuenta,$nombre);
    echo $json;
}
