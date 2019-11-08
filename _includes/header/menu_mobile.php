<script>
      var $menuMobile = $(".menuMobile");
    if ($(window).width() < 641) {
        $menuMobile.css("left", -$menuMobile.outerWidth());
    } else {
        $menuMobile.hide();
    }
</script>




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