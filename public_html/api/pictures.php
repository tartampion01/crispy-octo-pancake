<?php 

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

$picture_id = 0;
if(isset($_GET['id'])){
    $id = $_GET['id'];
    if (ctype_digit($id)) {
        $picture_id = intval($id);
        if( $picture_id < 0) { $picture_id = 0; }
    }
}

// include database and object files
include_once ($_SERVER['DOCUMENT_ROOT'] . '/../_includes/objects/database.php');

$conn = Database::getConn();

if($newTruck){
    // Search new Truck table
    $sql = "SELECT base64_picture FROM inv_pictures WHERE id = $picture_id ";
} else {
    $sql = "SELECT base64_picture FROM pictures WHERE id = $picture_id ";
}

$qry = mysqli_query($conn, $sql);

if(mysqli_num_rows($qry) > 0) {
    
    $row = mysqli_fetch_assoc($qry);

    $b64 = explode(',', $row['base64_picture'])[1];
    //$b64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==";
    //$b64 = "iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==";

    $img = base64_decode($b64);

    // required headers
    header("Content-type: image/jpeg");
    echo $img;
}

?>