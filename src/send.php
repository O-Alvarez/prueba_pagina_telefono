<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: Content-Type');
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $secretKey = "6LfyugUmAAAAAO5qiDoXXNso8lcQyrC03KkZthma";
    $responseKey = $_POST['g-recaptcha-response'];
    $userIP = $_SERVER['REMOTE_ADDR'];
    $url = "https://www.google.com/recaptcha/api/siteverify?secret=$secretKey&response=$responseKey&remoteip=$userIP";
    $response = file_get_contents($url);
    $response = json_decode($response);
    if ($response->success) {
        if (isset($_POST['correo']) && isset($_POST['message'])) {
            $to = "solicitud.prestamosec@gmail.com";
            $subject = "Solicitud de préstamo";
            $message = $_POST['message'];
            $headers = "From: " . $_POST['correo'] . "\r\n" .
                "Reply-To: " . $_POST['correo'] . "\r\n" .
                "Content-type: text/html; charset=UTF-8\r\n";
            if (mail($to, $subject, $message, $headers)) {
                //si el correo se manda al admin admin entonces mail== succes y se manda al usuario el correo exitoso. 
                $de= $_POST['correo'];
                $asunto="Solicitud De Préstamo";
                $mensaje="
                <p>Buen día</p>
                <p>Nos alegra comunicarle que su solicitud de préstamo, ha sido enviada <strong>Correctamente</strong>, por lo que, nos estaremos comunicando con usted.</p>
                <p>Atte:</p>
                <p>Easy Capital</p>";
                $headers1 = "From: " . "easycapital@easycapital.com.gt" . "\r\n" .
                "Reply-To: " . "easycapital@easycapital.com.gt". "\r\n" .
                "Content-type: text/html; charset=UTF-8\r\n";
                mail($de,$asunto,$mensaje,$headers1);
                echo json_encode(array("success" => true));
            } else {
                echo json_encode(array("success" => false, "message" => "Hubo un error al enviar el correo."));
            }
        } else {
            echo json_encode(array("success" => false, "message" => "No se proporcionaron los datos necesarios."));
        }
   } else {
        echo json_encode(array("success" => false, "message" => "Por favor, resuelve el captcha correctamente."));
    }
}
?>
