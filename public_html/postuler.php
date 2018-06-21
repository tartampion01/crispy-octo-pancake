<?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/header/_header.php'); ?>
<body class="body"><?php RD_Utils::write_Gtag() ?>
    <form role="form" method="POST" action="/<?php echo $NOMPAGE; ?>" enctype="multipart/form-data">
    <div class="">
        <div class="content">
            <div class="shrink">
                <div class="titrepage">
                    <h1>Postuler en ligne</h1>
                </div>
                <div class="contenu">
                    <div class="contenu2">
                        <?php 
                            $divVisibility = "visible";
                            $nomFichierPres = $nomFichierPres_TEMP = "";
                            $nomFicherCV = $nomFichierCV_TEMP = "";
                            $emploi;
                            
                            $prenomErr = $nomErr = $villeErr = $emailErr = $telErr = "";
                            $prenom = $nom = $ville = $email = $tel = $comm = "";
                            $errorCount = 0;
                            
                            function uploadFile($ctrlName, $cv = 0)
                            {
                                $nomFichier = '';
                                $target_dir = "../_uploads/emplois/";

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
                                //if($ift != "pdf" && $ift != "doc" && $ift != "docx" && $ift != "txt" && $ift != "odt" && $ift != "rtf" && $ift != "tmp") {
                                //if($ift != "tmp"){ //Car on conserve le fichier temporaire qu'on renomme avec le vrai nom en envoyant le email
                                  //  $uploadOk = 0;
                                //}

                                if ($uploadOk == 0) {
                                // if everything is ok, try to upload file
                                } else {
                                    if (move_uploaded_file($_FILES[$ctrlName]["tmp_name"], $target_file)) {
                                        if( $cv == 1 ){
                                            global $nomFicherCV;
                                            global $nomFichierCV_TEMP;
                                            $nomFicherCV = basename( $_FILES[$ctrlName]["name"]);
                                            // LOCAL
                                            //$nomFichierCV_TEMP = basename($_FILES[$ctrlName]["tmp_name"]);;
                                            // WWW
                                            $nomFichierCV_TEMP = $target_dir.basename($_FILES[$ctrlName]["tmp_name"]);
                                        }
                                        else
                                        {
                                            global $nomFichierPres;
                                            global $nomFichierPres_TEMP;
                                            $nomFichierPres = basename( $_FILES[$ctrlName]["name"]);
                                            // LOCAL
                                            //$nomFichierPres_TEMP = basename($_FILES[$ctrlName]["tmp_name"]);
                                            /// WWW
                                            $nomFichierPres_TEMP = $target_dir.basename($_FILES[$ctrlName]["tmp_name"]);
                                        }
                                    } else {}
                                }
                            }
                        
                            if ($_SERVER['REQUEST_METHOD'] === 'POST') {
                                $emploi = RD_Emploi::getDetailEmploi($_POST["hidLienEncode"]);
                                
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

                                if(!empty($_FILES["fileCV"]["name"])){
                                    uploadFile("fileCV", 1);
                                }

                                if(!empty($_FILES["filePres"]["name"])){
                                    uploadFile("filePres", 0);
                                }

                                // ENVOI EMAIL
                                if(isset($_POST['btnSendMail']) && $errorCount == 0)
                                {
                                    $RDemail = new RD_Email();
                                    $RDemail->loadPostulerEmploi(TypeEmail::PostulerEmploi,$emploi,$nom,$prenom,$ville,$tel,$email,$comm,$nomFicherCV,$nomFichierPres,$nomFichierCV_TEMP,$nomFichierPres_TEMP);
                                    
                                    if($RDemail->send()){
                                        $divVisibility = "hidden";
                                        ?><h2>Votre demande a bien été envoyée</h2><?php
                                    }
                                }
                            }
                            else
                            {
                                // emploi_id en paramètre dans l'url on affiche les détails de celui-ci
                                if (isset($_REQUEST['emp'])) {
                                    if(urldecode(base64_decode($_REQUEST['emp'])) == "spontanee"){?>
                                        <h2>Candidature spontanée</h2>
                                        <?php
                                        $emploi = RD_Emploi::getDetailEmploi($_REQUEST['emp']);
                                    }
                                    else
                                    {
                                        $emploi = RD_Emploi::getDetailEmploi($_REQUEST['emp']);?>
                                        <h5><?php echo $emploi->titre . "&nbsp;-&nbsp;[&nbsp;<b>" . $emploi->referenceInterne . "</b>&nbsp;]&nbsp;-&nbsp;" . $emploi->succursaleObj->ville; ?></h5>
                                        <?php
                                    }
                                }
                            }
                        ?>                        
                        <div class="formulaire" style="visibility: <?php echo $divVisibility; ?>">
                            <h4>Vos informations</h4>
                            <input type="hidden" id="hidLienEncode" name="hidLienEncode" value="<?php echo $emploi->lienEncode; ?>" />
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

                            <h5>Téléphone *&nbsp;:
                                <input name="tbTelephone" name="tbTelephone" type="text" class="" value="<?php echo $tel;?>"></h5>
                            <span class="error"><?php echo $telErr;?></span>

                            <br/>
                            
                            <input type="file" id="fileCV" name="fileCV" accept=".pdf,.doc,.docx,.txt,.odt,.rtf" class="hidden" style="display:none;"/>
                            <label for="fileCV" class="fileReplacement">
                                Joignez votre CV
                            </label>&nbsp;
                            <label id="cvFileName" name="cvFileName"></label>
                            <br />
                            
                            <input type="file" id="filePres" name="filePres" accept=".pdf,.doc,.docx,.txt,.odt,.rtf" class="hidden" style="display:none;"/>
                            <label for="filePres" class="fileReplacement">
                                Lettre de présentation
                            </label>&nbsp;
                            <label id="cvPresName" name="cvPresName"></label>
                            
                            <h5>Quelques mots sur vous :<br>
                                <textarea name="tbCommentaire" name="tbCommentaire" rows="2" cols="50" style="width: 450px;height: 120px;"><?php echo $comm;?></textarea></h5>
                            <p>
                                <input type="submit" name="btnSendMail" id="btnSendMail" value="Envoyer" class="">
                            </p>
                        </div>
                        <a name="hyperlien" href="<?php echo RD_PageLink::getHref(folder::Root,page::Carrieres); ?>">Retour aux offres</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
        <!-- POUR modifier le controle de type file, sinon le texte du button est en anglais, et ça affiche "Select à file" direct au load de la page -->
        <script type="text/javascript">
            document.getElementById('fileCV').addEventListener('change',prepareUploadCV,false);
            document.getElementById('filePres').addEventListener('change',prepareUploadPres,false);
            function prepareUploadCV(event)
            {
                var files = event.target.files;
                var fileName = files[0].name;
                var cv = document.getElementById("cvFileName");
                cv.innerHTML = fileName;
            }
            function prepareUploadPres(event)
            {
                var files = event.target.files;
                var fileName = files[0].name;
                var cv = document.getElementById("cvPresName");
                cv.innerHTML = fileName;
            }
        </script>
    </form>
    <?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/footer/_footer.php'); ?>
</body>
</html>