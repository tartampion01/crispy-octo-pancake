<?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/header/_header.php'); ?>
<body class="body"><?php RD_Utils::write_Gtag() ?>    
    <form role="form" method="POST" action="/promotions-nouvelles/<?php echo $NOMPAGE; ?>">
    <div class="">
        <div class="content search-result">
            <div class="shrink">
                <div class="titrepage">
                    <h1>PROMO PIÈCES</h1>
                </div>
                <div class="contenu">
                <div class="contenu2">
                    <div class="bxslider">
                        <span>
                            <div class="carrousel">
                                <div class="">
                                    <img name="image" title="" src="../../_assets/images/promo/promo-mai-juin-2018-p01.jpg" alt="Promo Mai-Juin 2018-01" />
                                </div>
                                <div class="" style="display:none;">
                                    <img name="image" title="" src="../../_assets/images/promo/promo-mai-juin-2018-p02.jpg" alt="Promo Mai-Juin 2018-02" />
                                </div>
                                <div class="" style="display:none;">
                                    <img name="image" title="" src="../../_assets/images/promo/promo-mai-juin-2018-p03.jpg" alt="Promo Mai-Juin 2018-03" />
                                </div>
                                <div class="" style="display:none;">
                                    <img name="image" title="" src="../../_assets/images/promo/promo-mai-juin-2018-p04.jpg" alt="Promo Mai-Juin 2018-04" />
                                </div>
                                <div class="" style="display:none;">
                                    <img name="image" title="" src="../../_assets/images/promo/promo-mai-juin-2018-p05.jpg" alt="Promo Mai-Juin 2018-05" />
                                </div>
                                <div class="" style="display:none;">
                                    <img name="image" title="" src="../../_assets/images/promo/promo-mai-juin-2018-p06.jpg" alt="Promo Mai-Juin 2018-06" />
                                </div>
                                <div class="" style="display:none;">
                                    <img name="image" title="" src="../../_assets/images/promo/promo-mai-juin-2018-p07.jpg" alt="Promo Mai-Juin 2018-07" />
                                </div>
                                <div class="" style="display:none;">
                                    <img name="image" title="" src="../../_assets/images/promo/promo-mai-juin-2018-p08.jpg" alt="Promo Mai-Juin 2018-08" />
                                </div>
                                <div class="" style="display:none;">
                                    <img name="image" title="" src="../../_assets/images/promo/promo-mai-juin-2018-p09.jpg" alt="Promo Mai-Juin 2018-09" />
                                </div>
                                <div class="" style="display:none;">
                                    <img name="image" title="" src="../../_assets/images/promo/promo-mai-juin-2018-p10.jpg" alt="Promo Mai-Juin 2018-10" />
                                </div>
                                <div class="" style="display:none;">
                                    <img name="image" title="" src="../../_assets/images/promo/promo-mai-juin-2018-p11.jpg" alt="Promo Mai-Juin 2018-11" /></a>
                                </div>
                                <div class="" style="display:none;">
                                    <img name="image" title="" src="../../_assets/images/promo/promo-mai-juin-2018-p12.jpg" alt="Promo Mai-Juin 2018-12" /></a>
                                </div>
                                <div class="" style="display:none;">
                                    <a name="hyperlien" href="<?php echo RD_PageLink::getHref(folder::Root,page::NousJoindre)?>">
                                        <img name="image" title="" src="../../_assets/images/promo/promo-mai-juin-2018-p13.jpg" alt="Promo Mai-Juin 2018-13" />
                                    </a>
                                </div>
                            </div>
                        </span>
                    </div>
                    <script>
                        //<![CDATA[

                        var newCarrousel = "";
                        newCarrousel = $('.bxslider .carrousel').bxSlider({
                          useCSS: false,
                          auto: false,
                          autoStart: true,
                          mode: "fade",
                          pager: true,
                          controls: true,
                          responsive: true,
                    //      prevSelector: $(".flecheGauche"),
                    //      nextSelector: $(".flecheDroite"),
                          speed: 500,
                          pause: 5000,
                    //     adaptiveHeight: true,
                    //      touchEnabled: true,
                    //      slideWidth: 944,
                          prevText: "prev",
                          nextText: "next"

                        }); 

                        //]]>
                    </script>
                </div>
            </div>
        </div>
    </div>
</div>
<img alt="" src="#" style="position:absolute;left:-10px;top:-10px;width:1px;height:1px;" />

</form>
<?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/footer/_footer.php'); ?>
</body>
</html>