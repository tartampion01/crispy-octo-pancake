
<!-- MAIN MENU -->
<!--
<div id="menuPrincipal" class="menuprincipal">
    <div id="menuShrinkClear" class="shrink clear">
        <div id="menuCss1" class="menuCss1">
            <ul id="ulNiveau1" class="MenuBar">
                <li class="item1 first rank1 parent <?php echo ($section == 'camion-neufs' ? 'selected' : ''); ?>" expansionmode="ClickExpansion">
                    <a href="<?php echo RD_PageLink::getHref(folder::CamionsNeufs,page::CamionsInventaireComplet); ?>" class=" first rank0 MenuBarItemSubmenu" target="_self">Camions neufs</a>
                    <div class="itemChildDiv5">
                        <ul class="itemChild5">
                            <li class="item59 first rank0 <?php echo ($pageName == 'inventaire-camion-neufs.php' ? 'selected' : ''); ?>" expansionmode="HoverExpansion">
                                <a href="<?php echo RD_PageLink::getHref(folder::CamionsNeufs,page::CamionsInventaireComplet); ?>" class=" first rank0" target="_self">Inventaire complet</a>
                            </li>
                            <li class="item34 rank1 <?php echo ($pageName == 'camions-lourds-neufs-international.php' ? 'selected' : ''); ?>" expansionmode="HoverExpansion">
                                <a href="<?php echo RD_PageLink::getHref(folder::CamionsNeufs,page::CamionsInternational); ?>" class="rank1" target="_self">Camions International</a>
                            </li>
                            <li class="item35 rank2 <?php echo ($pageName == 'ottawa-kalmar.php' ? 'selected' : ''); ?>" expansionmode="HoverExpansion">
                                <a href="<?php echo RD_PageLink::getHref(folder::CamionsNeufs,page::CamionsOttawaKalmar); ?>" class="rank2" target="_self">Camions Ottawa Kalmar</a>
                            </li>
                            <li class="item36 last rank3 <?php echo ($pageName == 'isuzu.php' ? 'selected' : ''); ?>" expansionmode="HoverExpansion">
                                <a href="<?php echo RD_PageLink::getHref(folder::CamionsNeufs,page::CamionsIsuzu); ?>" class=" last rank3" target="_self">Camions Isuzu</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="item2 rank2 <?php echo ($section == 'camions-occasion' ? 'selected' : ''); ?>" expansionmode="HoverExpansion">
                    <a href="<?php echo RD_PageLink::getHref(folder::Root,page::CamionsOccasion) ?>" class="rank1" target="_self">Camions d'occasion</a>
                </li>
                <li class="item3 rank3 parent <?php echo ($section == 'remorques-neuves' ? 'selected' : ''); ?>" expansionmode="ClickExpansion">
                    <a href="<?php echo RD_PageLink::getHref(folder::RemorquesNeuves,page::RemorqesNeuvesInventaireComplet); ?>" class="rank2 MenuBarItemSubmenu" target="_self">Remorques neuves</a>
                    <div class="itemChildDiv63">
                        <ul class="itemChild63">
                            <li class="item74 first rank0 <?php echo ($pageName == 'inventaire-remorques.php' ? 'selected' : ''); ?>" expansionmode="HoverExpansion">
                                <a href="<?php echo RD_PageLink::getHref(folder::RemorquesNeuves,page::RemorqesNeuvesInventaireComplet); ?>" class=" first rank0" target="_self">Inventaire complet</a>
                            </li>
                            <li class="item87 rank1 <?php echo ($pageName == 'remorques-di-mond.php' ? 'selected' : ''); ?>" expansionmode="HoverExpansion">
                                <a href="<?php echo RD_PageLink::getHref(folder::RemorquesNeuves,page::RemorquesDiMond); ?>" class="rank1" target="_self">Remorques Di-Mond</a>
                            </li>
                            <li class="item86 last rank2 <?php echo ($pageName == 'remorques-doepker.php' ? 'selected' : ''); ?>" expansionmode="HoverExpansion">
                                <a href="<?php echo RD_PageLink::getHref(folder::RemorquesNeuves,page::RemorquesDoepker); ?>" class=" last rank2" target="_self">Remorques Doepker</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="item4 rank3 parent <?php echo ($section == 'vehicules-utilitaires' ? 'selected' : ''); ?>" expansionmode="ClickExpansion">
                    <a href="<?php echo RD_PageLink::getHref(folder::VehiculesUtilitaires,page::VehiculesUtilitairesMiniExcavatrices); ?>" class="rank3 MenuBarItemSubmenu" target="_self">Véhicules utilitaires</a>
                    <div class="itemChildDiv9">
                        <ul class="itemChild9">
                            <li class="item37 first rank0 <?php echo ($pageName == 'mini-excavatrices.php' ? 'selected' : ''); ?>" expansionmode="HoverExpansion">
                                <a href="<?php echo RD_PageLink::getHref(folder::VehiculesUtilitaires,page::VehiculesUtilitairesMiniExcavatrices); ?>" class=" first rank0" target="_self">Mini-excavatrices</a>
                            </li>
                            <li class="item38 rank1 <?php echo ($pageName == 'transporteurs-tout-terrain.php' ? 'selected' : ''); ?>" expansionmode="HoverExpansion">
                                <a href="<?php echo RD_PageLink::getHref(folder::VehiculesUtilitaires,page::VehiculesUtilitairesTransporteursToutTerrain); ?>" class="rank1" target="_self">Transporteurs tout-terrain</a>
                            </li>
                            <li class="item39 rank2 <?php echo ($pageName == 'skid-steer-chargeur-chenilles.php' ? 'selected' : ''); ?>" expansionmode="HoverExpansion">
                                <a href="<?php echo RD_PageLink::getHref(folder::VehiculesUtilitaires,page::VehiculesUtilitairesSkidSteerEtChargeurAChenilles); ?>" class="rank2" target="_self">Skid Steer et chargeur à chenilles</a>
                            </li>
                            <li class="item40 last rank3 <?php echo ($pageName == 'chargeuses-yanmar-v3-v4.php' ? 'selected' : ''); ?>" expansionmode="HoverExpansion">
                                <a href="<?php echo RD_PageLink::getHref(folder::VehiculesUtilitaires,page::VehiculesUtilitairesChargeuseV3EtV4); ?>" class=" last rank3" target="_self">Chargeuse V3 et V4</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="item5 rank4 <?php echo ($section == 'location-camions' ? 'selected' : ''); ?>" expansionmode="HoverExpansion">
                    <a href="<?php echo RD_PageLink::getHref(folder::Root,page::LocationsDeCamions); ?>" class="rank4" target="_self">Location de camions</a>
                </li>
                <li class="item11 last rank5 parent <?php echo ($section == 'pieces-services' ? 'selected' : ''); ?>" expansionmode="ClickExpansion">
                    <a href="<?php echo RD_PageLink::getHref(folder::PiecesService,page::PiecesEtServicesFinancement); ?>" class=" last rank5 MenuBarItemSubmenu" target="_self">Pièces et services</a>
                    <div class="itemChildDiv11">
                        <ul class="itemChild11">
                            <li class="item41 first rank0 <?php echo ($pageName == 'pieces-accessoires.php' ? 'selected' : ''); ?>" expansionmode="HoverExpansion">
                                <a href="<?php echo RD_PageLink::getHref(folder::PiecesService,page::PiecesEtServicesPiecesEtAsccessoires); ?>" class=" first rank0" target="_self">Pièces et accessoires</a>
                            </li>
                            <li class="item42 rank1 <?php echo ($pageName == 'service-routier.php' ? 'selected' : ''); ?>" expansionmode="HoverExpansion">
                                <a href="<?php echo RD_PageLink::getHref(folder::PiecesService,page::PiecesEtServicesServiceRoutier); ?>" class="rank1" target="_self">Service routier</a>
                            </li>
                            <li class="item43 rank2 <?php echo ($pageName == 'apres-vente.php' ? 'selected' : ''); ?>" expansionmode="HoverExpansion">
                                <a href="<?php echo RD_PageLink::getHref(folder::PiecesService,page::PiecesEtServicesServiceApresVente); ?>" class="rank2" target="_self">Service après-vente</a>
                            </li>
                            <li class="item44 rank3 <?php echo ($pageName == 'financement.php' ? 'selected' : ''); ?>" expansionmode="HoverExpansion">
                                <a href="<?php echo RD_PageLink::getHref(folder::PiecesService,page::PiecesEtServicesFinancement); ?>" class="rank3" target="_self">Financement</a>
                            </li>
                            <li class="item92 rank4" expansionmode="HoverExpansion">
                                <a href="<?php echo RD_PageLink::getHref(folder::EXTERNAL,page::EXTERNAL_nextPartLogin); ?>" class="rank4" target="_blank">Commande en ligne</a>
                            </li>
                            <li class="item94 last rank5 <?php echo ($pageName == 'promo.php' ? 'selected' : ''); ?>" expansionmode="HoverExpansion">
                                <a href="<?php echo RD_PageLink::getHref(folder::PromotionsNouvelles,page::PromotionsEtNouvellesPromoLanding); ?>" class=" last rank5" target="_self">Promotions</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="item6 rank6 <?php echo ($section == 'carrieres' ? 'selected' : ''); ?>" expansionmode="HoverExpansion">
                    <a href="<?php echo RD_PageLink::getHref(folder::Root,page::Carrieres); ?>" class="rank6" target="_self">Carrières</a>
                </li>
            </ul>
        </div>
    </div>
