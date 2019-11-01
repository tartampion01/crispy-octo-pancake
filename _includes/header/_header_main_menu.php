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
            <nav class="bgnav hide-on-mobile" id="navbar">
                <div class="menudestop grid grid-pad">
                    <ul>
                   <li id="logo_sticky" class="addlogo"><a href="<?php echo RD_PageLink::getHref(folder::CamionsNeufs,page::CamionsInventaireComplet); ?>" target="_self"><img src="/../_assets/images/wx3/logo-inter.png" alt="Réseau Dynamique" /></a></li>
                        <li class="">
                            <a href="<?php echo RD_PageLink::getHref(folder::CamionsNeufs,page::CamionsInventaireComplet); ?>">Camions</a>
                            <ul class="hidden">
                                <li class="">
                                    <a href="<?php echo RD_PageLink::getHref(folder::CamionsNeufs,page::CamionsInternational); ?>">International</a>
                                    <ul class="hidden">
                                        <li class="">
                                            <a href="<?php echo RD_PageLink::getHref(folder::CamionsNeufs,page::CamionsInternational); ?>">série CV</a>
                                            <ul class="hidden">
                                                <li class="">
                                                    <img src="../../_assets/images/wx3/CV-navigation.jpg" alt="" />
                                                    <h4 class="col-1-3 mobile-col-1-3">
                                                        <a href="https://www.internationaltrucks.com/configurator/cv" target="_blank">Configurer<br />votre véhicule</a>
                                                    </h4>
                                                    <h4 class="col-1-3 mobile-col-1-3" style="border-left:solid 2px black;border-right:solid 2px black;">
                                                        <a style="margin-top:9px;" href="https://www.internationaltrucks.com/trucks/cv-series" target="_blank">Explorer</a>
                                                    </h4>
                                                    <h4 class="col-1-3 mobile-col-1-3">
                                                        <a style="margin-top:9px;" href="<?php echo RD_PageLink::getHref(folder::CamionsNeufs,page::CamionsInternational); ?>">Inventaire</a>
                                                    </h4>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="<?php echo RD_PageLink::getHref(folder::CamionsNeufs,page::CamionsInternational); ?>">série HV</a>
                                            <ul class="hidden">
                                                <li>
                                                    <img src="../../_assets/images/wx3/HV-navigation.jpg" alt="" />
                                                    <h4 class="col-1-3 mobile-col-1-3">
                                                        <a href="https://www.internationaltrucks.com/configurator/hv" target="_blank">Configurer<br />votre véhicule</a>
                                                    </h4>
                                                    <h4 class="col-1-3 mobile-col-1-3" style="border-left:solid 2px black;border-right:solid 2px black;">
                                                        <a style="margin-top:9px;" href="https://www.internationaltrucks.com/trucks/hv-series" target="_blank">Explorer</a>
                                                    </h4>
                                                    <h4 class="col-1-3 mobile-col-1-3">
                                                        <a style="margin-top:9px;" href="<?php echo RD_PageLink::getHref(folder::CamionsNeufs,page::CamionsInternational); ?>">Inventaire</a>
                                                    </h4>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="<?php echo RD_PageLink::getHref(folder::CamionsNeufs,page::CamionsInternational); ?>">série HX</a>
                                            <ul class="hidden">
                                                <li>
                                                    <img src="../../_assets/images/wx3/hx-navigation.jpg" alt="" />
                                                    <h4 class="col-1-3 mobile-col-1-3">
                                                        <a href="https://www.internationaltrucks.com/configurator/hx" target="_blank">Configurer<br />votre véhicule</a>
                                                    </h4>
                                                    <h4 class="col-1-3 mobile-col-1-3" style="border-left:solid 2px black;border-right:solid 2px black;">
                                                        <a style="margin-top:9px;" href="https://www.internationaltrucks.com/trucks/hx-series" target="_blank">Explorer</a>
                                                    </h4>
                                                    <h4 class="col-1-3 mobile-col-1-3">
                                                        <a style="margin-top:9px;" href="<?php echo RD_PageLink::getHref(folder::CamionsNeufs,page::CamionsInternational); ?>">Inventaire</a>
                                                    </h4>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="<?php echo RD_PageLink::getHref(folder::CamionsNeufs,page::CamionsInternational); ?>">série LT</a>
                                            <ul class="hidden">
                                                <li>
                                                    <img src="../../_assets/images/wx3/lt-navigation.png" alt="" />
                                                    <h4 class="col-1-3 mobile-col-1-3">
                                                        <a href="https://www.internationaltrucks.com/configurator/lt" target="_blank">Configurer<br />votre véhicule</a>
                                                    </h4>
                                                    <h4 class="col-1-3 mobile-col-1-3" style="border-left:solid 2px black;border-right:solid 2px black;">
                                                        <a style="margin-top:9px;" href="https://www.internationaltrucks.com/trucks/lt-series" target="_blank">Explorer</a>
                                                    </h4>
                                                    <h4 class="col-1-3 mobile-col-1-3">
                                                        <a style="margin-top:9px;" href="<?php echo RD_PageLink::getHref(folder::CamionsNeufs,page::CamionsInternational); ?>">Inventaire</a>
                                                    </h4>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="<?php echo RD_PageLink::getHref(folder::CamionsNeufs,page::CamionsInternational); ?>">série MV</a>
                                            <ul class="hidden">
                                                <li>
                                                    <img src="../../_assets/images/wx3/MV-navigation.jpg" alt="" />
                                                    <h4 class="col-1-3 mobile-col-1-3">
                                                        <a href="https://www.internationaltrucks.com/configurator/mv" target="_blank">Configurer<br />votre véhicule</a>
                                                    </h4>
                                                    <h4 class="col-1-3 mobile-col-1-3" style="border-left:solid 2px black;border-right:solid 2px black;">
                                                        <a style="margin-top:9px;" href="https://www.internationaltrucks.com/trucks/mv-series" target="_blank">Explorer</a>
                                                    </h4>
                                                    <h4 class="col-1-3 mobile-col-1-3">
                                                        <a style="margin-top:9px;" href="<?php echo RD_PageLink::getHref(folder::CamionsNeufs,page::CamionsInternational); ?>">Inventaire</a>
                                                    </h4>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="<?php echo RD_PageLink::getHref(folder::RemorquesNeuves,page::RemorqesNeuvesInventaireComplet); ?>">Remorque</a>
                                    <ul class="hidden">
                                        <li style="min-width:250px;">
                                            <a href="<?php echo RD_PageLink::getHref(folder::RemorquesNeuves,page::RemorqesNeuvesInventaireComplet); ?>">Inventaire complet</a>                                           
                                        </li>
                                        <li style="min-width:250px;">
                                            <a href="<?php echo RD_PageLink::getHref(folder::RemorquesNeuves,page::RemorquesDiMond); ?>">Remorques Di-Mond</a>                                           
                                        </li>
                                        <li style="min-width:250px;">
                                            <a href="<?php echo RD_PageLink::getHref(folder::RemorquesNeuves,page::RemorquesDoepker); ?>">Remorques Doepker</a>                                           
                                        </li>
                                    </ul>
                                </li>
                                <li class="">
                                    <a href="<?php echo RD_PageLink::getHref(folder::CamionsNeufs,page::CamionsIsuzu); ?>">Isuzu</a>
                                </li>
                                <li class="">
                                    <a href="<?php echo RD_PageLink::getHref(folder::CamionsNeufs,page::CamionsOttawaKalmar); ?>">Ottawa Kalmar</a>
                                </li>
                                <li class="">
                                    <a href="<?php echo RD_PageLink::getHref(folder::Root,page::CamionsOccasion) ?>">Occasion</a>
                                </li>
                                <li>
                                    <a href="<?php echo RD_PageLink::getHref(folder::CamionsNeufs,page::CamionsInventaireComplet); ?>">Inventaire</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="<?php echo RD_PageLink::getHref(folder::PiecesService,page::PiecesEtServicesPiecesEtAsccessoires); ?>">pièces</a>
                            <ul class="hidden">
                                <li><a href="https://www.nexpart.com/login.php">commande en ligne</a></li>
                                <li><a href="<?php echo RD_PageLink::getHref(folder::EXTERNAL,page::EXTERNAL_boutiqueEnLigne); ?>">Boutique en ligne</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Services</a>
                            <ul class="hidden">
                                <li><a href="<?php echo RD_PageLink::getHref(folder::PiecesService,page::PiecesEtServicesServiceRoutier); ?>">Routier</a></li>
                                <li><a href="<?php echo RD_PageLink::getHref(folder::PiecesService,page::PiecesEtServicesServiceApresVente); ?>">Après-Vente</a></li>
                                <li><a href="<?php echo RD_PageLink::getHref(folder::PiecesService,page::PiecesEtServicesFinancement); ?>">Financement</a> </li>
                            </ul>
                        </li>
                        <li>
                            <a href="<?php echo RD_PageLink::getHref(folder::VehiculesUtilitaires,page::VehiculesUtilitairesMiniExcavatrices); ?>">véhicule Utilitaire</a> 
                            <ul class="hidden">
                                <li><a href="<?php echo RD_PageLink::getHref(folder::VehiculesUtilitaires,page::VehiculesUtilitairesMiniExcavatrices); ?>">Mini-excavatrices</a></li>
                                <li><a href="<?php echo RD_PageLink::getHref(folder::VehiculesUtilitaires,page::VehiculesUtilitairesTransporteursToutTerrain); ?>">Transporteurs tout-terrain</a></li>
                                <li><a href="<?php echo RD_PageLink::getHref(folder::VehiculesUtilitaires,page::VehiculesUtilitairesSkidSteerEtChargeurAChenilles); ?>">Skid Steer et chargeur à chenilles</a></li>
                                <li><a href="<?php echo RD_PageLink::getHref(folder::VehiculesUtilitaires,page::VehiculesUtilitairesChargeuseV3EtV4); ?>">Chargeuse V3 et V4</a></li>
                            </ul>                           
                        </li>
                        <li>
                            <a href="<?php echo RD_PageLink::getHref(folder::Root,page::LocationsDeCamions); ?>">Location</a>
                        </li>
                        <li>
                            <a href="<?php echo RD_PageLink::getHref(folder::Root,page::Carrieres); ?>">Carrière</a>
                            <ul class="hidden">
                                <li><a href="<?php echo RD_PageLink::getHref(folder::Root,page::Carrieres); ?>">Emploi disponible</a></li>
                                <li><a name="hyperlien" href="<?php echo RD_PageLink::getHref(folder::Root,page::Postuler) ?>">Canditature spontanée</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="<?php echo RD_PageLink::getHref(folder::PromotionsNouvelles,page::PromotionsEtNouvellesPromoLanding); ?>">Circulaire</a>
                            <ul class="hidden">
                                <li><a href="<?php echo RD_PageLink::getHref(folder::PromotionsNouvelles,page::PromotionsEtNouvellesPromoLanding); ?>">Promotion</a></li>
                                <li style="min-width:230px;"><a href="<?php echo RD_PageLink::getHref(folder::PromotionsNouvelles,page::PromotionsEtNouvellesPromoPieces); ?>">Circulaire complet</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="<?php echo RD_PageLink::getHref(folder::Root,page::Apropos); ?>">À Propos</a>
                            
                        </li>
                        <li>
                            <a href="<?php echo RD_PageLink::getHref(folder::Root,page::NousJoindre); ?>">Nous Joindre</a>
                            <ul class="hidden">
                                <li><a href="<?php echo RD_PageLink::getHref(folder::Root,page::NousJoindre); ?>">Concessionaire</a></li>
                                <li style="min-width:230px;"><a href="<?php echo RD_PageLink::getHref(folder::Root,page::NousJoindre); ?>">Point de service</a></li>
                            </ul>
                        </li>
                        </ul>
                        <ul class="FU_right">
                    <li>   
                    <a id="urgence_sticky" class="addlogo" href="<?php echo RD_PageLink::getHref(folder::Root,page::UrgenceRoutiere24H); ?>"><img src="/../_assets/images/wx3/logo-tel.png" alt="Urgence Routière" /></a>
                    </li>
                    <li>
                    <a id="facebook_sticky" class="addlogo" href="https://www.facebook.com/Réseau-Dynamiquecom-200899577018785/" target="_blank"><img src="/../_assets/images/wx3/facebook_footer.png" alt="facebook Réseau Dynamique" /></a>
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
<script>
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
  if (window.pageYOffset >= sticky) {
    logo_sticky.classList.remove("addlogo")
  } else {
    logo_sticky.classList.add("addlogo");
  }
  if (window.pageYOffset >= sticky) {
    facebook_sticky.classList.remove("addlogo")
  } else {
    facebook_sticky.classList.add("addlogo");
  }
  if (window.pageYOffset >= sticky) {
    urgence_sticky.classList.remove("addlogo")
  } else {
    urgence_sticky.classList.add("addlogo");
  }
}
</script>