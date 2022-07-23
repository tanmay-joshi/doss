<?php

extract($_POST); 
if(isset($_POST['name'])){

    $name = $_POST['name'];
    $email = $_POST['email'];
    $category = $_POST['category'];
    
    $to = "info@doss.games";
    $subject = "Doss games community details";

    $message ="
        <html>
        <head>
        <title>Doss games community details</title>
        </head>
        <body>
        <p>Doss games community details</p>
        <table>
        <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Join As</th>
        </tr>
        <tr>
        <td>'".$name."'</td>
        <td>'".$email."'</td>
        <td>'".$category."'</td>
        </tr>
        </table>
        </body>
        </html>
        ";

    // Always set content-type when sending HTML email
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

    // More headers
    $headers .= 'From: <info@doss.games>' . "\r\n";

   mail($to, $subject, $message, $headers);
  
}