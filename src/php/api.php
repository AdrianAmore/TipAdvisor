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

public function deleteLibro($id){
  $conexion = new Conexion();
  $db = $conexion->getConexion();
  $sql = "DELETE FROM libro WHERE id=:id";
  $consulta = $db->prepare($sql);
  $consulta->bindParam(':id', $id); 
  $consulta->execute();

  return '{"msg":"libro eliminado"}';
}

public function getLibro($id){
  $vector = array();
  $conexion = new Conexion();
  $db = $conexion->getConexion();
  $sql = "SELECT id, nombre, edicion FROM libro WHERE id=:id";
  $consulta = $db->prepare($sql);
  $consulta->bindParam(':id', $id);
  $consulta->execute();
  while($fila = $consulta->fetch()) {
     $vector[] = array(
       "id" => $fila['id'],
       "nombre" => $fila['nombre'],
       "edicion" =>  $fila['edicion']); }

  return $vector[0];
}

public function updateLibro($id, $nombre, $edicion){
  
  $conexion = new Conexion();
  $db = $conexion->getConexion();
  $sql = "UPDATE libro SET nombre=:nombre, edicion=:edicion WHERE id=:id";
  $consulta = $db->prepare($sql);
  $consulta->bindParam(':id', $id);  
  $consulta->bindParam(':nombre', $nombre);
  $consulta->bindParam(':edicion', $edicion);
  $consulta->execute();

  return '{"msg":"libro actualizado"}';
}



}
