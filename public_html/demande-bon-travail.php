<?php require_once($_SERVER['DOCUMENT_ROOT'] . '/_includes/header/_header.php'); ?>
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
                        <div>
                            <div class="demandeBon">
                                <?php
                                    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
                                    }
                                    else
                                    {
                                        if(isset($_REQUEST["succursale"]))
                                            echo $G_RD_Utils::GetDropDownSuccursalesBonTravail($_REQUEST["succursale"]);
                                    }
                                ?>
                                <input name="" type="text" placeholder="Nom de la compagnie *">
                                <input name="fullname" type="text" placeholder="Nom du responsable *" itemx-autocompletetype="name-full" autocomplete="on">
                                <input name="phone" type="text" placeholder="# de téléphone *" itemx-autocompletetype="phone-full" autocomplete="on">
                                <input name="email" type="text" placeholder="Votre courriel" itemx-autocompletetype="email" autocomplete="on">
                                <input name="vin" type="text"  placeholder="VIN (8 derniers)" itemid="">
                                <input name="unite" type="text"  placeholder="Unité" itemid="">
                                <input name="km" type="text"  placeholder="Kilométrage" itemid="">
                                <input name="boncommande" type="text"  placeholder="Bon de commande *" itemid="">
                                
                                <div id="" class="supPlainte" data-staticclassnames="supPlainte" itemid="" style="display: none;">
                                    <a id="" class="" name="hyperlien" onclick="javascript:RegisterClick(this);">x</a>
                                </div>
                                <div id="" class="plainte clear">
                                    <div id="" class="champ"><input name="" type="text" class="" placeholder="Description des travaux à faire" itemid=""></div>
                                    <div id="" class="supPlainte" data-staticclassnames="supPlainte" itemid=""><a id="" name="hyperlien" onclick="javascript:RegisterClick(this);">x</a></div>
                                </div>
                                <div class="addPlainte">
                                    <p>
                                        <a name="hyperlien" onclick="javascript:RegisterClick(this);" target="_self">[+] Ajouter d'autres travaux à faire</a>
                                    </p>
                                </div>
                            
                                <div class="ReplacementDiv">
                                    <span class="UploadFileText">Inclure un document (PDF, JPG, PNG, DOC, XLS)</span>
                                    <span class="ReplacementButton" style="position: relative; overflow: hidden; cursor: pointer;">Parcourir
                                        <input type="file" name="" id="" class="ReplacementButtonInput" title="">
                                    </span>
                                </div>
                            
                                <textarea rows="2" cols="20" id="" placeholder="Note spéciale"></textarea>

                                <p>&nbsp;</p>
                                <h3>Conditions et autorisation de réparation</h3>
                                <p></p>
                                <span>
                                    <font color="#ff0000">À NOTER - Suite à l'envoi de ce formulaire, vous devrez prendre rendez-vous avec</font>
                                        <a href="<?php RD_PageLink::getHref(folder::Root,page::NousJoindre) ?>"> votre concessionaire</a>.
                                </span>
                                </br>
                                <label>
                                    <span class="check"><input type="checkbox" title=""></span>
                                    J'autorise par ceci le travail de réparation ci-dessus à être effectué avec les matériaux nécessaires. Vous ne serez pas jugé responsable de la perte ou des dommages au véhicule, ou aux articles laissés dans le véhicule, en cas de feu, de vol, d'accident ou de toute autre cause indépendante de votre volonté. J'autorise par ceci vous et vos employés à opérer le véhicule ci-dessus décrit à des fin d'essais routier et ou d'inspections. Je reconnais que vous avez un lien légal sur le véhicule pour recouvrir la valeur des travaux encourue sur le véhicule.
                                </label>
                                <strong>Instructions</strong>
                                <label class="hideDrummond"><input type="radio" name="instruction">&nbsp;Je demande un estimé écrit avant le début des travaux.</label>
                                <input type="radio" name="instruction">&nbsp;Veuillez procéder aux réparations mais appelez-moi pour approbation avant de continuer si le prix excède $ 
                                <span id="" class="prixSpan">
                                    <input name="" type="text"></span>
                                <label class="widthError">
                                    <input id="" type="radio" name="instruction">&nbsp;Je ne veux pas d'évaluation et vous pouvez procéder aux reparations.</label>
                                <p class="hideDrummond">À cause de l'espace limité de stationnement nous ne pouvons remiser un véhicule pendant des périodes prolongées. Veuillez noter qu'à compter du sixième jour suivant la fin des réparations, des frais de $20.00 par jour de remisage seront exigés jusqu'à ce que le véhicule soit récupéré.</p>
                                <div>
                                    <span id="" class="Captcha_Description">Veuillez entrer le code ci-dessous : </span>
                                </div>
                                <div class="CaptchaRow" style="clear:both;">
                                    <div class="CaptchaFirstCell" style="width:px;float:left;">
                                        <img id="" class="Captcha_Image" src="/CaptchaImage.ashx?Width=200&amp;Height=50&amp;RequestGuid=c3e16ceb-3407-4512-a6d7-5cef180dc58e&amp;SiteGuid=0b9658dc-44d6-4190-91f0-5c230e59f7e8"></div>
                                        <div class="CaptchaSecondCell" style="margin-left:10px;margin-top:10px;float:left;">
                                            <span id="" class="Captcha_Help">Vous ne réussissez pas à lire le texte?<br></span>
                                            <a id="" class="Captcha_Refresh" href="javascript:return false;" tabindex="0">Générer un nouveau code</a></div>
                                            <div style="clear:both;"></div>
                                </div>
                                <div>
                                    <span class="Captcha_Text">Texte :</span><input name="" type="text" id="" class="Captcha_TextBox">
                                </div>
                            <input type="hidden" name="" id="" itemid="">
                            <input type="submit" name="" value="Soumettre" id="" class="">
                            </div>
                        </div>
                        <p></p>

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
    <?php require_once($_SERVER['DOCUMENT_ROOT'] . '/_includes/footer/_footer.php'); ?>
</body>
</html>