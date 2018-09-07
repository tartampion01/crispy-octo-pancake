<?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/header/_header.php'); ?>
<style>
    promo{
        font: 400 2.5714em/1.3em Montserrat,Arial,Helvetica,sans-serif;
        margin: 1em 0 .4em;
        color: #525252;
        text-transform: uppercase;
    }
</style>    
<body class="body"><?php RD_Utils::write_Gtag() ?>    
    <form role="form" method="POST" action="/promotions-nouvelles/<?php echo $NOMPAGE; ?>">
    <div class="">
        <div class="content search-result">
            <div class="shrink">
                <table style="width: 970px;">
                    <tr>
                        <td align="left" style="padding-top: 10px">
                            <promo>PROMO PIÈCES</promo>
                        </td>
                        <td align="right">
                            <a href='promo-pieces-pdf.php' target="=_blank">Nouvelle fenêtre pour impression</a>
                        </td>
                    </tr>
                </table>
                <div class="contenu">
                <div class="contenu2">
                    <div class="bxslider">
                        <span>
                            <div class="carrousel">
                                <div class="">
                                    <img name="image" style="width: 471px;height:610px;" title="" src="../../_assets/images/promo/Promotion Septembre-Octobre 2018.jpg" alt="Promotion Septembre-Octobre 2018" />
                                </div>
                                <div class="" style="display:none;">
                                    <img name="image" style="width: 471px;height:610px;" title="" src="../../_assets/images/promo/Promotion Septembre-Octobre 2018-2.jpg" alt="Promotion Septembre-Octobre 2018-2" />
                                </div>
                                <div class="" style="display:none;">
                                    <img name="image" style="width: 471px;height:610px;" title="" src="../../_assets/images/promo/Promotion Septembre-Octobre 2018-3.jpg" alt="Promotion Septembre-Octobre 2018-3" />
                                </div>
                                <div class="" style="display:none;">
                                    <img name="image" style="width: 471px;height:610px;" title="" src="../../_assets/images/promo/Promotion Septembre-Octobre 2018-4.jpg" alt="Promotion Septembre-Octobre 2018-4" />
                                </div>
                                <div class="" style="display:none;">
                                    <img name="image" style="width: 471px;height:610px;" title="" src="../../_assets/images/promo/Promotion Septembre-Octobre 2018-5.jpg" alt="Promotion Septembre-Octobre 2018-5" />
                                </div>
                                <div class="" style="display:none;">
                                    <img name="image" style="width: 471px;height:610px;" title="" src="../../_assets/images/promo/Promotion Septembre-Octobre 2018-6.jpg" alt="Promotion Septembre-Octobre 2018-6" />
                                </div>
                                <div class="" style="display:none;">
                                    <img name="image" style="width: 471px;height:610px;" title="" src="../../_assets/images/promo/Promotion Septembre-Octobre 2018-7.jpg" alt="Promotion Septembre-Octobre 2018-7" />
                                </div>
                                <div class="" style="display:none;">
                                    <img name="image" style="width: 471px;height:610px;" title="" src="../../_assets/images/promo/Promotion Septembre-Octobre 2018-8.jpg" alt="Promotion Septembre-Octobre 2018-8" />
                                </div>
                                <div class="" style="display:none;">
                                    <img name="image" style="width: 471px;height:610px;" title="" src="../../_assets/images/promo/Promotion Septembre-Octobre 2018-9.jpg" alt="Promotion Septembre-Octobre 2018-9" />
                                </div>
                                <div class="" style="display:none;">
                                    <img name="image" style="width: 471px;height:610px;" title="" src="../../_assets/images/promo/Promotion Septembre-Octobre 2018-10.jpg" alt="Promotion Septembre-Octobre 2018-10" />
                                </div>
                                <div class="" style="display:none;">
                                    <img name="image" style="width: 471px;height:610px;" title="" src="../../_assets/images/promo/Promotion Septembre-Octobre 2018-11.jpg" alt="Promotion Septembre-Octobre 2018-10" />
                                </div>
                                <div class="" style="display:none;">
                                    <img name="image" style="width: 471px;height:610px;" title="" src="../../_assets/images/promo/Promotion Septembre-Octobre 2018-12.jpg" alt="Promotion Septembre-Octobre 2018-10" />
                                </div>
                                <div class="" style="display:none;">
                                    <img name="image" style="width: 471px;height:610px;" title="" src="../../_assets/images/promo/Promotion Septembre-Octobre 2018-13.jpg" alt="Promotion Septembre-Octobre 2018-10" />
                                </div>                                
                                <div class="" style="display:none;">
                                    <a name="hyperlien" href="<?php echo RD_PageLink::getHref(folder::Root,page::NousJoindre)?>">
                                        <img name="image" style="width: 471px;height:610px;" title="" src="../../_assets/images/promo/Promotion Septembre-Octobre 2018-14.jpg" alt="Promotion Septembre-Octobre 2018-11" />
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