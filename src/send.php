<?php
/*
$nombreUsuario=$_POST['nombre'];
$DPI=$_POST['dpi'];
$NIT=$_POST['nit'];
$Correo=$_POST['correo'];
$Telefono=$_POST['telefono'];
$Empresa=$_POST['empresa'];
$Puesto=$_POST['puesto'];
$Tiempo=$_POST['tiempo'];
$Total=$_POST['ingresos'];
$Monto=$_POST['monto'];
$NoCuotas=$_POST['cuotas'];
$Tipo=$_POST['tipo'];

*/

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $secretKey = "6LcXp6olAAAAAOEuZIyjTk9KRK2Q7JIBdRs277gI";
    $responseKey = $_POST['g-recaptcha-response'];
    $userIP = $_SERVER['REMOTE_ADDR'];
    $url = "https://www.google.com/recaptcha/api/siteverify?secret=$secretKey&response=$responseKey&remoteip=$userIP";
    $response = file_get_contents($url);
    $response = json_decode($response);
    //if ($response->success) {
        if (isset($_POST['correo']) && isset($_POST['message'])) {
            $to = "alvarezoscardavid1@gmail.com";
            $subject = "Solicitud de préstamo";
            $message = $_POST['message'];
            $headers = "From: " . $_POST['correo'] . "\r\n" .
                "Reply-To: " . $_POST['correo'] . "\r\n" .
                "Content-type: text/html; charset=UTF-8\r\n";

            if (mail($to, $subject, $message, $headers)) {
                echo json_encode(array("success" => true));
            } else {
                echo json_encode(array("success" => false, "message" => "Hubo un error al enviar el correo."));
            }
        } else {
            echo json_encode(array("success" => false, "message" => "No se proporcionaron los datos necesarios."));
        }
   // } else {
   //     echo json_encode(array("success" => false, "message" => "Por favor, resuelve el captcha correctamente."));
    //}




}
?>
