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
                            <promo>BLITZ</promo>
                        </td>
                        <td align="right">
                            <a href='../_assets/images/promo/Blitz/27 au 31 mai 2019 - DO4422 & DO61G.pdf' target="=_blank">Nouvelle fenêtre pour impression</a>
                        </td>
                    </tr>
                </table>
                <div class="contenu">
                <div class="contenu2">
                    <div class="bxslider">
                        <span>
                            <div class="carrousel">
                                <img name="image" style="width: 471px;height:610px;" title="" src="../_assets/images/promo/Blitz/27 au 31 mai 2019 - DO4422 & DO61G.jpg" alt="Promotion Septembre-Octobre 2018" />
                            </div>
                        </span>
                    </div>
                    <script>
                        //<![CDATA[

                        var newCarrousel = "";
                        newCarrousel = $('.bxslider .carrousel').bxSlider({
                          useCSS: false,
                          auto: false,
                          autoStart: false,
                          mode: "fade",
                          pager: true,
                          controls: false,
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