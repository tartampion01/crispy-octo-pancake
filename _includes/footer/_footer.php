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


<script type="text/javascript">    //<![CDATA[
$(document).ready(function () {

  $("body").attr("ontouchstart", "");
  $("body").attr("onmouseover", "");


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


    //]]>  </script><img alt="" src="#" style="position:absolute;left:-10px;top:-10px;width:1px;height:1px;" />

	
	
<script type="text/javascript">
//<![CDATA[
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','http://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-3192388-2', 'auto');
</script>