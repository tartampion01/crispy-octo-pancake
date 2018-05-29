<?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/header/_header.php'); ?>
<body class="body">
    <form role="form" method="POST" action="/<?php echo $NOMPAGE; ?>">
    <div class="wrap">
        <div class="content">
            <div class="shrink">
                <div class="titrepage">
                    <h1><?php echo $NOMPAGE; ?></h1>
                </div>
                <div class="contenu">
                    <div class="contenu2">
                        <p></p>
                        <h2></h2>
                        <?php
                        
                            if ($_SERVER['REQUEST_METHOD'] === 'POST') {
                                if( isset($_POST['btnUpdateImages'])){
                                    global $conn;
                                    $sql = "SELECT inventory.id FROM inventory";
                                    //$sql = "SELECT inventory.id FROM inventory WHERE id=4377";
                                    $result = mysqli_query($conn, $sql);

                                    if(mysqli_num_rows($result) > 0){
                                        while($row = mysqli_fetch_assoc($result)) {
                                            echo "<b>Camion: " . $row['id'] . "</b></br>";

                                            $sqlPic = "SELECT inv_pictures.id, inv_pictures.name FROM inventory INNER JOIN inv_pictures ON inventory.id = inv_pictures.product_id WHERE inv_pictures.product_id=" . $row['id'];
                                            //$sqlPic = "SELECT inv_pictures.id, inv_pictures.name FROM inventory INNER JOIN inv_pictures ON inventory.id = inv_pictures.product_id WHERE inv_pictures.product_id=4377 ORDER BY intorder";
                                            $resultPics = mysqli_query($conn, $sqlPic);
                                            if(mysqli_num_rows($resultPics) > 0){
                                                while($rowPic = mysqli_fetch_assoc($resultPics)) {

                                                    //echo "--------)))" . filesize(__DIR__  . "/_assets/images/camions/" . $rowPic["name"]) . "</br>";
                                                    $fileName = __DIR__  . "/_assets/images/camions/" . $rowPic["name"];
//echo $fileName . "</br>";
                                                    if( file_exists($fileName) )
                                                    {
                                                        $stringimage = file_get_contents($fileName);
                                                        //$file = fopen( $fileName, "r") or die("Unable to open file!");
                                                        //$tmpFile = fread($file,filesize($fileName));
                                                        //fclose($file);

                                                        $picId = $rowPic['id'];
//echo base64_encode($stringimage) . "</br></br></br></br></br></br></br></br>PROOOOOOOT";
//echo $stringimage;  
//echo "HHHHHHHHHHHHHHHHHHHHHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
//$tmpFile = mysqli_real_escape_string($conn, $tmpFile);
//echo mysqli_real_escape_string($conn,base64_encode($stringimage));
//echo "<img src='data:image/jpeg;base64," . base64_encode($stringimage) . "' />";
//mysqli_real_escape_string($conn, $stringimage);
                                                        $sqlExecImage = "UPDATE inv_pictures SET base64_picture='data:image/jpeg;base64," . mysqli_real_escape_string($conn,base64_encode($stringimage)) . "' WHERE id=" . $picId;
//echo $stringimage . "</br></br></br></br></br></br></br></br>prout!";
//echo $sqlExecImage;
                                                        if( mysqli_query($conn, $sqlExecImage)){
                                                            echo "Pic $picId Updatée...</br>";
                                                        }
                                                        else
                                                            echo "Potage = couille! ID=[$picId]</br>";
                                                    }
                                                    else
                                                    {
                                                        echo "FICHIER: <b>$fileName</b> INEXISTANT</br>";
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        ?>
                        <input type="submit" id="btnUpdateImages" name="btnUpdateImages" value="BASE 64" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    </form>
    <?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/footer/_footer.php'); ?>
</body>
</html>