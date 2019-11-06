<?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/header/_header.php'); ?>
<script type='text/javascript' src='../../_assets/js/jquery.jshowoff.js'></script>
<body class="body home-page"><?php RD_Utils::write_Gtag() ?>
    <form role="form" method="POST" action="/<?php echo $NOMPAGE; ?>">
    <div class="" data-staticClassNames="wrap">
        <div class="banner" data-staticClassNames="banner">
            <div class="shrink2 clear">
                <div class="rotation">
                    <div class="leftArrow" itemid="previous-slide"></div>
                    <div class="rightArrow" itemid="next-slide"></div>
                    <div class="">
                        <div class="jshowoff jshowoff-1">
                            <div>
                                <img src="_assets/images/homeBanner/BANNIERE CV 2.jpg" alt="La nouvelle Série CV - Automne 2018"/>
                            </div>                           
                            <div>
                                <a name="hyperlien" href="http://reseaudynamique.com/camions-neufs/camions-lourds-neufs-international.php">
                                    <img src="_assets/images/homeBanner/banniere LT.jpg" alt="Camions LT International"/>
                                </a>
                            </div>
                            <div>
                                <a name="hyperlien" href="http://reseaudynamique.com/camions-neufs/camions-lourds-neufs-international.php">
                                    <img src="_assets/images/homeBanner/BANIERE HX.jpg" alt="Camions HX International"/>
                                </a>
                            </div>
                            <div>
                                <a name="hyperlien" href="http://reseaudynamique.com/promotions-nouvelles/promo-pieces.php">
                                    <img src="_assets/images/homeBanner/BANNIERE CIRCULAIRE RD NOV-DEC 2019.png" alt="" width="1125" height="400"/>
                                </a>
                            </div>
                            <div>
                                <a name="hyperlien" href="http://reseaudynamique.com/camions-neufs/camions-lourds-neufs-international.php">
                                    <img src="_assets/images/homeBanner/BANIERE HV.jpg" alt="Camions HV International"/>
                                </a>
                            </div>
                            <div>
                                <a name="hyperlien" href="http://reseaudynamique.com/camions-neufs/camions-lourds-neufs-international.php">
                                    <img name="image" title="" src="_assets/images/homeBanner/retour-lonestar.png" alt="Retour Lonestar">
                                </a>
                            </div>
                            <div>
                                <a name="hyperlien" href="/camions-neufs/isuzu.php">
                                    <img name="image" title="" src="_assets/images/homeBanner/isuzu.jpg" alt="isuzu">
                                </a>
                            </div>                                    
                        </div>
                    </div>
                </div>
            </div>
	</div>
	<div class="content accueil">
            <div class="shrink">               
                <div class="vehiculeDisponible">
                    <h1>V&#233;hicules disponibles</h1>
                </div>
                    <!--<img name="image" title="" src="_assets/images/menu_images/promo-site-web.jpg" alt="promo site web" />-->
                <div class="cat">
                    <span>
                        <a name="hyperlien" href="<?php echo RD_PageLink::getHref(folder::CamionsNeufs,page::CamionsInternational)?>" target="_self">
                            <span class="image">
                                <img name="image" title="" src="_assets/images/menu_images/Navistar_LT_Utah-Web_JPG-edit.jpg" alt="Camion International" />
                            </span>
                            <span class="imageMobile">
                                <img name="image" title="" src="_assets/images/menu_images/Navistar_LT_Utah-Web_JPG-edit.jpg" alt="Camion International" />
                            </span>
                            <span class="orange">
                                <span class="titre">Camion international</span>
                                <span class="voir">Voir</span>
                            </span>
                        </a>
                    </span>
                </div>
                <div class="cat">
                    <span>
                        <a name="hyperlien" href="<?php echo RD_PageLink::getHref(folder::CamionsNeufs,page::CamionsOttawaKalmar)?>" target="_self">
                            <span class="image">
                                <img name="image" title="" src="_assets/images/menu_images/gal_Tall_Ground_level_Truck.jpg" alt="Tracteur Terminal Ottawa Kalmar" />
                            </span>
                            <span class="imageMobile">
                                <img name="image" title="" src="_assets/images/menu_images/gal_Tall_Ground_level_Truck.jpg" alt="Tracteur Terminal" />
                            </span>
                            <span class="orange">
                                <span class="titre">Tracteur de Terminal Ottawa Kalmar</span>
                                <span class="voir">Voir</span>
                            </span>
                        </a>
                    </span>
                </div>
                <div class="cat">
                    <span>
                        <a name="hyperlien" href="<?php echo RD_PageLink::getHref(folder::CamionsNeufs,page::CamionsIsuzu)?>" target="_self">
                            <span class="image">
                                <img name="image" title="" src="_assets/images/menu_images/my18_home6.jpg" alt="Camion Isuzu" />
                            </span>
                            <span class="imageMobile">
                                <img name="image" title="" src="_assets/images/menu_images/my18_home6.jpg" alt="Camion Isuzu" />
                            </span>
                            <span class="orange">
                                <span class="titre">Camion Isuzu</span>
                                <span class="voir">Voir</span>
                            </span>
                        </a>
                    </span>
                </div>
                <div class="cat">
                    <span>
                        <a name="hyperlien" href="<?php echo RD_PageLink::getHref(folder::RemorquesNeuves,page::RemorquesDoepker)?>" target="_self">
                            <span class="image">
                                <img name="image" title="" src="_assets/images/menu_images/cat-remorque-doepkler.jpg" alt="Remorque Doepkler" />
                            </span>
                            <span class="imageMobile">
                                <img name="image" title="" src="_assets/images/menu_images/ban-remorques-doepker.jpg" alt="Remorques Doepker" />
                            </span>
                            <span class="orange">
                                <span class="titre">Remorque Doepker</span>
                                <span class="voir">Voir</span>
                            </span>
                        </a>
                    </span>
                </div>
                <div class="cat">
                    <span>
                        <a name="hyperlien" href="<?php echo RD_PageLink::getHref(folder::VehiculesUtilitaires,page::VehiculesUtilitairesMiniExcavatrices)?>" target="_self">
                            <span class="image">
                                <img name="image" title="" src="_assets/images/menu_images/cat-yanmar.jpg" alt="Yanmar" />
                            </span>
                            <span class="imageMobile">
                                <img name="image" title="" src="_assets/images/menu_images/ban-yanmar.jpg" alt="Yanmar" />
                            </span>
                            <span class="orange">
                                <span class="titre">Yanmar</span>
                                <span class="voir">Voir</span>
                            </span>
                        </a>
                    </span>
                </div>
            </div>
	</div>
        <div class="services">
            <div class="shrink">
                <div class="item succursales">
                    <a name="hyperlien" href="<?php echo RD_PageLink::getHref(folder::Root,page::NousJoindre) ?>" target="_self">
                    <span class="titre">Localisez<br/>
                    <strong>nos succursales</strong></span>
                    <img name="image" title="" src="_assets/images/menu_images/accueil-succursales-mobile.jpg" alt="Localisez nos succursales" /></a>
                </div>
                <div class="item pieces">
                    <a name="hyperlien" href="<?php echo RD_PageLink::getHref(folder::PiecesService,page::PiecesEtServicesPiecesEtAsccessoires) ?>" target="_self">
                    <span class="titre">Profitez de notre<br/>
                    <strong>Service de pi&#232;ces</strong></span>
                    <img name="image" title="" src="_assets/images/menu_images/accueil-pieces-mobile.jpg" alt="Profitez de notre Service de pièces" /></a>
                </div>
                <div class="item urgence">
                    <a name="hyperlien" href="<?php echo RD_PageLink::getHref(folder::Root,page::UrgenceRoutiere24H) ?>" target="_self">
                    <span class="titre">Des ennuis?<br/>
                    <strong >Urgence routi&#232;re 24h</strong></span>
                    <img name="image" title="" src="_assets/images/menu_images/accueil-urgence-mobile.jpg" alt="Des ennuis? Urgence routière 24h" /></a>
                </div>
            </div>
	</div>
        <div id="" class="push"></div>
    </div>
    </form>
    <?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/footer/_footer.php'); ?>
</body>
</html>