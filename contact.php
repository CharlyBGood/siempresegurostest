<?php 


$conex = mysqli_connect("localhost", 'c2560614', 'PpMnMoAs01', 'c2560614_seguros');


$name = $_POST['nombre'];
$postalCod = $_POST['postal'];
$email = $_POST['email'];
$tel = $_POST['telefono'];
$datos = $_POST['datos'];



$sql = "INSERT INTO seguros_form(Id, Nombre, postalCod, Email, Tel, Datos) VALUES ('0', '$name', '$postalCod,'$email', '$tel', '$datos')";

$result = mysqli_query($conex, $sql);

if ($result) {
    echo "Recorded on your mind";
}


?>


