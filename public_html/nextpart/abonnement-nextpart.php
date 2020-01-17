<?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/header/_header.php'); ?>
<?php RD_Utils::write_Gtag() ?>
    <form role="form" method="POST" action="/nextpart/<?php echo $NOMPAGE; ?>">
    <div class="wrap">
        <div class="grid grid-pad">
            <div class="content">
                <div class="titrepage">
                    <h1>INSCRIPTION À NEXTPART</h1>
                </div>
                <div class="contenu">
                    <div class="contenu2">
                        <div class="contenu2 col-1-1">
                            <?php
                                $divVisibility = "visible";
                                
                                $prenomErr = $nomErr = $businessErr = $emailErr = $telErr = "";
                                $prenom = $nom = $business = $email = $tel = "";
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
                                    
                                    if (empty($_POST["tbBusiness"])){
                                        $businessErr = "Champ obligatoire";
                                        $errorCount += 1;
                                    }
                                    else
                                        $business = RD_Utils::test_input($_POST["tbBusiness"]);

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
                                    
                                    // ENVOI EMAIL
                                    if(isset($_POST['btnSendMail']) && $errorCount == 0)
                                    {
                                        $RDemail = new RD_Email();
                                        $RDemail->load(TypeEmail::InscriptionNextPart,$prenom,$nom,$business,urlencode($email),$tel,'','','','','','','','','','','',TypeVehicule::CamionNeuf);
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
                                <p><font size="1">Les champs marqués d'un astérisque (*) sont obligatoires.</font></p>
                                <h5>Prénom *&nbsp;:<br>
                                    <input name="tbPrenom" id="tbPrenom" type="text" class="" value="<?php echo $prenom;?>"></h5>
                                <span class="error"><?php echo $prenomErr;?></span>
                                
                                <h5>Nom *&nbsp;:<br>
                                    <input name="tbNom" name="tbNom" type="text" class="" value="<?php echo $nom;?>"></h5>
                                <span class="error"><?php echo $nomErr;?></span>
                                
                                <h5>Entreprise *&nbsp;:<br>
                                    <input name="tbBusiness" name="tbBusiness" type="text" class="" value="<?php echo $business;?>"></h5>
                                <span class="error"><?php echo $businessErr;?></span>
                                
                                <h5>Courriel *&nbsp;:<br>
                                    <input name="tbCourriel" name="tbCourriel" type="text" class="" value="<?php echo $email;?>"></h5>
                                <span class="error"><?php echo $emailErr;?></span>
                                
                                <h5>Téléphone * :
                                    <input name="tbTelephone" name="tbTelephone" type="text" class="" value="<?php echo $tel;?>"></h5>
                                <span class="error"><?php echo $telErr;?></span>
                                
                                <p>
                                    <input type="submit" name="btnSendMail" id="btnSendMail" value="S'inscrire" class="">
                                </p>
                            </div>
                            <div class="nomProduit">
                                <input type="hidden" name="" itemid="" value=""><!-- Marque Model Config EX: INTERNATIONAL - 4300 4 X 2 -->
                                <input type="hidden" name="" itemid="" value=""><!-- SKU -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </form>
<?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/footer/_footer.php'); ?>