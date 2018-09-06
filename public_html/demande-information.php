<?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/header/_header.php'); ?>
<body class="body"><?php RD_Utils::write_Gtag() ?>
    <form name="form" role="form" method="POST" action="/<?php echo $NOMPAGE; ?>">
    <div class="">
        <div class="content">
            <div class="shrink">
                <div class="titrepage">
                    <h1>
                        <span>Demande d'information</span>
                    </h1>
                </div>
                <div class="contenu">
                    <div class="contenu2">
                        <div class="contenu2">
                            <?php
                                $divVisibility = "visible";

                                $prenomErr = $nomErr = $villeErr = $emailErr = $telErr = "";
                                $prenom = $nom = $ville = $email = $tel = $comm = $VehiculeId = "";
                                $errorCount = 0;
                                
                                // from url pour savoir si dans le email on met le lien vers la page details_new ou details_used
                                $NEW = 1;
                                
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
                                        
                                    
                                    $comm = isset($_POST["tbCommentaire"]) ? RD_Utils::test_input($_POST["tbCommentaire"]) : "";
                                    
                                    $NEW = $_POST['newOrUsed'];
                                    
                                    if(!empty($_POST["hidVehiculeId"]))
                                        $VehiculeId = $_POST["hidVehiculeId"];
                                    
                                    // ENVOI EMAIL
                                    if(isset($_POST['btnSendMail']) && $errorCount == 0)
                                    {
                                        $RDemail = new RD_Email();
                                        $RDemail->load(TypeEmail::DemandeInformation,$prenom,$nom,$ville,urlencode($email),$tel,$comm,'','','','','','','','','',$VehiculeId,TypeVehicule::CamionNeuf,$NEW);
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
                                    if(isset($_GET['n']))
                                        $NEW = base64_decode($_GET['n']);
                                }
                            ?>
                            <div class="formulaire" style="visibility: <?php echo $divVisibility; ?>">
                                <input type="hidden" id="hidVehiculeId" name="hidVehiculeId" value="<?php echo $VehiculeId; ?>">
                                <input type="hidden" id="newOrUsed" name="newOrUsed" value="<?php echo $NEW; ?>">
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
                                
                                <h5>Commentaire :<br>
                                    <textarea name="tbCommentaire" name="tbCommentaire" rows="2" cols="20" style="width: 100%;height: 150px;"><?php echo $comm;?></textarea></h5>
                                <p>
                                    <input type="submit" name="btnSendMail" id="btnSendMail" value="Envoyer" class="">
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
</body>
</html>