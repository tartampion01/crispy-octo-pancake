<?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/header/_header.php'); ?>
<body class="body">
    <form role="form" method="POST" action="/<?php echo $NOMPAGE; ?>">
    <div class="wrap">
        <div class="content">
            <div class="shrink">
                <div class="titrepage">
                    <h1>
                        <span>ÉVALUER MON ÉCHANGE</span>
                    </h1>
                </div>
                <div class="contenu">
                    <div class="contenu2">
                        <div class="contenu2"><?php
                                $divVisibility = "visible";
                                
                                $prenomErr = $nomErr = $villeErr = $emailErr = $telErr = $marqueErr = $modeleErr = $anneeErr = $kmErr = "";
                                $prenom = $nom = $ville = $email = $tel = $marque = $modele = $annee = $km = $etatExt = $etatInt = $VehiculeId = "";
                                $errorCount = 0;
                                
                                if ($_SERVER["REQUEST_METHOD"] === "POST") {
                                    
                                    if (empty($_POST["tbPrenom"])){
                                        $prenomErr = "Champ obligatoire";
                                        $errorCount += 1;
                                    }
                                    else
                                        $prenom = RD_Utils::test_input($_POST["tbPrenom"]);

                                    if (empty($_POST["tbNom"])){
                                        $nomErr = "Champ obligatoire";
                                        $errorCount += 1;
                                    }
                                    else
                                        $nom = RD_Utils::test_input($_POST["tbNom"]);
                                    
                                    if (empty($_POST["tbVille"])){
                                        $villeErr = "Champ obligatoire";
                                        $errorCount += 1;
                                    }
                                    else
                                        $ville = RD_Utils::test_input($_POST["tbVille"]);

                                    if (empty($_POST["tbCourriel"])){
                                        $emailErr = "Champ obligatoire";
                                        $errorCount += 1;
                                    }
                                    else {
                                        $email = RD_Utils::test_input($_POST["tbCourriel"]);
                                        if (!filter_var($email, FILTER_VALIDATE_EMAIL)){
                                            $emailErr = "Format invalide";
                                            $errorCount += 1;
                                        }
                                    }

                                    if (empty($_POST["tbTelephone"])){
                                        $telErr = "Champ obligatoire";
                                        $errorCount += 1;
                                    }
                                    else
                                        $tel = RD_Utils::test_input($_POST["tbTelephone"]);
                                    
                                    if (empty($_POST["tbMarque"])){
                                        $marqueErr = "Champ obligatoire";
                                        $errorCount += 1;
                                    }
                                    else
                                        $marque = RD_Utils::test_input($_POST["tbMarque"]);
                                        
                                    if (empty($_POST["tbModele"])){
                                        $modeleErr = "Champ obligatoire";
                                        $errorCount += 1;
                                    }
                                    else
                                        $modele = RD_Utils::test_input($_POST["tbModele"]);
                                    
                                    if (empty($_POST["tbAnnee"])){
                                        $anneeErr = "Champ obligatoire";
                                        $errorCount += 1;
                                    }
                                    else
                                        $annee = RD_Utils::test_input($_POST["tbAnnee"]);
                                    
                                    if (empty($_POST["tbKm"])){
                                        $kmErr = "Champ obligatoire";
                                        $errorCount += 1;
                                    }
                                    else
                                        $km = RD_Utils::test_input($_POST["tbKm"]);
                                    
                                    if(!empty($_POST["hidVehiculeId"]))
                                        $VehiculeId = $_POST["hidVehiculeId"];
                                    
                                    $etatExt = $_POST['cboEtatExt'];
                                    $etatInt = $_POST['cboEtatInt'];

                                    // ENVOI EMAIL
                                    if(isset($_POST['btnSendMail']) && $errorCount == 0)
                                    {
                                        $RDemail = new RD_Email();
                                        $RDemail->load(TypeEmail::EvaluerEchange,$prenom,$nom,$ville,urlencode($email),$tel,'','','','',$marque,$modele,$annee,$km,$etatExt,$etatInt,$VehiculeId,TypeVehicule::CamionNeuf);
                                        if($RDemail->send()){
                                            $divVisibility = "hidden";
                                            ?><h2>Votre demande a bien été envoyée</h2><?php
                                        }
                                    }
                                }
                                else
                                {
                                    if( isset($_GET['id']))
                                        $VehiculeId = $_GET['id'];
                                }
                            ?>
                            <div class="formulaire" style="visibility: <?php echo $divVisibility; ?>">
                                <input type="hidden" id="hidVehiculeId" name="hidVehiculeId" value="<?php echo $VehiculeId; ?>">
                                <p><font size="1">Les champs marqués d'un astérisque (*) sont obligatoires.</font></p>
                                <h5>Prénom *&nbsp;:<br>
                                    <input name="tbPrenom" id="tbPrenom" type="text" class="" value="<?php echo $prenom;?>"></h5>
                                <span class="error"><?php echo $prenomErr;?></span>
                                
                                <h5>Nom *&nbsp;:<br>
                                    <input name="tbNom" name="tbNom" type="text" class="" value="<?php echo $nom;?>"></h5>
                                <span class="error"><?php echo $nomErr;?></span>
                                
                                <h5>Ville *&nbsp;:<br>
                                    <input name="tbVille" name="tbVille" type="text" class="" value="<?php echo $ville;?>"></h5>
                                <span class="error"><?php echo $villeErr;?></span>
                                
                                <h5>Courriel *&nbsp;:<br>
                                    <input name="tbCourriel" name="tbCourriel" type="text" class="" value="<?php echo $email;?>"></h5>
                                <span class="error"><?php echo $emailErr;?></span>
                                
                                <h5>Téléphone * :
                                    <input name="tbTelephone" name="tbTelephone" type="text" class="" value="<?php echo $tel;?>"></h5>
                                <span class="error"><?php echo $telErr;?></span>
                                
                                <h5>Marque * :
                                    <input name="tbMarque" name="tbMarque" type="text" class="" value="<?php echo $marque;?>"></h5>
                                <span class="error"><?php echo $marqueErr;?></span>
                                
                                <h5>Modèle * :
                                    <input name="tbModele" name="tbModele" type="text" class="" value="<?php echo $modele;?>"></h5>
                                <span class="error"><?php echo $modeleErr;?></span>
                                
                                <h5>Année  * :
                                    <input name="tbAnnee" name="tbAnnee" type="text" class="" value="<?php echo $annee;?>"></h5>
                                <span class="error"><?php echo $anneeErr;?></span>
                                
                                <h5>Km * :
                                    <input name="tbKm" name="tbKm" type="text" class="" value="<?php echo $km;?>"></h5>
                                <span class="error"><?php echo $kmErr;?></span>
                                
                                <h5>État intérieur du véhicule * :
                                    <select id="cboEtatInt" class="valid" name="cboEtatInt">
					<option selected="selected" value="UGV1dC3DqnRyZSB2ZW5kdSB0ZWwgcXVlbA==">Peut-être vendu tel quel</option>
                                        <option value="UsOpcGFyYXRpb24gcmVxdWlzZQ==">Réparation requise</option>
                                        <option value="UsOpcGFyYXRpb24gbWFqZXVyZSByZXF1aXNl">Réparation majeure requise</option>
                                    </select></h5>
                                <h5>État extérieur * :
                                    <select id="cboEtatExt" class="valid" name="cboEtatExt">
                                        <option selected="selected" value="UGV1dC3DqnRyZSB2ZW5kdSB0ZWwgcXVlbA==">Peut-être vendu tel quel</option>
                                        <option value="UsOpcGFyYXRpb24gcmVxdWlzZQ==">Réparation requise</option>
                                        <option value="UsOpcGFyYXRpb24gbWFqZXVyZSByZXF1aXNl">Réparation majeure requise</option>
                                    </select></h5>
                                <p>
                                    <input type="submit" name="btnSendMail" id="btnSendMail" value="Envoyer" class="">
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/footer/_footer.php'); ?>
    </form>
    
</body>
</html>