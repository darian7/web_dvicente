<?php
require("conexion.php");

if (isset($_POST) && !empty($_POST)) {
   $username = $_POST['username'];
   $password = $_POST['password'];

   if ($username=='admin' && $password=='admin') {
      ?>
{
  "success": true
  "secret": "this is secret"
  $response["success"]=true;
}
      <?php

  } else {

       ?>
{
  "success": false
  "message": "Ivalida credenciales"
}
      <?php  
  }   
} else { 
  //var_dump($_POST)
    ?>
{
  "success": false
  "message": "Only post"
}
  <?php   
}
echo json_encode($response);
?>