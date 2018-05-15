<?php

$applicationConfig = parse_ini_file(dirname(__DIR__).'/_configs/application.ini');

// CONNECTION DB
require_once(dirname(__DIR__). '/_includes/database/dbConnect.php');
// FONCTIONS
require_once(dirname(__DIR__). '/_includes/functions/dbFunctions.php');
// SITE BUSINESS OBJECTS
require_once(dirname(__DIR__). '/_includes/objects/RD_Camion.php');
require_once(dirname(__DIR__). '/_includes/objects/RD_Succursales.php');
// PAGE UTILS getPageLink, getMetaContent, getTitle...
require_once(dirname(__DIR__). '/_includes/objects/RD_PageLink.php');
require_once(dirname(__DIR__). '/_includes/objects/RD_Emplois.php');
require_once(dirname(__DIR__). '/_includes/objects/RD_Email.php');
// Utils
require_once(dirname(__DIR__). '/_includes/objects/RD_Utils.php');

// "GLOBALES" useless si tout est static dans RD_Utils...
$G_RD_Utils = new RD_Utils();
?>