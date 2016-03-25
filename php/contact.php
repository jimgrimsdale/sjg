<?php
  $errSpam = false;
  if(!$_POST['address']) {
    $errSpam = false;
  } else {
    $errSpam = true;
  }

  if (!$_POST['name']) {
    $errName = true;
  }

  if (!$_POST['email'] || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    $errEmail = true;
  }

  if (!$_POST['message']) {
    $errMessage = true;
  } else {
    $message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);
    if ((strpos($message,'canada') !== false && strpos($message,'goose') !== false)
        || (strpos($message,'canadian') !== false && strpos($message,'goose') !== false)) {
      $errMessage = true;


      // $name = 'Me';
      // $email = 'email';
      // $message = 'goose spammer attack';

      // $from = 'Sent from: SJG Driving Tuition - Backend'; 
      // $to = 'jim6788@gmail.com';
      // $subject = 'spam detected';
      
      // $body = "From: $name\nE-Mail: $email\nMessage: $message";

      // mail ($to, $subject, $body, $from);
    }
  }

  if (!$errName && !$errEmail && !$errMessage && !$errSpam) {
    $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
    $message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

    $from = 'Sent from: SJG Driving Tuition - Contact Form'; 
    $to = 'info@sjgdrivingtuition.co.uk';
    $subject = 'SJG Driving Tuition - New message';
    
    $body = "From: $name\nE-Mail: $email\nMessage: $message";

    if (mail ($to, $subject, $body, $from)) {
      $emailSent = true;
    } else {
      $emailSent = false;
    }
  }

  header('Content-type: application/json');
  $response = array('errName' => $errName,
    'errEmail' => $errEmail,
    'errMessage' => $errMessage,
    'emailSent' => $emailSent,
    'errSpam' => $errSpam);

  echo json_encode($response);
  exit();
?>   