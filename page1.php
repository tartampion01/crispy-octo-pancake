<!DOCTYPE html>
<html lang="fr">
<head>
    <?php require_once('includes/header/_header.php'); ?>
    <link href="assets/css/main.css" rel="stylesheet" type="text/css"/>    
</head>
<body class="body">
    <form role="form" method="POST" action="/page1.php">
    <div class="container" style="height: 80%">
        <div class="row">
            <div class="box">
                <div class="col-lg-12">
                    <?php
                        try{
                            if ($_SERVER['REQUEST_METHOD'] === 'POST') {
                                if (isset($_POST['btnShowTruck'])) {
                                    
                                    $truckResults = getNewTruck($_POST['tbShowTruck']);
                                    $truckInfo = "";

                                    if(mysqli_num_rows($truckResults) > 0){
                                        while($row = mysqli_fetch_assoc($truckResults)) {
                                            $truckInfo .= "Marque <b>" . $row['marque'] . "</b></br>";
                                            $truckInfo .= "Modèle <b>" . $row['Model'] . "</b></br>";
                                            $truckInfo .= "Année <b>" . $row['strAnnee'] . "</b></br>";
                                            $truckInfo .= "No inventaire <b>" . $row['stock'] . "</b></br>";
                                            $truckInfo .= "No Série <b>" . $row['serial'] . "</b></br>";
                                            $truckInfo .= "Empattement <b>" . $row['wb'] . "</b></br>";
                                            $truckInfo .= "Essieu avant <b>" . $row['frontaxle'] . "</b></br>";
                                            $truckInfo .= "Essieu arrière <b>" . $row['rearaxle'] . "</b></br>";
                                            $truckInfo .= "Suspension arrière <b>" . $row['rearsuspension'] . "</b></br>";
                                            $truckInfo .= "Transmission <b>" . $row['transtype'] . "</b></br>";
                                            $truckInfo .= "Moteur <b>" . $row['engine'] . "</b></br>";
                                            $truckInfo .= "HP <b>" . $row['hp'] . "</b></br>";
                                            $truckInfo .= "Ratio essieu arrière <b>" . $row['ratio'] . "</b></br>";
                                        }
                                    }
                                    echo $truckInfo;
                                }
                                
                                echo 'MARQUES<br/>';
                                $brands = selectNewTrucksDisctinctCriteria('marque');
                                foreach($brands as $marque)
                                    echo "<a href='?marque=" . $marque . "'>" . $marque . "</a></br>";
                                
                                echo 'MODELES<br/>';
                                $modeles = selectNewTrucksDisctinctCriteria('Model');
                                foreach($modeles as $modele)
                                    echo "<a href='?modele=" . $modele . "'>" . $modele . "</a></br>";

                                echo 'TRANSMISSIONS<br/>';
                                $transmissions = selectNewTrucksDisctinctCriteria('transtype');
                                foreach($transmissions as $transmission)
                                    echo "<a href='?transtype=" . $transmission . "'>" . $transmission . "</a></br>";
                                
                                echo 'MOTEURS<br/>';
                                $moteurs = selectNewTrucksDisctinctCriteria('engine');
                                foreach($moteurs as $moteur)
                                    echo "<a href='?engine=" . $moteur . "'>" . $moteur . "</a></br>";
                               
                                if (isset($_GET['brand'])) {
                                    // show brand
                                }
                            }
                        } catch (Exception $e) {
                            echo 'Caught exception: ',  $e->getMessage(), "\n";
                        }
                    ?>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="box">
                <div class="col-lg-12 text-center">
                    <div id="home-carousel" class="carousel slide">

                        ID:<input type="text" id="tbShowTruck" name="tbShowTruck" value="" text="" />
                        <input type="submit" id="btnShowTruck" name="btnShowTruck" text="Afficher">
                        <!-- Controls -->
                    </div>
                </div>
            </div>
        </div>
    </div>
    </form>
    <?php require_once('includes/footer/_footer.php'); ?>
</body>
</html>