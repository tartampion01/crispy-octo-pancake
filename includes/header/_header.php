<?php
require_once($_SERVER['DOCUMENT_ROOT'] . '/includes/dbConnect.php');
require_once($_SERVER['DOCUMENT_ROOT'] . '/includes/dbFunctions.php');
?>

<?php 
    // TOP MENU
    require_once($_SERVER['DOCUMENT_ROOT'] . '/includes/header/_header_top_menu.php');
    // SUB HEADER LOGO + RECHERCHE
    require_once($_SERVER['DOCUMENT_ROOT'] . '/includes/header/_header_logo_search.php');
    // SUB Header MENU PRINCIPAL
    require_once($_SERVER['DOCUMENT_ROOT'] . '/includes/header/_header_main_menu.php');
?>