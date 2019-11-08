<?php
$pageName = basename($_SERVER['SCRIPT_NAME']);
$section = '';

if(strpos($_SERVER['REQUEST_URI'], 'camions-neufs/') !== false) {
    $section = 'camion-neufs';
}
elseif(strpos($_SERVER['REQUEST_URI'], 'camions-occasion.php') !== false) {
    $section = 'camions-occasion';
}
elseif(strpos($_SERVER['REQUEST_URI'], 'remorques-neuves/') !== false) {
    $section = 'remorques-neuves';
}
elseif(strpos($_SERVER['REQUEST_URI'], 'vehicules-utilitaires/') !== false) {
    $section = 'vehicules-utilitaires';
}
elseif(strpos($_SERVER['REQUEST_URI'], 'location-camions.php') !== false) {
    $section = 'location-camions';
}
elseif(strpos($_SERVER['REQUEST_URI'], 'pieces-services/') !== false) {
    $section = 'pieces-services';
}
elseif(strpos($_SERVER['REQUEST_URI'], 'promotions-nouvelles') !== false) {
    $section = 'promotions-nouvelles';
}
elseif(strpos($_SERVER['REQUEST_URI'], 'carrieres.php') !== false) {
    $section = 'carrieres';
}
?>
     <!--Footer-->
     <footer>
        <div class="topfooter">
            <div class="grid grid-pad">
                <div class="container-footer">
                    <div class="item-footer">
                        <h3><a href="filter.html">Camions</a></h3>
                        <p><a href="filter.html">International</a></p>
                        <p><a href="filter.html">Isuzu</a></p>
                        <p><a href="filter.html">Occasion</a></p>
                        <p><a href="filter.html">Inventaire</a></p>
                    </div>
                    <div class="item-footer">
                        <h3><a href="filter.html">Pièces</a></h3>
                        <p><a href="filter.html">Pièces</a></p>
                        <p><a href="filter.html">Accessoire</a></p>
                        <p><a href="filter.html">Boutique en ligne</a></p>
                        <p><a href="filter.html">Nouveauté</a></p>
                    </div>
                    <div class="item-footer">
                        <h3><a href="#">Services</a></h3>
                        <p><a href="#">Routier</a></p>
                        <p><a href="#">Après-vente</a></p>
                    </div>
                    <div class="item-footer">
                        <h3><a href="#">Financement</a></h3>
                        <p><a href="#">Long terme</a></p>
                        <p><a href="#">Calculateur</a></p>
                        <p><a href="#">Commande en ligne</a></p>
                    </div>
                    <div class="item-footer">
                        <h3><a href="">Location</a></h3>
                        <p><a href="#">Court terme</a></p>
                        <p><a href="#">Long terme</a></p>
                        <p><a href="#">Avec entretien</a></p>
                        <p><a href="#">Sans entretien</a></p>
                    </div>
                    <div class="item-footer">
                        <h3><a href="#">Nous Joindre</a></h3>
                        <p><a href="#map">Concessionaires</a></p>
                        <p><a href="#map">Point de service</a></p>
                    </div>
                    <div class="item-footer">
                        <h3><a href="#">Carrière</a></h3>
                        <p><a href="#">Emploi disponible</a></p>
                        <p><a href="#">Candidature spontané</a></p>
                    </div>
                    <div class="item-footer">
                        <h3><a href="#">Circulaire</a></h3>
                        <p><a href="#">Promotion</a></p>
                    </div>
                    <div class="item-footer">
                        <h3><a href="#">À Propos</a></h3>
                        <p><a href="#">Notre entreprise</a></p>
                        <p><a href="#">Notre réseau</a></p>
                        <p><a href="filter.html">Occasion</a></p>
                        <p><a href="filter.html">Inventaire</a></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="blacklinefooter">
            <div class="grid grid-pad"> 
                <div class="blackfootertop">
                    <div class="col-1-5 mobile-col-1-5">
                        <a href="/accueil.php">
                          <img class="" src="../../_assets/images/wx3/logo_footer.png" alt="Réseau Dynamique" />
                        </a>
                    </div>
                    <div class="col-1-5 mobile-col-1-5">
                        <p></p>
                    </div>
                    <div class="col-1-5 mobile-col-1-5">
                       <p class="footercenter">Réseau Dynamique, 2020</p>
                    </div>
                    <div class="col-1-5 mobile-col-1-5">
                    <p  class="footerright"></p>
                    </div>
                    <div class="col-1-5 mobile-col-1-5">
                    <p class="footerright">
                        <a name="hyperlien" onclick="" href="/mentions-legales.php" target="_self">Mentions légales</a>&nbsp;| 
                        <a name="hyperlien" onclick="" href="/plan-site.php" target="_self">Plan du site</a>
                    </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
