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
elseif(strpos($_SERVER['REQUEST_URI'], 'pieces-services/') !== false || strpos($_SERVER['REQUEST_URI'], 'promotions-nouvelles') !== false) {
    $section = 'pieces-services';
}
elseif(strpos($_SERVER['REQUEST_URI'], 'carrieres.php') !== false) {
    $section = 'carrieres';
}
?>

<?php
if($section == 'camion-neufs' || $section == 'camions-occasion' || $section == 'remorques-neuves') {
?>

<?php
}
?>
<!--Main Menu WX3-->
<nav class="bgnav hide-on-mobile">
    <div class="menudestop grid grid-pad">
        <ul>
            <li>
                <a href="<?php echo RD_PageLink::getHref(folder::CamionsNeufs,page::CamionsInventaireComplet); ?>">Camions</a>
                    <ul class="hidden">
                        <li>
                            <a href="<?php echo RD_PageLink::getHref(folder::CamionsNeufs,page::CamionsInventaireComplet); ?>">International</a>
                            <ul class="hidden">
                                <li>
                                    <a href="<?php echo RD_PageLink::getHref(folder::CamionsNeufs,page::CamionsInventaireComplet); ?>">série CV</a>
                                    <ul class="hidden">
                                        <li>
                                            <img src="Resources/images/CV-navigation.jpg" alt="" />
                                            <h4 class="col-1-3 mobile-col-1-3">
                                                <a href="https://www.internationaltrucks.com/configurator/cv" target="_blank">Configurer<br />votre véhicule</a>
                                            </h4>
                                            <h4 class="col-1-3 mobile-col-1-3" style="border-left:solid 2px black;border-right:solid 2px black;">
                                                <a style="margin-top:9px;" href="https://www.internationaltrucks.com/trucks/cv-series" target="_blank">Explorer</a>
                                            </h4>
                                            <h4 class="col-1-3 mobile-col-1-3">
                                                <a style="margin-top:9px;" href="<?php echo RD_PageLink::getHref(folder::CamionsNeufs,page::CamionsInventaireComplet); ?>">Inventaire</a>
                                            </h4>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="<?php echo RD_PageLink::getHref(folder::CamionsNeufs,page::CamionsInventaireComplet); ?>">série HV</a>
                                    <ul class="hidden">
                                        <li>
                                            <img src="Resources/images/HV-navigation.jpg" alt="" />
                                            <h4 class="col-1-3 mobile-col-1-3">
                                                <a href="https://www.internationaltrucks.com/configurator/hv" target="_blank">Configurer<br />votre véhicule</a>
                                            </h4>
                                            <h4 class="col-1-3 mobile-col-1-3" style="border-left:solid 2px black;border-right:solid 2px black;">
                                                <a style="margin-top:9px;" href="https://www.internationaltrucks.com/trucks/hv-series" target="_blank">Explorer</a>
                                            </h4>
                                            <h4 class="col-1-3 mobile-col-1-3">
                                                <a style="margin-top:9px;" href="<?php echo RD_PageLink::getHref(folder::CamionsNeufs,page::CamionsInventaireComplet); ?>">Inventaire</a>
                                            </h4>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="<?php echo RD_PageLink::getHref(folder::CamionsNeufs,page::CamionsInventaireComplet); ?>">série HX</a>
                                    <ul class="hidden">
                                        <li>
                                            <img src="Resources/images/hx-navigation.jpg" alt="" />
                                            <h4 class="col-1-3 mobile-col-1-3">
                                                <a href="https://www.internationaltrucks.com/configurator/hx" target="_blank">Configurer<br />votre véhicule</a>
                                             </h4>
                                            <h4 class="col-1-3 mobile-col-1-3" style="border-left:solid 2px black;border-right:solid 2px black;">
                                                <a style="margin-top:9px;" href="https://www.internationaltrucks.com/trucks/hx-series" target="_blank">Explorer</a>
                                            </h4>
                                            <h4 class="col-1-3 mobile-col-1-3">
                                                <a style="margin-top:9px;" href="<?php echo RD_PageLink::getHref(folder::CamionsNeufs,page::CamionsInventaireComplet); ?>">Inventaire</a>
                                            </h4>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="<?php echo RD_PageLink::getHref(folder::CamionsNeufs,page::CamionsInventaireComplet); ?>">série LT</a>
                                    <ul class="hidden">
                                        <li>
                                            <img src="Resources/images/lt-navigation.png" alt="" />
                                            <h4 class="col-1-3 mobile-col-1-3">
                                                <a href="https://www.internationaltrucks.com/configurator/lt" target="_blank">Configurer<br />votre véhicule</a>
                                            </h4>
                                            <h4 class="col-1-3 mobile-col-1-3" style="border-left:solid 2px black;border-right:solid 2px black;">
                                                <a style="margin-top:9px;" href="https://www.internationaltrucks.com/trucks/lt-series" target="_blank">Explorer</a>
                                            </h4>
                                            <h4 class="col-1-3 mobile-col-1-3">
                                                <a style="margin-top:9px;" href="<?php echo RD_PageLink::getHref(folder::CamionsNeufs,page::CamionsInventaireComplet); ?>">Inventaire</a>
                                            </h4>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="<?php echo RD_PageLink::getHref(folder::CamionsNeufs,page::CamionsInventaireComplet); ?>">série MV</a>
                                    <ul class="hidden">
                                        <li>
                                            <img src="Resources/images/MV-navigation.jpg" alt="" />
                                            <h4 class="col-1-3 mobile-col-1-3">
                                                <a href="https://www.internationaltrucks.com/configurator/mv" target="_blank">Configurer<br />votre véhicule</a>
                                            </h4>
                                            <h4 class="col-1-3 mobile-col-1-3" style="border-left:solid 2px black;border-right:solid 2px black;">
                                                <a style="margin-top:9px;" href="https://www.internationaltrucks.com/trucks/mv-series" target="_blank">Explorer</a>
                                            </h4>
                                            <h4 class="col-1-3 mobile-col-1-3">
                                                <a style="margin-top:9px;" href="<?php echo RD_PageLink::getHref(folder::CamionsNeufs,page::CamionsInventaireComplet); ?>">Inventaire</a>
                                            </h4>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="<?php echo RD_PageLink::getHref(folder::CamionsNeufs,page::CamionsInventaireComplet); ?>">Isuzu</a>
                        </li>
                        <li>
                            <a href="<?php echo RD_PageLink::getHref(folder::CamionsNeufs,page::CamionsInventaireComplet); ?>">Occasion</a>
                        </li>
                        <li>
                            <a href="<?php echo RD_PageLink::getHref(folder::CamionsNeufs,page::CamionsInventaireComplet); ?>">Inventaire</a>
                        </li>
                    </ul>
            </li>
            <li>
                <a href="<?php echo RD_PageLink::getHref(folder::pieces-services,page::pieces-accessoires); ?>">pièces</a>
                    <ul class="hidden">
                        <li><a href="https://www.nexpart.com/login.php">Commande en ligne</a></li>
                    </ul>
            </li>
            <li>
                <a href="<?php echo RD_PageLink::getHref(folder::pieces-services,page::service-routier); ?>">Service</a>
                    <ul class="hidden">
                        <li><a href="<?php echo RD_PageLink::getHref(folder::pieces-services,page::service-routier); ?>">Routier</a></li>
                        <li><a href="<?php echo RD_PageLink::getHref(folder::pieces-services,page::apres-vente); ?>">Après-Vente</a></li>
                    </ul>
            </li>
            <li>
                <a href="<?php echo RD_PageLink::getHref(folder::pieces-services,page::financement); ?>">Financement</a>
                    <ul class="hidden">
                        <!--<li><a href="#">Calculateur</a></li> SOUS CLASSE BESOIN ** FXGL  -->
                    </ul>
            </li>
            <li>
                <a href="location-camions.php">Location</a>
                    <ul class="hidden">
                        <li><a href="location-camions.php">Court terme</a></li>
                        <li><a href="location-camions.php">Long terme</a></li>
                        <li><a href="location-camions.php">Avec entretien</a></li>
                        <li><a href="location-camions.php">Sans entretien</a></li>
                    </ul>
            </li>
            <li>
                <a href="<?php echo RD_PageLink::getHref(folder::Root,page::Carrieres); ?>">Carrière</a>
                    <ul class="hidden">
                        <li><a href="<?php echo RD_PageLink::getHref(folder::Root,page::Carrieres); ?>">Emploi disponible</a></li>
                        <li><a href="postuler.php">Canditature spontanée</a></li>
                    </ul>
            </li>
            <li>
                <a href="<?php echo RD_PageLink::getHref(folder::promotions-nouvelles,page::promo.php); ?>">Circulaire</a>
                    <ul class="hidden">
                        <li><a href="<?php echo RD_PageLink::getHref(folder::promotions-nouvelles,page::promo.php); ?>">Promotion</a></li>
                        <li style="min-width:230px;"><a href="<?php echo RD_PageLink::getHref(folder::promotions-nouvelles,page::promo-pieces.php); ?>">Circulaire complet</a></li>
                    </ul>
            </li>
            <li>
                <a href="a-propos.php">À Propos</a>
                    <ul class="hidden" style="min-width:210px;">
                        <li><a href="a-propos.php">Notre entreprise</a></li>
                        <li><a href="a-propos.php">Notre réseaux</a></li>
                    </ul>
            </li>
            <li>
                <a href="nous-joindre.php">Nous Joindre</a>
                    <ul class="hidden">
                        <li><a href="nous-joindre.php">Concessionaire</a></li>
                        <li style="min-width:230px;"><a href="nous-joindre.php">Point de service</a></li>
                    </ul>
            </li>
        </ul>
    </div>
</nav>