<?php
$name =$_POST["name"];
$email =$_POST["email"];
$message =$_POST["message"];
// if(isset($_POST['button'])){
//     echo $_SERVER[HTTP_REFERER]; 
//    }
require "vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
$mail=new PHPMailer(true);

// $mail->SMTPDebug=SMTP::DEBUG_SERVER;

$mail->isSMTP();
$mail->SMTPAuth =true;

$mail->Host="smtp-relay.sendinblue.com";
$mail->SMTPSecure=PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port=587;

$mail->Username ="waellatiri2@gmail.com";
$mail->Password="Oz231vsPRCyZKEdp";

$mail->setFrom($email, $name);
$mail->addAddress("waellatiri2@gmail.com","wael");


$mail->Body = $message;

$mail->send();

echo "email send";   
