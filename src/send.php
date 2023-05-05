<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $secretKey = "6LcXp6olAAAAAOEuZIyjTk9KRK2Q7JIBdRs277gI";
    $responseKey = $_POST['g-recaptcha-response'];
    $userIP = $_SERVER['REMOTE_ADDR'];
    $url = "https://www.google.com/recaptcha/api/siteverify?secret=$secretKey&response=$responseKey&remoteip=$userIP";
    $response = file_get_contents($url);
    $response = json_decode($response);
    if ($response->success) {
        if (isset($_POST['correo']) && isset($_POST['message'])) {
            $to = "contabilidad@inssafreight.com.gt";
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
                <p>Nos alegra comunicarte que tu solicitud de préstamo, ha sido enviada <strong>Correctamente</strong>, por lo que, nos estaremos comunicando contigo.</p>
                <p>Atte:</p>
                <p>Easy Capital</p>";
                $headers1 = "From: " . "contabilidad@inssafreight.com.gt" . "\r\n" .
                "Reply-To: " . "contabilidad@inssafreight.com.gt". "\r\n" .
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
