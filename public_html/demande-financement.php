<?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/header/_header.php'); ?>
<body class="body">
    <form role="form" method="POST" action="/<?php echo $NOMPAGE; ?>">
    <div class="wrap">
        <div class="content">
            <div class="shrink">
                <div class="titrepage">
                    <h1>
                        <span>DEMANDE DE FINANCEMENT</span>
                    </h1>
                </div>
                <div class="contenu">
                    <div class="contenu2">
                        <div class="contenu2">
                            <div class="contenu2">
                            <?php
                                $divVisibility = "visible";
                                
                                $prenomErr = $nomErr = $adresseErr = $codePostalErr = $villeErr = $emailErr = $telErr = "";
                                $prenom = $nom = $adresse = $codePostal = $province = $ville = $email = $tel = $VehiculeId = "";
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
                                    
                                    if (empty($_POST["tbAdresse"])){
                                        $adresseErr = "Champ obligatoire";
                                        $errorCount += 1;
                                    }
                                    else
                                        $adresse = RD_Utils::test_input($_POST["tbAdresse"]);
                                    
                                    if (empty($_POST["tbVille"])){
                                        $villeErr = "Champ obligatoire";
                                        $errorCount += 1;
                                    }
                                    else
                                        $ville = RD_Utils::test_input($_POST["tbVille"]);

                                    $province = $_POST['cboProvince'];
                                    
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

                                    if (empty($_POST["tbCodePostal"])){
                                        $codePostalErr = "Champ obligatoire";
                                        $errorCount += 1;
                                    }
                                    else
                                        $codePostal = RD_Utils::test_input($_POST["tbCodePostal"]);
                                    
                                    if (empty($_POST["tbTelephone"])){
                                        $telErr = "Champ obligatoire";
                                        $errorCount += 1;
                                    }
                                    else
                                        $tel = RD_Utils::test_input($_POST["tbTelephone"]);
                                        
                                    if(!empty($_POST["hidVehiculeId"]))
                                        $VehiculeId = $_POST["hidVehiculeId"];
                                    
                                    // ENVOI EMAIL
                                    if(isset($_POST['btnSendMail']) && $errorCount == 0)
                                    {
                                        $RDemail = new RD_Email();
                                        $RDemail->load(TypeEmail::DemandFinancement,$prenom,$nom,$ville,urlencode($email),$tel,'',$adresse,$province,$codePostal,'','','','','','',$VehiculeId,TypeVehicule::CamionNeuf);
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
                                <h5 id="">Prénom *&nbsp;:<br>
                                    <input name="tbPrenom" id="tbPrenom" type="text" class="" value="<?php echo $prenom;?>"></h5>
                                <span class="error"><?php echo $prenomErr;?></span>
                                
                                <h5>Nom *&nbsp;:<br>
                                    <input name="tbNom" name="tbNom" type="text" class="" value="<?php echo $nom;?>"></h5>
                                <span class="error"><?php echo $nomErr;?></span>
                                
                                <h5>Adresse *&nbsp;:<br>
                                    <input name="tbAdresse" name="tbAdresse" type="text" class="" value="<?php echo $adresse;?>"></h5>
                                <span class="error"><?php echo $adresseErr;?></span>
                                
                                <h5>Ville *&nbsp;:<br>
                                    <input name="tbVille" name="tbVille" type="text" class="" value="<?php echo $ville;?>"></h5>
                                <span class="error"><?php echo $villeErr;?></span>
                                
                                <h5>Province *&nbsp;:<br>
                                    <select id="cboProvince" name="cboProvince" class="valid">
                                        <option selected="selected" value="UXXDqWJlYw==">Québec</option>
                                        <option value="T250YXJpbw==">Ontario</option>
                                        <option value="TWFuaXRvYmE=">Manitoba</option>
                                        <option value="U2Fza2F0Y2hld2Fu">Saskatchewan</option>
                                        <option value="QWxiZXJ0YQ==">Alberta</option>
                                        <option value="Q29sb21iaWUtQnJpdGFubmlxdWU=">Colombie-Britannique</option>
                                        <option value="Tm91dmVhdS1CcnVpbnN3aWNr">Nouveau-Bruinswick</option>
                                        <option value="Tm91dmVsbGUtw4ljb3NzZQ==">Nouvelle-Écosse</option>
                                        <option value="w45sZS1kdS1QcmluY2Utw4lkb3VhcmQ=">Île-du-Prince-Édouard</option>
                                        <option value="VGVycmUtTmV1dmUtZXQtTGFicmFkb3I=">Terre-Neuve-et-Labrador</option>
                                        <option value="WXVrb24=">Yukon</option>
                                        <option value="VGVycml0b2lyZXMgZHUgTm9yZC1PdWVzdA==">Territoires du Nord-Ouest</option>
                                        <option value="TnVuYXZ1dA==">Nunavut</option>
                                    </select>
                                </h5>
                                
                                <h5>Code postal *&nbsp;:<br>
                                    <input name="tbCodePostal" name="tbCodePostal" type="text" class="" value="<?php echo $codePostal;?>"></h5>
                                <span class="error"><?php echo $codePostalErr;?></span>
                                
                                <h5>Téléphone * :
                                    <input name="tbTelephone" name="tbTelephone" type="text" class="" value="<?php echo $tel;?>"></h5>
                                <span class="error"><?php echo $telErr;?></span>
                                
                                <h5>Courriel *&nbsp;:<br>
                                    <input name="tbCourriel" name="tbCourriel" type="text" class="" value="<?php echo $email;?>"></h5>
                                <span class="error"><?php echo $emailErr;?></span>
                                                               
                                <p>
                                    <input type="submit" name="btnSendMail" id="btnSendMail" value="Envoyer" id="" class="">
                                </p>
                            </div>
                            <div class="nomProduit">
                                <input type="hidden" name="" id="" itemid="" value=""><!-- Marque Model Config EX: INTERNATIONAL - 4300 4 X 2 -->
                                <input type="hidden" name="" id="" itemid="" value=""><!-- SKU -->
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