#TipAdvisor<br/>
En España estamos acostumbrados a dar la cantidad de propina que nos parezca correcta, pero no en todos los países es así.<br/>
Los expertos en etiqueta señalan que la cantidad correcta de propina se encuentra entre el 15% y el 20% del total de la cuenta.<br/>
TipAdvisor es una herramienta que facilita ese cálculo y permite recompensar de manera correcta un buen servicio eligiendo el porcentaje que se desea entregar como propina y dividiéndolo entre todos los comensales.<br/>
##Guía de instalación del proyecto
1. Clonar el repositorio.
2. ```npm install```
3. ```npm i react-native-splash-screen --save```
4. ```react-native link react-native-splash-screen```
5. ```npm install @react-navigation/native```
6. ```npm install react-native-screens react-native-safe-area-context```
7. ```npm install @react-navigation/drawer```
8. ```npm install react-native-gesture-handler react-native-reanimated```
9. ```npm install react-native-paper```
10. ```npm install react-native-vector-icons```
11. ```react-native-vector-icons```
12. ```react-native link react-native-vector-icons```
13. ```npm install i18next --save```
14. ```npm i react-i18next```
15. ```npm install @react-navigation/stack```
16. ```npm install react-native-gesture-handler```
17. ```npm i axios```
18. Mover la carpeta de php a la carpeta *htdocs* de XAMPP o al servidor donde se vaya a alojar el PHP.
19. Editar el link que aparece en las llamadas a axios por el link donde se encuentre alojado tu PHP.
``` 
//Añade un registro
const addVoto = async () => {
const obj = { codigoMesa, puntos, cuenta, nombre }
const respuesta = await axios.post('http://192.168.1.132/php/', obj) //Reemplazar ese link por el tuyo
  } 

```
20. Editar los valores en el archivo conexion.php
```
<?php

class Conexion {
	
 public function getConexion(){
   $host = "localhost";  //Host donde se encuentra el PHP
   $db = "test";      //base de datos de mysql a la que se debe conectar
   $user = "root";       // usuario de mysql
   $password = "";       //contraseña de mysql

//conexion a la base datos utilizando pdo
 $db = new PDO("mysql:host=$host;dbname=$db;", $user, $password);

  return $db;
}

}

?>
```
##Importante<br/>
###El proyecto solo se ha probado en **localhost**
El proyecto solo ha sido probado en localhost, eso quiere decir que al descargar la aplicación desde el código QR **no hay una base de datos activa para el apartado de grupo.**
##Descargar la aplicación