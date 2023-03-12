<?php
	//Sintaxis de conexión de la base de datos de muestra para PHP y MySQL.
	// $conn = mysqli_connect ("localhost", "root", "");
	// if (mysqli_connect ("localhost", "root", "") ){
	// echo "<p>MySQL le ha dado permiso a PHP para ejecutar consultas con ese usuario y clave</p>";
	// }else{
	// echo "<p>MySQL no conoce ese usuario y password, y rechaza el intento de conexión</p>";
	// }
	// $database = mysqli_select_db( $conn,"page_test");
	
	// if($database){
	// 	echo "<p> se ha realizado la conexion </p>";
	// } else {
	// 	echo "no se puede tener acceso a la base";
	// }

$servername = "localhost";
$database = "page_test";
$username = "root";
$password = "";
// Create connection

$conn = mysqli_connect($servername, $username, $password, $database);
// Check connection
if (!$conn) {
    die(" <p> Connection failed: " . mysqli_connect_error() . "</p>");
}
echo "Connected successfully";


// mysqli_close($conn);

// push a la base de datos
// $sql = "INSERT INTO forms_response (full_name, company_name, email, service, comments) VALUES ('Test', 'Testing', 'Testing@tesing.com', 'manufct', 'this is a comment test')";
// if (mysqli_query($conn, $sql)) {
//       echo "New record created successfully";
// } else {
//       echo "Error: " . $sql . "<br>" . mysqli_error($conn);
// }
// mysqli_close($conn);

?>