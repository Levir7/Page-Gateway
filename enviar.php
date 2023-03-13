<?php

if(isset($_POST['btnsubmit'])){
      $fullName = $_POST["fullName"];
   $companyName = $_POST["companyname"];
   $email = $_POST["email"];
   $service = $_POST["service"];
   $comments = $_POST["comments"];
  }

$servername = "localhost";
$database = "page_test";
$username = "root1";
$password = "";

$conn = mysqli_connect($servername, $username, $password, $database);
   // Check connection
   if (!$conn) {
       die(" <p> Connection failed: " . mysqli_connect_error() . "</p>");
   }
   echo "Connected successfully";

// define el pais donde estas
date_default_timezone_set('America/Mexico_City');
// toma la hora de ese pais
$fecha = date("Y-m-d H:i:s");

// push a la base de datos
$sql = "INSERT INTO forms_response (full_name, company_name, email, service, comments, fecha) VALUES ('$fullName' , '$companyName', '$email', '$service', '$comments', '$fecha')";
if (mysqli_query($conn, $sql)) {
      echo "New record created successfully";
} else {
      echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}


// redireccionar cuando envie el formulario
header("Location: /");

error_reporting(0);
$header = 'From: ' . $email ."\r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$mensaje = "Este mensaje fue enviado por " . $fullName . "\r\n";
$mensaje .= "\r\n";
$mensaje .= "Su e-mail es: " . $email . " \r\n";
$mensaje .= "\r\n";
$mensaje .= "Servicio de interes: " . $service . " \r\n";
$mensaje .= "\r\n";
$mensaje .= "Comentarios: " . $comments . " \r\n";
$mensaje .= "\r\n";
$mensaje .="Company Name: ".$companyName . " \r\n";
$mensaje .= "\r\n";
$mensaje .= "Enviado el " . "$fecha";

$para = 'soporte@gatewayfabrication.com.mx';
$asunto = 'Correo desde la pagina GatewayFabrication';

mail($para, $asunto, utf8_decode($mensaje), $header);

echo 'mensaje enviado correctamente';






mysqli_close($conn);

  
?>
