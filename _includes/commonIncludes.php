<?php

// CONNECTION DB
require_once($_SERVER['DOCUMENT_ROOT'] . '/_includes/database/dbConnect.php');
// FONCTIONS
require_once($_SERVER['DOCUMENT_ROOT'] . '/_includes/functions/dbFunctions.php');
// SITE BUSINESS OBJECTS
require_once($_SERVER['DOCUMENT_ROOT'] . '/_includes/objects/RD_Camion.php');
require_once($_SERVER['DOCUMENT_ROOT'] . '/_includes/objects/RD_Succursales.php');
// PAGE UTILS getPageLink, getMetaContent, getTitle...
require_once($_SERVER['DOCUMENT_ROOT'] . '/_includes/objects/RD_PageLink.php');
// Utils
require_once($_SERVER['DOCUMENT_ROOT'] . '/_includes/objects/RD_Utils.php');

// "GLOBALES"
$G_RD_Utils = new RD_Utils();
?>