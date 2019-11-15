<?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/header/_header.php'); ?>
<!--<script type='text/javascript' src='../../_assets/js/jquery.jshowoff.js'></script>  ** enlever FXGL diapo avant 10-30-19 -->
<body class="body home-page"><?php RD_Utils::write_Gtag() ?>
    <form role="form" method="POST" action="/<?php echo $NOMPAGE; ?>">
    <!--diapo-->
    <?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/slider/home_banner.php'); ?>  
    <div class="" data-staticClassNames="wrap">        
	</div>
    <!--Logo section-->
    <div class="margesection"></div>
    <section class="grid grid-pad">
        <div class="col-1-1 logo mobile-col-1-1">
            <div class="col-1-4 mobile-col-1-2 item">
                <img class="" src="_assets/images/wx3/logo-1.png" alt="" />
                <a class="" href="https://www.internationaltrucks.com/shopping-tools/build-your-own">
                    <h3>Configurer<br />votre véhicule</h3>
                </a>
            </div>
            <div class="col-1-4 mobile-col-1-2 item">
                <img src="_assets/images/wx3/logo-2.png" alt="" />
                <a href="https://www.nexpart.com/login.php">
                    <h3>Pièces</h3>
                </a>
            </div>
            <div class="col-1-4 mobile-col-1-2 item">
                <img src="_assets/images/wx3/logo-3.png" alt="" />
                <a href="<?php echo RD_PageLink::getHref(folder::CamionsNeufs,page::CamionsInventaireComplet); ?>">
                    <h3 class="topdivision15">Inventaire</h3>
                </a>
            </div>
            <div class="col-1-4 mobile-col-1-2 item">
                <img src="_assets/images/wx3/logo-4.png" alt="" />
                <a href="">
                    <h3>Demande<br />De Prix</h3>
                </a>
            </div>
        </div>
    </section>
    <!--Full image-->
    <div class="margesection"></div>
    <section class="topdivision50">
        <div class="grid">
            <div class="col-1-1 mobile-col-1-1">
                <div class="col-1-2 mobile-col-1-2 image-box">
                    <a href="<?php echo RD_PageLink::getHref(folder::CamionsNeufs,page::CamionsInventaireComplet); ?>">
                        <img src="_assets/images/wx3/img-international.jpg" alt="" />
                    </a>
                </div>
                <div class="col-1-2 mobile-col-1-2 image-box">
                    <a href="<?php echo RD_PageLink::getHref(folder::RemorquesNeuves,page::RemorqesNeuvesInventaireComplet); ?>">
                        <img src="_assets/images/wx3/img-remorque.jpg" alt="" />
                    </a>
                </div>
                <div class="col-1-2 mobile-col-1-2 image-box" style="margin: -5px 0px 0px 0px;">
                    <a href="<?php echo RD_PageLink::getHref(folder::CamionsNeufs,page::CamionsIsuzu); ?>">
                        <img src="_assets/images/wx3/img-isuzu.jpg" alt="" />
                    </a>
                </div>
                <div class="col-1-2 mobile-col-1-2 image-box" style="margin: -5px 0px 0px 0px;">
                    <a href="<?php echo RD_PageLink::getHref(folder::CamionsNeufs,page::CamionsOttawaKalmar); ?>">
                        <img src="_assets/images/wx3/img-inventaire.jpg" alt="" />
                    </a>
                </div>
            </div>
        </div>
    </section>
    <!--multi-item build your own truck-->
    <div class="margesection"></div>
    <?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/slider/multi_item_build_truck.php'); ?>  

    <!--new 3 services-->
    <section>
        <div class="grid">
            <div class="col-1-3 mobile-col-1-1">
                <div class="bg3serviceleft">
                    <a class="grid-pad" name="hyperlien" href="<?php echo RD_PageLink::getHref(folder::Root,page::NousJoindre) ?>" target="_self">
                        <h2>Localisez</h2>
                        <p>Nos Succursales</p>
                    </a>
                </div>
            </div>
            <div class="col-1-3 mobile-col-1-1">
                <div class="bg3servicecenter">  
                    <a class="grid-pad" name="hyperlien" href="<?php echo RD_PageLink::getHref(folder::PiecesService,page::PiecesEtServicesPiecesEtAsccessoires) ?>" target="_self">
                        <h2>Service de pièces</h2>
                    </a>
                </div>
            </div>
            <div class="col-1-3 mobile-col-1-1">
                <div class="bg3servicerigth">
                    <a class="grid-pad" name="hyperlien" href="<?php echo RD_PageLink::getHref(folder::Root,page::UrgenceRoutiere24H) ?>" target="_self">
                        <h2>Urgence routière 24h</h2>
                    </a>
                </div>
            </div>
        </div>
    </section>


    <!--old 3 services 
    <div class="services">
        <div class="grid">
            <div class="col-1-3 center">
                <div class="item succursales">
                    <a >
                        <span class="titre">Localisez<br/>
                        <strong>nos succursales</strong></span>
                        <img name="image" width="" title="" src="_assets/images/menu_images/accueil-succursales-mobile.jpg" alt="Localisez nos succursales" />
                    </a>
                </div>
            </div>
            <div class="col-1-3 center">
                <div class="item pieces">
                    <a >
                        <span class="titre">Profitez de notre<br/>
                        <strong>Service de pi&#232;ces</strong></span>
                        <img name="image" title="" src="_assets/images/menu_images/accueil-pieces-mobile.jpg" alt="Profitez de notre Service de pièces" />
                    </a>
                </div>
            </div>
            <div class="col-1-3 center">
                <div class="item urgence">
                    <a >
                        <span class="titre">Des ennuis?<br/>
                        <strong >Urgence routi&#232;re 24h</strong></span>
                        <img name="image" title="" src="_assets/images/menu_images/accueil-urgence-mobile.jpg" alt="Des ennuis? Urgence routière 24h" />
                    </a>
                </div>
            </div>
        </div>
	</div>-->
    <!--multi-item special product-->
    <div class="margesection"></div>
    <?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/slider/multi_item_product.php'); ?>  
    <!--Map
    <div>
        <iframe id="map" src="https://www.google.com/maps/d/embed?mid=1KQIM62X8067jYvP56CJLimUsJORkPfoH" width="100%" height="400"></iframe>
    </div>-->
    </form>
    <?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/footer/_footer.php'); ?>
</body>
</html>