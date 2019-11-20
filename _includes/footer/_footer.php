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
                        <p><a href="filter.html">Remorque</a></p>
                        <p><a href="filter.html">Isuzu</a></p>
                        <p><a href="filter.html">Ottawa Kalmar</a></p>
                        <p><a href="filter.html">Occasion</a></p> 
                        <p><a href="filter.html">Inventaire</a></p>
                    </div>
                    <div class="item-footer">
                        <h3><a href="filter.html">Pièces</a></h3>
                        <p><a href="filter.html">commande en ligne</a></p>
                        <p><a href="filter.html">Boutique en ligne</a></p>
                    </div>
                    <div class="item-footer">
                        <h3><a href="#">Services</a></h3>
                        <p><a href="#">Routier</a></p>
                        <p><a href="#">Après-vente</a></p>
                        <p><a href="#">Financement</a></p>
                        <p><a href="#">Location</a></p>
                    </div>
                    <div class="item-footer">
                        <h3><a href="">Véhicule Utilitaire</a></h3>
                        <p><a href="#">Mini-excavatrices</a></p>
                        <p><a href="#">Transporteurs tout-terrain</a></p>
                        <p><a href="#">Skid Steer et chargeur à chenilles</a></p>
                        <p><a href="#">Chargeuse V3 et V4</a></p>
                    </div>
                    <div class="item-footer">
                        <h3><a href="#">Nous Joindre</a></h3>
                        <p><a href="#map">Concessionaires</a></p>
                        <p><a href="#map">Point de service</a></p>
                    </div>
                    <div class="item-footer">
                        <h3><a href="#">Circulaire</a></h3>
                        <p><a href="#">Promotion</a></p>
                        <p><a href="#">Circulaire complet</a></p>
                    </div>
                    <div class="item-footer">
                        <h3><a href="#">À Propos</a></h3>
                        <p><a href="#">Notre entreprise</a></p>
                        <p><a href="#">carrière</a></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="blacklinefooter">
            <div class="grid grid-pad"> 
                <div class="blackfootertop">
                    <div class="col-1-5 mobile-col-1-5">
                        <a href="/accueil.php">
                          <img src="../../_assets/images/wx3/logo_footer.png" alt="Réseau Dynamique" />
                        </a>
                    </div>
                    <div class="col-1-5 mobile-col-1-5">
                        <p></p>
                    </div>
                    <div class="col-1-5 mobile-col-1-5">
                       <p class="footercenter">&copy; Réseau Dynamique, 2020</p>
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
