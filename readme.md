![Logo TipAdvisor](https://user-images.githubusercontent.com/73492292/170787657-d66f7334-030e-4f2d-877e-3606fa4c1e91.png)
# TipAdvisor<br/>
En España estamos acostumbrados a dar la cantidad de propina que nos parezca correcta, pero no en todos los países es así.<br/>
Los expertos en etiqueta señalan que la cantidad correcta de propina se encuentra entre el 15% y el 20% del total de la cuenta.<br/>
TipAdvisor es una herramienta que facilita ese cálculo y permite recompensar de manera correcta un buen servicio eligiendo el porcentaje que se desea entregar como propina y dividiéndolo entre todos los comensales.<br/>
## Guía de instalación del proyecto
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
## Importante<br/>
### El proyecto solo se ha probado en **localhost**
El proyecto solo ha sido probado en localhost, eso quiere decir que al descargar la aplicación desde el código QR **no hay una base de datos activa para el apartado de grupo.**<br/>
**Si se hostea el servidor PHP en localhost es necesario realizar las siguientes acciones si se va a utlizar el móvil en vez de un emulador**<br/>
Editar el archivo de configuracion de Apache "httpd-xampp.conf"
![Acceso al archivo httpd-xampp.conf](https://user-images.githubusercontent.com/73492292/170788875-d5595b09-e014-4582-a236-7bee74c72953.png)
<br/>Añadir esto al final del archivo y guardar:
```
#
# New XAMPP security concept
#
# Close XAMPP security section here
<LocationMatch “^/(?i:(?:security))”>
Order deny,allow
#Deny from all
#Allow from ::1 127.0.0.0/8
Allow from all
ErrorDocument 403 /error/HTTP_XAMPP_FORBIDDEN.html.var
</LocationMatch>
# Close XAMPP sites here
<LocationMatch “^/(?i:(?:xampp|licenses|phpmyadmin|webalizer|server-status|server-info))”>
Order deny,allow
#Deny from all
#Allow from ::1 127.0.0.0/8
Allow from all
ErrorDocument 403 /error/HTTP_XAMPP_FORBIDDEN.html.var
</LocationMatch>
```
## Descargar la aplicación
![TipAdvisorQR](https://user-images.githubusercontent.com/73492292/170793772-4b2879eb-e67c-4c23-a836-b1f0870bd22e.png)
