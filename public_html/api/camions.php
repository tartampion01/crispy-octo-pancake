<?php 

// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// result array
$results=array();

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

$filters = array();
$brand = "";
$trans = "";
$engine = "";

if(isset($_GET['params'])){
    $params = $_GET['params'];
    $results["params"] = $params ;
    if($params) {
        $params = strtolower(str_replace(";",",",$params));
        $filters = explode(',', $params);
    }
}

foreach ($filters as $code) {
    switch ($code) {
        case "b_inte":
            $brand = "AND I.marque like '%International%'";
            break;
        case "b_isuz":
            $brand = "AND I.marque like '%Isuzu%'";
            break;
        case "b_kalm":
            $brand = "AND I.marque like '%Kalmar%'";
            break;
        case "b_doep":
            $brand = "AND I.marque like '%Doepker%'";
            break;
        case "b_hino":
            $brand = "AND I.marque like '%Hino%'";
            break;
        case "b_tran":
            $brand = "AND I.marque like '%Transit%'";
            break;
        case "b_west":
            $brand = "AND I.marque like '%Westernstar%'";
            break;
        case "b_frei":
            $brand = "AND I.marque like '%Freightliner%'";
            break;
        case "b_pete":
            $brand = "AND I.marque like '%Peterbilt%'";
            break;
        case "t_auto":
            $trans = "AND I.transmission like 'Auto%'";
            break;
        case "t_manu":
            $trans = "AND I.transmission like 'Manuel%'";
            break;
        case "e_inte":
            if( $newTruck ){ 
                $engine = "AND I.engine like '%International%'"; }
            else { 
                $engine = "AND I.moteur like '%International%'"; }
            break;
        case "e_cumm":
            if( $newTruck ){
                $engine = "AND I.engine like '%Cummins%'"; }
            else {
                $engine = "AND I.moteur like '%Cummins%'"; }
            break;
        case "e_detr":
            if( $newTruck ){
                $engine = "AND I.engine like '%Detroit%'"; }
            else {
                $engine = "AND I.moteur like '%Detroit%'"; }
            break;
        case "e_pacc":
            if( $newTruck ){
                $engine = "AND I.engine like '%Paccar%'"; }
            else {
                $engine = "AND I.moteur like '%Paccar%'";}
            break;
        case "e_isuz":
            if( $newTruck ){
                $engine = "AND I.engine like '%Isuzu%'"; }
            else {
                $engine = "AND I.moteur like '%Isuzu%'"; }
            break;
        
    }
}

// include database and object files
include_once ($_SERVER['DOCUMENT_ROOT'] . '/../_includes/objects/database.php');

$conn = Database::getConn();

// Search new Truck table
if( $newTruck ){
    $sql = "SELECT P.id AS picture_id, I.* FROM inventory I "
    ." LEFT JOIN ( SELECT id, product_id FROM inv_pictures WHERE intorder = 0 ) P ON P.product_id = I.id  "
    ." WHERE I.DisplayOnWebSite = 1 $brand $engine $trans LIMIT 12";

    //select P.id as picture_id, I.* from inventory I left join ( select id, product_id, base64_picture from inv_pictures where intorder = 0 ) P ON P.product_id = I.id WHERE I.DisplayOnWebSite = 1 and I.marque like '%Inter%'  limit 12;

}
else {
    $sql = "SELECT P.id AS picture_id, I.* FROM trucks I "
    ." LEFT JOIN ( SELECT id, product_id FROM pictures WHERE intorder = 0 ) P ON P.product_id = I.id  "
    ." WHERE 1 = 1 $brand $engine $trans LIMIT 12";
}


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
