<?php

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
// Utils
require_once(dirname(__DIR__). '/_includes/objects/RD_Utils.php');

// "GLOBALES"
$G_RD_Utils = new RD_Utils();
?>