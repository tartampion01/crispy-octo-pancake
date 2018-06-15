<?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/header/_header.php'); ?>
<script type='text/javascript' src='../../_assets/js/jquery.jshowoff.js'></script>
<body class="body"><?php RD_Utils::write_Gtag() ?>
    <form role="form" method="POST" action="/<?php echo $NOMPAGE; ?>">
    <div class="wrap" data-staticClassNames="wrap">
        <div class="banner" data-staticClassNames="banner">
            <div class="shrink2 clear">
                <div class="rotation">
                    <div class="leftArrow" itemid="previous-slide"></div>
                    <div class="rightArrow" itemid="next-slide"></div>
                        <div class="">
                            <div class="jshowoff jshowoff-1">
                                <div>
                                    <img name="image" title="" src="_assets/images/homeBanner/retour-lonestar.png" alt="Retour Lonestar">
                                </div>
                                <div>
                                    <a name="hyperlien" href="/camions-neufs/isuzu">
                                        <img name="image" title="" src="_assets/images/homeBanner/isuzu.jpg" alt="isuzu">
                                    </a>
                                </div>
                                <div>
                                    <a name="hyperlien" href="/remorques-neuves">
                                        <img name="image" title="" src="_assets/images/homeBanner/doepker.jpg" alt="doepker">
                                    </a>
                                </div>
                                <div>
                                    <img name="image" title="" src="_assets/images/menu_images/promo-site-web.jpg" alt="promo site web" />
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
	</div>
	<div class="content accueil">
            <div class="shrink">
                <div class="vehiculeDisponible">
                    <h2>V&#233;hicules disponibles</h2>
                </div>
                    <!--<img name="image" title="" src="_assets/images/menu_images/promo-site-web.jpg" alt="promo site web" />-->
                <div class="cat">
                    <span>
                        <a name="hyperlien" href="<?php echo RD_PageLink::getHref(folder::CamionsNeufs,page::CamionsInternational)?>" target="_self">
                            <span class="image">
                                <img name="image" title="" src="_assets/images/menu_images/cat-camion-international.jpg" alt="Camion International" />
                            </span>
                            <span class="imageMobile">
                                <img name="image" title="" src="_assets/images/menu_images/ban-camion-international.jpg" alt="Camion International" />
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
                                <img name="image" title="" src="_assets/images/menu_images/cat-tracteur-terminal-ottawa-kalmar.jpg" alt="Tracteur Terminal Ottawa Kalmar" />
                            </span>
                            <span class="imageMobile">
                                <img name="image" title="" src="_assets/images/menu_images/ban-tracteur-terminal.jpg" alt="Tracteur Terminal" />
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
                                <img name="image" title="" src="_assets/images/menu_images/cat-camion-isuzu.jpg" alt="Camion Isuzu" />
                            </span>
                            <span class="imageMobile">
                                <img name="image" title="" src="_assets/images/menu_images/ban-camion-isuzu.jpg" alt="Camion Isuzu" />
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
        <div id="c5_c68" class="push"></div>
    </div>
<?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/footer/_footer.php'); ?>
</form>
</body>
</html>