</div>-->



<!--Mobile menu-->
<!--
<div class="menu-mobile-filters">
    <a class="m toggleFilters" target="_self">
        <span class="txt">Filtrer les résultats</span>
        <span class="search">
            <div data-search="true">
                <form role="form" method="POST" action="../search.php">
                    <input id="tbSearch" name="tbSearch" title="Rechercher" class="GpcSearchInput" placeholder="Filtrer les résultats" type="text">
                    <img class="GpcSearchButton" name="libraryimage" title="" src="../../_assets/images/loupe-mobile.jpg" style="cursor: pointer;">
                </form>
            </div>
        </span>
        <span class="openClose"></span>
    </a>
</div>-->

menu mobile new

<!--Mobile Menu-->
<div class="bgnav mobilenav">
                <div class="grid grid-pad column">
                    <div id="dl-menu" class="dl-menuwrapper">
                        <button class="dl-trigger">Open Menu</button>
                        <ul class="dl-menu">
                            <li>
                                <a href="#">Camions</a>
                                <ul class="dl-submenu">
                                    <li>
                                        <a href="#">International</a>
                                        <ul class="dl-submenu">
                                            <li>
                                                <a href="#">série CV</a>
                                                <ul class="dl-submenu">
                                                    <li>
                                                        <a href="https://www.internationaltrucks.com/configurator/mv" target="_blank">Configurer votre véhicule</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.internationaltrucks.com/trucks/mv-series" target="_blank">Explorer</a>
                                                    </li>
                                                    <li>
                                                        <a href="filter.html">Inventaire</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">série HV</a>
                                                <ul class="dl-submenu">
                                                    <li>
                                                        <a href="https://www.internationaltrucks.com/configurator/mv" target="_blank">Configurer votre véhicule</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.internationaltrucks.com/trucks/mv-series" target="_blank">Explorer</a>
                                                    </li>
                                                    <li>
                                                        <a href="filter.html">Inventaire</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">série HX</a>
                                                <ul class="dl-submenu">
                                                    <li>
                                                        <a href="https://www.internationaltrucks.com/configurator/mv" target="_blank">Configurer votre véhicule</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.internationaltrucks.com/trucks/mv-series" target="_blank">Explorer</a>
                                                    </li>
                                                    <li>
                                                        <a href="filter.html">Inventaire</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">série LT</a>
                                                <ul class="dl-submenu">
                                                    <li>
                                                        <a href="https://www.internationaltrucks.com/configurator/mv" target="_blank">Configurer votre véhicule</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.internationaltrucks.com/trucks/mv-series" target="_blank">Explorer</a>
                                                    </li>
                                                    <li>
                                                        <a href="filter.html">Inventaire</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">série MV</a>
                                                <ul class="dl-submenu">
                                                    <li>
                                                        <a href="https://www.internationaltrucks.com/configurator/mv" target="_blank">Configurer votre véhicule</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.internationaltrucks.com/trucks/mv-series" target="_blank">Explorer</a>
                                                    </li>
                                                    <li>
                                                        <a href="filter.html">Inventaire</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="<?php echo RD_PageLink::getHref(folder::RemorquesNeuves,page::RemorqesNeuvesInventaireComplet); ?>">Remorque</a>
                                        <ul class="dl-submenu">
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
                                    <li>
                                        <a href="#">Isuzu</a>
                                    </li>
                                    <li class="">
                                    <a href="<?php echo RD_PageLink::getHref(folder::CamionsNeufs,page::CamionsOttawaKalmar); ?>">Ottawa Kalmar</a>
                                    </li>
                                    <li>
                                        <a href="#">Occasion</a>
                                    </li>
                                    <li>
                                        <a href="#">Inventaire</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Pièces</a>
                                <ul class="dl-submenu">
                                    <li><a href="https://www.nexpart.com/login.php">commande en ligne</a></li>
                                    <li><a href="<?php echo RD_PageLink::getHref(folder::EXTERNAL,page::EXTERNAL_boutiqueEnLigne); ?>">Boutique en ligne</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Services</a>
                                <ul class="dl-submenu">
                                    <li><a href="<?php echo RD_PageLink::getHref(folder::PiecesService,page::PiecesEtServicesServiceRoutier); ?>">Routier</a></li>
                                    <li><a href="<?php echo RD_PageLink::getHref(folder::PiecesService,page::PiecesEtServicesServiceApresVente); ?>">Après-Vente</a></li>
                                    <li><a href="<?php echo RD_PageLink::getHref(folder::PiecesService,page::PiecesEtServicesFinancement); ?>">Financement</a> </li>
                                    <li><a href="<?php echo RD_PageLink::getHref(folder::Root,page::LocationsDeCamions); ?>">Location</a></li>
                                </ul>
                            </li>                       
                            <li>
                                <a href="<?php echo RD_PageLink::getHref(folder::VehiculesUtilitaires,page::VehiculesUtilitairesMiniExcavatrices); ?>">Véhicule Utilitaire</a> 
                                <ul class="dl-submenu">
                                    <li><a href="<?php echo RD_PageLink::getHref(folder::VehiculesUtilitaires,page::VehiculesUtilitairesMiniExcavatrices); ?>">Mini-excavatrices</a></li>
                                    <li><a href="<?php echo RD_PageLink::getHref(folder::VehiculesUtilitaires,page::VehiculesUtilitairesTransporteursToutTerrain); ?>">Transporteurs tout-terrain</a></li>
                                    <li><a href="<?php echo RD_PageLink::getHref(folder::VehiculesUtilitaires,page::VehiculesUtilitairesSkidSteerEtChargeurAChenilles); ?>">Skid Steer et chargeur à chenilles</a></li>
                                    <li><a href="<?php echo RD_PageLink::getHref(folder::VehiculesUtilitaires,page::VehiculesUtilitairesChargeuseV3EtV4); ?>">Chargeuse V3 et V4</a></li>
                                </ul>                           
                            </li>
                            <li>
                                <a href="#">Circulaire</a>
                                <ul class="dl-submenu">
                                    <li><a href="#">Promotion</a></li>
                                    <li><a href="#">Circulaire Complet</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">À Propos</a>
                                <ul class="dl-submenu">
                                    <li>
                                        <a href="<?php echo RD_PageLink::getHref(folder::Root,page::Apropos); ?>">Notre Entreprise</a>
                                    </li>
                                    <li>
                                        <a href="<?php echo RD_PageLink::getHref(folder::Root,page::Carrieres); ?>">Carrière</a>
                                        <ul class="dl-submenu">
                                            <li style="min-width:230px;"><a href="<?php echo RD_PageLink::getHref(folder::Root,page::Carrieres); ?>">Emploi disponible</a></li>
                                            <li style="min-width:230px;"><a name="hyperlien" href="<?php echo RD_PageLink::getHref(folder::Root,page::Postuler) ?>">Canditature spontanée</a></li>
                                        </ul>
                                    </li>
                                    </ul>
                            </li>
                            <li>
                                <a href="#">Nous Joindre</a>
                                <ul class="dl-submenu">
                                    <li><a href="#">Concessionaire</a></li>
                                    <li><a href="#">Point de service</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div><!-- /dl-menuwrapper -->
                </div>
            </div>