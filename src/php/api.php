<?php
 
class Api{

public function getVotos(){
     $vector = array();
     $conexion = new Conexion();
     $db = $conexion->getConexion();
     $sql = "SELECT * FROM Votos";
     $consulta = $db->prepare($sql);
     $consulta->execute();
     while($fila = $consulta->fetch()) {
        $vector[] = array(
          "ID" => $fila['ID'],
          "codigoMesa" => $fila['codigoMesa'],
          "cuenta" => $fila['cuenta'],
          "nombre" => $fila['nombre'],
          "puntos" =>  $fila['puntos']); }
     
          return $vector;
}

public function addVoto($codigoMesa, $puntos, $cuenta, $nombre){
  
  $conexion = new Conexion();
  $db = $conexion->getConexion();
  $sql = "INSERT INTO Votos (codigoMesa, puntos, cuenta, nombre) VALUES (:codigoMesa,:puntos,:cuenta,:nombre)";
  $consulta = $db->prepare($sql); 
  $consulta->bindParam(':codigoMesa', $codigoMesa);
  $consulta->bindParam(':puntos', $puntos);
  $consulta->bindParam(':cuenta', $cuenta);
  $consulta->bindParam(':nombre', $nombre);
  $consulta->execute();

  return '{"msg":"voto agregado"}';
}

}
