<<?php 
$conex = mysqli_connect("localhost", "c2560614_seguros", "PpMnMoAs01", "c2560614_seguros");

$nombre = $_POST['nombre'];
$postalCod = $_POST['postal'];
$email = $_POST['email'];
$tel = $_POST['telefono'];
$datos = $_POST['datos'];

$sql = "INSERT INTO `seguros_form`(Id, Nombre, postalCod, Email, Tel, Datos) VALUES ('0', '$nombre', '$postalCod', '$tel', '$datos')";


$result = mysqli_query($conex, $sql);

if($result) {
    echo "¡El mensaje ha sido enviado con éxito!!";
}


?>




<!-- 
    
user: c2560614

password: PpMnMoAs01

email: no-reply@c2560614.ferozo.com	

->