<div id="" class="menuMobile">
    <div id="" class="bgblack">
        <div id="" class="recherche">
            <div id="" class="">                
                <form role="form" method="POST" action="../search.php">
                    <input id="tbSearch" name="tbSearch" title="Rechercher" class="SearchTextBox" placeholder="Rechercher" type="text">
                    <input type="image" id="imgSearch" name="imgSearch" class="SearchImage" src="../../_assets/images/menu_images/spacer.png" alt="Rechercher" style="cursor:pointer;">
                </form>
            </div>
        </div>
    </div>
    <div id="ctl24_c78_ctl00_c80" class="menuCss5">
        <ul id="ctl24_c78_ctl00_c80Ul" class="MenuBar">
            <li class="item4 first rank0 <?php echo ((strpos($_SERVER['REQUEST_URI'], 'accueil.php')) !== false ? 'selected' : '') ?>" id="c80_0" expansionmode="HoverExpansion">
                <a href="<?php echo RD_PageLink::getHref(folder::Root,page::Accueil); ?>" class="first rank0 <?php echo ((strpos($_SERVER['REQUEST_URI'], 'accueil.php')) !== false ? 'selected' : '') ?>" target="_self">Accueil</a>
            </li>
            <li class="item13 rank1 <?php echo ((strpos($_SERVER['REQUEST_URI'], 'a-propos.php')) !== false ? 'selected' : '') ?>" id="" expansionmode="HoverExpansion">
                <a href="<?php echo RD_PageLink::getHref(folder::Root,page::Apropos); ?>" class=" rank1 <?php echo ((strpos($_SERVER['REQUEST_URI'], 'a-propos.php')) !== false ? 'selected' : '') ?>" target="_self">&#192; propos</a>
            </li>
            <li class="item14 rank2 parent <?php echo ($section == 'promotions-nouvelles' ? 'selected' : ''); ?>" id="" expansionmode="ClickExpansion">
                <a href="<?php //echo RD_PageLink::getHref(folder::PromotionsNouvelles,page::PromotionsEtNouvellesPromotions); ?>javascript:void(0);" class="rank2 <?php echo ($section == 'promotions-nouvelles' ? 'selected' : ''); ?>" target="_self">Promotions et nouvelles</a>
                <div class="itemChildDiv14">
                    <ul class="itemChild14">
                        <li class="item46 first rank0" id="" expansionmode="HoverExpansion">
                            <a href="<?php echo RD_PageLink::getHref(folder::PromotionsNouvelles,page::PromotionsEtNouvellesPromotions); ?>" class=" first rank0" target="_self">Promotions</a>
                        </li>
                        <li class="item47 rank1" id="" expansionmode="HoverExpansion">
                            <a href="<?php echo RD_PageLink::getHref(folder::PromotionsNouvelles,page::PromotionsEtNouvellesNouvelles); ?>" class=" rank1" target="_self">Nouvelles</a>
                        </li>
                        <li class="item79 rank2" id="" expansionmode="HoverExpansion">
                            <a href="<?php echo RD_PageLink::getHref(folder::PromotionsNouvelles,page::PromotionsEtNouvellesConcours); ?>" class=" rank2" target="_self">Concours</a>
                        </li>
                        <li class="item93 last rank3" id="" expansionmode="HoverExpansion">
                            <a href="<?php echo RD_PageLink::getHref(folder::PromotionsNouvelles,page::PromotionsEtNouvellesPromoPieces); ?>" class=" last rank3" target="_self">Promo pi&#232;ces</a>
                        </li>
                    </ul>
                </div>
            </li>
            <li class="item49 rank3 <?php echo ((strpos($_SERVER['REQUEST_URI'], 'urgence-routiere-24h.php')) !== false ? 'selected' : '') ?>" id="" expansionmode="HoverExpansion">
                <a href="<?php echo RD_PageLink::getHref(folder::Root,page::UrgenceRoutiere24H); ?>" class=" rank3 <?php echo ((strpos($_SERVER['REQUEST_URI'], 'urgence-routiere-24h.php')) !== false ? 'selected' : '') ?>" target="_self">Urgence routi&#232;re 24h</a>
            </li>
            <li class="item5 rank4 parent <?php echo ($section == 'camion-neufs' ? 'selected' : ''); ?>" id="" expansionmode="ClickExpansion">
                <a href="<?php //echo RD_PageLink::getHref(folder::CamionsNeufs,page::CamionsInventaireComplet); ?>javascript:void(0);" class="rank4 <?php echo ($section == 'camion-neufs' ? 'selected' : ''); ?>" target="_self">Camions neufs</a>
                <div class="itemChildDiv5">
                    <ul class="itemChild5">
                        <li class="item59 first rank0" id="" expansionmode="HoverExpansion">
                            <a href="<?php echo RD_PageLink::getHref(folder::CamionsNeufs,page::CamionsInventaireComplet); ?>" class="first rank0" target="_self">Inventaire complet</a>
                        </li>
                        <li class="item34 rank1" id="" expansionmode="HoverExpansion">
                            <a href="<?php echo RD_PageLink::getHref(folder::CamionsNeufs,page::CamionsInternational); ?>" class="rank1" target="_self">Camions International</a>
                        </li>
                        <li class="item35 rank2" id="" expansionmode="HoverExpansion">
                            <a href="<?php echo RD_PageLink::getHref(folder::CamionsNeufs,page::CamionsOttawaKalmar); ?>" class="rank2" target="_self">Camions Ottawa Kalmar</a>
                        </li>
                        <li class="item36 last rank3" id="" expansionmode="HoverExpansion">
                            <a href="<?php echo RD_PageLink::getHref(folder::CamionsNeufs,page::CamionsIsuzu); ?>" class="last rank3" target="_self">Camions Isuzu</a>
                        </li>
                    </ul>
                </div>
            </li>
            <li class="item62 rank5 <?php echo ($section == 'camions-occasion' ? 'selected' : ''); ?>" id="" expansionmode="HoverExpansion">
                <a href="<?php echo RD_PageLink::getHref(folder::Root,page::CamionsOccasion) ?>" class="rank5 <?php echo ($section == 'camions-occasion' ? 'selected' : ''); ?>" target="_self">Camions d&#39;occasion</a>
            </li>
            <li class="item63 rank6 parent <?php echo ($section == 'remorques-neuves' ? 'selected' : ''); ?>" id="" expansionmode="ClickExpansion">
                <a href="<?php //echo RD_PageLink::getHref(folder::RemorquesNeuves,page::RemorqesNeuvesInventaireComplet); ?>javascript:void(0);" class="rank6 <?php echo ($section == 'remorques-neuves' ? 'selected' : ''); ?>" target="_self">Remorques neuves</a>
                <div class="itemChildDiv9">
                    <ul class="itemChild9">
                        <li class="item71 first rank0" id="" expansionmode="HoverExpansion">
                            <a href="<?php echo RD_PageLink::getHref(folder::RemorquesNeuves,page::RemorqesNeuvesInventaireComplet); ?>" class=" first rank0" target="_self">Inventaire complet</a>
                        </li>
                        <li class="item72 rank1" id="" expansionmode="HoverExpansion">
                            <a href="<?php echo RD_PageLink::getHref(folder::RemorquesNeuves,page::RemorquesDiMond); ?>" class=" rank1" target="_self">Remorques Di-Mond</a>
                        </li>
                        <li class="item73 last rank2" id="" expansionmode="HoverExpansion">
                            <a href="<?php echo RD_PageLink::getHref(folder::RemorquesNeuves,page::RemorquesDoepker); ?>" class="last rank2" target="_self">Remorques Doepker</a>
                        </li>
                    </ul>
                </div>
            </li>
            <li class="item9 rank7 parent <?php echo ($section == 'vehicules-utilitaires' ? 'selected' : ''); ?>" id="" expansionmode="ClickExpansion">
                <a href="<?php //echo RD_PageLink::getHref(folder::VehiculesUtilitaires,page::VehiculesUtilitairesMiniExcavatrices); ?>javascript:void(0);" class="rank7 <?php echo ($section == 'vehicules-utilitaires' ? 'selected' : ''); ?>" target="_self">V&#233;hicules utilitaires</a>
                <div class="itemChildDiv9">
                    <ul class="itemChild9">
                        <li class="item37 first rank0" id="" expansionmode="HoverExpansion">
                            <a href="<?php echo RD_PageLink::getHref(folder::VehiculesUtilitaires,page::VehiculesUtilitairesMiniExcavatrices); ?>" class=" first rank0" target="_self">Mini-excavatrices</a>
                        </li>
                        <li class="item38 rank1" id="" expansionmode="HoverExpansion">
                            <a href="<?php echo RD_PageLink::getHref(folder::VehiculesUtilitaires,page::VehiculesUtilitairesTransporteursToutTerrain); ?>" class=" rank1" target="_self">Transporteurs tout-terrain</a>
                        </li>
                        <li class="item39 rank2" id="" expansionmode="HoverExpansion">
                            <a href="<?php echo RD_PageLink::getHref(folder::VehiculesUtilitaires,page::VehiculesUtilitairesSkidSteerEtChargeurAChenilles); ?>" class=" rank2" target="_self">Skid Steer et chargeur &#224; chenilles</a>
                        </li>
                        <li class="item40 last rank3" id="" expansionmode="HoverExpansion">
                            <a href="<?php echo RD_PageLink::getHref(folder::VehiculesUtilitaires,page::VehiculesUtilitairesChargeuseV3EtV4); ?>" class=" last rank3" target="_self">Chargeuse V3 et V4</a>
                        </li>
                    </ul>
                </div>
            </li>
            <li class="item10 rank8 <?php echo ((strpos($_SERVER['REQUEST_URI'], 'location-camions.php')) !== false ? 'selected' : '') ?>" id="" expansionmode="HoverExpansion">
                <a href="<?php echo RD_PageLink::getHref(folder::Root,page::LocationsDeCamions); ?>" class="rank8 <?php echo ((strpos($_SERVER['REQUEST_URI'], 'location-camions.php')) !== false ? 'selected' : '') ?>" target="_self">Location de camions</a>
            </li>
            <li class="item11 rank9 parent <?php echo ($section == 'pieces-services' ? 'selected' : ''); ?>" id="" expansionmode="ClickExpansion">
                <a href="<?php //echo RD_PageLink::getHref(folder::PiecesService,page::PiecesEtServicesFinancement); ?>javascript:void(0);" class="rank9 <?php echo ($section == 'pieces-services' ? 'selected' : ''); ?>" target="_self">Pi&#232;ces et services</a>
                <div class="itemChildDiv11">
                    <ul class="itemChild11">
                        <li class="item41 first rank0" id="" expansionmode="HoverExpansion">
                            <a href="<?php echo RD_PageLink::getHref(folder::PiecesService,page::PiecesEtServicesPiecesEtAsccessoires); ?>" class=" first rank0" target="_self">Pi&#232;ces et accessoires</a>
                        </li>
                        <li class="item42 rank1" id="" expansionmode="HoverExpansion">
                            <a href="<?php echo RD_PageLink::getHref(folder::PiecesService,page::PiecesEtServicesServiceRoutier); ?>" class=" rank1" target="_self">Service routier</a>
                        </li>
                        <li class="item43 rank2" id="" expansionmode="HoverExpansion">
                            <a href="<?php echo RD_PageLink::getHref(folder::PiecesService,page::PiecesEtServicesServiceApresVente); ?>" class=" rank2" target="_self">Service apr&#232;s-vente</a>
                        </li>
                        <li class="item44 rank3" id="" expansionmode="HoverExpansion">
                            <a href="<?php echo RD_PageLink::getHref(folder::PiecesService,page::PiecesEtServicesFinancement); ?>" class=" rank3" target="_self">Financement</a>
                        </li>
                        <li class="item94 last rank4" id="" expansionmode="HoverExpansion">
                            <a href="<?php echo RD_PageLink::getHref(folder::PromotionsNouvelles,page::PromotionsEtNouvellesPromoPieces); ?>" class=" last rank4" target="_self">Promo pi&#232;ces</a>
                        </li>
                    </ul>
                </div>
            </li>
            <li class="item12 last rank10 <?php echo ((strpos($_SERVER['REQUEST_URI'], 'nous-joindre.php')) !== false ? 'selected' : '') ?>" id="" expansionmode="NoExpansion">
                <a href="<?php echo RD_PageLink::getHref(folder::Root,page::NousJoindre); ?>" class="last rank10 <?php echo ((strpos($_SERVER['REQUEST_URI'], 'nous-joindre.php')) !== false ? 'selected' : '') ?>" target="_self">Nous joindre</a>
            </li>
            <li class="item12 last rank10 <?php echo ((strpos($_SERVER['REQUEST_URI'], 'carrieres.php')) !== false ? 'selected' : '') ?>" id="" expansionmode="NoExpansion">
                <a href="<?php echo RD_PageLink::getHref(folder::Root,page::Carrieres); ?>" class="last rank10 <?php echo ((strpos($_SERVER['REQUEST_URI'], 'carrieres.php')) !== false ? 'selected' : '') ?>" target="_self">Carrières</a>
            </li>
        </ul>
    </div>
