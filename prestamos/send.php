<?php
if (isset($_POST['correo']) && isset($_POST['message'])) {
    $to = "vallague.com@gmail.com";
    $subject = "Detalles del préstamo";
    $message = $_POST['message'];
    $headers = "From: " . $_POST['correo'] . "\r\n" .
        "Reply-To: " . $_POST['correo'] . "\r\n" .
        "Content-type: text/html; charset=UTF-8\r\n";
    
    if (mail($to, $subject, $message, $headers)) {
        echo "El correo se ha enviado correctamente.";
    } else {
        echo "Hubo un error al enviar el correo.";
    }
} else {
    echo "No se proporcionaron los datos necesarios.";
}
?>
