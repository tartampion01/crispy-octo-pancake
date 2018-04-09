<?php
//require_once('class.phpmailer.php');
//require_once('class.smtp.php');
//require_once('clients.php');
//require_once('tcpdf.php');
//require_once('tcpdf_parser.php');

function getNewTruck($id)
{
    global $conn;
    $sql = "SELECT * FROM inventory WHERE id=".$id . " and DisplayOnWebSite=1";

    return mysqli_query($conn, $sql);
}

function selectNewTrucksDisctinctCriteria($field)
{
    global $conn;
    $sql = "SELECT DISTINCT " . $field . " FROM inventory WHERE DisplayOnWebSite=1 ORDER BY " . $field;

    $result = mysqli_query($conn, $sql);
    
    $array = array();
            
    if(mysqli_num_rows($result) > 0){
        while($row = mysqli_fetch_assoc($result)) {
            $array[] = $row[$field];
        }
    }
    
    return $array;
}