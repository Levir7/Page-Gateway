<?php
$nombre = $_POST['fullname'];
$mail = $_POST['email'];
$companyname = $_POST['companyname'];
$service = $_POST['service'];
$comments = $_POST['comments'];

$header = 'From: ' . $mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$mensaje = "Message send by:  " . $nombre . ",\r\n";
$mensaje .= "Email Address: " . $mail . " \r\n";
$mensaje .= "Company Name: " . $companyname . " \r\n";
$mensaje .= "Comments: " . $_POST['comments'] . " \r\n";
$mensaje .= "Sent to: " . date('d/m/Y', time());

$para = 'levirolear@outlook.com';
$asunto = 'Email Customer Service';

mail($para, $asunto, utf8_decode($mensaje), $header);

header("Location:index.html");
?>