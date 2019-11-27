<?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/header/_header.php'); ?>
<!--<script type='text/javascript' src='../../_assets/js/jquery.jshowoff.js'></script>  ** enlever FXGL diapo avant 10-30-19 -->
<body class="body home-page"><?php RD_Utils::write_Gtag() ?>
    <form role="form" method="POST" action="/<?php echo $NOMPAGE; ?>">
    <!--diapo-->
    <?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/slider/home_banner.php'); ?>  
    <div class="" data-staticClassNames="wrap">        
	</div>
    <!--Logo section-->
    <section class="grid grid-pad">
        <div class="col-1-1 logo mobile-col-1-1">
            <div class="col-1-4 mobile-col-1-2 item">
                <a class="" href="https://www.internationaltrucks.com/shopping-tools/build-your-own">
                    <img class="" src="_assets/images/wx3/logo-1.png" alt="" />
                    <h3>Configurer<br />votre véhicule</h3>
                </a>
            </div>
            <div class="col-1-4 mobile-col-1-2 item">
                <a href="https://www.nexpart.com/login.php">
                    <img src="_assets/images/wx3/logo-2.png" alt="" />
                    <h3>Pièces</h3>
                </a>
            </div>
            <div class="col-1-4 mobile-col-1-2 item">
                <a href="/camions.php?new=1">
                    <img src="_assets/images/wx3/logo-3.png" alt="" />
                    <h3 class="topdivision15">Inventaire</h3>
                </a>
            </div>
            <div class="col-1-4 mobile-col-1-2 item">
                <a href="<?php echo RD_PageLink::getHref(folder::Root,page::ObtenirPrix); ?>">
                    <img src="_assets/images/wx3/logo-4.png" alt="" />
                    <h3>Demande<br />De Prix</h3>
                </a>
            </div>
        </div>
    </section>
    <!--Full image-->
    <section class="topdivision50">
        <div class="grid">
            <div class="col-1-1 mobile-col-1-1">
                <div class="col-1-2 mobile-col-1-2 image-box">
                    <a href="/camions.php?new=1&marque=international">
                        <img src="_assets/images/wx3/img-international.jpg" alt="" />
                    </a>
                </div>
                <div class="col-1-2 mobile-col-1-2 image-box">
                    <a href="<?php echo RD_PageLink::getHref(folder::RemorquesNeuves,page::RemorquesDoepker); ?>">
                        <img src="_assets/images/wx3/img-remorque.jpg" alt="" />
                    </a>
                </div>
                <div class="col-1-2 mobile-col-1-2 image-box" style="margin: -5px 0px 0px 0px;">
                    <a href="/camions.php?new=1&marque=isuzu"">
                        <img src="_assets/images/wx3/img-isuzu.jpg" alt="" />
                    </a>
                </div>
                <div class="col-1-2 mobile-col-1-2 image-box" style="margin: -5px 0px 0px 0px;">
                    <a href="/camions.php?new=1&marque=kalmar">
                        <img src="_assets/images/wx3/img-inventaire.jpg" alt="" />
                    </a>
                </div>
            </div>
        </div>
    </section>
    <!--multi-item build your own truck-->
    <?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/slider/multi_item_build_truck.php'); ?>  

    <!--new 3 services-->
    <section class="grid">
        <div class="col-1-1 sectionservices">
            <div class="col-1-3 mobile-col-1-1">
                <div class="bg3serviceleft">
                    <a style="text-decoration:none;" class="grid-pad" name="hyperlien" href="<?php echo RD_PageLink::getHref(folder::Root,page::NousJoindre) ?>" target="_self">
                        <h2 class="titleservice">Localisez une succursales</h2>
                    </a>
                </div>
            </div>
            <div class="col-1-3 mobile-col-1-1">
                <div class="bg3servicecenter">  
                    <a style="text-decoration:none;" class="grid-pad" name="hyperlien" href="<?php echo RD_PageLink::getHref(folder::PiecesService,page::PiecesEtServicesPiecesEtAsccessoires) ?>" target="_self">
                        <h2 class="titleservice">Service de pièces</h2>
                    </a>
                </div>
            </div>
            <div class="col-1-3 mobile-col-1-1">
                <div class="bg3servicerigth">
                    <a style="text-decoration:none;" class="grid-pad" name="hyperlien" href="<?php echo RD_PageLink::getHref(folder::Root,page::UrgenceRoutiere24H) ?>" target="_self">
                        <h2 class="titleservice">Urgence routière 24h</h2>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!--multi-item special product-->
    <?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/slider/multi_item_product.php'); ?>  
    <!--Map
    <div>
        <iframe id="map" src="https://www.google.com/maps/d/embed?mid=1KQIM62X8067jYvP56CJLimUsJORkPfoH" width="100%" height="400"></iframe>
    </div>-->
    </form>
    <?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/footer/_footer.php'); ?>
</body>
</html>