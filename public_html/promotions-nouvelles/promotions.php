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
                <div class="titrepage">
                    <h1>Promotions</h1>
                </div>
                <div class="contenu">
                    <div class="contenu2">
                        <div class="contenu2">
                            <table>
                                <tr>
                                    <td>
                                        <!-- W:470 H:610 -->
                                        <a href="<?php echo RD_PageLink::getHref(folder::PromotionsNouvelles,page::PromotionsEtNouvellesPromoPieces); ?>" target="_self">
                                            <img name="image" style="width: 259px;height:335px;" title="" src="../../_assets/images/promo/Promotion Septembre-Octobre 2018.jpg" alt="Promotion Septembre-Octobre 2018" />
                                            <br>
                                            <span class="label">Circulaire Septembre-Octobre</span>
                                        </a>
                                    </td>
                                    <td style="width: 25px;"></td>
                                    <td>
                                        <a href="<?php echo RD_PageLink::getHref(folder::PromotionsNouvelles,page::PromotionsEtNouvellesPromoPieces2); ?>" target="_self">
                                            <img name="image" style="width: 259px;height:335px;" title="" src="../../_assets/images/promo/LIQUIDATION 2018-DYNAMIQUE.jpg" alt="Promotion Septembre-Octobre 2018" />
                                            <br>
                                            <span class="label">LIQUIDATION 2018</span>
                                        </a>
                                    </td>
                                    <td style="width: 25px;"></td>
                                    <td>
                                        <a href="<?php echo RD_PageLink::getHref(folder::PromotionsNouvelles,page::PromotionsEtNouvellesPromoPieces3); ?>" target="_self">
                                            <img name="image" style="width: 259px;height:335px;" title="" src="../../_assets/images/promo/DPGH/Septembre-Octobre 2018/0001.jpg" alt="DPG Septembre-Octobre 2018" />
                                            <br>                                            
                                            <span class="label">Outillage automne 2018</span>
                                        </a>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
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