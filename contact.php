<?php 

// ---------------- MY SQL DB CONNECTION STARTS

$conex = mysqli_connect("localhost", 'c2560614_seguros', 'PpMnMoAs01', 'c2560614_seguros');

$send = $_POST['enviar'];

if (isset($send)) {
    $name = $_POST['nombre'];
    $postalCod = $_POST['postal'];
    $email = $_POST['email'];
    $tel = $_POST['telefono'];
    $datos = $_POST['datos'];

    $to = 'info@estarsiempreseguros.com.ar';
    $to = 'estarsiempreseguros@gmail.com';
    $subject = 'Enviado desde formulario del sitio web.';
    $headers .= $email;
    $content = $datos;

    $sql = "INSERT INTO seguros_form(Nombre, postalCod, Email, Tel, Datos) VALUES ('$name', '$postalCod','$email', '$tel', '$datos')";

    $result = mysqli_query($conex, $sql);
}


if($result) {
        header("Location:https://estarsiempreseguros.com.ar/");
}

// ---------------- MY SQL DB CONNECTION ENDS


// -----------------------------------------------------


/**
 * @version 1.0
 */

require("class.phpmailer.php");
require("class.smtp.php");

// Valores enviados desde el formulario
if ( !isset($_POST["nombre"]) || !isset($_POST["postal"]) || !isset($_POST["email"]) || !isset($_POST["telefono"]) || !isset($_POST["datos"]) ) {
    die ("Es necesario completar todos los datos del formulario");
}
    $name = $_POST['nombre'];
    $postalCod = $_POST['postal'];
    $email = $_POST['email'];
    $tel = $_POST['telefono'];
    $datos = $_POST['datos'];

// Datos de la cuenta de correo utilizada para enviar vía SMTP
$smtpHost = "c2560614.ferozo.com";  // Dominio alternativo brindado en el email de alta 
$smtpUsuario = "info@estarsiempreseguros.com.ar";  // Mi cuenta de correo
$smtpClave = "ErSeSs01";  // Mi contraseña

// Email donde se enviaran los datos cargados en el formulario de contacto
$emailDestino = "info@estarsiempreseguros.com.ar";

$mail = new PHPMailer();
$mail->IsSMTP();
$mail->SMTPAuth = true;
$mail->Port = 465; 
$mail->SMTPSecure = 'ssl';
$mail->IsHTML(true); 
$mail->CharSet = "utf-8";


// VALORES A MODIFICAR //
$mail->Host = $smtpHost; 
$mail->Username = $smtpUsuario; 
$mail->Password = $smtpClave;

$mail->From = $email; // Email desde donde envío el correo.
$mail->FromName = $nombre;
$mail->AddAddress($emailDestino); // Esta es la dirección a donde enviamos los datos del formulario

$mail->Subject = "Correo recibido desde la web de Maschio y Asoc."; // Este es el titulo del email.
$mensajeHtml = nl2br($datos);
$mail->Body = "{$mensajeHtml} <br /><br />Formulario enviado desde estarsiempreseguros.com.ar<br />"; // Texto del email en formato HTML
$mail->AltBody = "{$datos} \n\n Formulario enviado desde estarsiempreseguros.com.ar"; // Texto sin formato HTML
// FIN - VALORES A MODIFICAR //

$estadoEnvio = $mail->Send(); 
if($estadoEnvio){
    echo "El correo fue enviado correctamente.";
} else {
    echo "Ocurrió un error inesperado.";
}


?>