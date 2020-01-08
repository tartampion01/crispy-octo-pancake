<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");

    if( isset($_GET["id"])){
        require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/commonIncludes.php');
    }
    else
        header("Location: accueil.php");

$camion = new RD_Camion(null);
$camion->load_new(base64_decode(urldecode($_GET["id"])));

echo json_encode($camion);
?>