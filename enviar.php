<?php
// include("connection-db.php");

if(isset($_POST['btnsubmit'])){
      $fullName = $_POST["fullName"];
   $companyName = $_POST["companyname"];
   $email = $_POST["email"];
   $service = $_POST["service"];
   $comments = $_POST["comments"];
  }

   //obtener los datos del formulario
   
//    echo "Connected successfully $fullName";
//    echo "Connected successfully $companyName";
//    echo "Connected successfully $email";
//    echo "Connected successfully $service";
//    echo "Connected successfully $comments";

// $fullName = "fullName";
// $companyName = "companyname";
// $email = "email";
// $service = "service";
// $comments = "comments";

$servername = "localhost";
$database = "page_test";
$username = "root";
$password = "";

$conn = mysqli_connect($servername, $username, $password, $database);
   // Check connection
   if (!$conn) {
       die(" <p> Connection failed: " . mysqli_connect_error() . "</p>");
   }
   echo "Connected successfully";
// push a la base de datos
$sql = "INSERT INTO forms_response (full_name, company_name, email, service, comments) VALUES ('$fullName' , '$companyName', '$email', '$service', '$comments')";
if (mysqli_query($conn, $sql)) {
      echo "New record created successfully";
} else {
      echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
mysqli_close($conn);

  
?>
