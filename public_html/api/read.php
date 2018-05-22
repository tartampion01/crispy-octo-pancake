<?php
require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/objects/RD_Camion.php');
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// include database and object files
include_once ($_SERVER['DOCUMENT_ROOT'] . '/../_includes/objects/database.php');
include_once ($_SERVER['DOCUMENT_ROOT'] . '/../_includes/objects/RD_Camion.php');
 
// instantiate database and product object
$database = new Database();
$db = $database->getConnection();

// initialize object
$camion = new RD_Camion($db);
 
// query Camions
//$stmt = $camion->readTest('Model','4300');
$stmt = $camion->readTest($_GET['params']);  // readTest($_GET['field'], $_GET['value']);
$stmtCount = $camion->readTestCount($_GET['params']);
$num = $stmt->rowCount();
 
// check if more than 0 record found
if($num>0){
 
    // products array
    $Camions_arr=array();
    $Camions_arr["records"]=array();
    
    // count rows
    $countRows = $stmtCount->rowCount();
    $Camions_arr["countRows"] = $countRows;
    
    // retrieve our table contents
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        // extract row
        // this will make $row['name'] to
        // just $name only
        extract($row);
 
        $pictures = array();
        $stmtPictures = $camion->getPictures($id);
        $nbPics = $stmtPictures->rowCount();
        if($nbPics > 0){
            while ($rowPictures = $stmtPictures->fetch(PDO::FETCH_ASSOC)){
                extract($rowPictures);
                array_push($pictures, $base64_picture);
            }
        }
        else
        {
            // Pas d'images dans db on met ceci
            array_push($pictures, "../../_assets/images/camions/noimage.png");
        }
        
        $Camion_item=array(
            "id" => $id,
            "marque" => $marque,
            "Model" => $Model,
            "strAnnee" => $strAnnee,
            "stock" => $stock,
            "serial" => $serial,
            "wb" => $wb,
            "frontaxle" => $frontaxle,
            "rearaxle" => $rearaxle,
            "rearsuspension" => $rearsuspension,
            "transmission" => $transmission,
            "transtype" => $transtype,
            "engine" => $engine,
            "hp" => $hp,
            "pictures" => $pictures
        );
        
        array_push($Camions_arr["records"], $Camion_item);
    }
 
    echo json_encode($Camions_arr);
}
else{
    echo json_encode(
        array("message" => "Pas de camions trouvés")
    );
}
?>