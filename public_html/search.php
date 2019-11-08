<?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/header/_header.php'); ?>
<body class="body"><?php RD_Utils::write_Gtag() ?>
    <style>
        .searchParagraph{
            font-size: 11px;
            color: #000000;
        }
    </style>
    <form role="form" method="POST" action="/<?php echo $NOMPAGE; ?>">
    <div class="wrap">
        <div class="grid grid-pad">
            <div class="content">
                <div class="titrepage">
                    <h1>RÉSULTATS DE RECHERCHE</h1>
                </div>
                <div class="contenu col-1-1">
                    <?php 
                        if( isset($_POST['tbSearch']))
                        {
                            $conn = Database::getConn();
                            
                            $searchTerm = $_POST['tbSearch'];
                            echo "<p>Résultat(s) de recherche pour : <b>" . $searchTerm . "</b></p>";

                            // RECHERCHE DB CAMIONS NEUFS
                            $sql = "SELECT id, Model, marque, transmission, engine, config FROM inventory where "
                                    . "Model like '%$searchTerm%' OR "
                                    . "marque like '%$searchTerm%' OR "
                                    . "transmission like '%$searchTerm%' OR "
                                    . "engine like '%$searchTerm%' AND DisplayOnWebSite = 1 LIMIT 15";
                            //echo $sql;
                            $resultsNew = mysqli_query($conn, $sql);
                            if(mysqli_num_rows($resultsNew) > 0){
                                while($row = mysqli_fetch_assoc($resultsNew)) {
                                    $lien = "<a href='" . RD_PageLink::getHref(folder::Root,page::Details_New) . "?id=" . base64_encode($row["id"]) . "'>";
                                    $marque = $row['marque'] != "" ? $row['marque'] : "";
                                    $modele = $row['Model'] != "" ? "&nbsp;-&nbsp;" . $row['Model'] : "";
                                    $config = $row['config'] != "-" ? "&nbsp;-&nbsp;" . $row['config'] : "";
                                    $transmission = $row['transmission'] != "" ? "&nbsp;-&nbsp;" . $row['transmission'] : "";
                                    $engine = $row['engine'] != "-" ? "&nbsp;-&nbsp;" . $row['engine'] : "";
                                    echo $lien . $marque . $modele . $config . $transmission . $engine  . "</a></br>";
                                }
                            }
                            
                             // RECHERCHE DB CAMIONS USAGES
                            $sql = "SELECT id, modele, marque, transmission, moteur, config FROM trucks where "
                                    . "modele like '%$searchTerm%' OR "
                                    . "marque like '%$searchTerm%' OR "
                                    . "transmission like '%$searchTerm%' OR "
                                    . "moteur like '%$searchTerm%' LIMIT 15";
                            //echo $sql;
                            $resultsUsed = mysqli_query($conn, $sql);
                            if(mysqli_num_rows($resultsUsed) > 0){
                                while($row = mysqli_fetch_assoc($resultsUsed)) {
                                    $lien = "<a href='" . RD_PageLink::getHref(folder::Root,page::Details_Used) . "?id=" . base64_encode($row["id"]) . "'>";
                                    $marque = $row['marque'] != "" ? $row['marque'] : "";
                                    $modele = $row['modele'] != "" ? "&nbsp;-&nbsp;" . $row['modele'] : "";
                                    $config = $row['config'] != "-" ? "&nbsp;-&nbsp;" . $row['config'] : "";
                                    $transmission = $row['transmission'] != "" ? "&nbsp;-&nbsp;" . $row['transmission'] : "";
                                    $engine = $row['moteur'] != "-" ? "&nbsp;-&nbsp;" . $row['moteur'] : "";
                                    echo $lien . $marque . $modele . $config . $transmission . $engine  . "</a></br>";
                                }
                            }
                            
                            echo "</br>";
                            //RECHERCHE FICHIERS
                            foreach( RD_Utils::GetSearchFiles() as $file )
                            {
                                $pageName = $file;
                                if( strpos(file_get_contents($file),$searchTerm) !== false) {
                                    $indexOfSlash = strpos($file,'/');

                                    if( $indexOfSlash ){
                                        $pageName = substr($file,$indexOfSlash+1);
                                    }
                                    $title = RD_Header::getPageTitleForSearch($pageName);
                                    echo "<a href='" . $file . "'>" . $title . "</a></br>";
                                    $meta = RD_Header::getPageMetaForSearch($pageName);
                                    echo "<p class='searchParagraph'>" . $meta . "</p>";

                                }
                            }

                        }
                    ?>
                    <h2></h2>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
            </div>
        </div>
    </div>
    </form>
    <?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/footer/_footer.php'); ?>
</body>
</html>