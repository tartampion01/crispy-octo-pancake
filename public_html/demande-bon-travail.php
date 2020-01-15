<?php $includeRecaptchaV3 = 1; ?>
<?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/header/_header.php'); ?>
<!--<script>
grecaptcha.ready(function() {
    grecaptcha.execute('6LfOR2sUAAAAAKmw_YCd4Yq58p6dZKS8r6bTHCqX', {action: 'homepage'})
        .then(function(token) {
            document.getElementById('g-recaptcha-response').value=token;
    });
});
</script>-->
<script type="text/javascript">
  var onloadCallback = function() {
    //alert("grecaptcha is ready!");
  };
</script>
<script>
    function onSubmit(token) {
        document.getElementById("frmBonTravail").submit();
    }
</script>
<script type='text/javascript'>
    var ID_TRAVAUX = 1;

    function setOption(id, value)
    {
        var selectBox = document.getElementById(id),
        options = selectBox.options;

        for (var i in options) {
            if (options[i].value == value) {
                selectBox.selectedIndex = i;
                return;
            }
        }
    }
    
    function hideDiv(id)
    {
        ID_TRAVAUX--;
        
        var x = document.getElementById(id);
        x.value = '';
        
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
    
    function addDivTravaux()
    {
        ID_TRAVAUX++;
        
        if( ID_TRAVAUX <= 8 )
        {
            var x = document.getElementById('divTravaux' + ID_TRAVAUX);

            if (x.style.display === "none") {
                x.style.display = "block";
            } else {
                x.style.display = "none";
            }
        }
        else
        {
            var x = document.getElementById('divAddTravaux');
            
            if (x.style.display === "none") {
                x.style.display = "block";
            } else {
                x.style.display = "none";
            }
        }
    }
</script>
<?php RD_Utils::write_Gtag() ?>
    <form method="POST" id="frmBonTravail" action="/<?php echo $NOMPAGE; ?>" enctype="multipart/form-data">
    <div class="">
        <div class="content">
            <div class="shrink">
                <div class="titrepage">
                    <h1>DEMANDE DE BON DE TRAVAIL</h1>
                </div>
                <div class="contenu">
                    <div class="contenu2">
                        <?php
                        
                        $divVisibility = "visible";
                        
                        $nomCompagnieErr = $nomResponsableErr = $emailErr = $telErr = $vinErr = $uniteErr = $kmErr = $bonCommandeErr = $travauxErr = $noteSpecialeErr = $instructionsErr = $acceptErr = $prixMaxErr = $captchaErr = "";
                        $succursale = $nomCompagnie = $nomResponsable = $email = $tel = $vin = $unite = $km = $bonCommande = $noteSpeciale = $instructions = $prixMax = $travaux1 = $travaux2 = $travaux3 = $travaux4 = $travaux5 = $travaux6 = $travaux7 = $travaux8 = "";
                        $filename1 = $filename2 = $filename3 = "";
                        $file1Temp = $file2Temp = $file3Temp = "";

                        $errorCount = 0;
                        
                        function uploadFile($ctrlName)
                        {
                            $target_dir = "../_uploads/bonTravail/";
                            $target_file = $target_dir . basename($_FILES[$ctrlName]["tmp_name"]);
                            $uploadOk = 1;

                            $ift = strtolower(pathinfo($target_file,PATHINFO_EXTENSION)); // $ift = imageFileType c'était chiant pour le if plus bas!
                            if (file_exists($target_file)){
                                $uploadOk = 0;
                            }
                            if ($_FILES[$ctrlName]["size"] > 5000000) {
                                $uploadOk = 0;
                            }
                            
                            // Allow certain file formats
//                            if($ift != "jpg" && $ift != "png" && $ift != "jpeg" && $ift != "doc" && $ift != "xls") {
//                                //echo "Fichiers .pdf,.jpg,.png,.doc,.xls seulement";
//                                $uploadOk = 0;
//                            }
                            
                            // Check if $uploadOk is set to 0 by an error
                            if ($uploadOk == 0) {
                            // if everything is ok, try to upload file
                            } else {
                                if (move_uploaded_file($_FILES[$ctrlName]["tmp_name"], $target_file)) {
                                    switch($ctrlName)
                                    {
                                        case "file1":global $filename1;
                                                     global $file1Temp;
                                                     $filename1 = basename( $_FILES[$ctrlName]["name"]);
                                                     $file1Temp = $target_dir . basename($_FILES[$ctrlName]["tmp_name"]);
                                                     break;
                                        case "file2":global $filename2;
                                                     global $file2Temp;
                                                     $filename2 = basename( $_FILES[$ctrlName]["name"]);
                                                     $file2Temp = "../_uploads/bonTravail/" . basename($_FILES[$ctrlName]["tmp_name"]);
                                                     break;
                                        case "file3":global $filename3;
                                                     global $file3Temp;
                                                     $filename3 = basename( $_FILES[$ctrlName]["name"]);
                                                     $file3Temp = "../_uploads/bonTravail/" . basename($_FILES[$ctrlName]["tmp_name"]);
                                                     break;
                                        default:break;

                                    }
                                } else {
                                    //echo "Diantre, il y a eu une erreur en ajoutant le fichieré";
                                }
                            }
                        }                        

                        if ($_SERVER["REQUEST_METHOD"] === "POST") {
                            
                            if (empty($_POST['ddlSuccursales'])){
                                $succursale = $_POST['hidSuccursale'];
                            }
                            else{
                                $succursale = $_POST['ddlSuccursales'];
                            }
//echo $succursale;                            
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

                            if (empty($_POST["tbVin"])){
                                $vinErr = "Champ obligatoire";
                                $errorCount += 1;
                            }
                            else{
                                $vin = RD_Utils::test_input($_POST["tbVin"]);
                                if(strlen($vin) < 8 )
                                {
                                    $vinErr = "Veuillez entrer les 8 derniers caractères";
                                    $errorCount += 1;
                                }
                            }

                            if (empty($_POST["tbBonCommande"])){
                                $bonCommandeErr = "Champ obligatoire";
                                $errorCount += 1;
                            }
                            else
                                $bonCommande = RD_Utils::test_input($_POST["tbBonCommande"]);

                            if (empty($_POST["cbAccept"])){
                                $acceptErr = "Cette case est obligatoire";
                            }
                            else
                            {
                                $accept = $_POST['cbAccept'];
                                if($accept == 0){
                                    $acceptErr = "Cette case est obligatoire";
                                    $errorCount += 1;
                                
                                }
                            }

                            if(empty($_POST['rbInstruction'])){
                                $instructionsErr = "Il est obligatoire de choisir une instruction";
                                $errorCount += 1;
                            }
                            else{
                                $instructions = $_POST['rbInstruction'];
                                if( $instructions == TypeInstructionsBonTravail::ProcederMaisAppelerSiPrixExcede )
                                {
                                    if(empty($_POST['tbPrixReparationMax']))
                                    {
                                        $prixMaxErr = "Veuillez spécifier un montant";
                                        $errorCount += 1;
                                    }
                                    else
                                    {
                                        if( !is_numeric($_POST['tbPrixReparationMax'])){
                                            $prixMaxErr = "Veuillez spécifier un montant";
                                            $errorCount += 1;
                                        }
                                        else
                                            $prixMax = $_POST['tbPrixReparationMax'];
                                    }
                                }
                            }
                            
                            $unite = RD_Utils::test_input($_POST['tbUnite']);
                            $km = RD_Utils::test_input($_POST['tbKm']);
                            $travaux1 = RD_Utils::test_input($_POST['tbTravaux1']);
                            $travaux2 = RD_Utils::test_input($_POST['tbTravaux2']);
                            $travaux3 = RD_Utils::test_input($_POST['tbTravaux3']);
                            $travaux4 = RD_Utils::test_input($_POST['tbTravaux4']);
                            $travaux5 = RD_Utils::test_input($_POST['tbTravaux5']);
                            $travaux6 = RD_Utils::test_input($_POST['tbTravaux6']);
                            $travaux7 = RD_Utils::test_input($_POST['tbTravaux7']);
                            $travaux8 = RD_Utils::test_input($_POST['tbTravaux8']);
                            $noteSpeciale = RD_Utils::test_input($_POST['tbNoteSpeciale']);

                            if(!empty($_FILES["file1"]["name"])){
                                uploadFile("file1");
                            }
                            if(!empty($_FILES["file2"]["name"])){
                                uploadFile("file2");
                            }
                            if(!empty($_FILES["file3"]["name"])){
                                uploadFile("file3");
                            }
                            
                            // CAPTCHA v3 -> no visual for user
                            //$captchaResult = RD_Utils::validateRecaptcha_v3($_POST['g-recaptcha-response']);
                            $captchaResult = 1;
                            $erreurCaptcha = 0;
                            if( isset($captchaResult))
                            {
//                                if( $captchaResult["success"] == 1 ) // returns boolean 0 == fail 1 == success
//                                {
                                    // Scal is 0.0 bot -> 1.0 human
                                    //if( $captchaResult["score"] > 0.5 ){}
//                                }
//                                else // FAILURE
//                                {
//                                    $errorCount += 1;
//                                    $erreurCaptcha = 1;
//                                    $captchaErr = "Erreur avec la validation recaptcha v3";
//                                }
                            }
                            else{
                                $errorCount += 1;
                                $erreurCaptcha = 1;
                                $captchaErr = "Erreur avec la validation recaptcha v3";
                            }
                             
                            // Si nous avons une erreur de recaptcha:
                            // 1. affichage de téléphone de la succursale. 
                            // 2. envoi mail @ weblog@servicesinfo.ca
                            if( $erreurCaptcha == 1 )
                            {
                                $succ = new RD_Succursales();
                                $succ->loadFromSuccursaleString($succursale);
                                echo $captchaErr . "<br><b>Un problème est survenu lors de l'envoi de votre demande</b><br>" . "Veuillez communiquer directement avec la succursale<br> <b>" . $succ->nomLong . " au " . $succ->telephones[0] . "</b>";
                                $divVisibility = "hidden";
                                
                                $RDemail = new RD_Email();
                                $RDemail->load(TypeEmail::WebLog, print_r($_POST,true), print_r($captchaResult,true), $NOMPAGE, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '');
                                $RDemail->send();
                            }
                            
                            // ENVOI EMAIL
                            if(isset($_POST['btnSendMail']) && $errorCount == 0)
                            {
                                $RDemail = new RD_Email();
                                $RDemail->loadBonTravail(TypeEmail::BonTravail,$succursale,$nomCompagnie,$nomResponsable,$tel,$email,$vin,$unite,$km,$bonCommande,$noteSpeciale,$instructions,$prixMax,$travaux1,$travaux2,$travaux3,$travaux4,$travaux5,$travaux6,$travaux7,$travaux8, $filename1,$filename2,$filename3,$file1Temp,$file2Temp,$file3Temp); 
                                if($RDemail->send())
                                {
                                    $divVisibility = "hidden";
                                    ?><h2>Votre demande a bien été envoyée</h2><?php
                                }
                            }
                            else
                            {
                                if(!$erreurCaptcha)
                                    echo RD_Utils::GetDropDownSuccursalesBonTravail($_POST["hidSuccursale"]);
                            }
                        }
                        else
                        {
                            if(isset($_REQUEST["succursale"]))
                            {
                                echo RD_Utils::GetDropDownSuccursalesBonTravail($_REQUEST["succursale"]);
                                $succursale = $_REQUEST["succursale"];
                            }
                        }
                        ?>
                        <div class="demandeBon" style="visibility: <?php echo $divVisibility; ?>">
                            <input type="hidden" id="hidSuccursale" name="hidSuccursale" value="<?php echo $succursale; ?>">
                            <input name="tbNomCompagnie" id="tbNomCompagnie" placeholder="Nom de la compagnie *" type="text" class="" value="<?php echo $nomCompagnie;?>">
                            <span class="error"><?php echo $nomCompagnieErr;?></span>

                            <input name="tbNomResponsable" id="tbNomResponsable" type="text" placeholder="Nom du responsable *" itemx-autocompletetype="name-full" autocomplete="on" value="<?php echo $nomResponsable;?>">
                            <span class="error"><?php echo $nomResponsableErr;?></span>

                            <input name="tbTelephone" id="tbTelephone" type="text" placeholder="# de téléphone *" itemx-autocompletetype="phone-full" autocomplete="on" value="<?php echo $tel;?>">
                            <span class="error"><?php echo $telErr;?></span>

                            <input name="tbCourriel" id="tbEmail" type="text" placeholder="Votre courriel" itemx-autocompletetype="email" autocomplete="on" value="<?php echo $email;?>">
                            <span class="error"><?php echo $emailErr;?></span>

                            <input name="tbVin" id="tbVin" type="text" placeholder="VIN (8 derniers) *" value="<?php echo $vin;?>">
                            <span class="error"><?php echo $vinErr;?></span>

                            <input name="tbUnite" id="tbUnite" type="text"  placeholder="Unité *" value="<?php echo $unite;?>">
                            <span class="error"><?php echo $uniteErr;?></span>

                            <input name="tbKm" id="tbKm" type="text"  placeholder="Kilométrage" value="<?php echo $km;?>">
                            <span class="error"><?php echo $kmErr;?></span>

                            <input name="tbBonCommande" id="tbBonCommande" type="text"  placeholder="Bon de commande *" value="<?php echo $bonCommande;?>">
                            <span class="error"><?php echo $bonCommandeErr;?></span>

                            <div class="wrapPlaintes">
                                <div class="plainte plainte1">
                                    <div class="champ">
                                        <input name="tbTravaux1" id="tbTravaux1" class="" placeholder="Description des travaux à faire" type="text" value="<?php echo $travaux1; ?>">
                                    </div>
                                    <div class="supPlainte">
                                        <a>x</a>
                                    </div>
                                </div>
                                <div class="plainte clear" style="display: none;">
                                    <div class="champ">
                                        <input name="tbTravaux2" id="tbTravaux2" class="" placeholder="Description des travaux à faire" type="text" value="<?php echo $travaux2; ?>">
                                    </div>
                                    <div class="supPlainte">
                                        <a>x</a>
                                    </div>
                                </div>
                                <div class="plainte clear" style="display: none;">
                                    <div class="champ">
                                        <input name="tbTravaux3" id="tbTravaux3" class="" placeholder="Description des travaux à faire" type="text" value="<?php echo $travaux3; ?>">
                                    </div>
                                    <div class="supPlainte">
                                        <a>x</a>
                                    </div>
                                </div>
                                <div class="plainte clear" style="display: none;">
                                    <div class="champ">
                                        <input name="tbTravaux4" id="tbTravaux4" class="" placeholder="Description des travaux à faire" type="text" value="<?php echo $travaux4; ?>">
                                    </div>
                                    <div class="supPlainte">
                                        <a>x</a>
                                    </div>
                                </div>
                                <div class="plainte clear" style="display: none;">
                                    <div class="champ">
                                        <input name="tbTravaux5" id="tbTravaux5" class="" placeholder="Description des travaux à faire" type="text" value="<?php echo $travaux5; ?>">
                                    </div>
                                    <div class="supPlainte">
                                        <a>x</a>
                                    </div>
                                </div>
                                <div class="plainte clear" style="display: none;">
                                    <div class="champ">
                                        <input name="tbTravaux6" id="tbTravaux6" class="" placeholder="Description des travaux à faire" type="text" value="<?php echo $travaux6; ?>">
                                    </div>
                                    <div class="supPlainte">
                                        <a>x</a>
                                    </div>
                                </div>
                                <div class="plainte clear" style="display: none;">
                                    <div class="champ">
                                        <input name="tbTravaux7" id="tbTravaux7" class="" placeholder="Description des travaux à faire" type="text" value="<?php echo $travaux7; ?>">
                                    </div>
                                    <div class="supPlainte">
                                        <a">x</a>
                                    </div>
                                </div>
                                <div class="plainte clear" style="display: none;">
                                    <div class="champ">
                                        <input name="tbTravaux8" id="tbTravaux8" class="" placeholder="Description des travaux à faire" type="text" value="<?php echo $travaux8; ?>">
                                    </div>
                                    <div class="supPlainte">
                                        <a>x</a>
                                    </div>
                                </div>
                            </div>
                            <div class="addPlainte">
                                <p>
                                    <a class="lienAjoutTravaux" target="_self">[+] Ajouter d&#39;autres travaux &#224; faire</a>
                                </p>
                            </div>

                            <div class="formulaire">
                             <span class="filter-file">Inclure un document (PDF, JPG, PNG, DOC, XLS)</span>
                                <input type="file" id="file1" name="file1" accept=".jpg,.jpeg,.pdf,.doc,.xls" class="hidden" style="display:none;"/>
                                <label for="file1" class="fileReplacement">Joignez une fichier</label>
                                <label id="labelFile1" name="labelFile1" class="info-file"></label>
                                <br />
                                <input type="file" id="file2" name="file2" accept=".jpg,.jpeg,.pdf,.doc,.xls" class="hidden" style="display:none;"/>
                                <label for="file2" class="fileReplacement">Joignez une fichier</label>
                                <label id="labelFile2" name="labelFile2" class="info-file"></label>
                                <br />
                                <input type="file" id="file3" name="file3" accept=".jpg,.jpeg,.pdf,.doc,.xls" class="hidden" style="display:none;"/>
                                <label for="file3" class="fileReplacement">Joignez une fichier</label>
                                <label id="labelFile3" name="labelFile3" class="info-file"></label>
                                <br />
                            </div>
                            
                            <textarea id="tbNoteSpeciale" name="tbNoteSpeciale" rows="2" cols="20" placeholder="Note spéciale" value="<?php echo $noteSpeciale; ?>"></textarea>

                            <p>&nbsp;</p>
                            <h3>Conditions et autorisation de réparation</h3>
                            <p></p>
                            <span>
                                <font color="#ff0000">À NOTER - Suite à l'envoi de ce formulaire, vous devrez prendre rendez-vous avec</font>
                                    <a href="<?php echo RD_PageLink::getHref(folder::Root,page::NousJoindre); ?>"> votre concessionaire</a>.
                            </span>
                            </br>
                            <label>
                                <span class="check"><input type="hidden" id="cbAccept" name="cbAccept" value="0"><input type="checkbox" id="cbAccept" name="cbAccept" title="" value="1"></span>
                                <span class="error"><?php echo $acceptErr;?></span>
                                J'autorise par ceci le travail de réparation ci-dessus à être effectué avec les matériaux nécessaires. Vous ne serez pas jugé responsable de la perte ou des dommages au véhicule, ou aux articles laissés dans le véhicule, en cas de feu, de vol, d'accident ou de toute autre cause indépendante de votre volonté. J'autorise par ceci vous et vos employés à opérer le véhicule ci-dessus décrit à des fin d'essais routier et ou d'inspections. Je reconnais que vous avez un lien légal sur le véhicule pour recouvrir la valeur des travaux encourue sur le véhicule.
                            </label>
                            <strong>Instructions</strong>
                            <label class="hideDrummond">
                                <input type="radio" id="rbInstruction" name="rbInstruction" value="1">&nbsp;Je demande un estimé écrit avant le début des travaux.</label>
                            <label>
                                <input type="radio" name="rbInstruction" id="rbInstruction" value="2">&nbsp;Veuillez procéder aux réparations mais appelez-moi pour approbation avant de continuer si le prix excède $ </label>
                                <input style="width:75px;" name="tbPrixReparationMax" id="tbPrixReparationMax" type="text" value=<?php echo $prixMax;?>><?php echo $prixMaxErr;?>
                            <label class="widthError">
                                <input type="radio" name="rbInstruction" id="rbInstruction" value="3">&nbsp;Je ne veux pas d'évaluation et vous pouvez procéder aux reparations.
                            </label>
                                <span class="error"><?php echo $instructionsErr;?></span>
                            <p class="hideDrummond">À cause de l'espace limité de stationnement nous ne pouvons remiser un véhicule pendant des périodes prolongées. Veuillez noter qu'à compter du sixième jour suivant la fin des réparations, des frais de $20.00 par jour de remisage seront exigés jusqu'à ce que le véhicule soit récupéré.</p>

                            
                        <!--<input type="submit" name="btnSendMail" id="btnSendMail" value="Soumettre" class="">-->
                        <!--<input type="hidden" id="g-recaptcha-response" name="g-recaptcha-response">-->
                        <button type="submit" name="btnSendMail" id="btnSendMail">Soumettre</button>
                        </div>
                        <script type="text/javascript">
                            document.getElementById('file1').addEventListener('change',prep1,false);
                            document.getElementById('file2').addEventListener('change',prep2,false);
                            document.getElementById('file3').addEventListener('change',prep3,false);

                            function prep1(event)
                            {
                                var files = event.target.files;
                                var fileName = files[0].name;
                                var cv = document.getElementById("labelFile1");
                                cv.innerHTML = fileName;
                            }
                            function prep2(event)
                            {
                                var files = event.target.files;
                                var fileName = files[0].name;
                                var cv = document.getElementById("labelFile2");
                                cv.innerHTML = fileName;
                            }
                            function prep3(event)
                            {
                                var files = event.target.files;
                                var fileName = files[0].name;
                                var cv = document.getElementById("labelFile3");
                                cv.innerHTML = fileName;
                            }
                        </script>
        
        <script type="text/javascript">  //<![CDATA[
  $(function () {
    
    $(".plainte:first-child .supPlainte").hide();

    //Ajouter une plainte
    $(".lienAjoutTravaux").click(function () {
      $(".plainte:hidden:first").slideDown("1000", function () {
        if ($(".plainte:visible").length >= 0) {
          $(".plainte:first-child .supPlainte").slideDown();
        }
        if ($(".plainte:visible").length >= 8) {
          $(".lienAjoutTravaux").slideUp();
        }
      }).find("input").focus();

    });

    //Supprimer une plainte
    $(".supPlainte").click(function () {
      var clickedIndex = $(this).parents(".plainte").index();
      $(this).parents(".plainte input[type=text]").val("");
      $(this).parents(".plainte").slideUp("1000", function () {
        var nbVisibleElements = $(".plainte:visible").length;
        if (nbVisibleElements <= 1) {
          $(".plainte:first-child .supPlainte").slideUp();
        }
        if (nbVisibleElements < 8 && $(".lienAjoutTravaux").is(":hidden")) {
          $(".lienAjoutTravaux").slideDown();
        }

        //Arrays contenant les zones des plaintes et les valeurs des plaintes
        var elementsPlaintes = $.makeArray(document.getElementsByClassName("plainte"));
        var textesPlaintes = new Array();

        //Mets tous les texte des inputs dans un array
        for (var i = 0; i <= elementsPlaintes.length; i++) {
          if (i === clickedIndex) {
            $(elementsPlaintes[i]).find("input").val("");
          }
          else if (i > nbVisibleElements) {
            break;
          }
          else {
            textesPlaintes.push($(elementsPlaintes[i]).find("input").val());
            $(elementsPlaintes[i]).find("input").val("");
          }
        }

        //Parcours le tableau des valeurs et réassimile chaque valeur à la plainte du même index
        $(".plainte").hide();
        for (var i = 1; i < textesPlaintes.length + 1; i++) {
          $(".plainte:nth-child(" + (i) + ")").show().find("input").val(textesPlaintes[i - 1]);
        }
      });
    });
  });
  //]]></script>
                    </div>
                </div>
            </div>
        </div>
    </div>    
    </form>    
<?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/footer/_footer.php'); ?>