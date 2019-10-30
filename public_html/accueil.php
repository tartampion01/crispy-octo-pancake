<?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/header/_header.php'); ?>
<script type='text/javascript' src='../../_assets/js/jquery.jshowoff.js'></script>
<body class="body home-page"><?php RD_Utils::write_Gtag() ?>
    <form role="form" method="POST" action="/<?php echo $NOMPAGE; ?>">   
    <div class="" data-staticClassNames="wrap">        
	</div>
    <!--Logo section-->
    <section class="grid grid-pad">
        <div class="col-1-1 logo mobile-col-1-1">
            <div class="col-1-4 mobile-col-1-2 item">
                <img class="" src="Resources/Images/logo-1.png" alt="" />
                <a class="" href="">
                    <h3>Configurer<br />votre véhicule</h3>
                </a>
            </div>
            <div class="col-1-4 mobile-col-1-2 item">
                <img src="Resources/Images/logo-2.png" alt="" />
                <a href="">
                    <h3>Pièces</h3>
                </a>
            </div>
            <div class="col-1-4 mobile-col-1-2 item">
                <img src="Resources/Images/logo-3.png" alt="" />
                <a href="">
                    <h3 class="topdivision15">Inventaire</h3>
                </a>
            </div>
            <div class="col-1-4 mobile-col-1-2 item">
                <img src="Resources/Images/logo-4.png" alt="" />
                <a href="">
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
                    <a href="filter.html">
                        <img src="Resources/Images/img-international.jpg" alt="" />
                    </a>
                </div>
                <div class="col-1-2 mobile-col-1-2 image-box">
                    <a href="filter.html">
                        <img src="Resources/Images/img-remorque.jpg" alt="" />
                    </a>
                </div>
                <div class="col-1-2 mobile-col-1-2 image-box" style="margin: -5px 0px 0px 0px;">
                    <a href="filter.html">
                        <img src="Resources/Images/img-isuzu.jpg" alt="" />
                    </a>
                </div>
                <div class="col-1-2 mobile-col-1-2 image-box" style="margin: -5px 0px 0px 0px;">
                    <a href="filter.html">
                        <img src="Resources/Images/img-inventaire.jpg" alt="" />
                    </a>
                </div>
            </div>
        </div>
    </section>
	<!--multi-item build your own truck-->
    <section class="grid">
        <div class="grid-pad topdivision50">
            <h2 class="titlesection">Construit ton camion</h2>
        </div>

        <section class="realization">
            <div class="image-box">
                <a href="https://www.internationaltrucks.com/configurator/mv" title="">
                    <img src="Resources/Images/mvserie.png" alt="">
                    <h3 class="bold center">MV Séries</h3>
                </a>
            </div>

            <div class="image-box">
                <a href="https://www.internationaltrucks.com/configurator/hx" title="">
                    <img src="Resources/Images/hxserie.png" alt="">
                    <h3 class="bold center">HX Séries</h3>
                </a>
            </div>
            <div class="image-box">
                <a href="https://www.internationaltrucks.com/configurator/lt" title="">
                    <img src="Resources/Images/ltserie.png" alt="">
                    <h3 class="bold center">LT Séries</h3>
                </a>
            </div>

            <div class="image-box">
                <a href="https://www.internationaltrucks.com/shopping-tools/build-your-own" title="">
                    <img src="Resources/Images/mvserie.png" alt="">
                    <h3 class="bold center">BBQ Labonté</h3>
                </a>
            </div>
            <div class="image-box">
                <a href="https://www.internationaltrucks.com/shopping-tools/build-your-own" title="">
                    <img src="Resources/Images/hxserie.png" alt="">
                    <h3 class="bold center">Municipalité de Saint-Germain-de-Grantham</h3>
                </a>
            </div>
            <div class="image-box">
                <a href="https://www.internationaltrucks.com/shopping-tools/build-your-own" title="">
                    <img src="Resources/Images/ltserie.png" alt="">
                    <h3 class="bold center">PMR Halte gourmande</h3>
                </a>
            </div>

        </section>
    </section>
    <!--3 services -->
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
    <!--multi-item special product-->
    <section class="grid">
        <div class="grid-pad">
            <h2 class="titlesection">Nos Spéciaux</h2>
        </div>
        <section class="realization">
            <div class="">
                <a href="./Fleuristebergeron.html" title="">
                    <div class="rectangle"></div>
                    <img src="Resources/Images/promo.jpg" alt="">
                    <hr style="margin-top:5px;" />
                    <h2 class="uppercases">circulaire</h2>
                </a>
            </div>
            <div class="image-box">
                <a href="./Fleuristebergeron.html" title="">
                    <div class="rectangle"></div>
                    <img src="Resources/Images/hxserie.png" alt="">
                    <h2 class="uppercases">Titre de camion</h2>
                    <hr />
                    <p style="text-align:justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                </a>
            </div>
            <div class="image-box">
                <a href="./Fleuristebergeron.html" title="">
                    <div class="rectangle"></div>
                    <img src="Resources/Images/ltserie.png" alt="">
                    <h2 class="uppercases">Titre de camion</h2>
                    <hr />
                    <p style="text-align:justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </a>
            </div>
            <div class="image-box">
                <a href="./Fleuristebergeron.html" title="">
                    <div class="rectangle"></div>
                    <img src="Resources/Images/hxserie.png" alt="">
                    <h2 class="uppercases">Titre de camion</h2>
                    <hr />
                    <p style="text-align:justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </a>
            </div>
            <div class="image-box">
                <a href="./Fleuristebergeron.html" title="">
                    <div class="rectangle"></div>
                    <img src="Resources/Images/mvserie.png" alt="">
                    <h2 class="uppercases">Titre de camion</h2>
                    <hr />
                    <p style="text-align:justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </a>
            </div>
            <div class="image-box">
                <a href="./Fleuristebergeron.html" title="">
                    <div class="rectangle"></div>
                    <img src="Resources/Images/mvserie.png" alt="">
                    <h2 class="uppercases">Titre de camion</h2>
                    <hr />
                    <p style="text-align:justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </a>
            </div>
        </section>

    </section>
    <div id="" class="push"></div>
    </div>
    <!--Map-->
    <div>
        <iframe id="map" src="https://www.google.com/maps/d/embed?mid=1KQIM62X8067jYvP56CJLimUsJORkPfoH" width="100%" height="400"></iframe>
    </div>
    </form>
    <?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/footer/_footer.php'); ?>
</body>
</html>