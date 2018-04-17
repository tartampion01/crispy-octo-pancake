<?php require_once($_SERVER['DOCUMENT_ROOT'] . '/_includes/header/_header.php'); ?>
<body class="body">
    <form role="form" method="POST" action="/<?php echo $NOMPAGE; ?>">
    <div class="wrap">
        <div class="content">
            <div class="shrink">
                <div class="titrepage">
                    <h1><span>Plan du site</span></h1>
                </div>
                <div class="contenu">
                    <div class="contenu2">
                        <div class="menuCss4">
                            <ul>
                                <li class="first rank0">
                                    <a href="<?php RD_PageLink::getHref(folder::Root,page::Accueil) ?>" class="first rank0">Accueil</a>
                                </li>
                                <li class="rank1 parent">
                                    <a href="<?php RD_PageLink::getHref(folder::CamionsNeufs,page::CamionsInventaireComplet) ?>" class="rank1">Camions neufs</a>
                                    <div class="itemChildDiv5">
                                        <ul class="itemChild5">
                                            <li class="first rank0">
                                                <a href="<?php RD_PageLink::getHref(folder::CamionsNeufs,page::CamionsInventaireComplet) ?>" class="first rank0">Inventaire complet</a>
                                            </li>
                                            <li class="rank1">
                                                <a href="<?php RD_PageLink::getHref(folder::CamionsNeufs,page::CamionsInternational) ?>" class="rank1">Camions International</a>
                                            </li>
                                            <li class="rank2">
                                                <a href="<?php RD_PageLink::getHref(folder::CamionsNeufs,page::CamionsOttawaKalmar) ?>" class="rank2">Camions Ottawa Kalmar</a>
                                            </li>
                                            <li class="last rank3">
                                                <a href="<?php RD_PageLink::getHref(folder::CamionsNeufs,page::CamionsIsuzu) ?>" class=" last rank3">Camions Isuzu</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="rank2">
                                    <a href="<?php RD_PageLink::getHref(folder::Root,page::CamionsOccasion) ?>" class="first rank0">Camions d'occasion</a>
                                </li>
                                <li class="rank3 parent">
                                    <a href="<?php RD_PageLink::getHref(folder::RemorquesNeuves,page::RemorqesNeuvesInventaireComplet) ?>" class="rank1">Remorques neuves</a>
                                    <div class="itemChildDiv5">
                                        <ul class="itemChild5">
                                            <li class="first rank0">
                                                <a href="<?php RD_PageLink::getHref(folder::RemorquesNeuves,page::RemorqesNeuvesInventaireComplet) ?>" class="first rank0">Inventaire complet</a>
                                            </li>
                                            <li class="rank1">
                                                <a href="<?php RD_PageLink::getHref(folder::RemorquesNeuves,page::RemorquesDiMond) ?>" class="rank1">Remorques Di-Mond</a>
                                            </li>
                                            <li class="rank2">
                                                <a href="<?php RD_PageLink::getHref(folder::RemorquesNeuves,page::RemorquesDoepker) ?>" class="rank2">Remorques Doepker</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="rank4 parent">
                                    <a href="<?php RD_PageLink::getHref(folder::VehiculesUtilitaires,page::VehiculesUtilitairesMiniExcavatrices) ?>" class="rank1">Véhicules utilitaires</a>
                                    <div class="itemChildDiv5">
                                        <ul class="itemChild5">
                                            <li class="first rank0">
                                                <a href="<?php RD_PageLink::getHref(folder::VehiculesUtilitaires,page::VehiculesUtilitairesMiniExcavatrices) ?>" class="first rank0">Mini-excavatrices</a>
                                            </li>
                                            <li class="rank1">
                                                <a href="<?php RD_PageLink::getHref(folder::VehiculesUtilitaires,page::VehiculesUtilitairesTransporteursToutTerrain) ?>" class="rank1">Transporteurs tout-terrain</a>
                                            </li>
                                            <li class="rank2">
                                                <a href="<?php RD_PageLink::getHref(folder::VehiculesUtilitaires,page::VehiculesUtilitairesSkidSteerEtChargeurAChenilles) ?>" class="rank2">Skid Steer et chargeur à chenilles</a>
                                            </li>
                                            <li class="rank2">
                                                <a href="<?php RD_PageLink::getHref(folder::VehiculesUtilitaires,page::VehiculesUtilitairesChargeuseV3EtV4) ?>" class="rank3">Chargeuse V3 et V4</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="rank5">
                                    <a href="<?php RD_PageLink::getHref(folder::Root,page::LocationsDeCamions) ?>" class="rank1">Location de camions</a>
                                </li>
                                <li class="rank6 parent">
                                    <a href="<?php RD_PageLink::getHref(folder::PiecesService,page::PiecesEtServicesFinancement) ?>" class="rank1">Pièces et services</a>
                                    <div class="itemChildDiv5">
                                        <ul class="itemChild5">
                                            <li class="first rank0">
                                                <a href="<?php RD_PageLink::getHref(folder::PiecesService,page::PiecesEtServicesPiecesEtAsccessoires) ?>" class="first rank0">Pièces et accessoires</a>
                                            </li>
                                            <li class="rank1">
                                                <a href="<?php RD_PageLink::getHref(folder::PiecesService,page::PiecesEtServicesServiceRoutier) ?>" class="rank1">Service routier</a>
                                            </li>
                                            <li class="rank2">
                                                <a href="<?php RD_PageLink::getHref(folder::PiecesService,page::PiecesEtServicesServiceApresVente) ?>" class="rank2">Service après-vente</a>
                                            </li>
                                            <li class="rank3">
                                                <a href="<?php RD_PageLink::getHref(folder::PiecesService,page::PiecesEtServicesFinancement) ?>" class="rank3">Financement</a>
                                            </li>
                                            <li class="rank4">
                                                <a href="<?php RD_PageLink::getHref(folder::PiecesService,page::PiecesEtServicesPromoPieces) ?>" class="rank4">Promo pièces</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="rank1 parent">
                                    <a href="<?php RD_PageLink::getHref(folder::Root,page::NousJoindre) ?>" class="rank1">Nous joindre</a>
                                    <div class="itemChildDiv5">
                                        <ul class="itemChild5">
                                            <li class="rank0">
                                                <a href="<?php RD_PageLink::getHref(folder::NousJoindre,page::NousJoindreCamionsInterAnjou) ?>" class="first rank0">Camions Inter-Lanaudière</a>
                                            </li>
                                            <li class="rank1">
                                                <a href="<?php RD_PageLink::getHref(folder::NousJoindre,page::NousJoindreCamionsInterAnjou) ?>" class="rank1">Camions Inter-Anjou</a>
                                            </li>
                                            <li class="rank2">
                                                <a href="<?php RD_PageLink::getHref(folder::NousJoindre,page::NousJoindreInterBoucherville) ?>" class="rank2">Inter-Boucherville</a>
                                            </li>
                                            <li class="rank3">
                                                <a href="<?php RD_PageLink::getHref(folder::NousJoindre,page::NousJoindreLesCamionsBeaudoin) ?>" class="rank3">Les Camions Beaudoin</a>
                                            </li>
                                            <li class="rank4">
                                                <a href="<?php RD_PageLink::getHref(folder::NousJoindre,page::NousJoindreCentreduCamionBeaudoin) ?>" class="rank4">Centre du Camion Beaudoin</a>
                                            </li>
                                            <li class="rank5">
                                                <a href="<?php RD_PageLink::getHref(folder::NousJoindre,page::NousJoindreCharestInternational) ?>" class="rank5">Charest International</a>
                                            </li>
                                            <li class="rank6">
                                                <a href="<?php RD_PageLink::getHref(folder::NousJoindre,page::NousJoindreGarageCharestetFreres) ?>" class="rank6">Garage Charest et Frères</a>
                                            </li>
                                            <li class="rank7">
                                                <a href="<?php RD_PageLink::getHref(folder::NousJoindre,page::NousJoindreLeCentreduCamionAmiante) ?>" class="rank7">Le Centre du Camion (Amiante)</a>
                                            </li>
                                            <li class="rank8">
                                                <a href="<?php RD_PageLink::getHref(folder::NousJoindre,page::NousJoindreLeCentreduCamionBeauce) ?>" class="rank8">Le Centre du Camion (Beauce)</a>
                                            </li>
                                            <li class="rank9">
                                                <a href="<?php RD_PageLink::getHref(folder::NousJoindre,page::NousJoindreLeCentreRoutier1994) ?>" class="rank9">Le Centre Routier 1994</a>
                                            </li>
                                            <li class="rank10">
                                                <a href="<?php RD_PageLink::getHref(folder::NousJoindre,page::NousJoindreCamionsInternationalElite) ?>" class="rank10">Camions International Élite</a>
                                            </li>
                                            <li class="rank11">
                                                <a href="<?php RD_PageLink::getHref(folder::NousJoindre,page::NousJoindreGarageRobert) ?>" class="rank11">Garage Robert</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="rank8">
                                    <a href="<?php RD_PageLink::getHref(folder::Root,page::Apropos) ?>" class="rank8">À propos</a>
                                </li>
                                <li class="rank9 parent">
                                    <a href="<?php RD_PageLink::getHref(folder::PromotionsNouvelles,page::PromotionsEtNouvellesPromotions) ?>" class="rank9">Promotions et nouvelles</a>
                                    <div class="itemChildDiv14">
                                        <ul class="itemChild14">
                                            <li class="first rank0">
                                                <a href="<?php RD_PageLink::getHref(folder::PromotionsNouvelles,page::PromotionsEtNouvellesPromotions) ?>" class="first rank0">Promotions</a>
                                            </li>
                                            <li class="rank1">
                                                <a href="<?php RD_PageLink::getHref(folder::PromotionsNouvelles,page::PromotionsEtNouvellesNouvelles) ?>" class="rank1">Nouvelles</a>
                                            </li>
                                            <li class="rank2">
                                                <a href="<?php RD_PageLink::getHref(folder::PromotionsNouvelles,page::PromotionsEtNouvellesConcours) ?>" class="rank2">Concours</a>
                                            </li>
                                            <li class="last rank3">
                                                <a href="<?php RD_PageLink::getHref(folder::PromotionsNouvelles,page::PromotionsEtNouvellesPromoPieces) ?>" class="last rank3">Promo pièces</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="rank10">
                                    <a href="<?php RD_PageLink::getHref(folder::Root,page::UrgenceRoutiere24H) ?>" class="rank10">Urgence routière 24h</a>
                                </li>
                                <li class="rank11 parent">
                                    <a href="<?php RD_PageLink::getHref(folder::Nextpart,page::InscriptionNextPart) ?>" class="rank11">Inscription à NextPart</a>
                                    <div class="itemChildDiv14">
                                        <ul class="itemChild14">
                                            <li class="first rank0">
                                                <a href="<?php RD_PageLink::getHref(folder::Nextpart,page::InscriptionNextPartAbonnement) ?>" class="first rank0">Confirmation d'abonnement</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="rank12">
                                    <a href="<?php RD_PageLink::getHref(folder::Root,page::UrgenceRoutiere24H) ?>" class="rank12">Urgence routière 24h</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </form>
    <?php require_once($_SERVER['DOCUMENT_ROOT'] . '/_includes/footer/_footer.php'); ?>
</body>
</html>