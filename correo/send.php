<?php
$destinatario = "alvarezoscardavid1@gmail.com";
$asunto = "Prueba de correo desde PHP";
$mensaje = "Este es un mensaje de prueba enviado desde PHP.";

$headers = "From: remitente@example.com\r\n";
$headers .= "Reply-To: remitente@example.com\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

$mail_enviado = mail($destinatario, $asunto, $mensaje, $headers);

if ($mail_enviado) {
    echo "Correo enviado correctamente.";
} else {
    echo "Error al enviar el correo.";
}
?>
