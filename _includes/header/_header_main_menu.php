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
            <!--Menu-->
            <nav class="bgnav hide-on-mobile">
                <div class="menudestop grid grid-pad">
                    <ul>
                        <li>
                            <a href="filter.html">Camions</a>
                            <ul class="hidden">
                                <li>
                                    <a href="filter.html">International</a>
                                    <ul class="hidden">
                                        <li>
                                            <a href="#">série CV</a>
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
                                                        <a style="margin-top:9px;" href="filter.html">Inventaire</a>
                                                    </h4>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">série HV</a>
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
                                                        <a style="margin-top:9px;" href="filter.html">Inventaire</a>
                                                    </h4>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">série HX</a>
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
                                                        <a style="margin-top:9px;" href="filter.html">Inventaire</a>
                                                    </h4>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">série LT</a>
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
                                                        <a style="margin-top:9px;" href="filter.html">Inventaire</a>
                                                    </h4>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">série MV</a>
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
                                                        <a style="margin-top:9px;" href="filter.html">Inventaire</a>
                                                    </h4>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="filter.html">Isuzu</a>
                                </li>
                                <li>
                                    <a href="filter.html">Occasion</a>
                                </li>
                                <li>
                                    <a href="filter.html">Inventaire</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">pièces</a>
                            <ul class="hidden">
                                <li><a href="filter.html">Nouveauté</a></li>
                                <li><a href="filter.html">Occasion</a></li>
                                <li><a href="filter.html">Boutique en ligne</a></li>
                                <li><a href="filter.html">Inventaire</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Service</a>
                            <ul class="hidden">
                                <li><a href="#">Routier</a></li>
                                <li><a href="#">Après-Vente</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Financement</a>
                            <ul class="hidden">
                                <li><a href="#">Long terme</a></li>
                                <li><a href="#">Court terme</a></li>
                                <li><a href="#">Calculateur</a></li>
                                <li><a href="#">Commande en ligne</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Location</a>
                            <ul class="hidden">
                                <li><a href="#">Court terme</a></li>
                                <li><a href="#">Long terme</a></li>
                                <li><a href="#">Avec entretien</a></li>
                                <li><a href="#">Sans entretien</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Carrière</a>
                            <ul class="hidden">
                                <li><a href="#">Emploi disponible</a></li>
                                <li><a href="#">Canditature spontanée</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Circulaire</a>
                            <ul class="hidden">
                                <li><a href="#">Promotion</a></li>
                                <li style="min-width:230px;"><a href="#">Circulaire complet</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">À Propos</a>
                            <ul class="hidden" style="min-width:210px;">
                                <li><a href="#">Notre entreprise</a></li>
                                <li><a href="#">Notre réseaux</a></li>
                                <li><a href="filter.html">Occasion</a></li>
                                <li><a href="filter.html">Inventaire</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Nous Joindre</a>
                            <ul class="hidden">
                                <li><a href="#map">Concessionaire</a></li>
                                <li style="min-width:230px;"><a href="#map">Point de service</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
<?php
if($section == 'camion-neufs' || $section == 'camions-occasion' || $section == 'remorques-neuves') {
?>

<?php
}
?>
