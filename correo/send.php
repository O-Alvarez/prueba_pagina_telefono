<?php
// Datos del destinatario y mensaje
$to = 'solicitud.prestamosec@gmail.com';
$subject = 'Prueba de correo';
$message = 'Hola, esto es una prueba de envío de correo desde PHP para corroborar que la direccion de correo es incorrecta o no sdfsdfsd este es nuevo 15:39 horas';

// Cabeceras del correo
$headers = 'From: bml@bml.com.gt' . "\r\n" .
           'Reply-To: bml@bml.com.gt' . "\r\n" .
           'X-Mailer: PHP/' . phpversion();

// Envío del correo
if (mail($to, $subject, $message, $headers)) {
    echo 'El correo se ha enviado correctamente.';
} else {
    echo 'Ha ocurrido un error al enviar el correo.';
}
?>
