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
                <table style="width: 100%;">
                    <tr>
                        <td align="left" style="padding-top: 10px">
                            <promo>BLITZ</promo>
                        </td>
                        <td align="right">
                            <a href='../_assets/images/promo/Blitz/Blitz PDF.pdf' target="=_blank">Nouvelle fenêtre pour impression</a>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" align="center">
                            <img name="image" style="height:790px;width:610px;" title="" src="../_assets/images/promo/Blitz/Blitz.jpg" alt="Blitz" />
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
    <img alt="" src="#" style="position:absolute;left:-10px;top:-10px;width:1px;height:1px;" />
</form>
<?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/footer/_footer.php'); ?>
</body>
</html>