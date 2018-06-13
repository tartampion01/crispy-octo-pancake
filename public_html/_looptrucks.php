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
                                if( isset($_POST['btnUpdateImagesNewTrucks'])){
                                    global $conn;
                                    $sql = "SELECT inventory.id FROM inventory";
                                    //$sql = "SELECT inventory.id FROM inventory WHERE id=4377";
                                    $result = mysqli_query($conn, $sql);

                                    if(mysqli_num_rows($result) > 0){
                                        while($row = mysqli_fetch_assoc($result)) {
                                            echo "<b>Camion: " . $row['id'] . "</b></br>";

                                            $sqlPic = "SELECT inv_pictures.id, inv_pictures.name FROM inventory INNER JOIN inv_pictures ON inventory.id = inv_pictures.product_id WHERE inv_pictures.product_id=" . $row['id'];

                                            $resultPics = mysqli_query($conn, $sqlPic);
                                            if(mysqli_num_rows($resultPics) > 0){
                                                while($rowPic = mysqli_fetch_assoc($resultPics)) {

                                                    $fileName = __DIR__  . "/_assets/images/camions/" . $rowPic["name"];

                                                    if( file_exists($fileName) )
                                                    {
                                                        $stringimage = file_get_contents($fileName);
                                                        //$file = fopen( $fileName, "r") or die("Unable to open file!");
                                                        //$tmpFile = fread($file,filesize($fileName));
                                                        //fclose($file);

                                                        $picId = $rowPic['id'];
                                                        $sqlExecImage = "UPDATE inv_pictures SET base64_picture='data:image/jpeg;base64," . mysqli_real_escape_string($conn,base64_encode($stringimage)) . "' WHERE id=" . $picId;
                                                        
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
                                if( isset($_POST['btnUpdateImagesUsedTrucks'])){
                                    global $conn;
                                    $sql = "SELECT trucks.id FROM trucks";
                                    $result = mysqli_query($conn, $sql);

                                    if(mysqli_num_rows($result) > 0){
                                        while($row = mysqli_fetch_assoc($result)) {
                                            echo "<b>Truck: " . $row['id'] . "</b></br>";

                                            $sqlPic = "SELECT pictures.id, pictures.name FROM trucks INNER JOIN pictures ON trucks.id = pictures.product_id WHERE pictures.product_id=" . $row['id'];

                                            $resultPics = mysqli_query($conn, $sqlPic);
                                            if(mysqli_num_rows($resultPics) > 0){
                                                while($rowPic = mysqli_fetch_assoc($resultPics)) {

                                                    $fileName = __DIR__  . "/_assets/images/camions/" . $rowPic["name"];

                                                    if( file_exists($fileName) )
                                                    {
                                                        $stringimage = file_get_contents($fileName);
                                                        //$file = fopen( $fileName, "r") or die("Unable to open file!");
                                                        //$tmpFile = fread($file,filesize($fileName));
                                                        //fclose($file);

                                                        $picId = $rowPic['id'];
                                                        $sqlExecImage = "UPDATE pictures SET base64_picture='data:image/jpeg;base64," . mysqli_real_escape_string($conn,base64_encode($stringimage)) . "' WHERE id=" . $picId;
                                                        
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
                                if( isset($_POST['btnUpdateSingleNewTruck'])){
                                    global $conn;
                                    $ID = $_POST['tbIDNEW'];
                                    $sql = "SELECT inventory.id FROM inventory WHERE ID=$ID";
                                    $result = mysqli_query($conn, $sql);

                                    if(mysqli_num_rows($result) > 0){
                                        while($row = mysqli_fetch_assoc($result)) {
                                            echo "<b>Truck: " . $row['id'] . "</b></br>";

                                            $sqlPic = "SELECT inv_pictures.id, inv_pictures.name FROM inventory INNER JOIN inv_pictures ON inventory.id = inv_pictures.product_id WHERE inv_pictures.product_id=" . $row['id'];

                                            $resultPics = mysqli_query($conn, $sqlPic);
                                            if(mysqli_num_rows($resultPics) > 0){
                                                while($rowPic = mysqli_fetch_assoc($resultPics)) {

                                                    $fileName = __DIR__  . "/_assets/images/camions/" . $rowPic["name"];

                                                    if( file_exists($fileName) )
                                                    {
                                                        $stringimage = file_get_contents($fileName);
                                                        //$file = fopen( $fileName, "r") or die("Unable to open file!");
                                                        //$tmpFile = fread($file,filesize($fileName));
                                                        //fclose($file);

                                                        $picId = $rowPic['id'];
                                                        $sqlExecImage = "UPDATE inv_pictures SET base64_picture='data:image/jpeg;base64," . mysqli_real_escape_string($conn,base64_encode($stringimage)) . "' WHERE id=" . $picId;
                                                        
                                                        //echo "BASE 64=<br/>" . mysqli_real_escape_string($conn,base64_encode($stringimage));
                                                        echo $sqlExecImage . "</br>";
                                                        
                                                        if( mysqli_query($conn, $sqlExecImage)){
                                                            echo "</br>Pic $picId Updatée...</br>";
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
                                if( isset($_POST['btnUpdateSingleUsedTruck'])){
                                    global $conn;
                                    $ID = $_POST['tbIDUSED'];
                                    $sql = "SELECT trucks.id FROM trucks WHERE ID=$ID";
                                    $result = mysqli_query($conn, $sql);

                                    if(mysqli_num_rows($result) > 0){
                                        while($row = mysqli_fetch_assoc($result)) {
                                            echo "<b>Truck: " . $row['id'] . "</b></br>";

                                            $sqlPic = "SELECT pictures.id, pictures.name FROM trucks INNER JOIN pictures ON trucks.id = pictures.product_id WHERE pictures.product_id=" . $row['id'];

                                            $resultPics = mysqli_query($conn, $sqlPic);
                                            if(mysqli_num_rows($resultPics) > 0){
                                                while($rowPic = mysqli_fetch_assoc($resultPics)) {

                                                    $fileName = __DIR__  . "/_assets/images/camions/" . $rowPic["name"];

                                                    if( file_exists($fileName) )
                                                    {
                                                        $stringimage = file_get_contents($fileName);
                                                        //$file = fopen( $fileName, "r") or die("Unable to open file!");
                                                        //$tmpFile = fread($file,filesize($fileName));
                                                        //fclose($file);

                                                        $picId = $rowPic['id'];
                                                        $sqlExecImage = "UPDATE pictures SET base64_picture='data:image/jpeg;base64," . mysqli_real_escape_string($conn,base64_encode($stringimage)) . "' WHERE id=" . $picId;
                                                        
                                                        echo "BASE 64=<br/>" . mysqli_real_escape_string($conn,base64_encode($stringimage));
                                                        
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
                                if( isset($_POST['btnUpdateSingleNewTruckWithBase64'])){
                                    global $conn;
                                    if(isset($_POST['tbIDNewBase64']) && isset($_POST['tbNewbase64']))
                                    {
                                        $ID = $_POST['tbIDNewBase64'];
                                        $base64 = $_POST['tbNewbase64'];
                                    
                                        $sqlExecImage = "UPDATE inv_pictures SET base64_picture='data:image/jpeg;base64," . mysqli_real_escape_string($conn,$base64) . "' WHERE id=$ID";
                                                 
                                        if( mysqli_query($conn, $sqlExecImage)){
                                            echo "</br>Pic $ID Updatée...</br>";
                                        }
                                        else
                                            echo "Potage = couille! ID=[$ID]</br>";
                                    }
                                    else
                                    {
                                        echo "FILL ID and base64 value";
                                    }
                                }
                                if( isset($_POST['btnUpdateSingleUsedTruckWithBase64'])){
                                    global $conn;
                                    if(isset($_POST['tbIDUsedBase64']) && isset($_POST['tbUsedBase64']))
                                    {
                                        $ID = $_POST['tbIDUsedBse64'];
                                        $base64 = $_POST['tbUsedBase64'];
                                    
                                        $sqlExecImage = "UPDATE pictures SET base64_picture='data:image/jpeg;base64," . mysqli_real_escape_string($conn,$base64) . "' WHERE id=$ID";
                                                 
                                        if( mysqli_query($conn, $sqlExecImage)){
                                            echo "</br>Pic $ID Updatée...</br>";
                                        }
                                        else
                                            echo "Potage = couille! ID=[$ID]</br>";
                                    }
                                    else
                                    {
                                        echo "FILL ID and base64 value";
                                    }
                                }
                            }
                        ?>
                        <p>Load all images for NEW trucks
                            <input type="submit" id="btnUpdateImagesNewTrucks" name="btnUpdateImagesNewTrucks" value="New trucks->BASE 64" />
                        </p>
                        <p>Load all images for USED trucks
                            <input type="submit" id="btnUpdateImagesUsedTrucks" name="btnUpdateImagesUsedTrucks" value="Used trucks->BASE 64" />
                        </p>
                        
                        <p>Reload images from files for single ID (<b>NEW</b>)
                            &nbsp;<input type='text' id='tbIDNEW' name='tbIDNEW' />
                            <input type="submit" id="btnUpdateSingleNewTruck" name="btnUpdateSingleNewTruck" value="Update NEW" />
                        </p>
                        <p>Reload images from files for single ID (<b>USED</b>)
                            <b>[</b>used<b>]</b>:&nbsp;<input type='text' id='tbIDUSED' name='tbIDUSED' />
                            <input type="submit" id="btnUpdateSingleUsedTruck" name="btnUpdateSingleUsedTruck" value="Update USED" />
                        </p>
                        
                        <br/>
                        <h3>Update image with BASE 64</h3>
                        <b>[</b>ID<b>]</b>&nbsp;:&nbsp;<input type='text' id='tbIDNewBase64' name='tbIDNewBase64' /></br>
                        <b>[</b>BASE 64<b>]</b>&nbsp;:&nbsp;<input type='text' id='tbNewbase64' name='tbNewbase64' /></br>
                        <input type="submit" id="btnUpdateSingleNewTruckWithBase64" name="btnUpdateSingleNewTruckWithBase64" value="Update NEW" /></br>
                        <b>[</b>ID<b>]</b>&nbsp;:&nbsp;<input type='text' id='tbIDUsedBase64' name='tbIDUsedBase64' /></br>
                        <b>[</b>BASE 64<b>]</b>&nbsp;:&nbsp;<input type='text' id='tbUsedBase64' name='tbUsedBase64' /></br>
                        <input type="submit" id="btnUpdateSingleUsedTruckWithBase64" name="btnUpdateSingleUsedTruckWithBase64" value="Update USED" />
                        <br/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </form>
    <?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/footer/_footer.php'); ?>
</body>
</html>