<?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/header/_header.php'); ?>
<script type='text/javascript'>
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
</script>
<body class="body">
    <form role="form" method="POST" action="/<?php echo $NOMPAGE; ?>">
    <div class="wrap">
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
                        $succursale = $nomCompagnie = $nomResponsable = $email = $tel = $vin = $unite = $km = $bonCommande = $travaux = $noteSpeciale = $instructions = $prixMax = "";
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

                            $accept = $_POST['cbAccept'];
                            if($accept == 0){
                                $acceptErr = "Cette case est obligatoire";
                                $errorCount += 1;
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

                            if(!RD_Utils::validateRecaptcha($_POST['g-recaptcha-response'])){
                                $errorCount += 1;
                                $captchaErr = 'Veuillez remplir le <i>CAPTCHA</i> correctement.';
                            }

                            $unite = $_POST['tbUnite'];
                            $km = $_POST['tbKm'];
                            $travaux = $_POST['tbTravaux'];
                            $noteSpeciale = $_POST['tbNoteSpeciale'];

                            // ENVOI EMAIL
                            if(isset($_POST['btnSendMail']) && $errorCount == 0)
                            {
                                $RDemail = new RD_Email();
                                $RDemail->loadBonTravail(TypeEmail::BonTravail,$succursale,$nomCompagnie,$nomResponsable,$tel,$email,$vin,$unite,$km,$bonCommande,$travaux,$noteSpeciale,$instructions,$prixMax);
                                if($RDemail->send()){
                                    $divVisibility = "hidden";
                                    ?><h2>Votre demande a bien été envoyée</h2><?php
                                }
                            }
                            else
                            {
                                echo RD_Utils::GetDropDownSuccursalesBonTravail($_POST["ddlSuccursales"]);
                            }
                        }
                        else
                        {
                            if(isset($_REQUEST["succursale"]))
                                echo RD_Utils::GetDropDownSuccursalesBonTravail($_REQUEST["succursale"]);
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

                            <input name="tbVin" id="tbVin" type="text" placeholder="VIN (8 derniers) *" value="<?php echo $vin;?>">
                            <span class="error"><?php echo $vinErr;?></span>

                            <input name="tbUnite" id="tbUnite" type="text"  placeholder="Unité *" value="<?php echo $unite;?>">
                            <span class="error"><?php echo $uniteErr;?></span>

                            <input name="tbKm" id="tbKm" type="text"  placeholder="Kilométrage" value="<?php echo $km;?>">
                            <span class="error"><?php echo $kmErr;?></span>

                            <input name="tbBonCommande" id="tbBonCommande" type="text"  placeholder="Bon de commande *" value="<?php echo $bonCommande;?>">
                            <span class="error"><?php echo $bonCommandeErr;?></span>

                            <div class="supPlainte" data-staticclassnames="supPlainte" itemid="" style="display: none;">
                                <a class="" name="hyperlien" onclick="javascript:RegisterClick(this);">x</a>
                            </div>
                            <div class="plainte clear">
                                <input name="tbTravaux" id="tbTravaux" type="text" class="" placeholder="Description des travaux à faire" value="<?php echo $travaux; ?>">
                            </div>
                            <div class="supPlainte" data-staticclassnames="supPlainte" itemid="">
                                <a name="hyperlien" onclick="javascript:RegisterClick(this);">x</a>
                            </div>
                            <div class="addPlainte">
                                <p>
                                    <a name="hyperlien" onclick="javascript:RegisterClick(this);" target="_self">[+] Ajouter d'autres travaux à faire</a>
                                </p>
                            </div>

                            <div class="ReplacementDiv">
                                <span class="UploadFileText">Inclure un document (PDF, JPG, PNG, DOC, XLS)</span></br>
                                <span class="ReplacementButton" style="position: relative; overflow: hidden; cursor: pointer;">
                                    <input type="file" accept=".pdf,.jpg,.png,.doc,.xls" name="FileUpload" id="FileUpload" class="ReplacementButtonInput" title="">
                                </span>
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
                            <label class="hideDrummond"><input type="radio" id="rbInstruction" name="rbInstruction" value="1">&nbsp;Je demande un estimé écrit avant le début des travaux.</label>
                            <input type="radio" name="rbInstruction" id="rbInstruction" value="2">&nbsp;Veuillez procéder aux réparations mais appelez-moi pour approbation avant de continuer si le prix excède $ 
                            <span class="prixSpan">
                                <input name="tbPrixReparationMax" id="tbPrixReparationMax" type="text"></span>
                                <?php echo $prixMaxErr;?></span>
                            <label class="widthError">
                                <input type="radio" name="rbInstruction" id="rbInstruction" value="3">&nbsp;Je ne veux pas d'évaluation et vous pouvez procéder aux reparations.</label>
                                <span class="error"><?php echo $instructionsErr;?></span>
                            <p class="hideDrummond">À cause de l'espace limité de stationnement nous ne pouvons remiser un véhicule pendant des périodes prolongées. Veuillez noter qu'à compter du sixième jour suivant la fin des réparations, des frais de $20.00 par jour de remisage seront exigés jusqu'à ce que le véhicule soit récupéré.</p>

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
<script type="text/javascript">  //<![CDATA[
  $(function () {
    var $vin = $(".N2287dc7c24134868b9ccf7364a871645CssClass"),
        $unite = $(".Nf22acb43dfa846bab9ab560424200f3aCssClass"),
        $button = $(".Na311930d570c4b60b0df28609759e473Css"),
    $maxPriceApprob = $(".Nc22e6d3d71244746ae6bd804ce043a52CssClass");

    $vin.rules("remove", "required");
    $unite.rules("remove", "required");

    $maxPriceApprob.rules("add",
        {
          required: {
            depends: function () {
              return $("input[value='Na6268cc3888744bb9b4723d4b4dffefd']").prop("checked");
            }
          }
        });


    $vin.rules("add",
      {
        required: {
          depends: function () {
            return $unite.val() == "";
          }
        },
        minlength: 8
      });

    $unite.rules("add",
    {
      required: {
        depends: function () {
          return $vin.val() == "";
        }
      }
    });

    $vin.keyup(function () {
      if ($vin.data("isValidate")) {
        $unite.valid();
      }
    });

    $unite.keyup(function () {
      if ($unite.data("isValidate")) {
        $vin.valid();
      }
    });

    $("[name='instruction']").change(function () {
      if ($maxPriceApprob.data("isValidate")) {
        $maxPriceApprob.valid();
      }
    });

    $button.click(function () {
      $vin.data("isValidate", true);
      $unite.data("isValidate", true);
      $maxPriceApprob.data("isValidate", true);
    });
  });

  $(function () {
    var submitFct = null;
    // S'assure de ne pas soumettre le formulaire sans passer par l'obtention du ID
    setTimeout(function () { submitFct = N9f4aed34144a4343aa5ee5568fadf0ef_Na311930d570c4b60b0df28609759e473_FormManager.Submit; N9f4aed34144a4343aa5ee5568fadf0ef_Na311930d570c4b60b0df28609759e473_FormManager.Submit = function () { }; }, 0);
    $('.Na311930d570c4b60b0df28609759e473Css').click(function () {
      $.ajax({
        type: "POST",
        data: JSON.stringify({ "provenance": $(".Nd4c743e2a18e4b209f0c816f0bbd5ed0CssClass").val() }),
        url: "/Service/OrderService.asmx/GetOrderIdAndRecipients",
        contentType: "application/json;",
        dataType: "json",
        success: function (result) {
          N9f4aed34144a4343aa5ee5568fadf0ef_Na311930d570c4b60b0df28609759e473_FormManager.SubmitFormEntity.EmailTitle = "Demande de bon de travail # " + result.d.OrderId + " pour " + $(".Nd4c743e2a18e4b209f0c816f0bbd5ed0CssClass").val() + " - " + result.d.City;
          if (!$("input[value='Na6268cc3888744bb9b4723d4b4dffefd']").prop("checked")) {
            $(".Nc22e6d3d71244746ae6bd804ce043a52CssClass").val("");
          }

          // Retrouve le champ caché et le met à jour
          $(".Na311930d570c4b60b0df28609759e473Css").siblings("input[type='hidden']:first").val(result.d.OrderId);
          $.grep(BrokerManager.Brokers, function (broker) { return broker.BrokerName == "712e814f58904f52a462498264c89427"; })[0].BrokerValue = result.d.Emails;
          // Fait la soumission du formulaire
          submitFct.apply(N9f4aed34144a4343aa5ee5568fadf0ef_Na311930d570c4b60b0df28609759e473_FormManager);
        }, error: function () {
          alert("Une erreur est survenue, les données n'ont pas été soumises.");
        }
      });

      return false;
    });
  });
  $(function () {
    //Sélectionne la bonne option dans le select list selon le hash dans l'url
    var refferer = decodeURIComponent(window.location.hash).replace("#", "");
    refferer = refferer.substr(0, refferer.indexOf(" - "));
    $("select:first-child option").each(function () {
      if ($(this).text().indexOf(refferer) >= 0) {
        $(this).prop("selected", true);
      }
    })

    $(".plainte:first-child .supPlainte").hide();

    //Ajouter une plainte
    $(".Nae94f1a365774809861a22a6952e566cCss").click(function () {
      $(".plainte:hidden:first").slideDown("1000", function () {
        if ($(".plainte:visible").length >= 0) {
          $(".plainte:first-child .supPlainte").slideDown();
        }
        if ($(".plainte:visible").length >= 8) {
          $(".Nae94f1a365774809861a22a6952e566cCss").slideUp();
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
        if (nbVisibleElements < 8 && $(".Nae94f1a365774809861a22a6952e566cCss").is(":hidden")) {
          $(".Nae94f1a365774809861a22a6952e566cCss").slideDown();
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

    $(".N96c4317cd0614b73bec2a21c7d19b069CssClass").attr({"x-autocompletetype": "name-full", "autocomplete": "on", "name": "fullname"});
    $(".N1abc0e00281a478693711bd87cd0e747CssClass").attr({ "x-autocompletetype": "phone-full", "autocomplete": "on", "name": "phone" });
    $(".Nd8cd395081f84069a6a21eabf3139f6eCssClass").attr({ "x-autocompletetype": "email", "autocomplete": "on", "name": "email" });

  });
  //]]></script>
                            
                            
                </div>
            </div>
        </div>
    </div>
    </form>
    <?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/footer/_footer.php'); ?>
    <script src="https://www.google.com/recaptcha/api.js?hl=fr-CA" async defer></script>
</body>
</html>