</div>


<script type="text/javascript">    //<![CDATA[
$(document).ready(function () {

  $("body").attr("ontouchstart", "");
  $("body").attr("onmouseover", "");

  var $menuMobile = $(".menuMobile");
  if ($(window).width() < 641) {
    $menuMobile.css("left", -$menuMobile.outerWidth());
  } else {
    $menuMobile.hide();
  }

  $(".icoMenuMobile").click(function () {
    $(this).toggleClass("open");

    $menuMobile.animate({
      left: parseInt($menuMobile.css('left'), 10) == 0 ?
          -$menuMobile.outerWidth() :
          0
    });
    $(".wrap").animate({
      left: parseInt($menuMobile.css('left'), 10) == 0 ?
        0 :
        +$menuMobile.outerWidth()
    });
    $(".pied").animate({
      left: parseInt($menuMobile.css('left'), 10) == 0 ?
        0 :
        +$menuMobile.outerWidth()
    });
  });

  $(".menuCss5").find(".parent > a").click(function () {
    var open = $(this).parent();
    if (open.hasClass("expanded")) {
      open.removeClass("expanded");
      open.children("div").slideUp();
    } else {
      open.addClass("expanded");
      open.children("div").slideDown("fast", function () {
        $('html, body').animate({
          scrollTop: open.offset().top
        }, 1000);
      });
    }
  });
  //Faire afficher les filtres
  $(".toggleFilters").bind("click", openFilters);
  $(".viewResults a").bind("click", closeFilters);
  function openFilters() {
    $(".GpcMenuWrapper").slideDown();
    $(".toggleFilters").addClass("selected").unbind("click").find(".openClose").bind("click", closeFilters);
  }
  function closeFilters() {
    $(".GpcMenuWrapper").slideUp();
    $(".toggleFilters").removeClass("selected");
    setTimeout(function () {
      $(".toggleFilters").bind("click", openFilters).find(".openClose").unbind("click")
    }, 250)
  }
});

var magicTimeout = "";

$(window).resize(function () {
  if (magicTimeout != null) {
    clearTimeout(magicTimeout);
    magicTimeout = null;
  }
  magicTimeout = setTimeout(function () {
    var $menuMobile = $(".menuMobile");
    if ($(window).width() < 641) {
      $menuMobile.show();
      if (parseInt($menuMobile.css("left")) < 0) {
        $menuMobile.css("left", -$menuMobile.outerWidth())
      } else {
        if ($menuMobile.is(":visible")) {
          $(".wrap").css("left", $menuMobile.outerWidth());
          $(".pied").css("left", $menuMobile.outerWidth());
        }
      }
    } else {
      $menuMobile.hide();
    }
  }, 100);
});
    //]]>  </script><img alt="" src="#" style="position:absolute;left:-10px;top:-10px;width:1px;height:1px;" />

	
	
<script type="text/javascript">
//<![CDATA[
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','http://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-3192388-2', 'auto');
</script>