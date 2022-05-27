<?php 


$conex = mysqli_connect("localhost", 'c2560614_seguros', 'PpMnMoAs01', 'c2560614_seguros');


$name = $_POST['nombre'];
$postalCod = $_POST['postal'];
$email = $_POST['email'];
$tel = $_POST['telefono'];
$datos = $_POST['datos'];

$send = $_POST['enviar'];


$sql = "INSERT INTO seguros_form(Nombre, postalCod, Email, Tel, Datos) VALUES ('$name', '$postalCod','$email', '$tel', '$datos')";

$result = mysqli_query($conex, $sql);

if ($result) {
    echo "pasó la prueba";
} 


?>


