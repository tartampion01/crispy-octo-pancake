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
                            <promo>Outillage automne 2018</promo>
                        </td>
                        <td align="right">
                            <a href='../_assets/images/promo/DPGH/Septembre-Octobre 2018/DPG010-1809 MF Groupe Dynamique_Hi_Res.pdf' target="=_blank">Nouvelle fenêtre pour impression</a>
                        </td>
                    </tr>
                </table>
                <div class="contenu">
                <div class="contenu2">
                    <div class="bxslider">
                        <span>
                            <div class="carrousel">
                                <div class="">
                                    <img name="image" style="width: 471px;height:610px;" title="" src="../../_assets/images/promo/DPGH/Septembre-Octobre 2018/0001.jpg" alt="Outillage automne 2018" />
                                </div>
                                <div class="" style="display:none;">
                                    <img name="image" style="width: 471px;height:610px;" title="" src="../../_assets/images/promo/DPGH/Septembre-Octobre 2018/0002.jpg" alt="Outillage automne 2018" />
                                </div>
                                <div class="" style="display:none;">
                                    <img name="image" style="width: 471px;height:610px;" title="" src="../../_assets/images/promo/DPGH/Septembre-Octobre 2018/0003.jpg" alt="Outillage automne 2018" />
                                </div>
                                <div class="" style="display:none;">
                                    <img name="image" style="width: 471px;height:610px;" title="" src="../../_assets/images/promo/DPGH/Septembre-Octobre 2018/0004.jpg" alt="Outillage automne 2018" />
                                </div>
                                <div class="" style="display:none;">
                                    <img name="image" style="width: 471px;height:610px;" title="" src="../../_assets/images/promo/DPGH/Septembre-Octobre 2018/0005.jpg" alt="Outillage automne 2018" />
                                </div>
                                <div class="" style="display:none;">
                                    <img name="image" style="width: 471px;height:610px;" title="" src="../../_assets/images/promo/DPGH/Septembre-Octobre 2018/0006.jpg" alt="Outillage automne 2018" />
                                </div>
                                <div class="" style="display:none;">
                                    <img name="image" style="width: 471px;height:610px;" title="" src="../../_assets/images/promo/DPGH/Septembre-Octobre 2018/0007.jpg" alt="Outillage automne 2018" />
                                </div>
                                <div class="" style="display:none;">
                                    <img name="image" style="width: 471px;height:610px;" title="" src="../../_assets/images/promo/DPGH/Septembre-Octobre 2018/0008.jpg" alt="Outillage automne 2018" />
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