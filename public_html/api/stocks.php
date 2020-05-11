<?php 

// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// result array
$results=array();

$number = "'%'";
$limit = 25;
$offset = 0;

if(isset($_GET['number'])){
    $params = $_GET['number'];
    if($params && strlen($params) > 0) {

        $params = str_replace("'","", $params);
        if(strlen($params) > 15){
            $params = substr($params, 0, 15);
        }
        $number = " '%".$params."%' ";
    }
}

// include database and object files
include_once ($_SERVER['DOCUMENT_ROOT'] . '/../_includes/objects/database.php');

$conn = Database::getConn();

$sql = "SELECT I.id, P.Id as picture_id, I.stock, I.marque, I.model, I.serial, I.transmission, I.engine,I.location, P.name as img "
." FROM inventory I LEFT JOIN inv_Pictures P ON P.Product_id = I.Id "
. " WHERE I.stock like $number LIMIT $limit OFFSET $offset " ;

//$results["records"]=array();

$qry = mysqli_query($conn, $sql);

while($row = mysqli_fetch_assoc($qry)) {

    // extract row
    // this will make $row['name'] to
    // just $name only
    extract($row);

    $item=array(
        "id" => $id,
        "picture_id" => $picture_id,
        "stock" => $stock,
        "marque" => $marque,
        "model" => $model,
        "serial" => $serial,
        "transmission" => $transmission,
        "engine" => $engine,
        "location" => $location,
        "img" => $img
    );

    //array_push($results["records"], $item);
    array_push($results, $item);
}

echo json_encode($results);
echo $number;
?>
