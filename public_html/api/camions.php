<?php 

// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");


$newTruck = 1;
// NEW OR OLD TRUCK
if(isset($_GET['n'])){
    $newOrOld = $_GET['n'];
    if (ctype_digit($newOrOld)) {
        $newTruck = intval($newOrOld);
        if( $newTruck < 0) { $newTruck = 0;  }
        else if( $newTruck > 1) { $newTruck = 1; }
    }
}


// include database and object files
include_once ($_SERVER['DOCUMENT_ROOT'] . '/../_includes/objects/database.php');

$conn = Database::getConn();

// Search new Truck table
if( $newTruck ){
    $sql = "SELECT P.id AS picture_id, I.* FROM inventory I "
    ." LEFT JOIN ( SELECT id, product_id FROM inv_pictures WHERE intorder = 0 ) P ON P.product_id = I.id  "
    ." WHERE I.DisplayOnWebSite = 1 AND I.marque like '%Inter%' LIMIT 12";

    //select P.id as picture_id, I.* from inventory I left join ( select id, product_id, base64_picture from inv_pictures where intorder = 0 ) P ON P.product_id = I.id WHERE I.DisplayOnWebSite = 1 and I.marque like '%Inter%'  limit 12;


    // . "marque like '%$searchTerm%' OR "
    // . "transmission like '%$searchTerm%' OR "
    // . "engine like '%$searchTerm%' AND DisplayOnWebSite = 1 LIMIT 15" ;
}
else {
    $sql = "SELECT P.id AS picture_id, I.* FROM trucks I "
    ." LEFT JOIN ( SELECT id, product_id FROM pictures WHERE intorder = 0 ) P ON P.product_id = I.id  "
    ." WHERE I.marque like '%Inter%' LIMIT 12";

    //select P.id as picture_id, I.* from Trucks I left join ( select id, product_id, base64_picture from pictures where intorder = 0 ) P ON P.product_id = I.id WHERE I.marque like '%Inter%'  limit 12;
    // . "modele like '%$searchTerm%' OR "
    // . "transmission like '%$searchTerm%' OR "
    // . "moteur like '%$searchTerm%' LIMIT 15";    
}


// products array
$results=array();

$results["records"]=array();
//$results["new"] = $new;
//$results["sql"] = $sql;




$qry = mysqli_query($conn, $sql);
$cnt = mysqli_num_rows($qry);
$results["countRows"] = $cnt;

if($cnt > 0){

    $pictures = array();
    // Pas d'images dans db on met ceci
    array_push($pictures, "../../_assets/images/camions/noimage.png");

    while($row = mysqli_fetch_assoc($qry)) {

        // extract row
        // this will make $row['name'] to
        // just $name only
        extract($row);

        if( $newTruck ){
            $item=array(
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
                "picture_id" => $picture_id,
                "pictures" => $pictures
            );            
        }
        else {
            $item=array(
                "id" => $ID,
                "marque" => $marque,
                "Model" => $modele,
                "strAnnee" => $intAnnee,
                "stock" => $unite,
                "serial" => $noSerie,
                "wb" => "",
                "frontaxle" => "",
                "rearaxle" => "",
                "rearsuspension" => "",
                "transmission" => $transmission,
                "transtype" => "",
                "engine" => $moteur,
                "hp" => "",
                "picture_id" => $picture_id,
                "pictures" => $pictures
            );            
        }
      
        array_push($results["records"], $item);
    }
}
echo json_encode($results);

?>
