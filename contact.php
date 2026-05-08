<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars($_POST['message']);


    $to = "helenkokob317@gmail.com";
    $subject = "Assignment: Portfolio Message from " . $name;
    $headers = "From: " . $email . "\r\n" .
               "Reply-To: " . $email . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    
    $body = "You have received a new message.\n\n".
            "Name: $name\n".
            "Email: $email\n\n".
            "Message:\n$message";

    /
    if (mail($to, $subject, $body, $headers)) {
      
        echo "Message successfully processed by PHP.";
    } else {
        echo "Mail function failed (requires an active SMTP server).";
    }
}
?>
