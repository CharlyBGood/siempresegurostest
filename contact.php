<?php 


$conex = mysqli_connect("localhost", 'c2560614', 'PpMnMoAs01', 'c2560614_seguros');


if (isset($_POST['enviar'])) {
    $para = 'info@estarsiempreseguros.com.ar';
    $nombre = $_POST['nombre'];
    $postalCod = $_POST['postal'];
    $email = $_POST['email'];
    $tel = $_POST['telefono'];
    $datos = $_POST['datos'];

    $mjeMail = 'Estamos comprobando que los mails lleguen a Maschio y Asoc.';

    $sql = "INSERT INTO seguros_form(Id, Nombre, postalCod, Email, Tel, Datos) VALUES ('0', '$nombre', '$postalCod', '$tel', '$datos')";

    $result = mysqli_query($conex, $sql);

}


if ($_POST['enviar']) {
    if (mail($para, $nombre, $postalCod, $email, $tel, $datos)) {
        echo 'enviado!';
    }
}