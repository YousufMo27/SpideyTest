<?php

if(isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['msg'];

    $mailTo ="yousufmohiuddin0529@gmail.com";
    $headers = "From: ".$email;
    $text = "You have recieved an email from";

    mail($mailTo, $subject, $text,$headers);

    header("Location: index.php>mailsend");
}

?>