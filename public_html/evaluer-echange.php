<?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/header/_header.php'); ?>
<body class="body"><?php RD_Utils::write_Gtag() ?>
    <form role="form" method="POST" action="/<?php echo $NOMPAGE; ?>" enctype="multipart/form-data">
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
                                $filename1 = $filename2 = $filename3 = "";
                                $file1Temp = $file2Temp = $file3Temp = "";
                                
                                // from url pour savoir si dans le email on met le lien vers la page details_new ou details_used
                                $NEW = 1;
                                
                                function uploadFile($ctrlName)
                                {
                                    $target_dir = "../_uploads/evaluerEchange/";

                                    // Pour conserver le nom temporaire dans le dossier d'upload
                                    // Pour éviter d'avoir deux fois un CV.doc!
                                    $target_file = $target_dir . basename($_FILES[$ctrlName]["tmp_name"]);
                                    $uploadOk = 1;

                                    $ift = strtolower(pathinfo($target_file,PATHINFO_EXTENSION)); // $ift = imageFileType c'était chiant pour le if plus bas!
                                    if (file_exists($target_file)){
                                        $uploadOk = 0;
                                    }
                                    if ($_FILES[$ctrlName]["size"] > 5000000) {
                                        $uploadOk = 0;
                                    }

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
                                                             $file2Temp = $target_dir . basename($_FILES[$ctrlName]["tmp_name"]);
                                                             break;
                                                case "file3":global $filename3;
                                                             global $file3Temp;
                                                             $filename3 = basename( $_FILES[$ctrlName]["name"]);
                                                             $file3Temp = $target_dir . basename($_FILES[$ctrlName]["tmp_name"]);
                                                             break;
                                                default:break;
                                                    
                                            }
                                        } else {}
                                    }
                                }
                                
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
                                    
                                    if(!empty($_POST["newOrUsed"]))
                                        $NEW = $_POST["newOrUsed"];
                                    
                                    $etatExt = $_POST['cboEtatExt'];
                                    $etatInt = $_POST['cboEtatInt'];

                                    if(!empty($_FILES["file1"]["name"])){
                                        uploadFile("file1");
                                    }
                                    if(!empty($_FILES["file2"]["name"])){
                                        uploadFile("file2");
                                    }
                                    if(!empty($_FILES["file3"]["name"])){
                                        uploadFile("file3");
                                    }

                                    // ENVOI EMAIL
                                    if(isset($_POST['btnSendMail']) && $errorCount == 0)
                                    {
                                        $RDemail = new RD_Email();
                                        $RDemail->loadEvaluerEchange(TypeEmail::EvaluerEchange,$prenom,$nom,$ville,urlencode($email),$tel,'','','','',$marque,$modele,$annee,$km,$etatExt,$etatInt,$VehiculeId,TypeVehicule::CamionNeuf,$filename1,$filename2,$filename3,$file1Temp,$file2Temp,$file3Temp, $NEW);
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
                                    </select>
                                </h5>
                                
                                <h5>Images du véhicule :</h5>
                                <input type="file" id="file1" name="file1" accept=".jpg,.jpeg,.png,.bmp,.tif" class="hidden" style="display:none;"/>
                                <label for="file1" class="fileReplacement">Joignez une image</label>&nbsp;
                                <label id="labelFile1" name="labelFile1"></label>
                                <br />
                                <input type="file" id="file2" name="file2" accept=".jpg,.jpeg,.png,.bmp,.tif" class="hidden" style="display:none;"/>
                                <label for="file2" class="fileReplacement">Joignez une image</label>&nbsp;
                                <label id="labelFile2" name="labelFile2"></label>
                                <br />
                                <input type="file" id="file3" name="file3" accept=".jpg,.jpeg,.png,.bmp,.tif" class="hidden" style="display:none;"/>
                                <label for="file3" class="fileReplacement">Joignez une image</label>&nbsp;
                                <label id="labelFile3" name="labelFile3"></label>
                                <br />
                            <br />
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
        <!-- POUR modifier le controle de type file, sinon le texte du button est en anglais, et ça affiche "Select à file" direct au load de la page -->
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
    </form>
    <?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/footer/_footer.php'); ?>
</body>
</html>