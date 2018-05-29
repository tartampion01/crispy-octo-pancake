<?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/header/_header.php'); ?>
<body class="body">
    <form name="form" role="form" method="POST" action="/<?php echo $NOMPAGE; ?>">
    <div class="wrap">
        <div class="content">
            <div class="shrink">
                <div class="titrepage">
                    <h1>
                        <span>DEMANDE DE PIÈCES</span>
                    </h1>
                </div>
                <div class="contenu">
                    <div class="contenu2">
                        <?php
                            $divVisibility = "visible";

                            $nomCompagnieErr = $nomResponsableErr = $emailErr = $telErr = $piecesRequisesErr = $descErr = $captchaErr = "";
                            $succursale = $nomCompagnie = $nomResponsable = $email = $tel = $piecesRequises = $desc = "";
                            $fileList = array();

                            $errorCount = 0;

                            if ($_SERVER["REQUEST_METHOD"] === "POST") {

                                $succursale = $_POST['ddlSuccursales'];

                                if (empty($_POST["tbNomCompagnie"])){
                                    $nomCompagnieErr = "Champ obligatoire";
                                    $errorCount += 1;
                                }
                                else
                                    $nomCompagnie = RD_Utils::test_input($_POST["tbNomCompagnie"]);

                                if (empty($_POST["tbNomResponsable"])){
                                    $nomResponsableErr = "Champ obligatoire";
                                    $errorCount += 1;
                                }
                                else
                                    $nomResponsable = RD_Utils::test_input($_POST["tbNomResponsable"]);

                                if (empty($_POST["tbTelephone"])){
                                    $telErr = "Champ obligatoire";
                                    $errorCount += 1;
                                }
                                else
                                    $tel = RD_Utils::test_input($_POST["tbTelephone"]);

                                if (empty($_POST["tbCourriel"])){
                                    //$emailErr = "Champ obligatoire";
                                    //$errorCount += 1;
                                }
                                else {
                                    $email = RD_Utils::test_input($_POST["tbCourriel"]);
                                    if (!filter_var($email, FILTER_VALIDATE_EMAIL)){
                                        $emailErr = "Format invalide";
                                        $errorCount += 1;
                                    }
                                }

                                if (empty($_POST["tbPiecesRequises"])){
//                                        $piecesRequisesErr = "Champ obligatoire";
//                                        $errorCount += 1;
                                }
                                else{
                                    $piecesRequises = RD_Utils::test_input($_POST["tbPiecesRequises"]);                                        
                                }

                                if (empty($_POST["tbDescription"])){
//                                        $descErr = "Champ obligatoire";
//                                        $errorCount += 1;
                                }
                                else
                                    $desc = RD_Utils::test_input($_POST["tbDescription"]);

                                if(!RD_Utils::validateRecaptcha($_POST['g-recaptcha-response'])){
                                    $errorCount += 1;
                                    $captchaErr = 'Veuillez remplir le <i>CAPTCHA</i> correctement.';
                                }
                            
                                // ENVOI EMAIL
                                if(isset($_POST['btnSendMail']) && $errorCount == 0)
                                {
                                    $RDemail = new RD_Email();
                                    $RDemail->loadDemandePieces(TypeEmail::DemandePieces,$succursale,$nomCompagnie,$nomResponsable,$piecesRequises,urlencode($email),$tel,$desc);
                                    if($RDemail->send()){
                                        $divVisibility = "hidden";
                                        ?><h2>Votre demande a bien été envoyée</h2><?php
                                    }
                                }
                                else{
                                    echo RD_Utils::GetDropDownSuccursalesDemandePiece($_POST["ddlSuccursales"]);
                                }
                            }
                            else
                            {
                                if(isset($_REQUEST["succursale"]))
                                    echo RD_Utils::GetDropDownSuccursalesDemandePiece(base64_encode(urldecode($_REQUEST["succursale"])));
                            }
                            ?>
                            <div class="demandeBon" style="visibility: <?php echo $divVisibility; ?>">
                                <input name="tbNomCompagnie" id="tbNomCompagnie" placeholder="Nom de la compagnie *" type="text" class="" value="<?php echo $nomCompagnie;?>">
                                <span class="error"><?php echo $nomCompagnieErr;?></span>

                                <input name="tbNomResponsable" id="tbNomResponsable" type="text" placeholder="Nom du responsable *" itemx-autocompletetype="name-full" autocomplete="on" value="<?php echo $nomResponsable;?>">
                                <span class="error"><?php echo $nomResponsableErr;?></span>

                                <input name="tbTelephone" id="tbTelephone" type="text" placeholder="# de téléphone *" itemx-autocompletetype="phone-full" autocomplete="on" value="<?php echo $tel;?>">
                                <span class="error"><?php echo $telErr;?></span>

                                <input name="tbCourriel" id="tbEmail" type="text" placeholder="Votre courriel" itemx-autocompletetype="email" autocomplete="on" value="<?php echo $email;?>">
                                <span class="error"><?php echo $emailErr;?></span>

                                <input name="tbPiecesRequises" id="tbPiecesRequises" type="text" placeholder="Pièces requises" value="<?php echo $piecesRequises;?>">
                                <span class="error"><?php echo $piecesRequisesErr;?></span>

                                <textarea id="tbDescription" name="tbDescription" rows="2" cols="20" placeholder="Description" value="<?php echo $desc; ?>"></textarea>
                                <span class="error"><?php echo $descErr;?></span>

                                <div class="g-recaptcha" data-sitekey="<?php echo $applicationConfig['google.recaptcha.siteKey']; ?>"></div>
                                <span class="error"><?php echo $captchaErr;?></span>
                            <input type="hidden" name="" itemid="">
                            <input type="submit" name="btnSendMail" id="btnSendMail" value="Soumettre" class="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/footer/_footer.php'); ?>
    <script src="https://www.google.com/recaptcha/api.js?hl=fr-CA" async defer></script>
    </form>
</body>
</html>