<?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/header/_header.php'); ?>
<body class="body"><?php RD_Utils::write_Gtag() ?>
    <form role="form" method="POST" action="/promotions-nouvelles/<?php echo $NOMPAGE; ?>">
    <div class="">
        <div class="content search-result">
            <div class="shrink">
                <div class="titrepage">
                    <h1>Promotions</h1>
                </div>
                <div class="contenu">
                    <div class="contenu2">
                        <?php
                            $divVisibility = "hidden";

                            $succursaleErr = $noFactureErr = $nomPrenomErr = $emailErr = "";
                            $succursale = $noFacture = $nomPrenom = $email = "";
                            $errorCount = 0;

                            if ($_SERVER["REQUEST_METHOD"] === "POST") {

                                if (empty($_POST["tbNomSuccursale"])){
                                    $succursaleErr = "Champ obligatoire";
                                    $errorCount += 1;
                                }
                                else
                                    $succursale = RD_Utils::test_input($_POST["tbNomSuccursale"]);

                                if (empty($_POST["tbNoFacture"])){
                                    $noFactureErr = "Champ obligatoire";
                                    $errorCount += 1;
                                }
                                else
                                    $noFacture = RD_Utils::test_input($_POST["tbNoFacture"]);

                                if (empty($_POST["tbNomPrenom"])){
                                    $nomPrenomErr = "Champ obligatoire";
                                    $errorCount += 1;
                                }
                                else
                                    $nomPrenom = RD_Utils::test_input($_POST["tbNomPrenom"]);

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

                                // ENVOI EMAIL
                                if(isset($_POST['btnSendMail']) && $errorCount == 0)
                                {
                                    $RDemail = new RD_Email();
                                    $RDemail->load(TypeEmail::InscriptionAUTOMANN,$nomPrenom,$noFacture,$succursale,urlencode($email),'','','','','','','','','','','','',TypeVehicule::CamionNeuf);
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
                        <div class="zonepromos" style="visibility: <?php echo $divVisibility; ?>">
                            <div class="form-wrap">
                                <div class="form-wrap concours-wrap">
                                    <div class="form-content">
                                        <h2>Inscription à la promotion AUTOMANN</h2>
                                        <div class="form-wrapline form-input">
                                            <div class="form-label-text">
                                                <label for="tbNomSuccursale">Nom de votre succursale* :</label>
                                            </div>
                                            <div class="form-input-zone">
                                                <input name="tbNomSuccursale" id="tbNomSuccursale" class="" type="text" value="<?php echo $succursale;?>">
                                                <span class="error"><?php echo $succursaleErr;?></span>
                                            </div>
                                        </div>
                                        <div class="form-wrapline form-input">
                                            <div class="form-label-text">
                                                <label for="tbNoFacture"># de facture* :</label>
                                            </div>
                                            <div class="form-input-zone">
                                                <input name="tbNoFacture" id="tbNoFacture" class="" type="text" value="<?php echo $noFacture;?>">
                                                <span class="error"><?php echo $noFactureErr;?></span>
                                            </div>
                                        </div>
                                            
                                        <div class="form-wrapline form-input">
                                            <div class="form-label-text">
                                                <label for="tbNomPrenom">Prénom et Nom de famille* :</label>
                                            </div>
                                            <div class="form-input-zone">
                                                <input name="tbNomPrenom" id="tbNomPrenom" class="" type="text" value="<?php echo $nomPrenom;?>">
                                                <span class="error"><?php echo $nomPrenomErr;?></span>
                                            </div>
                                        </div>
                                            
                                        <div class="form-wrapline form-input">
                                            <div class="form-label-text">
                                                <label for="tbCourriel">Adresse courriel* :</label>
                                            </div>
                                            <div class="form-input-zone">
                                                <input name="tbCourriel" id="tbCourriel" class="" type="text" value="<?php echo $email;?>">
                                                <span class="error"><?php echo $emailErr;?></span>
                                            </div>
                                        </div>
                                            
                                        <div class="form-wrapline form-submit">
                                            <input name="btnSendMail" value="Soumettre" id="btnSendMail" type="submit">
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="clearpromos"></div>
                            <div class="blocpromo">
                                <div class="promoimage">
                                    <span>
                                        <a href="<?php echo RD_PageLink::getHref(folder::PromotionsNouvelles,page::PromotionsEtNouvellesPromoPieces); ?>" target="_blank">
                                            <img name="image" title="" src="../../_assets/images/promo/Promotion Septembre-Octobre 2018.jpg" alt="Promo Septembre-Octobre 2018" style="height:300px;width:231px;" width="231px" height="300px">
                                        </a>
                                    </span>
                                </div>
                                <div class="promotitre">
                                    <h2><span>Promotions</span></h2>
                                </div>
                                <div class="promodate">
                                    <span>Septembre &amp; Octobre 2018</span>
                                </div>
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