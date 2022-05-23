<?php

class Conexion {
	
 public function getConexion(){
   $host = "sql11.freemysqlhosting.net";  //127.0.0.1 0 localhost
   $db = "sql11494695";      //base de datos de mysql
   $user = "sql11494695";       // usuario de mysql
   $password = "gFh4Xaepzp";       //contraseña de mysql

//conexion a la base datos utilizando pdo
 $db = new PDO("mysql:host=$host;dbname=$db;", $user, $password);

  return $db;
}

}

?>